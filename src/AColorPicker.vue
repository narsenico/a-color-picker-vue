<template>
    <div class="acp-container" ref="acpContainer" 
        :acp-color="color" 
        :acp-show-hsl="showHsl"
        :acp-show-rgb="showRgb"
        :acp-show-hex="showHex"
        :acp-show-alpha="showAlpha"
        :acp-palette-editable="paletteEditable" 
        :acp-palette="palette"
        :acp-use-alpha-in-palette="useAlphaInPalette">
    </div>
</template>

<script>
const { from } = require("a-color-picker");
const boolProp = {
  validator(value) {
    return ["yes", "no", "true", "false"].indexOf(value) !== -1;
  }
};
export default {
  name: "a-color-picker",
  props: {
    color: [String, Number],
    showHsl: boolProp,
    showRgb: boolProp,
    showHex: boolProp,
    showAlpha: boolProp,
    paletteEditable: boolProp,
    palette: String,
    useAlphaInPalette: [String, Boolean]
  },
  mounted() {
    this.picker = from(this.$refs.acpContainer)
      .on("change", (ctrl, color) => {
        this.$emit("change", ctrl, color);
      })
      .on("coloradd", (ctrl, color) => {
        this.$emit("coloradd", ctrl, color);
      })
      .on("colorremove", (ctrl, color) => {
        this.$emit("colorremove", ctrl, color);
      });
  }
};
</script>

<style>
.acp-container {
  display: inline-block;
}
</style>