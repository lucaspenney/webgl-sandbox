Sandbox.addCastle('encircle', function(WIDTH, HEIGHT) {
	var scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setSize(WIDTH, HEIGHT);
	camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 2022000);
	THREEx.WindowResize(renderer, camera);
	camera.position.set(100, 100, 300);
	scene.add(camera);
	camera.aspect = WIDTH / HEIGHT;
	camera.updateProjectionMatrix();


	// Create a light, set its position, and add it to the scene.
	var light = new THREE.PointLight(0x333333, 2);
	scene.add(light);

	var light2 = new THREE.PointLight(0x333333, 2);
	light2.position.set(0, 100, 0);
	scene.add(light2);

	scene.fog = new THREE.FogExp2(0x333333, 0.000);
	var sphereMaterial =
		new THREE.MeshPhongMaterial({
			color: 0x00CCFF,
			specular: 0x333333,
		});

	var sphere = new THREE.Mesh(

		new THREE.SphereGeometry(33, 33, 33, 2, Math.PI * 2, Math.PI * 2, 44, 44),

		sphereMaterial);

	// add the sphere to the scene
	scene.add(sphere);

	var lightSphere = new THREE.Mesh(new THREE.SphereGeometry(5, 5, 5, 25, Math.PI * 2, Math.PI * 2),

		sphereMaterial);

	scene.add(lightSphere);

	var angle = 0;

	var render = function() {
		requestAnimationFrame(function() {
			render();
		});
		renderer.render(scene, camera);
		var speed = 0.01;
		sphere.position.x = 50;
		sphere.rotation.x += speed;
		angle += 0.01;
		var radius = 300;

		camera.lookAt(new THREE.Vector3(0, 0, 0));
		camera.position.x = 0 + radius * Math.cos(angle);
		camera.position.z = 0 + radius * Math.sin(angle);
		camera.position.y = 100;


		radius = 60;
		lightSphere.position.x = sphere.position.x + radius * Math.cos(angle * 5);
		lightSphere.position.z = sphere.position.z + radius * Math.sin(angle * 5);

		light.position.x = lightSphere.position.x;
		light.position.z = lightSphere.position.z;


		console.log(light.position);
	}
	render();
	return renderer;
});