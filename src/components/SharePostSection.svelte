<script lang="ts">
  import toast, { Toaster } from "svelte-french-toast";
  import LinkIcon from "../icons/link.svg?component";

  export let url: string;

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
  <button
    on:click={handleCopyPostLinkBtnClick}
    class="flex flex-row items-center border-b-2 border-secondary p-2 px-4 transition-all duration-500 ease-in-out hover:text-primary-600 active:text-primary-500"
  >
    <LinkIcon class="inline w-4 h-4 mr-2" />
    <span>copiar link</span>
  </button>
</aside>
