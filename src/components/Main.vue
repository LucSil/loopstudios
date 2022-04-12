<template>
  <section class="bg-p-white px-6 py-24 lg:mt-4 lg:px-0">
    <VR />
    <Creations />
  </section>
</template>

<script>
import VR from "./children/VR.vue";
import Creations from "./children/Creations.vue";

export default {
  name: "Main",
  components: { VR, Creations },
};
</script>
