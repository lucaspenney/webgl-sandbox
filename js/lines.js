Sandbox.addCastle('lines', function(WIDTH, HEIGHT) {
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

	var cube = new THREE.CubeGeometry(33, 33, 44, 99, 50);

	var line = new THREE.Line(cube, new THREE.LineDashedMaterial({
		color: 0x00FF00,
		dashSize: 2,
		gapSize: 4,
		lineWidth: 2
	}), THREE.LinePieces);
	scene.add(line);

	var angle = 0;

	var render = function() {
		requestAnimationFrame(function() {
			render();
		});
		renderer.render(scene, camera);
		var speed = 0.01; //sphere.rotation.y += speed;

		angle += 0.01;
		var radius = 200;
		line.rotation.z += speed;


		camera.lookAt(new THREE.Vector3(0, 0, 0));
		camera.position.x = 0 + radius * Math.cos(angle);
		camera.position.z = 0 + radius * Math.sin(angle);
		camera.position.y = 100;
	}
	render();
	return renderer;
});