<template>
  <input :type="type" />
</template>

<script>
export default {
  name: "example",
  props: {
    type: {
      type: String,
      default: "text",
      required: true
    }
  }
};
</script>
