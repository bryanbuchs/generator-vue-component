<template>
  <div class="<%= tag %>">
    <button @click.prevent="doSomething"><%= title %></button>
  </div>
</template>

<script>
// import ComponentName from "@/components/component-name/ComponentName.vue"

export default {
  name: '<%= name %>',

  // components: {
  //   ComponentName
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
  //     return true
  //   }
  // },

  // watch: {
  //   keyName: function (val, oldVal) {},
  //   propertyName: {
  //     handler: 'doSomething',
  //     immediate: false,
  //     deep: false
  //   }
  // },

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
