import { action } from '@storybook/addon-actions'

import DefaultStory from './Default.story.vue'
// import AlternateStory from './Alternate.story.vue'

export default {
  title: 'GROUP/<%= title %>'
}

const actionsData = {
  storyAction: action('clicked')
}

export const Default = () => ({
  ...DefaultStory,
  methods: actionsData
})

// export const Alternate = () => ({
//   ...AlternateStory,
//   methods: actionsData
// })
