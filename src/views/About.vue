<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <NameComponents :title="title" name="about name" /> -->
    <!-- <NameComponents /> -->

    <p>slot</p>
    <NameComponents>
      <template #header="props">
        <p>hello header slot {{ props.random }}</p>
      </template>
      <template #default>
        <p>hello default slot</p>
      </template>
    </NameComponents>
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
      title: "string title"
    };
  }
};
</script>
