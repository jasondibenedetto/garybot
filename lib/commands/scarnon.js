const Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: '!scarnon',
  desc: 'how is it going?',
  fn: () => 'scarnon',
});
