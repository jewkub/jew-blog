require('dotenv').config();
var repo = '~/jew-blog/';

const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

const PM2_CMD = 'cd ~ && pm2 startOrRestart ecosystem.config.js';

http
  .createServer(function(req, res) {
    req.on('data', function(chunk) {
      let sig =
        'sha1=' +
        crypto
          .createHmac('sha1', process.env.WEBHOOK_SECRET)
          .update(chunk.toString())
          .digest('hex');

      if (req.headers['x-hub-signature'] == sig) {
        exec([
          `cd ${repo}`,
          `git fetch --all`,
          `git reset --hard origin/main`,
          `git pull`, // https://stackoverflow.com/a/29206075/4468834
          `cd strapi`,
          `yarn`,
          `NODE_ENV=production yarn build`,
          `${PM2_CMD}`,
        ].join(' && '), (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        });
      }
    });

    res.end();
  })
  .listen(8000);
