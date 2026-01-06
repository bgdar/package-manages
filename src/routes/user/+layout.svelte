<script lang="ts">

	let { children } = $props();
</script>

<!-- <svelte:head> -->
<!-- 	<link rel="icon" href={favicon} /> -->
<!-- </svelte:head> -->

<!-- cari cara agar tidak ke load ke signIn dna sigUP -->
<nav>

  {@render children?.()}
</nav>



