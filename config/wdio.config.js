exports.config = {
    debug: false,
    specs: [
        './test/specs/*.js',
    ],

    reporters: ['spec'],
    host: '127.0.0.1',
    port: 4730,

    maxInstances: 1,

    capabilities: [
        {
            appiumVersion: '1.9.0',
            browserName: 'Android-Emulator',
            platformName: 'Android',
            app: 'https://github.com/appium/sample-code/blob/master/sample-code/apps/ApiDemos/bin/ApiDemos-debug.apk?raw=true',
            platformVersion: '8.1',
            deviceName: '<<Your device>>',
            waitforTimeout: 30 * 60000,
            commandTimeout: 30 * 60000,
            newCommandTimeout: 30 * 60000,
        }
    ],

    services: ['appium'],
    appium: {
        waitStartTime: 6000,
        waitforTimeout: 30 * 60000,
        command: 'appium',
        logFileName: 'appium.log',
        args: {
            address: '127.0.0.1',
            port: 4730,
            commandTimeout: 30 * 60000,
            sessionOverride: true,
            debugLogSpacing: true
        }
    },

    logLevel: 'silent',
    coloredLogs: true,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    },
    onPrepare: function () {
        console.log('Testing Started');
    },
    onComplete: function () {
        console.log('Testing Finished');
    }
};
