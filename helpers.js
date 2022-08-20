import inquirer from 'inquirer'

export function questions() {
  inquirer
    .prompt([
      {
        name: 'version',
        message: 'Enter new release version',
        validate(answer) {
          if(!answer) {
              return 'Please enter a release version (e.g. 3.12.0)'
          }
          return true
      }
      },
      {
        type: 'list',
        name: 'release_type',
        message: 'Beta or stable?',
        choices: ['beta', 'stable']
      }
    ])
    .then(answers => {
      console.info('Answers:', answers)
    })
}
