<script lang="ts">
let query = $state("dar")
let maintainer = $state("")
let loading = $state(true)
let embed_error = $state(false)

// altenatif https://archlinux.org/packages/search/json/?name=vim

let  url = $derived(`https://archlinux.org/packages/?sort=&q=${query}&maintainer=${maintainer}&flagged=
`)
</script>

<main  class="rounded-2xl shadow-md border border-gray-200 mx-auto block"
>
<div class="relative w-full h-full md:w-[80vw] md:h-[80vh] mx-auto rounded-xl overflow-hidden ">

<iframe src={url} 
  title="apt"
  frameborder="0"
  on:load={()=> loading = false }
      on:error={()=> embed_error= true}> 
    </iframe>
  {#if loading}
     <div class="absolute inset-0 flex items-center justify-center bg-gray-100/70 backdrop-blur-sm">
      <div class="h-full w-full overflow-hidden rounded-xl bg-gray-300 relative">
        <div class="absolute inset-0 bg-gradient-to-r h-full w-full from-gray-300 via-gray-100 to-gray-300 animate-shimmer"></div>
      </div>
    </div>

   {/if}

{#if embed_error}
    <p>Error </p>
  
{/if}
</div>
    
  <div class="menu flex gap-2 mt-3 border-2 rounded-2xl shadow-md ">

    <input type="text" name="text" bind:value={query} placeholder="cari pkg " id="">

    <select name="" bind:value={maintainer} id="">
      <option value="jammy">jammy</option>
      <option value="jammy-updates">jammy-updates</option>
      <option value="jammy-backports">jammy-backports</option>
      <option value="noble">noble</option>
      <option value=""></option>
    </select>

 <select name="" bind:value={maintainer} id="">
      <option value="jammy">jammy</option>
      <option value="jammy-updates">jammy-updates</option>
      <option value="jammy-backports">jammy-backports</option>
      <option value="noble">noble</option>
      <option value=""></option>
    </select>

  </div>

</main>


