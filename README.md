WebDriverIO TypeScript
--

## Installing
```bash
git clone https://github.com/beeete2/webdriverio-typescript.git
cd webdriverio-typescript

# Install depences packages
yarn install

# transpile test codes
yarn tsc

# run the test
yarn wdio config/wdio.config.js --spec test/demo.js
```

### Appium Desired Capabilities
You can change Desired Capabilities on `config/wdio.config.js`.
```js
    capabilities: [
        {
            appiumVersion: '1.9.0',
            browserName: 'Android-Emulator',
            platformName: 'Android',
            app: '...',
            platformVersion: '<<Version>>', // your device android version, example 8.1
            deviceName: '<<deviceName>>', // your device name. example emulator-5554
            waitforTimeout: 30 * 60000,
            commandTimeout: 30 * 60000,
            newCommandTimeout: 30 * 60000,
        }
    ],
```
