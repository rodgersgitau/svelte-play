import * as THREE from 'three';

export default class Game {
	private scene: THREE.Scene;
	private pCamera: THREE.PerspectiveCamera;
	private _requestAFrame: number | undefined;

	constructor(scene: THREE.Scene) {
		this.scene = scene;
		this.pCamera = this.createCamera();
	}

	createCamera(): THREE.PerspectiveCamera {
		// Set Perspective camera
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth, window.innerHeight);
		camera.position.z = 2;
		return camera;
	}

	animate() {
		this._requestAFrame = requestAnimationFrame(this.animate);
	}
}
