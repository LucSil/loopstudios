<template>
  <section class="sm:grid grid-cols-2 relative lg:mt-4">
    <picture class="lg:relative lg:left-40">
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
    <div
      class="mt-10 sm:mt-2 lg:relative lg:bg-white lg:w-[37.5rem] lg:p-20 lg:top-40 lg:h-max"
    >
      <h1
        class="text-[32px] leading-9 mb-6 font-josefin text-center sm:text-left sm:pl-6 lg:pl-0"
      >
        THE LEADER IN INTERACTIVE VR
      </h1>
      <p
        class="font-alata px-6 font-normal text-p-darkGray text-center sm:text-justify lg:text-left lg:px-0"
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
