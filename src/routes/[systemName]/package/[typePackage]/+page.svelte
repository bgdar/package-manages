<script lang="ts">
	import type { PageProps } from './$types';


	import Scoop from '$lib/packages/windows/scoop.svelte';
	import Winget from '$lib/packages/windows/winget.svelte';
	
  import Rpm from '$lib/packages/distro-linux/rpm.svelte';
  import Pacman from '$lib/packages/distro-linux/pacman.svelte';
  import Apt from '$lib/packages/distro-linux/apt.svelte';

  import type { Record } from 'phosphor-svelte';

	let { data }: PageProps = $props();

	const components: Record<string, Element> = {
		winget: Winget,
		scoop: Scoop,
		apt: Apt,
    rpm : Rpm,
    pacman : Pacman,
	};

	console.info('pkg :', data.typePackage);
</script>

<div>
	<!-- page type package -->
	<!-- {@html data.typePackage} -->
	<!--Windows-->
	{#if data.typePackage}
		<svelte:component this={components[data.typePackage.toLowerCase()]} />
	{:else}
		<main class="w-full max-w-xl text-center">
			<div
				class="mx-auto mb-6 inline-flex h-28 w-28 items-center justify-center rounded-full bg-gray-100"
			>
				<!-- simple illustration -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-16 w-16 text-gray-400"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94A2 2 0 0022.18 18L13.71 3.86a2 2 0 00-3.42 0z"
					/>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v4" />
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 17h.01" />
				</svg>
			</div>

			<h1 class="mb-2 text-4xl font-semibold">404 — Halaman Tidak Ditemukan</h1>
			<p class="mb-6 text-sm text-[var(--muted)]">
				Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan. Coba periksa kembali alamat
				atau kembali ke beranda.
			</p>

			<div class="flex items-center justify-center gap-3">
				<a
					href="/"
					class="inline-block rounded-md border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:outline-none"
					>Kembali ke Beranda</a
				>
				<a
					href="javascript:history.back()"
					class="inline-block rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:underline"
					>Kembali</a
				>
			</div>

			<hr class="my-8 border-t border-gray-100" />

			<p class="text-xs text-[var(--muted)]">
				Butuh bantuan? <a href="/contact" class="underline">Hubungi kami</a>.
			</p>
		</main>
	{/if}
</div>
