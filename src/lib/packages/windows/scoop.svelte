<script lang="ts">

// link bucket repos resmi
// https://api.github.com/repos/ScoopInstaller/Main/contents/bucket
  let embedError : boolean = $state(false);

  function onIframeError() {
    embedError = true;
  }

</script>

<!-- di gunakan di /windows/scoop  -->
<header class="bg-blue-600 text-white shadow-md">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
		<h1 class="text-2xl font-bold">Scoop Package Manager</h1>
		</div>
</header>

<!-- Content -->
<main class="p-6 bg-gray-50 min-h-screen text-gray-800">
  <h1 class="text-2xl font-bold mb-4 text-center">Scoop Packages Explorer</h1>

  {#if !embedError}
    <iframe
      title="scoop"
      src={`https://scoop.sh/#/apps?q=dar`}
      width="90%"
      height="800"
      class="rounded-2xl shadow-md border border-gray-200 mx-auto block"
      frameborder="0"
      on:error={onIframeError}
    ></iframe>
  {:else}
    <p class="text-center text-gray-600">
      Tidak bisa menampilkan halaman Scoop secara langsung.
      <a href="https://scoop.sh/#/apps" target="_blank" class="text-blue-600 underline ml-1">
        Buka di tab baru →
      </a>
    </p>
  {/if}
</main>
