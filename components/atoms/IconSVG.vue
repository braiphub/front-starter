<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    class="box"
    :class="{ 'wrapper-background': isBackground }"
    :style="cssVars"
    @click="$emit('click')"
    v-html="src"
  ></div>
</template>

<script>
export default {
  name: 'IconSVG',
  props: {
    name: {
      type: String,
      required: true,
    },
    isBackground: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
      default:
        'linear-gradient(135deg, var(--primaryDefault) -700%, transparent 150%)',
    },
    margin: {
      type: String,
      default: '0px',
    },
    width: {
      type: String,
      default: '45px',
    },
    zoom: {
      type: String,
      default: 'unset',
    },
    cursor: {
      type: String,
      default: 'default',
    },
    borderRadius: {
      type: String,
      default: '0',
    },
    bgBorderRadius: {
      type: String,
      default: '0',
    },
  },
  computed: {
    src() {
      return require(`~/assets/icons-svg/${this.name}.svg?raw`)
    },
    cssVars() {
      return {
        '--background': this.background,
        '--margin': this.margin,
        '--width': this.width,
        '--zoom': this.zoom,
        '--cursor': this.cursor,
        '--borderRadius': this.borderRadius,
        '--backgroundBorderRadius': this.bgBorderRadius,
      }
    },
  },
}
</script>

<style scoped>
.box {
  width: var(--width);
  height: var(--width);
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  zoom: var(--zoom);
  cursor: var(--cursor);
  border-radius: var(--borderRadius);
}

.wrapper-background {
  width: var(--width, 99px);
  background: var(--background);
  border-radius: 1.76667px;
  margin: var(--margin);
  border-radius: var(--backgroundBorderRadius);
}
</style>
