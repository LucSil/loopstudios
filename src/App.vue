<template>
  <Hero />
  <Main />
  <Footer />
</template>

<script>
import Hero from "@/components/Hero.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { Hero, Main, Footer },
};
</script>
