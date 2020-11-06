'use strict'
const Generator = require('yeoman-generator')
const _ = require('lodash')

module.exports = class extends Generator {

  constructor (args, opts) {
    super(args, opts)
    this.argument('tag', { type: String, required: true })
  }

  // async prompting () {
  //   this.answers = await this.prompt([
  //     {
  //       type: 'input',
  //       name: 'name',
  //       message: 'ComponentName'
  //     }
  //   ])
  // }

  writing () {
    _.mixin({ pascalCase: _.flow(_.camelCase, _.upperFirst) })

    const props = {
      tag: this.options.tag,
      name: _.pascalCase(this.options.tag)
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
