<template>
  <section class="mt-20 grid lg:mt-36 lg:px-40 lg:mb-14">
    <div
      class="sm:flex sm:justify-between sm:align-middle sm:items-center sm:mb-10 lg:mb-14"
    >
      <h2 class="text-[32px] lg:text-4xl font-josefin text-center mb-8 sm:mb-0">
        OUR CREATIONS
      </h2>
      <button
        class="hidden sm:block border-2 py-2 px-10 tracking-[0.3em] border-black font-alata text-black lg:text-sm lg:hover:bg-black lg:hover:text-white transition-all"
      >
        SEE ALL
      </button>
    </div>
    <div class="sm:grid sm:grid-cols-4 sm:gap-4 lg:gap-6">
      <div class="imgDiv group">
        <div class="relative">
          <picture>
            <source
              media="(min-width:500px)"
              srcset="../../assets/images/pic/deep-earth-desk.jpg"
            />
            <source
              media="(min-width:310px)"
              srcset="../../assets/images/pic/deep-earth-mobile.jpg"
            />
            <img
              src="../../assets/images/pic/deep-earth-desk.jpg"
              alt="Earth"
            />
          </picture>
          <div
            class="w-full h-full group-hover:opacity-70 transition-all opacity-0 bg-white absolute top-0 z-10"
          ></div>
          <span
            class="relative z-20 group-hover:text-black transition-all imgTxt"
            >DEEP EARTH</span
          >
        </div>
      </div>
      <div class="imgDiv group">
        <div class="relative">
          <picture>
            <source
              media="(min-width:500px)"
              srcset="../../assets/images/pic/arcade-desk.jpg"
            />
            <source
              media="(min-width:310px)"
              srcset="../../assets/images/pic/arcade-mobile.jpg"
            />
            <img
              src="../../assets/images/pic/arcade-desk.jpg"
              alt="Arcade arena"
            />
          </picture>
          <div
            class="w-full h-full group-hover:opacity-70 transition-all opacity-0 bg-white absolute top-0 z-10"
          ></div>
          <span
            class="relative z-20 group-hover:text-black transition-all imgTxt"
            >NIGHT ARCADE</span
          >
        </div>
      </div>
      <div class="imgDiv group">
        <div class="relative">
          <picture>
            <source
              media="(min-width:500px)"
              srcset="../../assets/images/pic/soccer-desk.jpg"
            />
            <source
              media="(min-width:310px)"
              srcset="../../assets/images/pic/soccer-mobile.jpg"
            />
            <img
              src="../../assets/images/pic/soccer-desk.jpg"
              alt="Soccer player"
            />
          </picture>
          <div
            class="w-full h-full group-hover:opacity-70 transition-all opacity-0 bg-white absolute top-0 z-10"
          ></div>
          <span
            class="imgTxt soccer relative z-20 group-hover:text-black transition-all"
            >SOCCER TEAM VR</span
          >
        </div>
      </div>
      <div class="imgDiv group">
        <div class="relative">
          <picture>
            <source
              media="(min-width:500px)"
              srcset="../../assets/images/pic/car-desk.jpg"
            />
            <source
              media="(min-width:310px)"
              srcset="../../assets/images/pic/car-mobile.jpg"
            />
            <img src="../../assets/images/pic/car-desk.jpg" alt="Race car" />
          </picture>
          <div
            class="w-full h-full group-hover:opacity-70 transition-all opacity-0 bg-white absolute top-0 z-10"
          ></div>
          <span
            class="imgTxt car relative z-20 group-hover:text-black transition-all"
            >THE GRID</span
          >
        </div>
      </div>
      <div class="imgDiv group">
        <div class="relative">
          <picture>
            <source
              media="(min-width:500px)"
              srcset="../../assets/images/pic/above-desk.jpg"
            />
            <source
              media="(min-width:310px)"
              srcset="../../assets/images/pic/above-mobile.jpg"
            />
            <img src="../../assets/images/pic/above-desk.jpg" alt="pathway" />
          </picture>
          <div
            class="w-full h-full group-hover:opacity-70 transition-all opacity-0 bg-white absolute top-0 z-10"
          ></div>
          <span
            class="imgTxt above relative z-20 group-hover:text-black transition-all"
            >FROM UP ABOVE VR</span
          >
        </div>
      </div>
      <div class="imgDiv group">
        <div class="relative">
          <picture>
            <source
              media="(min-width:500px)"
              srcset="../../assets/images/pic/borealis-desk.jpg"
            />
            <source
              media="(min-width:310px)"
              srcset="../../assets/images/pic/borealis-mobile.jpg"
            />
            <img
              src="../../assets/images/pic/borealis-desk.jpg"
              alt="borealis"
            />
          </picture>
          <div
            class="w-full h-full group-hover:opacity-70 transition-all opacity-0 bg-white absolute top-0 z-10"
          ></div>
          <span
            class="imgTxt relative z-20 group-hover:text-black transition-all"
            >POCKET BOREALIS</span
          >
        </div>
      </div>
      <div class="imgDiv group">
        <div class="relative">
          <picture>
            <source
              media="(min-width:500px)"
              srcset="../../assets/images/pic/curiosity-desk.jpg"
            />
            <source
              media="(min-width:310px)"
              srcset="../../assets/images/pic/curiosity-mobile.jpg"
            />
            <img
              src="../../assets/images/pic/curiosity-desk.jpg"
              alt="space tools"
            />
          </picture>
          <div
            class="w-full h-full group-hover:opacity-70 transition-all opacity-0 bg-white absolute top-0 z-10"
          ></div>
          <span
            class="imgTxt relative z-20 group-hover:text-black transition-all"
            >THE CURIOSITY</span
          >
        </div>
      </div>
      <div class="imgDiv group">
        <div class="relative">
          <picture>
            <source
              media="(min-width:500px)"
              srcset="../../assets/images/pic/fisheye-desk.jpg"
            />
            <source
              media="(min-width:310px)"
              srcset="../../assets/images/pic/fisheye-mobile.jpg"
            />
            <img
              src="../../assets/images/pic/fisheye-desk.jpg"
              alt="fisheye view"
            />
          </picture>
          <div
            class="w-full h-full group-hover:opacity-70 transition-all opacity-0 bg-white absolute top-0 z-10"
          ></div>
          <span
            class="imgTxt fish relative z-20 group-hover:text-black transition-all"
            >MAKE IT FISHEYE</span
          >
        </div>
      </div>
    </div>
    <button
      class="sm:hidden mt-4 place-self-center border-2 py-2 px-10 tracking-[0.3em] border-black font-alata text-black"
    >
      SEE ALL
    </button>
  </section>
</template>

<script>
export default {
  name: "Creations",
};
</script>
