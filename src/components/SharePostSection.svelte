<script lang="ts">
  import { onMount } from "svelte";
  import toast, { Toaster } from "svelte-french-toast";
  import InlineSVG from "svelte-inline-svg";
  import { isMobileDevice } from "../utils/device";
  import { BOBOSBLOG_URL } from "../utils/constants";

  export let title: string;
  export let subjects: string;
  export let url: string;

  const message = "eu li um post porreiro no blog do bobo";
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedMessage = encodeURIComponent(message);
  const encodedHastags = encodeURIComponent(subjects);
  const ssr = import.meta.env.SSR;

  const socialMedias = [
    // text, url, hashtags, via, related
    {
      name: "twitter",
      url: `https://twitter.com/intent/tweet?text=${encodedMessage}&url=${encodedUrl}&hashtags=${encodedHastags}`,
    },
    // url, title
    {
      name: "telegram",
      url: `https://telegram.me/share/url?url=${encodedUrl}&title=${encodedTitle}`,
    },
    // url, title
    {
      name: "whatsapp",
      url: isMobileDevice()
        ? `https://api.whatsapp.com/send?url=${encodedUrl}&title=${encodedTitle}`
        : `https://wa.me/?text=${encodeURIComponent(`${message} - ${url}`)}`,
    },
  ];

  $: webShareAPISupported = !ssr && typeof navigator.share !== "undefined";
  $: handleWebShare;

  onMount(() => (url = window.location.href));

  /**
   * open social window to share post
   */
  function openSocialMediaWindow(e: Event, url: string) {
    e.preventDefault();

    const w = 600;
    const h = 400;
    const x = (screen.width - w) / 2;
    const y = (screen.height - h) / 2;
    const features = `width=${w},height=${h},left=${x},top=${y},centerscreen='yes'`;

    window.open(url, "_blank", features);
  }

  /**
   * check if the navigator share api is available
   */
  const handleWebShare = async () => {
    try {
      if (webShareAPISupported) {
        navigator.share({
          title,
          text: `Shared from asd`,
          url: BOBOSBLOG_URL,
        });
      } else {
        webShareAPISupported = false;
      }
    } catch (error) {
      webShareAPISupported = false;
    }
  };

  /**
   * ui feedback to the copy link of the post button
   */
  async function handleCopyPostLinkBtnClick() {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copiado com sucesso!");
    } catch (err) {
      toast.error("Erro ao copiar link");
    }
  }
</script>

<Toaster />
<aside class="mt-4 flex flex-row flex-wrap gap-4">
  {#if webShareAPISupported}
    <button
      on:click={handleWebShare}
      class="flex flex-row items-center border-b-2 border-secondary p-2 px-4 transition-all duration-500 ease-in-out hover:text-primary-600 active:text-primary-500"
    >
      <InlineSVG
        class="inline w-4 h-4 mr-2"
        src="/icons/share-network-bold.svg"
      />
      <span>partilhar</span>
    </button>
  {:else}
    {#each socialMedias as socialMedia}
      <button
        on:click={(e) => openSocialMediaWindow(e, socialMedia.url)}
        class="flex flex-row items-center border-b-2 border-secondary p-2 px-4 transition-all duration-500 ease-in-out hover:text-primary-600 active:text-primary-500"
      >
        <InlineSVG class="" src={`/icons/${socialMedia.name}.svg`} />
      </button>
    {/each}
  {/if}
  <button
    on:click={handleCopyPostLinkBtnClick}
    class="flex flex-row items-center border-b-2 border-secondary p-2 px-4 transition-all duration-500 ease-in-out hover:text-primary-600 active:text-primary-500"
  >
    <InlineSVG class="inline w-4 h-4 mr-2" src="/icons/link-bold.svg" />
    <span>copiar link</span>
  </button>
</aside>
