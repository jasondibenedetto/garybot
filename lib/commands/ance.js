var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "!ance",
  desc: "/dance",
  fn: (argv, context) => {
    return '/ance';
  },
});
