/**
 * A bot skill that triggers Circle CI builds for our projects.
 *
 * TODO automatically build the project list.
 */

const CircleCI = require('circleci');

const sites = {

  teamdigitale: {
    username: 'teamdigitale',
    project: 'teamdigitale.governo.it',
    branch: 'master',
  }

}

const ci = new CircleCI({
  auth: process.env.CIRCLECI_TOKEN,
});

const sites_list = Object.keys(sites).map((s) => '`' + s + '`' ).join(', ');

module.exports = function(controller) {

  controller.hears(['^help'], 'direct_message,direct_mention', function(bot, message) {

    bot.createConversation(message, function(err, convo) {
      if (!err) {
        convo.say('To deploy a site jusy say `deploy SITENAME` where `SITENAME` is one of: ' + sites_list);
        convo.activate();
      }
    });

  });

  controller.hears(['^deploy( (.*))?'], 'direct_message,direct_mention', function(bot, message) {
    const site_label = message.match[2];

    if (site_label && sites[site_label]) {
      bot.reply(message, `I'm going to queue a deploy of \`${site_label}\` now`);
      ci.startBuild({
        username: sites[site_label].username,
        project: sites[site_label].project,
        branch: sites[site_label].branch,
      }).then((build) => {
        bot.reply(message, `I've queued a new build for \`${site_label}\``);
      });
    } else {
      bot.reply(message, 'To deploy a site jusy say `deploy SITENAME` where `SITENAME` is one of: ' + sites_list);
    }

  });

};
