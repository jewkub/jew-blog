const util = require('node:util');
require('dotenv').config();
var repo = '/home/jew/jew-blog';

const http = require('http');
const crypto = require('crypto');
const exec = util.promisify(require('child_process').exec);

const PM2_CMD = 'cd ~ && pm2 startOrRestart ecosystem.config.js';

http
  .createServer(function(req, res) {
    req.on('data', async function(chunk) {
      let sig =
        'sha1=' +
        crypto
          .createHmac('sha1', process.env.WEBHOOK_SECRET)
          .update(chunk.toString())
          .digest('hex');

      if (req.headers['x-hub-signature'] == sig) {
        const commands = [
          [`pm2 stop strapi`, repo],
          [`git fetch --all`, repo],
          [`git reset --hard origin/main`, repo],
          [`git pull`, repo], // https://stackoverflow.com/a/29206075/4468834
          [`yarn`, `${repo}/strapi`],
          [`NODE_ENV=production yarn build`, `${repo}/strapi`],
          [`${PM2_CMD}`, `${repo}/strapi`],
        ];

        try {
          for (let e of commands){
            let out = await exec(e[0], { cwd: e[1] });
            console.log('stdout:', out.stdout);
            console.log('stderr:', out.stderr);
          }
        } catch (e) {
          console.error(e); // should contain code (exit code) and signal (that caused the termination).
        }
        // https://stackoverflow.com/a/56095793/4468834
      }
    });
    res.end();
  })
  .listen(8000);
