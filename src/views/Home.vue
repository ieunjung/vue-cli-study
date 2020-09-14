<template>
  <div>
    <h1>This is Home Page</h1>

    <form action="">
      <InputField :name="name" @updateName="updateName" />
      <!-- <InputField v-model="name" /> -->
      <button>Submit</button>
    </form>

    {{ name }}
  </div>
</template>

<script>
import InputField from "@/components/InputField.vue";

export default {
  components: {
    InputField
  },
  data() {
    return {
      name: "initial name"
    };
  },
  methods: {
    updateName(name) {
      this.name = name;
    }
  },


  beforeCreate(){
    console.log('beforeCreate', this.name);
  },
  created(){
    console.log('created', this.name);
  },
  beforeMount(){
    console.log('beforeMount', this.name);
  },
  // dom 컨트롤 : mount
  mounted(){
    console.log('mounted', this.name);
  },
  beforeUpdate(){
    alert('beforeUpdate', this.name);
  },
  updated(){
    alert('updated', this.name);
  },
  // #app dom 내용이 바뀔 때
  beforeDestroy(){
    alert('beforeDestroy')
  },
  destroyed(){
    alert('beforeDestroy')
  }
};
</script>

<style scoped>
h1 {
  color: aquamarine;
}
</style>
