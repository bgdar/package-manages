<script lang="ts">
	import type { PageProps } from './$types';

	import LinuxPage from '$lib/packages/pages/linux-page.svelte';
  import WindowsPage from '$lib/packages/pages/windows-page.svelte';
	import MacPage from '$lib/packages/pages/mac-page.svelte';
  
  // yang di dapat dari page.ts
	let { data }: PageProps = $props();
</script>

<!--sesuiakna dengan di root layout-->
<main class="h-screen w-screen">
	{#if data.systemName == 'linux'}
		<LinuxPage />
	{:else if data.systemName == 'windows'}
		<WindowsPage />
	{:else if data.systemName == 'mac'}
		<MacPage />
  {:else}
    
    <div>

      <div class="bg-red-700 mx-auto text-white p-2  rounded-2xl shadow-md active:text-gray-400  active::bg-red-400">
        <p>package not found</p>
      </div>

    </div>
	{/if}
</main>
