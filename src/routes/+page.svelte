<script lang="ts">
	import { smartcut } from '$lib/smartcut';
	import { onMount } from 'svelte';

	onMount(async () => {
		let res = await smartcut(
			{ x: 1200, y: 600 },
			[
				{ x: 300, y: 200 },
				{ x: 250, y: 150 },
				{ x: 400, y: 300 },
				{ x: 200, y: 100 }
			],
			2
		);
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
