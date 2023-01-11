<script>
  const ssr = import.meta.env.SSR;

  const { siteTitle, siteUrl } = website;

  export let slug;
  export let title;

  $: webShareAPISupported = !ssr && typeof navigator.share !== "undefined";
  $: handleWebShare;

  const handleWebShare = async () => {
    try {
      if (navigator.canShare) {
        navigator.share({
          title,
          text: `Shared from ${siteTitle}`,
          url,
        });
      } else {
        webShareAPISupported = false;
      }
    } catch (error) {
      webShareAPISupported = false;
    }
  };

  const url = `${siteUrl}/${slug}`;
</script>

<aside class="mt-4 flex flex-row flex-wrap gap-4">
  {#if webShareAPISupported}
    <button
      on:click={handleWebShare}
      class="flex flex-row items-center border-b-2 border-secondary p-2 px-4 transition-all duration-500 ease-in-out hover:text-primary-600 active:text-primary-500"
    >
      <Icon class="inline w-4 h-4 mr-2" name="ph:link-bold" />
      <span>partilhar</span>
    </button>
  {:else}
    <button
      class="flex h-full flex-row items-center border-b border-secondary p-2 px-4 transition-all duration-500 ease-in-out hover:text-primary-600 active:text-primary-600"
    >
      <Icon class="inline w-4 h-4" name="simple-icons:twitter" />
    </button>
    <button
      class="flex h-full flex-row items-center border-b-2 border-secondary p-2 px-4 transition-all duration-500 ease-in-out hover:text-primary-600 active:text-primary-600"
    >
      <Icon class="inline w-4 h-4" name="simple-icons:facebook" />
    </button>
    <button
      class="flex h-full flex-row items-center border-b-2 border-secondary p-2 px-4 transition-all duration-500 ease-in-out hover:text-primary-600 active:text-primary-600"
    >
      <Icon class="inline w-4 h-4" name="simple-icons:whatsapp" />
    </button>
    <button
      class="flex h-full flex-row items-center border-b-2 border-secondary p-2 px-4 transition-all duration-500 ease-in-out hover:text-primary-600 active:text-primary-600"
    >
      <Icon class="inline w-4 h-4" name="simple-icons:telegram" />
    </button>
  {/if}
  <button
    copy-post-link-button
    class="flex flex-row items-center border-b-2 border-secondary p-2 px-4 transition-all duration-500 ease-in-out hover:text-primary-600 active:text-primary-500"
  >
    <Icon class="inline w-4 h-4 mr-2" name="ph:link-bold" />
    <span>copiar link</span>
  </button>
</aside>
