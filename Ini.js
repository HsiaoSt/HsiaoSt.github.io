Physijs.scripts.worker = 'physijs_worker.js';
Physijs.scripts.ammo = 'ammo.js';    

var scene, renderer, camera, box, box2;

initScene = function() {
    scene = new Physijs.Scene();
    scene.setGravity(new THREE.Vector3(0, -10, 0));

    renderer = new THREE.WebGLRenderer({ antialias:true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById('viewport').appendChild( renderer.domElement );

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set(20, 20, 50);
    camera.lookAt(scene.position);
    
    box = new Physijs.BoxMesh(new THREE.CubeGeometry(5, 10, 5), new THREE.MeshBasicMaterial({ color:0x00ff00 }));
    box.position.set(0, 10, 0);
    scene.add(box);
    
    box2 = new Physijs.BoxMesh(new THREE.CubeGeometry(5, 5, 5), new THREE.MeshBasicMaterial({ color:0x0000ff }));
    box2.position.set(0, 20, 0);
    scene.add(box2);

    requestAnimationFrame( render );
    scene.simulate();
}

render = function()
{
    requestAnimationFrame( render );
    renderer.render(scene, camera);
}

window.onload = initScene();