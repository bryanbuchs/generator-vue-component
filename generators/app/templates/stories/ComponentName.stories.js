import { action } from '@storybook/addon-actions'

import <%= name %> from '../<%= name %>.vue'

export default {
  title: 'TODO/<%= title %>',
  excludeStories: /.*Data$/
  // argTypes: {
  //   topic: {
  //     control: {
  //       type: 'inline-radio',
  //       options: [
  //         'climate',
  //         'economics',
  //         'education',
  //         'media',
  //         'gender',
  //         'health',
  //         'harmful',
  //         'mental',
  //         'sexual'
  //       ]
  //     }
  //   }
  // }
}

const actionsData = {
  logEvent: action('clicked')
}

const propData = {
  // topic: 'climate'
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { <%= name %> },
  props: Object.keys(argTypes),
  template: '<<%= tag %> @clicked="logEvent" />',
  methods: actionsData
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  ...propData
}
