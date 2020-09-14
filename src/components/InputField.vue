<template>
  <div>
    <label for="">Name</label>
    <input
      type="text"
      :value="name"
      style="padding: 10px; margin: 10px; border: 2px solid aquamarine"
      @input="updateName"
    /><br />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    // for v-model
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    updateName(e) {
      this.$emit("updateName", e.target.value);
      //    for v-model
      //   this.$emit("input", e.target.value);
    }
  }
};
</script>
