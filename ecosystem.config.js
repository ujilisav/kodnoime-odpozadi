module.exports = {
  apps : [{
    name: 'Easy-Fans',
    script: './server.js',
    autorestart: true,
    env: {
      NODE_ENV: 'prod'
    },

  }],

};
