<template>
 <div>
   <h1>This is Home Page</h1>
   <NameComponents title="home title" name="hone name" />
 </div>
</template>

<script>
import NameComponents from '@/components/NameComponents.vue';

export default {
  components:{
    NameComponents
  },
  data(){
    return {
      // name: 'initial name'
    }
  }
}
</script>

<style scoped>
h1 {
  color: aquamarine;
}
</style>