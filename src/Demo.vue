<template>
<div id="app">
    <h1>a-color-picker vue demo</h1>
    <a-color-picker
        ref="foo"
        class="with-border"
        color="red"
        show-hsl="yes"
        show-rgb="yes"
        show-hex="yes"
        show-alpha="yes"
        palette="red;blue;green;yellow"
        palette-editable="yes"
        use-alpha-in-palette="yes"
        v-on:change="colorChange"
        v-on:coloradd="colorAdd"
        v-on:colorremove="colorRemove">
    </a-color-picker>
    <a-color-picker
        class="with-border"
        color="purple"
        show-hsl="no"
        show-alpha="no"
        v-on:change="colorChange"
        v-on:coloradd="colorAdd"
        v-on:colorremove="colorRemove">
    </a-color-picker>
    <span ref="sdebug"></span>
</div>
</template>

<script>
// import components
import AColorPicker from "./AColorPicker.vue";
// require some functions from acp library
const { getLuminance, parseColor } = require("a-color-picker");
const $body = document.querySelector("body");

export default {
  name: "app",
  components: {
    AColorPicker
  },
  methods: {
    colorChange(ctrl, color) {
      $body.style.backgroundColor = color;
      const l = getLuminance(...parseColor(color, "rbg"));
      if (l >= 0.5) {
        this.$refs.sdebug.style.color = "black";
      } else {
        this.$refs.sdebug.style.color = "white";
      }
      this.$refs.sdebug.innerText = "change " + color;
    },
    colorAdd(ctrl, color) {
      this.$refs.sdebug.innerText = "add " + color;
    },
    colorRemove(ctrl, color) {
      this.$refs.sdebug.innerText = "remove " + color;
    }
  }
};
</script>

<style>
.with-border {
  margin: 8px;
  border: solid 1px #000;
}
</style>
