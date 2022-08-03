//Variables
const util = require('cypress/lib/util');
const execa = require('execa');
const pkg = util.pkgVersion();

//Code
(async () => {
  console.log('Installing Cypress ' + pkg);
  await execa('npm', ['run', 'cypress:install'], {
    env: { CYPRESS_INSTALL_BINARY: pkg }
  });
  console.log('Cypress installed');
})();
