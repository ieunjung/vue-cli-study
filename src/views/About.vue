<template>
  <div class="about">
    <h1>This is an about page</h1>
    <NameComponents :title="title" name="about name" />
    <NameComponents />
  </div>
</template>

<script>
import NameComponents from "@/components/NameComponents.vue";

export default {
  components: {
    NameComponents
  },
  data() {
    return {
      title: 5
    };
  }
};
</script>
