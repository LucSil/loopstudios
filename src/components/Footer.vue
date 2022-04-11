<template>
  <section
    class="bg-black py-14 grid place-items-center sm:flex sm:px-6 sm:justify-between sm:items-center sm:py-8"
  >
    <div>
      <div class="w-40 mb-8 sm:mb-2">
        <img src="../assets/images/svg/logo.svg" />
      </div>
      <ul
        class="mb-10 sm:mb-0 text-white font-alata grid place-items-center sm:flex"
      >
        <li class="footLinkTxt impTwo">
          <a href="#">About</a>
        </li>
        <li class="footLinkTxt impTwo">
          <a href="#">Careers</a>
        </li>
        <li class="footLinkTxt impTwo">
          <a href="#">Events</a>
        </li>
        <li class="footLinkTxt impTwo">
          <a href="#">Products</a>
        </li>
        <li class="footLinkTxt">
          <a href="#">Support</a>
        </li>
      </ul>
    </div>
    <div class="sm:justify-end">
      <div class="flex justify-center sm:justify-end">
        <ul class="flex justify-between items-center w-40 mb-4 sm:mb-2">
          <li>
            <a href="#">
              <img
                src="../assets/images/svg/icon-facebook.svg"
                alt="facebook"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/images/svg/icon-twitter.svg" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="../assets/images/svg/icon-pinterest.svg"
                alt="pinterest"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="../assets/images/svg/icon-instagram.svg"
                alt="instagram"
              />
            </a>
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
