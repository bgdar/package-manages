<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let curretntPackage = $state<string>('');
</script>

<section class="flex min-h-screen">
	<nav class="flex w-48 flex-col items-stretch border-l-2 bg-white p-4 shadow-lg">
		<button class="rounded-lg p-3 text-left transition hover:bg-blue-500 hover:text-white"
			>Winget</button
		>
		<button class="rounded-lg p-3 text-left transition hover:bg-blue-500 hover:text-white"
			>Scoop</button
		>
		<button class="rounded-lg p-3 text-left transition hover:bg-blue-500 hover:text-white"
			>Chocolatey</button
		>
	</nav>

	<!-- Konten utama -->
	<div class="flex-1 p-8">
		<h1 class="mb-6 text-4xl font-bold">Windows Package Managers</h1>
		<p class="text-gray-700">
			Windows juga memiliki beberapa package manager untuk mempermudah instalasi software.
		</p>

		<!-- Contoh konten -->
		<button on:click={() => goto(`${page.url.pathname}/widget`)}>
			<div class="mt-8 grid gap-6 md:grid-cols-2">
				<div class="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
					<h2 class="text-xl font-semibold">Winget</h2>
					<p class="mt-2 text-gray-600">
						Winget adalah package manager resmi dari Microsoft untuk Windows.
					</p>
				</div>
			</div>
		</button>

		<button on:click={() => goto(`${page.url.pathname}/scoop`)}>
			<div class="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
				<h2 class="text-xl font-semibold">Scoop</h2>
				<p class="mt-2 text-gray-600">
					Scoop adalah package manager ringan yang populer untuk developer Windows.
				</p>
			</div>
		</button>
		<div class="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
			<h2 class="text-xl font-semibold">Chocolatey</h2>
			<p class="mt-2 text-gray-600">
				Chocolatey adalah package manager pihak ketiga yang sudah lama populer di kalangan pengguna
				Windows.
			</p>
		</div>
	</div>
</section>
