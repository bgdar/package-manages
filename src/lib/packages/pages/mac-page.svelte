<script lang="ts">
</script>

<section class="flex min-h-screen">
	<!-- Konten utama -->
	<div class="flex-1 p-8">
		<h1 class="mb-6 text-4xl font-bold">MacOS Package Managers</h1>
		<p class="text-gray-700">
			MacOS juga memiliki beberapa package manager populer untuk memudahkan instalasi aplikasi &
			tools developer.
		</p>

		<!-- Card konten -->
		<div class="mt-8 grid gap-6 md:grid-cols-2">
			<div class="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
				<h2 class="text-xl font-semibold">Homebrew</h2>
				<p class="mt-2 text-gray-600">
					Homebrew adalah package manager paling populer di MacOS, digunakan untuk menginstal
					software dari command line.
				</p>
			</div>

			<div class="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
				<h2 class="text-xl font-semibold">MacPorts</h2>
				<p class="mt-2 text-gray-600">
					MacPorts adalah package manager lama untuk MacOS yang menyediakan ribuan port software
					open-source.
				</p>
			</div>

			<div class="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
				<h2 class="text-xl font-semibold">Nix</h2>
				<p class="mt-2 text-gray-600">
					Nix adalah package manager multi-platform yang juga tersedia di MacOS, dengan manajemen
					dependency yang unik.
				</p>
			</div>
		</div>
	</div>

	<!-- Navbar di sebelah kanan -->
	<nav class="flex w-48 flex-col items-stretch border-l-2 bg-white p-4 shadow-lg">
		<button class="rounded-lg p-3 text-left transition hover:bg-green-500 hover:text-white"
			>Homebrew</button
		>
		<button class="rounded-lg p-3 text-left transition hover:bg-green-500 hover:text-white"
			>MacPorts</button
		>
		<button class="rounded-lg p-3 text-left transition hover:bg-green-500 hover:text-white"
			>Nix</button
		>
	</nav>
</section>
