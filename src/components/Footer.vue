<template>
  <section
    class="relative bottom-0 bg-black py-14 sm:py-8 lg:py-10 grid place-items-center sm:flex sm:px-6 lg:px-40 sm:justify-between sm:items-center"
  >
    <div>
      <div class="w-40 mb-8 sm:mb-2 lg:mb-3">
        <img src="../assets/images/svg/logo.svg" />
      </div>
      <ul
        class="mb-10 sm:mb-0 text-white font-alata grid place-items-center sm:flex"
      >
        <li class="footLinkTxt impTwo group grid place-items-center">
          <a href="#">About</a>
          <span
            class="lg:w-6 lg:h-[2px] lg:rounded-full lg:mt-1 block opacity-0 group-hover:opacity-100 transition-all lg:bg-neutral-300"
          >
          </span>
        </li>
        <li class="footLinkTxt impTwo group grid place-items-center">
          <a href="#">Careers</a>
          <span
            class="lg:w-6 lg:h-[2px] lg:rounded-full lg:mt-1 block opacity-0 group-hover:opacity-100 transition-all lg:bg-neutral-300"
          >
          </span>
        </li>
        <li class="footLinkTxt impTwo group grid place-items-center">
          <a href="#">Events</a>
          <span
            class="lg:w-6 lg:h-[2px] lg:rounded-full lg:mt-1 block opacity-0 group-hover:opacity-100 transition-all lg:bg-neutral-300"
          >
          </span>
        </li>
        <li class="footLinkTxt impTwo group grid place-items-center">
          <a href="#">Products</a>
          <span
            class="lg:w-6 lg:h-[2px] lg:rounded-full lg:mt-1 block opacity-0 group-hover:opacity-100 transition-all lg:bg-neutral-300"
          >
          </span>
        </li>
        <li class="footLinkTxt group grid place-items-center">
          <a href="#">Support</a>
          <span
            class="lg:w-6 lg:h-[2px] lg:rounded-full lg:mt-1 block opacity-0 group-hover:opacity-100 transition-all lg:bg-neutral-300"
          >
          </span>
        </li>
      </ul>
    </div>
    <div class="sm:justify-end">
      <div class="flex justify-center sm:justify-end">
        <ul class="flex justify-between items-center w-40 mb-4 sm:mb-2 lg:mb-1">
          <li class="group">
            <a href="#">
              <img
                src="../assets/images/svg/icon-facebook.svg"
                alt="facebook"
              />
            </a>
            <span
              class="group-hover:opacity-100 block transition-all lg:w-full lg:h-[2px] lg:rounded-full lg:mt-1 opacity-0 lg:bg-neutral-300"
            >
            </span>
          </li>
          <li class="group">
            <a href="#">
              <img src="../assets/images/svg/icon-twitter.svg" alt="twitter" />
            </a>
            <span
              class="lg:w-full lg:h-[2px] lg:rounded-full lg:mt-1 block opacity-0 group-hover:opacity-100 transition-all lg:bg-neutral-300"
            >
            </span>
          </li>
          <li class="group">
            <a href="#">
              <img
                src="../assets/images/svg/icon-pinterest.svg"
                alt="pinterest"
              />
            </a>
            <span
              class="lg:w-full lg:h-[2px] lg:rounded-full lg:mt-1 block opacity-0 group-hover:opacity-100 transition-all lg:bg-neutral-300"
            >
            </span>
          </li>
          <li class="group">
            <a href="#">
              <img
                src="../assets/images/svg/icon-instagram.svg"
                alt="instagram"
              />
            </a>
            <span
              class="lg:w-full lg:h-[2px] lg:rounded-full lg:mt-1 block opacity-0 group-hover:opacity-100 transition-all lg:bg-neutral-300"
            >
            </span>
          </li>
        </ul>
      </div>
      <p class="text-p-veryDarkGray font-alata">
        &copy; 2022 Loopstudios. All rights reserved.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>
