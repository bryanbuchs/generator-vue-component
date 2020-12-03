import <%= name %> from '../<%= name %>.vue'

import { action } from '@storybook/addon-actions'
import SampleData from './data.json'

export default {
  title: 'TODO/<%= title %>',
  excludeStories: /.*Data$/,
  argTypes: {
    input: { table: { disable: true } }
  }
}

const actionsData = {
  logEvent: action('clicked')
}

const propData = {
  input: SampleData.data
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { <%= name %> },
  props: Object.keys(argTypes),
  template: '<<%= tag %> @clicked="logEvent" :input="input" />',
  methods: actionsData
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  ...propData
}
