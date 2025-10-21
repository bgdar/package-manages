<script>
import "../../../app.css"

	import { AppleLogo, LinuxLogo, WindowsLogo , House } from 'phosphor-svelte';
let {children} =  $props();
import { page } from "$app/state";

</script>

{@render children?.()}

<nav
	class="fixed right-0 bottom-0 left-0 z-50 flex justify-around border-t border-gray-300 bg-white/90 p-2 shadow-lg backdrop-blur-md"
>
  <div class="flex justify-around gap-2 items-center">
    <a href="/" class="hover:bg-gray-300 hover:rounded-full transition duration-150"><House class="h-6 w-6"/></a>

  </div>
  <div class="flex flex-wrap gap-3 ">
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
  </div> 

  <div class="flex gap-3">
    <button>another</button>
  </div>
</nav>
