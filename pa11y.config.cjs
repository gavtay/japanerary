module.exports = {
  standard: 'WCAG2AA',
  timeout: 30000,
  ignore: ['notice', 'warning'],
  chromeLaunchConfig: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  log: {
    debug: console.log,
  },
};