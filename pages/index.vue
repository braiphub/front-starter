<template>
  <h1>hello world</h1>
</template>

<script>
export default {
  name: 'IndexPage',

  watch: {
    data(newValue, oldValue) {},
  },

  methods: {
    name(name) {
      if (name.length > 30) {
        return 'your name is too big'
      } else if (name.length < 10) {
        return 'your name is too short'
      } else {
        return 'your name is ok'
      }
    },
  },
  async fetch() {},

  data() {
    return {
      my_var: true,
    }
  },

  mounted() {
    console.log('mounted')
  },

  computed: {
    name() {
      return this.data
    },
  },
}
</script>
