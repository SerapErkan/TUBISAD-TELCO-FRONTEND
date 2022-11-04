// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  api: {
    api: "http://localhost:3000",
    Url: {

      services: '${api}/services',
      users: '${api}/users',
      auth: '${api}/auth/login',

      customers: {
        customers: '${api}/customers',
        corporateCustomers: '${api}/corporateCustomers',
        individualCustomers: '${api}/individualCustomers'

      }

    }
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
