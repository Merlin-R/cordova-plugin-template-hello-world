/*global cordova, module*/

module.exports = {
    greet: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "HelloWorld", "greet", [name]);
        // Format: cordova.exec(successCallpack, errorCallback, "PluginName", "action", [parameters]);
    }
};
