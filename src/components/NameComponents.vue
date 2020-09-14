<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ name }}</p>
    <button @click="updateName">Change Name</button>
  </div>
</template>

<script>
export default {
  //   props: ["title"],
  props: {
    title: {
      type: String,
      required: true,
      default: "default title"
    },
    name: {
      type: String,
      default: "default name"
    }
  },
  data() {
    return {
      //   name: "initial name"
    };
  },
  methods: {
    updateName() {
    //   this.name = "changed name";
    // 항상 props를 보내는 쪽에서 변경해야함. 부모에 이벤트를 보내서 바꿔야함.
    }
  }
};
</script>

<style scoped>
h1 {
  color: blueviolet;
}
</style>
