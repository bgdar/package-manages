<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { AppleLogo, LinuxLogo, WindowsLogo } from 'phosphor-svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<nav
	class="fixed right-0 bottom-0 left-0 z-50 flex justify-around border-t border-gray-300 bg-white/90 p-2 shadow-lg backdrop-blur-md"
>
	<a
		href="/windows/package"
		aria-current={page.url.pathname == '/windows/package'}
		class="flex flex-col items-center gap-1 text-gray-500 transition hover:text-blue-600"
	>
		<div
			class="p-2 hover:rounded-full hover:border-gray-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:transition-all"
		>
			<WindowsLogo class="h-6 w-6 " />
		</div>
		<span class="text-xs">Windows</span></a
	>
	<a
		href="/linux/package"
		aria-current={page.url.pathname == '/linux/package'}
		class="flex flex-col items-center gap-1 text-slate-700 transition hover:text-green-600"
	>
		<div
			class="p-2 hover:rounded-full hover:border-gray-300 hover:bg-slate-700 hover:text-white hover:shadow-lg hover:transition-all"
		>
			<LinuxLogo class="h-6 w-6" />
		</div>
		<span class="text-xs">Linux</span></a
	>
	<a
		href="/mac/package"
		aria-current={page.url.pathname == '/mac/package'}
		class="flex flex-col items-center gap-1 text-gray-500 transition hover:text-gray-800"
	>
		<div
			class="p-2 hover:rounded-full hover:border-gray-300 hover:bg-gray-500 hover:text-white hover:shadow-lg hover:transition-all"
		>
			<AppleLogo class="h-6 w-6" />
		</div>
		<span class="text-xs">Mac os </span></a
	>
</nav>
