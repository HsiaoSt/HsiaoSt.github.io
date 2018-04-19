'use strict';

var sand, metal, wood
var pyramids, eiffel, china

function landmarks()
{
    sand = new Physijs.createMaterial(new THREE.MeshLambertMaterial({color:0xd47d3f}), 0.5, 0.5);
    
    metal = new Physijs.createMaterial(new THREE.MeshLambertMaterial({color:0x93A1AC}), 0.5, 0.5);
    
    wood = new Physijs.createMaterial(new THREE.MeshLambertMaterial({color:0x663300}), 0.5, 0.5);
    
    pyramids = new Physijs.ConeMesh(new THREE.ConeGeometry(5, 5, 4), sand);
    pyramids.position.set(-30, 15, 15);
    scene.add(pyramids);
    
    pyramids = new Physijs.ConeMesh(new THREE.ConeGeometry(4, 4, 4), sand);
    pyramids.position.set(-35, 15, 22);
    scene.add(pyramids);
    
    eiffel = new Physijs.ConeMesh(new THREE.ConeGeometry(2, 15, 4), metal);
    eiffel.position.set(-10, 20, 10);
    scene.add(eiffel);
    
    china = new Physijs.BoxMesh(new THREE.BoxGeometry(20, 4, 3), wood);
    china.position.set(0, 20, 25);
    china.rotation.y = 0.4; 
    scene.add(china);
}