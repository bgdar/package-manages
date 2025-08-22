<script type="ts">

import { page } from "$app/state";

</script>

<div>
status saat ini {page.status} : {page.error?.message}
</div>
