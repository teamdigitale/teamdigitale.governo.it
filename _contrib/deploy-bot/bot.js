/**
 * Simple Slack bot that triggers circleci builds
 * Used to deploy our sites.
 */

if (!process.env.SLACK_TOKEN || !process.env.CIRCLECI_TOKEN) {
  console.log('Error: Specify SLACK_TOKEN and CIRCLECI_TOKEN in environment')
  usageTip()
  process.exit(1)
}

const Botkit = require('botkit')

const botOptions = {
  stats_optout: true,
  retry: true
}

// Create the Botkit controller, which controls all instances of the bot.
const controller = Botkit.slackbot(botOptions)

// Load skills
const normalizedPath = require('path').join(__dirname, 'skills')
require('fs').readdirSync(normalizedPath).forEach(function (file) {
  require('./skills/' + file)(controller)
})

// Start the bot
const bot = controller.spawn({
  token: process.env.SLACK_TOKEN
}).startRTM()

function usageTip () {
  console.log('~~~~~~~~~~')
  console.log('Execute your bot application like this:')
  console.log('SLACK_TOKEN=xxx CIRCLECI_TOKEN=xxx node bot.js')
  console.log('~~~~~~~~~~')
}
