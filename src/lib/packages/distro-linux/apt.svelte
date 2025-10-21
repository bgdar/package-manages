
<script >

let keyword = $state("dar")
let suite = $state("jammy")

// bisa dari source ini = https://launchpad.net/ubuntu/ , misal ppyhon  = https://launchpad.net/ubuntu/+search?text=python
let loading = $state(true)

const handleLoading = () =>{
  console.info("loaded","loaidng : ",loading)
  loading = false
}

let newUrl = $derived(`https://packages.ubuntu.com/search?keywords=${keyword}&searchon=names&suite=${suite}&section=all`
);
</script>


<header class="flex flex-1">
  <p>APT linux package manager </p>
 </header>

<div class="relative w-full h-full md:w-[80vw] md:h-[80vh] mx-auto rounded-xl overflow-hidden ">
  <iframe
    src={newUrl}
    title="apt"
    class="h-full w-full border-0 rounded-xl"
    frameborder="0"
    onload={handleLoading}></iframe>

  <!-- Loading overlay (di tengah container ini) -->
  {#if loading}
    <div class="absolute inset-0 flex items-center justify-center bg-gray-100/70 backdrop-blur-sm">
      <div class="h-full w-full overflow-hidden rounded-xl bg-gray-300 relative">
        <div class="absolute inset-0 bg-gradient-to-r h-full w-full from-gray-300 via-gray-100 to-gray-300 animate-shimmer"></div>
      </div>
    </div>
  {/if}
</div>

<div class="menu mt-3 border-2 rounded-2xl shadow-md p-3 flex items-center gap-3">
  <input
    type="text"
    name="text"
    bind:value={keyword}
    placeholder="cari pkg"
    class="p-1 rounded-lg flex-1" />

  <select
    name=""
    bind:value={suite}
    class=" p-1 rounded-lg">
    <option value="jammy">jammy</option>
    <option value="jammy-updates">jammy-updates</option>
    <option value="jammy-backports">jammy-backports</option>
    <option value="noble">noble</option>
  </select>
</div>

<div class="border  p-2 bg-gray-500 ">

  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse maxime suscipit deserunt nobis, repudiandae quia fugit cumque nesciunt iure cum modi voluptates ratione asperiores quasi inventore tenetur sed deleniti unde?
    Delectus fugit nisi voluptate ducimus culpa porro iusto, doloribus illo dicta facilis optio assumenda, commodi molestiae hic at id sit, sunt possimus incidunt quas? Eaque ipsum deleniti reprehenderit in eum.
    Qui, consectetur ipsum temporibus debitis ea, laudantium iste ut pariatur ex id, odit maxime dignissimos earum vel. Officiis, commodi debitis, ut nesciunt placeat aspernatur iusto sequi laudantium maiores quidem accusantium.
    Perspiciatis in accusamus dolorum consectetur dolore quas facilis voluptatum ipsum culpa itaque, molestias ullam, odio maxime amet! Natus recusandae nesciunt aspernatur distinctio, maiores aliquam accusamus possimus quasi culpa, impedit eveniet.
    Vitae libero quae, eligendi repellat dolore laudantium deserunt rem tempore nam repudiandae exercitationem, accusamus magni, eum officia aliquam cumque unde atque! Adipisci voluptatum quos aliquam ratione porro quidem consequuntur eligendi!
    Adipisci nulla nesciunt excepturi totam cupiditate minus blanditiis. Fugit, nesciunt. Voluptatum architecto minus deserunt aspernatur alias temporibus laborum odio adipisci error asperiores! Ea repudiandae eos corrupti? Harum a similique sint.
  </p>
</div>
