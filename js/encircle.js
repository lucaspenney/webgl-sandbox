Sandbox.addCastle('encircle', function(WIDTH, HEIGHT) {
	var scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setSize(WIDTH, HEIGHT);
	camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 2022000);
	camera.position.set(100, 100, 300);
	scene.add(camera);
	camera.aspect = WIDTH / HEIGHT;
	camera.updateProjectionMatrix();


	// Create a light, set its position, and add it to the scene.
	var light = new THREE.PointLight(0x3333FF);
	light.position.set(-100, 200, 300);
	scene.add(light);
	scene.fog = new THREE.FogExp2(0x333333, 0.002);
	var sphereMaterial =
		new THREE.MeshPhongMaterial({
			color: 0x00CCFF,
			specular: 0xFFFFFF,
		});

	var sphere = new THREE.Mesh(

		new THREE.CubeGeometry(33, 33, 33, 6, 6),

		sphereMaterial);

	// add the sphere to the scene
	scene.add(sphere);

	var angle = 0;

	var render = function() {
		requestAnimationFrame(function() {
			render();
		});
		renderer.render(scene, camera);
		var speed = 0.01;
		sphere.rotation.x -= speed;
		//sphere.rotation.y += speed;
		//sphere.rotation.z += speed;
		angle += 0.01;
		var radius = 200;

		camera.lookAt(new THREE.Vector3(0, 0, 0));
		camera.position.x = 0 + radius * Math.cos(angle);
		camera.position.z = 0 + radius * Math.sin(angle);
		camera.position.y = 100;
	}
	render();
	return renderer;
});