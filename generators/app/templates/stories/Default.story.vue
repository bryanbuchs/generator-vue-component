<template>
  <<%= tag %> @clicked="storyAction" />
</template>

<script>
import <%= name %> from '../<%= name %>.vue'

export default {
  name: 'DefaultStory',
  components: { <%= name %> }
}
</script>
