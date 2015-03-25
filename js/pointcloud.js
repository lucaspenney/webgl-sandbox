Sandbox.addCastle('pointcloud', function(WIDTH, HEIGHT) {
	var scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setSize(WIDTH, HEIGHT);
	camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 2022000);
	camera.position.set(100, 200, 300);
	scene.add(camera);
	renderer.setSize(WIDTH, HEIGHT);
	camera.aspect = WIDTH / HEIGHT;
	camera.updateProjectionMatrix();

	// Create a light, set its position, and add it to the scene.
	var light = new THREE.PointLight(0xffffff);
	light.position.set(-100, 200, 300);
	scene.add(light);
	scene.fog = new THREE.FogExp2(0x333333, 0.002);
	var sphereMaterial =
		new THREE.MeshLambertMaterial({
			color: 0xCC0000
		});

	var sphere = new THREE.Mesh(

		new THREE.SphereGeometry(
			20,
			52,
			52),

		sphereMaterial);

	// add the sphere to the scene
	scene.add(sphere);

	var cloud = new THREE.PointCloud(sphere, new THREE.PointCloudMaterial({
		size: 3,
		color: 0x252525
	}));
	//scene.add(cloud);

	var grid = new THREE.PointCloud(new THREE.PlaneBufferGeometry(1024, 1024, 32, 32), new THREE.PointCloudMaterial({
		color: 0x0000ff,
		size: 3
	}));
	grid.position.x = 0;
	grid.position.y = -100;
	grid.position.z = 0;
	grid.rotation.x = -Math.PI / 2;
	grid.rotation.x = -Math.PI / 2;
	scene.add(grid);

	var controls = new THREE.OrbitControls(camera);

	var render = function() {
		console.log('pointcloud');
		requestAnimationFrame(render);
		renderer.render(scene, camera);
		sphere.position.set(0, 0, 0);

		var radius = 100;
		var origin = 0;

		//camera.position.z = 10 * Math.cos(camera.position.x);
		//camera.lookAt(new THREE.Vector3(0, 0, 0));
		//console.log(grid.geometry.attributes.position)
		_.forEach(grid.geometry.attributes.position.array, function(v, i) {

			if ((i + 1) % 3 === 0)
				grid.geometry.attributes.position.array[i] = v + Math.random() * 0.4;

			//grid.geometry.attributes.position.array[i] = grid.geometry.attributes.position.array[i] * (Math.random() + 0.5);
		});

		grid.geometry.attributes.position.needsUpdate = true;

		grid.geometry.dynamic = true;

		// changes to the vertices
		grid.geometry.verticesNeedUpdate = true;
	}
	render();
	return renderer;
});