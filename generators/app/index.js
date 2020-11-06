'use strict'
// const path = require('path')
const Generator = require('yeoman-generator')
const _ = require('lodash')

module.exports = class extends Generator {
  async prompting () {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'ComponentName'
      }
    ])
  }

  writing () {
    const props = {
      tag: _.kebabCase(this.answers.name),
      name: this.answers.name
    }

    this.fs.copyTpl(
      this.templatePath('ComponentName.vue'),
      this.destinationPath(`${props.tag}/${props.name}.vue`),
      props
    )

    this.fs.copyTpl(
      this.templatePath('stories/ComponentName.stories.js'),
      this.destinationPath(`${props.tag}/stories/${props.name}.stories.js`),
      props
    )

    this.fs.copyTpl(
      this.templatePath('stories/Default.story.vue'),
      this.destinationPath(`${props.tag}/stories/Default.story.vue`),
      props
    )
  }
}
