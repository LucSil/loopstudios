<template>
  <Hero />
  <Main />
</template>

<script>
import Hero from "@/components/Hero.vue";
import Main from "@/components/Main.vue";

export default {
  name: "App",
  components: { Hero, Main },
};
</script>
