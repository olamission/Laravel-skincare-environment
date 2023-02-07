const mix = require('laravel-mix');

mix.js('src/js/app.js', 'assets').postCss('src/css/app.css', 'assets');
/*
const mix = require('laravel-mix');
mix.js('src/app.js','assets')
    .sass('src/scss/app.scss','assets')
    .setPublicPath('assets');
*/

