<template>
  <input :type="type" />
</template>

<script>
export default {
  name: "example",
  props: {
    type: {
      default: "text",
      required: true
    }
  }
};
</script>
