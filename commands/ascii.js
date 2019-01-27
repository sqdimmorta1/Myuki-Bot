const request = require("request");

module.exports.run = async (bot, message, args) => {

  request('http://artii.herokuapp.com/make?text=' + args.join(' '), function(error, response, body) {
    message.channel.send('<a:myuki_loading:515399260414410752> Loading...').then(function(message) {
      message.edit("```" + body + "```");
    }).catch(function() {});
  })
}
