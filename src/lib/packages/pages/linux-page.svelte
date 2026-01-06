<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
</script>

<section>
	<div class="mx-auto max-w-5xl">
		<h1 class="mb-8 text-center text-4xl font-bold">Linux Distributions</h1>

		<!-- DEB BASED -->
		<div class="mb-10">
			<h2 class="mb-4 text-2xl font-semibold text-blue-600">DEB Based (APT)</h2>
			<div
				on:click={() => goto(`${page.url.pathname}/apt`)}
				class="cursor-pointer rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg"
			>
				<h3 class="text-xl font-bold">Ubuntu | Debian</h3>
				<p class="mt-2 text-gray-600">
					Ubuntu adalah distro berbasis Debian dengan dukungan komunitas dan perusahaan (Canonical).
					Cocok untuk pemula.
				</p>
				<p class="mt-3 text-sm text-gray-500">
					Package Manager: <span class="font-semibold">APT</span>
				</p>
			</div>
		</div>

		<!-- RPM BASED -->
		<div class="mb-10">
			<h2 class="mb-4 text-2xl font-semibold text-red-600">RPM Based (DNF)</h2>
			<div
				on:click={() => goto(`${page.url.pathname}/rpm`)}
				class="cursor-pointer rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg"
			>
				<h3 class="text-xl font-bold">Fedora</h3>
				<p class="mt-2 text-gray-600">
					Fedora adalah distro cutting-edge yang menjadi basis pengembangan Red Hat Enterprise
					Linux.
				</p>
				<p class="mt-3 text-sm text-gray-500">
					Package Manager: <span class="font-semibold">DNF</span>
				</p>
			</div>
		</div>

		<!-- PACMAN BASED -->
		<div class="mb-10">
			<h2 class="mb-4 text-2xl font-semibold text-green-600">Pacman Based</h2>
			<div
				on:click={() => goto(`${page.url.pathname}/pacman`)}
				class="cursor-pointer rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg"
			>
				<h3 class="text-xl font-bold">Arch Linux</h3>
				<p class="mt-2 text-gray-600">
					Arch Linux adalah distro ringan dan minimalis yang memberikan kebebasan penuh untuk
					kustomisasi.
				</p>
				<p class="mt-3 text-sm text-gray-500">
					Package Manager: <span class="font-semibold">Pacman</span>
				</p>
			</div>
		</div>
	</div>
</section>
