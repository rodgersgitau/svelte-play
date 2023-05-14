<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';

	const background = new THREE.Color('papayawhip');
</script>

<SC.Canvas antialias {background}>
	<SC.Mesh geometry={new THREE.BoxGeometry()} />
	<SC.PerspectiveCamera position={[1, 1, 3]} />
</SC.Canvas>
