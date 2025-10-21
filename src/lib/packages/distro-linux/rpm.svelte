<script lang="ts">
import { onMount } from "svelte";
let loading = $state(true)
let query = $state("dar")

let url = $derived(`https://www.rpmfind.net/linux/rpm2html/search.php?query=${query}&submit=Search+...&system=&arch=`)

const handleLoading = () =>{
  console.info("loaded","loaidng : ",loading)
  loading = false
}

</script>

<header class="flex flex-2 justify-between ">
  <ul class="flex flex-1 justify-between">
    <li>msnu1</li>
    <li>man2</li>
    <li>menu3</li>
  </ul>
</header>

<main>
  <div class="relative w-full h-full md:w-[80vw] md:h-[80vh] mx-auto rounded-xl overflow-hidden ">
  <iframe src={url}
    frameborder="0"
     class="h-full w-full border-0 rounded-xl"
      title="rpm"
    on:load={handleLoading}
></iframe>
  {#if loading }
  <div class="absolute inset-0 flex items-center justify-center bg-gray-100/70 backdrop-blur-sm">
      <div class="h-full w-full overflow-hidden rounded-xl bg-gray-300 relative">
        <div class="absolute inset-0 bg-gradient-to-r h-full w-full from-gray-300 via-gray-100 to-gray-300 animate-shimmer"></div>
      </div>
    </div>

  {/if}
  </div>
  <div>
    <input type="text" bind:value={query}  name="" placeholder="serach pkg" id="">
  </div>
</main>
