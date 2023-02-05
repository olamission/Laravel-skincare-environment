let mix = require('laravel-mix');

mix.js('src/js/app.js', 'assets').setPublicPath('assets');

/*
const mix = require('laravel-mix');
mix.js('src/app.js','assets')
    .sass('src.app.scss','assets')
    .setPublicPath('assets');
*/

