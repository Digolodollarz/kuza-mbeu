// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBc2e0lZhomB6Zw2gunPZUPhQkV0Balq_8',
        authDomain: 'kuzambeu.co.zw',
        databaseURL: 'https://kuza-mbeu.firebaseio.com',
        projectId: 'kuza-mbeu',
        storageBucket: 'kuza-mbeu.appspot.com',
        messagingSenderId: '36140092042'
    }
};
