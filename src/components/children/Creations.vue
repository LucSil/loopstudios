<template>
  <section class="mt-20 grid">
    <h2 class="text-[32px] font-josefin text-center mb-8">OUR CREATIONS</h2>
    <div>
      <div class="imgDiv">
        <div>
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
          <span class="imgTxt">DEEP EARTH</span>
        </div>
      </div>
      <div class="imgDiv">
        <div>
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
          <span class="imgTxt">NIGHT ARCADE</span>
        </div>
      </div>
      <div class="imgDiv">
        <div>
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
          <span class="imgTxt">SOCCER TEAM VR</span>
        </div>
      </div>
      <div class="imgDiv">
        <div>
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
          <span class="imgTxt car">THE GRID</span>
        </div>
      </div>
      <div class="imgDiv">
        <div>
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
          <span class="imgTxt above">FROM UP ABOVE VR</span>
        </div>
      </div>
      <div class="imgDiv">
        <div>
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
          <span class="imgTxt">POCKET BOREALIS</span>
        </div>
      </div>
      <div class="imgDiv">
        <div>
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
          <span class="imgTxt">THE CURIOSITY</span>
        </div>
      </div>
      <div class="imgDiv">
        <div>
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
          <span class="imgTxt">MAKE IT FISHEYE</span>
        </div>
      </div>
    </div>
    <button
      class="mt-4 place-self-center border-2 py-2 px-10 tracking-[0.3em] border-black font-alata text-black"
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
