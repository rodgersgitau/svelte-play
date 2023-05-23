<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';

	interface ConfigType {
		background: THREE.Color;
	}
	const defaultConfig = {
		background: new THREE.Color('papayawhip')
	};

	export let config: ConfigType = defaultConfig;
	const { background } = config;

	// Variables
	let spin = 0;
	let width = 1;
	let height = 1;
	let depth = 1;
	let color = 0xff3e00;

	SC.onFrame(() => {
		spin += 0.01;
	});
</script>

<div class="relative w-full h-full overflow-hidden">
	<SC.Canvas antialias {background}>
		<SC.Mesh
			geometry={new THREE.BoxGeometry()}
			material={new THREE.MeshStandardMaterial({ color })}
			scale={[width, height, depth]}
			rotation={[0, spin, 0]}
		/>
		<SC.PerspectiveCamera position={[1, 1, 3]} />
		<SC.AmbientLight intensity={0.6} />
		<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />
	</SC.Canvas>

	<div class="absolute top-2 left-2">
		<label><input type="range" bind:value={width} min={0.1} max={3} step={0.1} /> width</label>
		<label><input type="range" bind:value={height} min={0.1} max={3} step={0.1} /> height</label>
		<label><input type="range" bind:value={depth} min={0.1} max={3} step={0.1} /> depth</label>
	</div>
</div>
