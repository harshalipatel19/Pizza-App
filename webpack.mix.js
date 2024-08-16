// const { assertSupportedNodeVersion } = require('../src/Engine');
let mix = require('laravel-mix')
// module.exports = async () => {
//     // @ts-ignore
//     process.noDeprecation = true;

//     assertSupportedNodeVersion();

//     const mix = require('../src/Mix').primary;

//     require(mix.paths.mix());

//     await mix.installDependencies();
//     await mix.init();

//     return mix.build();
// };

//configure file from resources to public folder
mix.js('resources/js/app.js','public/js/app.js').sass('resources/scss/app.scss','public/css/app.css')   //in first we give which file you need compile second we give where we compile it