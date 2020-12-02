<template>
  <div class="<%= tag %>">
    <button @click.prevent="doSomething"><%= title %></button>
  </div>
</template>

<script>
// import AnotherComponent from "@/components/another-component/AnotherComponent.vue"

export default {
  name: '<%= name %>',

  // components: {
  //   AnotherComponent
  // },

  props: {
    input: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      value: true
    }
  },

  // computed: {
  //   propertyName () {
  //     return `value is ${this.value}`
  //   }
  // },

  // created () {
  //   console.log('<%= tag %> created')
  // },

  // mounted () {
  //   console.log('<%= tag %> mounted')
  // },

  // beforeDestroy () {
  //   console.log('<%= tag %> about to be destroyed')
  // },

  watch: {
    value: function (val, oldVal) {
      console.log('value changed to', val, 'was', oldVal)
    },
    input: {
      handler: 'doSomething'
      // immediate: true,
      // deep: true
    }
  },

  methods: {
    doSomething () {
      // tell my parent that I was clicked, pass some data along
      this.$emit('clicked', { key: this.value })
    }
  }
}
</script>

<style lang="less">
.<%= tag %> {
}
</style>
