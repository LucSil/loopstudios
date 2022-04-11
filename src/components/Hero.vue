<template>
  <header class="relative grid">
    <div
      v-if="menu"
      class="absolute inset-0 z-20 w-full h-screen bg-black"
    ></div>
    <nav class="absolute z-30 w-full mt-10 px-6 lg:px-40 lg:mt-16">
      <section class="flex justify-between items-center relative z-30">
        <div class="w-40">
          <img src="../assets/images/svg/logo.svg" alt="logo" />
        </div>
        <div class="flex justify-center items-center sm:hidden">
          <button v-if="!click" @click="toggle">
            <img
              src="../assets/images/svg/icon-hamburger.svg"
              alt="open menu"
            />
          </button>
          <button v-if="click" @click="toggle">
            <img src="../assets/images/svg/icon-close.svg" alt="close menu" />
          </button>
        </div>
        <!-- Menu shown after mobile widths -->
        <ul
          class="sm:flex hidden text-white font-alata justify-between items-center lg:text-base"
        >
          <li class="mainLink imp"><a href="#">About</a></li>
          <li class="mainLink imp"><a href="#">Careers</a></li>
          <li class="mainLink imp"><a href="#">Events</a></li>
          <li class="mainLink imp"><a href="#">Products</a></li>
          <li class="mainLink"><a href="#">Support</a></li>
        </ul>
      </section>

      <!--  Mobile Menu -->
      <ul
        v-if="click"
        class="text-white font-josefin text-2xl absolute mt-40 z-30"
      >
        <li class="mainLink"><a href="#">ABOUT</a></li>
        <li class="mainLink"><a href="#">CAREERS</a></li>
        <li class="mainLink"><a href="#">EVENTS</a></li>
        <li class="mainLink"><a href="#">PRODUCTS</a></li>
        <li class="mainLink"><a href="#">SUPPORT</a></li>
      </ul>
    </nav>
    <p
      class="p-6 block absolute text-[40px] leading-10 font-josefin text-white z-10 border-2 top-56 border-p-white mx-6 sm:w-[400px] sm:top-32 lg:ml-40 lg:text-[4.2rem] lg:leading-[1] lg:w-[38rem] lg:top-52 lg:p-8"
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
      click: false,
      menu: false,
    };
  },
  methods: {
    toggle() {
      if (!this.click && !this.menu) {
        this.click = true;
        this.menu = true;
        document.body.classList.add("overflow-y-hidden");
      } else {
        this.click = false;
        this.menu = false;
        document.body.classList.remove("overflow-y-hidden");
      }
    },
  },
};
</script>
