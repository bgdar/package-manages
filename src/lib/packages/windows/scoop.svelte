<script>
</script>

<header class="bg-blue-600 text-white shadow-md">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
		<h1 class="text-2xl font-bold">Scoop Package Manager</h1>
		<nav class="space-x-4">
			<a href="#" class="hover:underline">Home</a>
			<a href="#" class="hover:underline">Docs</a>
			<a href="#" class="hover:underline">GitHub</a>
		</nav>
	</div>
</header>

<!-- Content -->
<main class="mx-auto max-w-6xl px-4 py-8">
	<h2 class="mb-6 text-xl font-semibold">Available Packages</h2>

	<!-- Search bar -->
	<div class="mb-6 flex items-center">
		<input
			type="text"
			placeholder="Search packages..."
			class="flex-1 rounded-l-lg border px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
		/>
		<button class="rounded-r-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
			Search
		</button>
	</div>

	<!-- Package list -->
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<!-- Card -->
		<div class="rounded-xl bg-white p-5 shadow transition hover:shadow-lg">
			<h3 class="text-lg font-semibold">Node.js</h3>
			<p class="text-sm text-gray-600">JavaScript runtime built on Chrome's V8 engine.</p>
			<div class="mt-3 flex items-center justify-between">
				<span class="text-xs text-gray-500">Latest: 20.x</span>
				<button class="rounded-lg bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700">
					Install
				</button>
			</div>
		</div>

		<div class="rounded-xl bg-white p-5 shadow transition hover:shadow-lg">
			<h3 class="text-lg font-semibold">Python</h3>
			<p class="text-sm text-gray-600">A programming language that lets you work quickly.</p>
			<div class="mt-3 flex items-center justify-between">
				<span class="text-xs text-gray-500">Latest: 3.12</span>
				<button class="rounded-lg bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700">
					Install
				</button>
			</div>
		</div>

		<div class="rounded-xl bg-white p-5 shadow transition hover:shadow-lg">
			<h3 class="text-lg font-semibold">Git</h3>
			<p class="text-sm text-gray-600">Distributed version control system.</p>
			<div class="mt-3 flex items-center justify-between">
				<span class="text-xs text-gray-500">Latest: 2.45</span>
				<button class="rounded-lg bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700">
					Install
				</button>
			</div>
		</div>
	</div>
</main>
