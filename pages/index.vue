<template>
  <h1>hello world</h1>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      my_var: true,
    }
  },

  computed: {
    my_name() {
      return this.data
    },
  },

  watch: {
    data(newValue, oldValue) {},
  },

  mounted() {
    console.log('mounted')
  },

  methods: {
    name(name) {
      if (name.length > 30) {
        return 'your name is too big'
      } else if (name.length < 10) {
        return 'your name is too short'
      }
      return 'your name is ok'
    },
  },
}
</script>
