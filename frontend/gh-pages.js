/*
TODO: use Typescript for this file
useful issues:
  https://github.com/TypeStrong/ts-node/issues/1007
  https://github.com/microsoft/TypeScript/issues/18442
  https://github.com/vercel/next.js/issues/9607
*/

const ghpages = require('gh-pages');
const moment = require('moment');

ghpages.publish('out', {
  branch: 'next',
  dotfiles: true,
  message: `🚀 Deploy [${ moment().format('DD/MM/YY') }]`,
}, () => {
  console.log('yayyy');
});

// from https://stackoverflow.com/a/59542798/4468834