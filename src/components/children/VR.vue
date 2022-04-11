<template>
  <section class="sm:grid grid-cols-2">
    <picture>
      <source
        media="(min-width:500px)"
        srcset="../../assets/images/pic/vr-desk.jpg"
      />
      <source
        media="(min-width:310px)"
        srcset="../../assets/images/pic/vr-mobile.jpg"
      />
      <img src="../../assets/images/pic/vr-desk.jpg" alt="Man with VR set" />
    </picture>
    <div class="mt-10 sm:mt-2">
      <h1
        class="text-[32px] leading-9 mb-6 font-josefin font-light text-center sm:text-left sm:pl-6"
      >
        THE LEADER IN INTERACTIVE VR
      </h1>
      <p
        class="font-alata px-6 font-normal text-p-darkGray text-center sm:text-justify"
      >
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "VR",
};
</script>
