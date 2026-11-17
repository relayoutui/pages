// Counts visits with OpenPanel. The home page and the docs load this one file, with the OpenPanel client id in
// data-client-id (the OPENPANEL_CLIENT_ID repository variable, put in by docs-site/astro.config.mjs and
// .github/assemble-site.sh only when the build has it). Plain JS, served as it is: the home page has no build step.
//
// It is a classic script, so its names are wrapped in a function and stay out of the page's global scope.

(function countVisits()
{
    // The one host that is counted. The same files go to the pre site and to prod, and localhost serves them too, so
    // the check is made here, in the browser, and nothing is loaded or sent anywhere else.
    const COUNTED_HOST = 'relayout.net';

    const OPENPANEL_SCRIPT_URL = 'https://openpanel.dev/op1.js';

    /**
     * Defines window.op as OpenPanel's install page does: a queue that holds the calls made before op1.js has
     * loaded, which op1.js then runs.
     */
    function defineQueue()
    {
        if (window.op) return;

        const queue = [];
        window.op = new Proxy(
            function (...args)
            {
                if (args.length) queue.push(args);
            },
            {
                get: (target, name) => name === 'q' ? queue : (...args) =>
                {
                    queue.push([name, ...args]);
                },
                has: (target, name) => name === 'q',
            });
    }

    /**
     * Starts OpenPanel, counting page views and clicks on links that leave the site.
     *
     * @param clientId The id of the OpenPanel project, which is public by design: it is in the page of every site
     *                 that uses OpenPanel.
     */
    function startOpenPanel(clientId)
    {
        defineQueue();
        window.op('init', {
            clientId,
            trackScreenViews: true,
            trackOutgoingLinks: true,
        });

        const script = document.createElement('script');
        script.src = OPENPANEL_SCRIPT_URL;
        script.async = true;
        document.head.append(script);
    }

    const clientId = document.currentScript?.dataset.clientId;
    if (clientId && location.hostname === COUNTED_HOST)
    {
        startOpenPanel(clientId);
    }
})();
