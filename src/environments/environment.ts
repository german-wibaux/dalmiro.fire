// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebaseConfig : {apiKey: "AIzaSyDL2RdJRnSGKzuEL9TaI6KKDr1g2UZLDAc",
  authDomain: "dalmiro-app.firebaseapp.com",
  databaseURL: "https://dalmiro-app.firebaseio.com",
  projectId: "dalmiro-app",
  storageBucket: "dalmiro-app.appspot.com",
  messagingSenderId: "1066549058516"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
