<script lang="ts">

let pkg = $state("bgdar")
let embede_error = $state(false)


function handleEmbededError(){
  embede_error = true
}
</script>


<header class="w-full border-2 shadow-gray-700 ">
<p class="font-bold ">winget</p>
</header>

<main>


  {#if !embede_error}

    <iframe src={`https://winstall.app/`}

      title="widget"
      width="80%"
      height="800"
      on:error={handleEmbededError}
      frameborder="0"></iframe>

    <div class="mt-2">
      <input type="text" bind:value={pkg} name="text" id="">

    </div>
    {:else}
     <p class="text-center text-gray-600">
      Tidak bisa menampilkan halaman Scoop secara langsung.
      <a href="https://winget.run" target="_blank" class="text-blue-600 underline ml-1">
        Buka di tab baru →
      </a>
    </p>
  {/if}


</main>



