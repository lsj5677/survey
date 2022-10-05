module.exports = {
  apps: [
    {
      name: 'survey-client',
      cwd: './',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 8080',
      autorestart: true,
      listen_timeout: 50000,
      kill_timeout: 5000,
    }
  ]
}