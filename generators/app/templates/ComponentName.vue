<template>
  <div class="<%= tag %>">
    <button @click.prevent="doSomething"><%= title %></button>
  </div>
</template>

<script>
export default {
  name: '<%= name %>',

  // props: {
  //   propName: {
  //     type: String, // String, Number, Boolean, Function, Object, Array
  //     required: true,
  //     default: null
  //   }
  // },

  // data () {
  //   return {
  //     key: true
  //   }
  // },

  // computed: {
  //   property () {
  //     return true
  //   }
  // },

  methods: {
    doSomething () {
      // tell the parent that we were clicked, pass data along
      this.$emit('clicked', { key: 'value' })
    }
  }

  // watch: {
  //   name: (val, oldVal) => {}
  // }
}
</script>

<style lang="less">
.<%= tag %> {
  
}
</style>
