'use strict';

Physijs.scripts.worker = '/js/physijs_worker.js';
Physijs.scripts.ammo = 'ammo.js';

var ini, render;
var renderer, scene, camera, loader, axeshelper;
var sun, sunmodel, moon, moonmodel, surface, earth;
var box, radius = 75, theta = 0, mtheta = 0;

//Scene Initialization
function ini()
{
    //Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById( 'viewport' ).appendChild( renderer.domElement );

    //Scene Constructor
    scene = new Physijs.Scene;
    scene.setGravity(new THREE.Vector3( 0, -30, 0 ));

    //Camera Constructor
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 200, 200);
//    camera.position.set(0, 300, 0);
    camera.lookAt(scene.position);
    scene.add(camera);
    
    //onResize
    window.addEventListener('resize', onWindowResize, false);

    //External Textures
    loader = new THREE.TextureLoader();
    
    //XYZ Axis Helper
    axeshelper = new THREE.AxesHelper(100);
    scene.add(axeshelper);
    
    //Sunlight
    sun = new THREE.PointLight(0xffffff, 1, 800, 2);
    sun.castShadow = true;
//    sun.position.set(100, 100, 0);
    sun.position.y = 100;
    scene.add(sun);
    
    //Physical Model of Sun
    sunmodel = new THREE.Mesh(new THREE.SphereGeometry(6, 32, 32), new THREE.MeshBasicMaterial({color:0xffff00}));
    sunmodel.position.copy(sun.position);
    scene.add(sunmodel);
    
//    //Moonlight
//    moon = new THREE.PointLight(0xffffff, 0.1);
//    moon.castShadow = true;
//    moon.position.set(-75, 90, 0);
//    scene.add(moon);
    
    //Moon Model
    moonmodel = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32), new THREE.MeshPhongMaterial({color:0xffffff}));
    moonmodel.position.y = 90;
    moonmodel.castShadow = true;
//    moonmodel.position.copy(moon.position);
    scene.add(moonmodel);
    
    //Texture of the Earth
    surface = Physijs.createMaterial(new THREE.MeshPhysicalMaterial({roughness:0.6, map:loader.load('img/Earth.jpg')}), 0.5, 1.0);
    
    //The Earth's Physical Model
    earth = new Physijs.CylinderMesh(new THREE.CylinderGeometry(100, 75, 20, 64), surface, 0);
    earth.receiveShadow = true;
    scene.add(earth);
    
    //Box
    box = new Physijs.BoxMesh(new THREE.CubeGeometry( 5, 5, 5 ), new THREE.MeshBasicMaterial({ color: 0x888888 }));
    box.castShadow = true;
    box.rotation.x = 90;
    box.position.set(0, 20, 0);
    scene.add( box );
    
    requestAnimationFrame( render );
};

//onResize Function
function onWindowResize()
{

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

//Sun and Moon Revolution
function revolution()
{
    sun.position.x = radius * Math.cos(theta * Math.PI/180);
    sun.position.z = radius * Math.sin(theta * Math.PI/180);

    theta = (theta + 1) % 360;
    
    sunmodel.position.copy(sun.position); 
    
    moonmodel.position.x = radius * Math.cos(mtheta * Math.PI/180);
    moonmodel.position.z = radius * Math.sin(mtheta * Math.PI/180);
    
    mtheta = (mtheta + 0.5) % 360;
}

//Render
function render()
{
    revolution();
    scene.simulate();
    renderer.render( scene, camera );
    requestAnimationFrame( render );
};