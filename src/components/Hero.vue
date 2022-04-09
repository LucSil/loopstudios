<template>
  <header class="relative grid">
    <nav class="absolute z-10 w-full mt-10 px-6">
      <section class="flex justify-between items-center">
        <div class="w-36">
          <img src="../assets/images/svg/logo.svg" alt="logo" />
        </div>
        <div class="flex justify-center items-center">
          <button v-if="!menu" @click="toggle">
            <img
              src="../assets/images/svg/icon-hamburger.svg"
              alt="open menu"
            />
          </button>
          <button v-if="menu" @click="toggle">
            <img src="../assets/images/svg/icon-close.svg" alt="close menu" />
          </button>
        </div>
      </section>
    </nav>
    <p
      class="p-6 block absolute text-[40px] leading-10 font-josefin text-white z-10 border-2 top-50 top-56 border-p-white mx-6"
    >
      IMMERSIVE EXPERIENCES THAT DELIVER
    </p>
    <picture>
      <source
        media="(min-width:500px)"
        srcset="../assets/images/pic/hero-desk.jpg"
      />
      <source
        media="(min-width:310px)"
        srcset="../assets/images/pic/hero-mobile.jpg"
      />
      <img src="../assets/images/pic/hero-desk.jpg" alt="hero-image" />
    </picture>
  </header>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    toggle() {
      if (!this.menu) {
        this.menu = true;
      } else {
        this.menu = false;
      }
    },
  },
};
</script>
