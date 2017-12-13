/**
 * A bot skill that triggers Circle CI builds for our projects.
 *
 * TODO automatically build the project list.
 */

const CircleCI = require('circleci')

const sites = {

  teamdigitale: {
    username: 'teamdigitale',
    project: 'teamdigitale.governo.it',
    branch: 'master'
  }

}

const ci = new CircleCI({
  auth: process.env.CIRCLECI_TOKEN
})

const sitesList = Object.keys(sites).map((s) => '`' + s + '`').join(', ')

module.exports = function (controller) {
  controller.hears(['^help'], 'direct_message,direct_mention', function (bot, message) {
    bot.createConversation(message, function (err, convo) {
      if (!err) {
        convo.say('To deploy a site jusy say `deploy SITENAME` where `SITENAME` is one of: ' + sitesList)
        convo.activate()
      }
    })
  })

  controller.hears(['^deploy( (.*))?'], 'direct_message,direct_mention', function (bot, message) {
    const siteLabel = message.match[2]

    if (siteLabel && sites[siteLabel]) {
      bot.reply(message, `I'm going to queue a deploy of \`${siteLabel}\` now`)
      ci.startBuild({
        username: sites[siteLabel].username,
        project: sites[siteLabel].project,
        branch: sites[siteLabel].branch
      }).then((build) => {
        bot.reply(message, `I've queued a new build for \`${siteLabel}\`, build status at ${build.build_url}`)
      })
    } else {
      bot.reply(message, 'To deploy a site jusy say `deploy SITENAME` where `SITENAME` is one of: ' + sitesList)
    }
  })
}
