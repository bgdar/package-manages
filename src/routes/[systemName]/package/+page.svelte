<script lang="ts">
	import type { PageProps } from './$types';

	import LinuxPage from '$lib/pages/linux-page.svelte';
	import WindowsPage from '$lib/pages/windows-page.svelte';
	import MacPage from '$lib/pages/mac-page.svelte';

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
	{/if}
</main>
