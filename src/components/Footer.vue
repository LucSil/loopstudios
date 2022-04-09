<template>
  <section class="bg-black py-14 grid place-items-center">
    <div class="w-40 mb-8">
      <img src="../assets/images/svg/logo.svg" />
    </div>
    <ul class="mb-10 text-white font-alata grid place-items-center">
      <li class="footLinkTxt">
        <a href="#">About</a>
      </li>
      <li class="footLinkTxt">
        <a href="#">Careers</a>
      </li>
      <li class="footLinkTxt">
        <a href="#">Events</a>
      </li>
      <li class="footLinkTxt">
        <a href="#">Products</a>
      </li>
      <li class="footLinkTxt">
        <a href="#">Support</a>
      </li>
    </ul>
    <ul class="flex justify-between items-center w-40 mb-4">
      <li>
        <a href="#">
          <img src="../assets/images/svg/icon-facebook.svg" alt="facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/images/svg/icon-twitter.svg" alt="twitter" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/images/svg/icon-pinterest.svg" alt="pinterest" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/images/svg/icon-instagram.svg" alt="instagram" />
        </a>
      </li>
    </ul>
    <p class="text-p-veryDarkGray font-alata">
      &copy; 2022 Loopstudios. All rights reserved.
    </p>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>
