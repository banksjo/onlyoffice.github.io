(function(window, undefined) {

    var URL_TO_PLUGIN =
        "https://banksjo.github.io/coastal-letter-formatter/";

    /*
     * v14:
     * Force a fresh config.json request so ONLYOFFICE does not
     * continue using an older cached plugin configuration.
     */

    var xhrObj =
        new XMLHttpRequest();

    xhrObj.open(
        "GET",
        URL_TO_PLUGIN + "config.json?v=14",
        false
    );

    xhrObj.send("");


    var configObj =
        JSON.parse(
            xhrObj.responseText
        );


    configObj.baseUrl =
        URL_TO_PLUGIN;


    window.Asc =
        window.Asc || {};


    window.Asc.extensionPlugins =
        window.Asc.extensionPlugins
            ? window.Asc.extensionPlugins
            : [];


    window.Asc.extensionPlugins.push(
        configObj
    );


    if (
        window.Asc.g_asc_plugins &&
        window.Asc.g_asc_plugins.loadExtensionPlugins
    ) {

        window.Asc.g_asc_plugins
            .loadExtensionPlugins(
                window.Asc.extensionPlugins
            );

        window.Asc.extensionPlugins = [];
    }

})(window, undefined);
