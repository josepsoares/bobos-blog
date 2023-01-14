<script lang="ts">
  import type { Action } from "svelte/action";
  import autoAnimate from "@formkit/auto-animate";

  import PostCard from "./PostCard.svelte";

  type PostArr = {
    id: string;
    slug: string;
    body: string;
    collection: string;
    data: {
      title: string;
      date: string;
      draft: boolean;
      illustration: string;
      cardIllustration: string;
      subjects: string[];
    };
  }[];

  export let allPosts: PostArr;

  let page = 0;
  let postsPerPage = 6;
  let posts = allPosts.slice(0, postsPerPage);
  let newPostsBatch: PostArr = [];

  $: posts = [...posts, ...newPostsBatch];

  // https://github.com/formkit/auto-animate/issues/82
  const typedAutoAnimate = autoAnimate as Action;

  function scrollHandler() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (posts.length !== allPosts.length) {
        page++;
        newPostsBatch = allPosts.slice(posts.length, postsPerPage * page);
      }
    }
  }
</script>

<svelte:window on:scroll={scrollHandler} />
<ul
  use:typedAutoAnimate={{ duration: 500 }}
  class="grid grid-cols-1 gap-4 py-6"
>
  {#each posts as post}
    <PostCard
      date={post.data.date}
      href={`/blog/posts/${post.slug}`}
      illustration={post.data.cardIllustration}
      subjects={post.data.subjects}
      title={post.data.title}
    />
  {/each}
</ul>
