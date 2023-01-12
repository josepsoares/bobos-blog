<script lang="ts">
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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 256 256"
  >
    <path
      fill="currentColor"
      d="M208.5 120.5a12.1 12.1 0 0 1-17 0L140 69v147a12 12 0 0 1-24 0V69l-51.5 51.5a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17Z"
    />
  </svg>
</button>
