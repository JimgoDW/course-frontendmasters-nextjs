// Two ways:
//
// Way 1:
// module.exports = {
//   webpack: {},
// };

// Way 2:
// const {
//   PHASE_PRODUCTION_BUILD,
//   PHASE_DEVELOPMENT_SERVER,
// } = require('next/constants');

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_PRODUCTION_BUILD) {
//     // If running the production build inside of Next.js:
//     // run this code
//     console.log('Running PROD mode!');
//   }

//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     console.log('Running DEV mode!');

//     return {
//       ...defaultConfig,
//       mods: {},
//     };
//   }
//   return defaultConfig;
// };

// Working with environment variables:
//
// first instal next-env and dotenv packages
const dotEnvLoad = require('dotenv-load');
const nextEnv = require('next-env');

dotEnvLoad();

const withEnv = nextEnv();

module.exports = withEnv();
