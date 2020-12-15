'use strict'
const Generator = require('yeoman-generator')
const _ = require('lodash')

_.mixin({ pascalCase: _.flow(_.camelCase, _.upperFirst) })

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.argument('tag', { type: String, required: false })
  }

  async prompting () {
    if (!('tag' in this.options)) {
      this.answers = await this.prompt([
        {
          type: 'input',
          name: 'tag',
          message: 'ComponentName'
        }
      ])
    } else {
      this.answers = this.options
    }
  }

  writing () {
    const props = {
      tag: this.answers.tag,
      name: _.pascalCase(this.answers.tag),
      title: _.startCase(this.answers.tag)
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
      this.templatePath('stories/data.json'),
      this.destinationPath(`${props.tag}/stories/data.json`),
      props
    )
  }
}
