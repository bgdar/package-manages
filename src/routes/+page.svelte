<script lang="ts">
	import { WindowsLogo, LinuxLogo, AppleLogo } from 'phosphor-svelte';

	let osCurrent = $state<any[]>([WindowsLogo, LinuxLogo, AppleLogo]);
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
				console.log('ArrowRight');
				handleNextOs();
			} else if (event.key == 'ArrowLeft') {
				handlePrevOs();
				console.log('ArrowLeft');
			}
		};
		document.addEventListener('keydown', handle);

		return () => {
			document.removeEventListener('keydown', handle);
		};
	});
</script>

<!--halaman utama yg nantinaya di tampilkan -->
<section class=" grid grid-cols-1 gap-1.5 md:grid-cols-3">
	<div class="col-span-full border-2 p-4">01</div>

	<!-- os pertama  -->
	<div class="border-2 p-4">
		<div>
			<p>
				<svelte:component this={osCurrent[0]} size={50} color="green" />
			</p>
		</div>
	</div>

	<!-- di sini os yg di tegah  -->
	<div class="border-2 p-4">
		<div class="size-5">
			<svelte:component this={osCurrent[1]} size={100} />
		</div>
	</div>

	<!-- os yg terakhir  -->
	<div class="border-2 p-4">
		<div>
			<svelte:component this={osCurrent[2]} size={50} />
		</div>
	</div>
	<!-- ini footer yg di bawah mengambil semua  -->
	<div class="col-span-full border-2 p-4">04</div>
</section>
