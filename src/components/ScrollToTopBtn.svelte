<script lang="ts">
  import ArrowUp from "../icons/arrow-up.svg?component";

  export let buttonVisibleOnPX = 200;
  let hidden = true;

  const goStart = () => {
    document.body.scrollIntoView();
  };

  const scrollElement = () => {
    return document.documentElement || document.body;
  };

  const handleOnScroll = () => {
    if (scrollElement().scrollTop > buttonVisibleOnPX) {
      hidden = false;
    } else {
      hidden = true;
    }
  };
</script>

<svelte:window on:scroll={handleOnScroll} />

<button
  on:click={goStart}
  class={!hidden
    ? "top-[93%] md:top-[90%] right-[5%] md:right-[10%] hover:text-secondary active:text-secondary hover:border-primary-600 active:border-primary-600 fixed z-10 border border-stone-400 transition-all duration-500 ease-in-out p-2 bg-neutral-700/80"
    : "top-[93%] md:top-[90%] right-[5%] md:right-[10%] fixed z-10 border border-stone-400 p-2 opacity-0 transition-all duration-500 ease-in-out"}
>
  <ArrowUp />
</button>
