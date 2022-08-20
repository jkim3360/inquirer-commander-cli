#!/usr/bin/env node

import { program } from 'commander'
import { questions } from './helpers.js'

program.description('Base NPM CLI')
program.name('npm-cli')
program.usage('<command>')
program.addHelpCommand(false)
program.helpOption(false)

// import function to list coffee menu
// const list = require('../lib/list');

/*******************************************/

// Print coffee drinks menu
// $ coffee-shop list
// $ coffee-shop ls
program
  .command('release') // sub-command name
  .alias('rl') // alternative sub-command is `al`
  .description('Shopify Theme Release') // command description

  // function to execute when command is uses
  .action(function () {
    questions()
  })

// allow commander to parse `process.argv`
program.parse(process.argv)
