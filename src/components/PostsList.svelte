<script lang="ts">
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import dayjs from "dayjs";
  import customParseFormat from "dayjs/plugin/customParseFormat";

  import PostCard from "./PostCard.svelte";
  import CheckIcon from "../icons/check.svg?component";
  import CaretDownIcon from "../icons/caret-down.svg?component";

  // set customParseFormat plugin
  dayjs.extend(customParseFormat);

  type PostArr = {
    id: string;
    slug: string;
    body: string;
    collection: string;
    data: {
      title: string;
      date: string;
      draft: boolean;
      bannerImg?: boolean | undefined;
      cardImg?: boolean | undefined;
      subjects: string[];
    };
  }[];

  export let allPosts: PostArr;

  let show = false; // menu state
  let menu: HTMLElement | null = null; // menu wrapper DOM reference
  let order = 0; // order state, 0 desc, 1 asc

  let page = 0;
  let postsPerPage = 6;
  let posts = allPosts.slice(0, postsPerPage);

  // https://github.com/formkit/auto-animate/issues/82

  function scrollHandler() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (posts.length !== allPosts.length) {
        page++;
        posts.push(...allPosts.slice(posts.length, postsPerPage * page));

        if (order === 0) {
          posts.sort((a, b) =>
            dayjs(a.data.date, "DD/MM/YYYY").isBefore(
              dayjs(b.data.date, "DD/MM/YYYY")
            )
              ? 1
              : -1
          );
        } else {
          posts.sort((a, b) =>
            dayjs(a.data.date, "DD/MM/YYYY").isAfter(
              dayjs(b.data.date, "DD/MM/YYYY")
            )
              ? 1
              : -1
          );
        }

        posts = posts;
      }
    }
  }

  onMount(() => {
    const handleOutsideClick = (event: Event) => {
      if (show && !menu?.contains(event.target as Node)) {
        show = false;
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (show && event.key === "Escape") {
        show = false;
      }
    };

    // add events when element is added to the DOM
    document.addEventListener("click", handleOutsideClick, false);
    document.addEventListener("keyup", handleEscape, false);

    // remove events when element is removed from the DOM
    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
      document.removeEventListener("keyup", handleEscape, false);
    };
  });
</script>

<svelte:window on:scroll={scrollHandler} />
<div class="relative w-min ml-auto" bind:this={menu}>
  <div class="flex justify-end">
    <button
      on:click={() => (show = !show)}
      class="flex flex-row items-center border-b-2 border-secondary p-2 px-4 transition-all duration-500 ease-in-out hover:text-primary-600 active:text-primary-500"
    >
      <span>ordenar</span>
      <CaretDownIcon class="inline w-4 h-4 ml-2" />
    </button>
    {#if show}
      <div
        in:scale={{ duration: 100, start: 0.95 }}
        out:scale={{ duration: 75, start: 0.95 }}
        class="z-10 origin-top-right absolute right-0 top-10 w-56 py-2 mt-1 bg-primary-800
          rounded shadow-md"
      >
        <button
          class={`px-2 w-full flex flex-row items-center active:bg-primary-600 hover:bg-primary-600 ${
            order === 0 ? "bg-primary-700" : "bg-primary-800"
          }`}
          on:click={() => {
            if (order !== 0) {
              order = 0;

              posts.sort((a, b) =>
                dayjs(a.data.date, "DD/MM/YYYY").isBefore(
                  dayjs(b.data.date, "DD/MM/YYYY")
                )
                  ? 1
                  : -1
              );
              posts = posts;
            }

            show = false;
          }}
        >
          <CheckIcon
            class={order === 0 ? `opacity-100 mr-2` : "mr-2 opacity-0"}
          />
          <span class="ml-1">Data (recente-antigo)</span>
        </button>
        <button
          class={`px-2 w-full flex flex-row items-center active:bg-primary-600 hover:bg-primary-600 ${
            order === 1 ? "bg-primary-700" : "bg-primary-800"
          }`}
          on:click={() => {
            if (order !== 1) {
              order = 1;

              posts.sort((a, b) =>
                dayjs(a.data.date, "DD/MM/YYYY").isAfter(
                  dayjs(b.data.date, "DD/MM/YYYY")
                )
                  ? 1
                  : -1
              );
              posts = posts;
            }

            show = false;
          }}
        >
          <CheckIcon
            class={order === 1 ? `opacity-100 mr-2` : "mr-2 opacity-0"}
          />
          <span class="ml-1">Data (antigo-recente)</span>
        </button>
      </div>
    {/if}
  </div>
</div>
<ul
 
  class="grid grid-cols-1 gap-4 py-6"
>
  {#each posts as post}
    <PostCard
      slug={post.slug}
      date={post.data.date}
      href={`/blog/posts/${post.slug}`}
      img={post.data.cardImg}
      subjects={post.data.subjects}
      title={post.data.title}
    />
  {/each}
</ul>
