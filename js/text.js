Sandbox.addCastle('text', function(WIDTH, HEIGHT) {
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
    light.position.set(200, 100, 100);
    scene.add(light);

    scene.fog = new THREE.FogExp2(0x333333, 0.000);


    var textGeo = new THREE.TextGeometry("Hello World", {
        size: 20,
        height: 20,
        font: 'droid serif',
    })

    text = new THREE.Mesh(textGeo, new THREE.MeshPhongMaterial({
        color: 0x00CCFF,
        specular: 0x333333,
    }));

    text.position.set(30, 20, 20);

    scene.add(text);
    var chars = "Hello World".split("");
    _.forEach(chars, function(char, i) {
        var textGeo = new THREE.TextGeometry(char, {
            size: 20,
            height: -1,
            font: 'droid serif',
        })

        textMesh1 = new THREE.Mesh(textGeo, new THREE.MeshPhongMaterial({
            color: 0x00CCFF,
            specular: 0x333333,
        }));

        var text = new THREE.Line(textGeo, new THREE.LineDashedMaterial({
            color: 0x00FF00,
            dashSize: 1,
            gapSize: 2,
            lineWidth: 1
        }));

        text.position.set(i * 20, 0, 0);

        scene.add(text);
    })


    var angle = 0;

    var render = function() {
        requestAnimationFrame(function() {
            render();
        });
        renderer.render(scene, camera);
        var speed = 0.01;
        angle += 0.01;
        var radius = 300;

        camera.lookAt(new THREE.Vector3(100, 0, 0));
        text.rotation.y += speed;


    }
    render();
    return renderer;
});