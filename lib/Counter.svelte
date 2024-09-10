<svelte:options customElement="my-custom-element" />

<script>
  import ArrowUp from "./assets/arrow-up-line.svg";
  // import SvelteLogo from "./assets/Svelte.svelte";
  //   import ArrowUp from "./assets/arrow-up-line.svg?raw";
  // import googleIcon from "./assets/google.png";
  import Accessibility from "./assets/accessibility-svgrepo-com.svg";
  export let name = "world";
</script>

<div>Hello {name}</div>
<img src={ArrowUp} alt="" />
<img src={Accessibility} alt="" />

<!-- <img src={googleIcon} alt="" /> -->
<!-- <SvelteLogo></SvelteLogo> -->
<!-- <ArrowUp /> -->
<!-- <p>
  {@html ArrowUp}
</p> -->

<style>
  div {
    background-color: red;
  }
</style>
