<script lang="ts">
	import * as THREE from 'three';
	import { Canvas, T } from '@threlte/core';

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
	let cubeWidth = 1;
	let cubeHeight = 1;
	let cubeDepth = 1;
	let color = 0xff3e00;
	let width = window.innerWidth / 0.75;
	let height = window.innerHeight / 0.75;
</script>

<div class="relative w-full h-full overflow-hidden">
	<Canvas size={{ width, height }}>
		<T.Mesh
			geometry={new THREE.BoxGeometry()}
			material={new THREE.MeshStandardMaterial({ color })}
			scale={[cubeWidth, cubeHeight, cubeDepth]}
			rotation={[0, spin, 0]}
		/>
		<T.PerspectiveCamera position={[1, 1, 3]} />
		<T.AmbientLight intensity={0.6} />
		<T.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />
	</Canvas>

	<div class="absolute top-2 left-2">
		<label><input type="range" bind:value={cubeWidth} min={0.1} max={3} step={0.1} /> width</label>
		<label><input type="range" bind:value={cubeHeight} min={0.1} max={3} step={0.1} /> height</label
		>
		<label><input type="range" bind:value={cubeDepth} min={0.1} max={3} step={0.1} /> depth</label>
	</div>
</div>
