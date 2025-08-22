<script lang="ts">
	import type { PageProps } from './$types';
	import Scoop from '$lib/packages/windows/scoop.svelte';

	let { data }: PageProps = $props();
</script>

<div>
	page type package
	{@html data.typePackage}

	{#if data.typePackage == 'widget'}
		<div>widgte</div>
	{:else if data.typePackage == 'scoop'}
		<Scoop />
	{:else}
		<p>tidak ada halaman ini</p>
	{/if}
</div>
