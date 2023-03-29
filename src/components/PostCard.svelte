<script lang="ts">
  export let slug: string;
  export let title: string;
  export let date: string;
  export let subjects: string[];
  export let img: boolean | undefined;
  export let href: string;
</script>

<li
  class="post-card group border-slate-300 p-2 transition-all duration-200 hover:border-primary-600 md:px-4 lg:px-12"
>
  <a
    class="flex w-full flex-col items-center justify-start md:flex-row md:justify-between"
    {href}
  >
    <div class="order-2 md:order-1">
      <h2 class="z-10 group-hover:text-secondary">
        {title}
      </h2>
      <p class="z-10 text-sm text-neutral-600 group-hover:text-primary-600">
        {date} ~ <span class="italic">{subjects.join(", ")}</span>
      </p>
    </div>
    <div
      class="relative order-1 mb-2 h-16 w-16  md:order-2 md:mb-0 md:h-14 md:w-14"
    >
      <img
        src={img ? `/imgs/blog/${slug}-card.png` : `/imgs/blog/dog-sample.png`}
        alt=""
        class="transition-all duration-200 w-full h-full opacity-100 group-hover:opacity-0"
      />
      <img
        src={img
          ? `/imgs/blog/${slug}-card-hover.png`
          : "/imgs/blog/tiger-sample.png"}
        alt=""
        class="absolute top-0 bottom-0 transition-all duration-200 w-full h-full opacity-0 group-hover:opacity-100"
      />
    </div>
  </a>
</li>

<style>
  .post-card {
    list-style: none;
    display: flex;
    border-width: 1px;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
  }

  .post-card > a {
    width: 100%;
    text-decoration: none;
    line-height: 1.4;
    padding: 1rem 1.3rem;
    opacity: 0.8;
  }
  h2 {
    margin: 0;
    font-size: 1.25rem;
    transition: all 0.2s ease-in-out;
  }
  p {
    margin-top: 0.5rem;
    margin-bottom: 0;
    transition: all 0.2s ease-in-out;
  }
</style>
