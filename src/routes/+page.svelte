<script lang="ts">
	import { goto } from '$app/navigation';
	import { WindowsLogo, LinuxLogo, AppleLogo } from 'phosphor-svelte';

	let osCurrent = $state([WindowsLogo, LinuxLogo, AppleLogo]);
 
	// Next → swap index 1 <-> 2
	let handleNextOs = () => {
		let copy = [...osCurrent];
		[copy[1], copy[2]] = [copy[2], copy[1]];
		osCurrent = copy; // assign ulang ke state
	};

	// Prev → swap index 1 <-> 0
	let handlePrevOs = () => {
		let copy = [...osCurrent];
		[copy[1], copy[0]] = [copy[0], copy[1]];
		osCurrent = copy; // assign ulang ke state
	};
	$effect(() => {
		const handle = (event: KeyboardEvent) => {
			if (event.key == 'ArrowRight') {
				handleNextOs();
			} else if (event.key == 'ArrowLeft') {
				handlePrevOs();
      }
      else if (event.key == "Enter"){
        if (osCurrent[1] === WindowsLogo) {
          goto("/windows/package")
        }else if(osCurrent[1] === LinuxLogo){
          goto("/linux/package")
        }else if(osCurrent[1] === AppleLogo ){
          goto("/mac/package")
        }
      }
		};
		document.addEventListener('keydown', handle);

		return () => {
			document.removeEventListener('keydown', handle);
		};
	});
</script>

<!--halaman utama yg nantinaya di tampilkan -->
<!-- Dashboard utama -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-gray-950 text-gray-100 min-h-screen place-items-center">

	<!-- Header -->
	<div class="col-span-full bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-6 shadow-lg text-center">
		<h1 class="text-2xl font-bold tracking-wide"> Package Manager Dashboard</h1>
		<p class="text-sm opacity-90 mt-1">package manager sistem operasi</p>
	</div>

	<!-- OS pertama -->
	<div class="border border-gray-800 bg-gray-900/60 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center space-y-3 w-full max-w-sm">
		<div class="bg-green-500/10 p-4 rounded-full">
			<svelte:component this={osCurrent[0]} size={50} color="green" />
		</div>
	</div>

	<!-- OS tengah (highlight) -->
	<div class="relative border border-emerald-400/40 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-8 shadow-xl scale-110 md:scale-125 flex flex-col items-center justify-center space-y-4 w-full max-w-sm ring-2 ring-emerald-500/40 transition-all duration-300">
		<div class="bg-blue-500/10 p-6 rounded-full">
			<svelte:component this={osCurrent[1]} size={120} />
		</div>

		<!-- Info navigasi (floating info di bawah OS tengah) -->
		<div class="absolute -bottom-10 md:-bottom-14 mt-3 bg-gray-800/70 backdrop-blur-md text-gray-300 text-xs px-4 py-2 rounded-full shadow-md">
			<p>Gunakan ← dan → untuk memilih sistem operasi, Enter untuk masuk</p>
		</div>
	</div>

	<!-- OS ketiga -->
	<div class="border border-gray-800 bg-gray-900/60 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center space-y-3 w-full max-w-sm">
		<div class="bg-rose-500/10 p-4 rounded-full">
			<svelte:component this={osCurrent[2]} size={50} />
		</div>
	</div>

	<!-- Footer -->
	<div class="col-span-full text-center text-gray-500 text-xs mt-16">
		<p>© 2025 Package Manager — Open source explorer for every system.</p>
	</div>
</section>

