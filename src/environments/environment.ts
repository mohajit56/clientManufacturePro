// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    apiUrl: 'http://localhost:8080/',
    channel: 'web',
    institutionConfig: {
        minLoanAmount: 5000
    },
    client: {
        clientAppStatusURL: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetManufacturerDetails/honda?format=json',
        secretKey: '',
    },
    auth: {
        //basic: 'Basic Y3NfdHJ1c3RlZF9jbGllbnQ6eHlzckdlN0dvdzJkZWZn',
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
