module.exports = {
  // URL or file to test will be passed from the CLI, so don't hardcode here
  standard: 'WCAG2AA',           // Level of accessibility compliance
  timeout: 30000,                 // 30 seconds
  ignore: [
    'notice',                     // Ignore minor notices
    'warning',                    // Ignore warnings if you want
  ],
  chromeLaunchConfig: {
    args: [
      '--no-sandbox',             // Required for CI environments like GitHub Actions
      '--disable-setuid-sandbox', // Required for CI environments
    ],
  },
  log: {
    debug: console.log,           // Log debug messages
  },
};
