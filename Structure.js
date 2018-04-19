'use strict';

var sand, metal, wood, white
var pyramids, eiffel, china, opera, house

function landmarks()
{
    sand = new Physijs.createMaterial(new THREE.MeshLambertMaterial({color:0xd47d3f}), 0.5, 0.5);
    
    metal = new Physijs.createMaterial(new THREE.MeshLambertMaterial({color:0x93A1AC}), 0.5, 0.5);
    
    wood = new Physijs.createMaterial(new THREE.MeshLambertMaterial({color:0x663300}), 0.5, 0.5);
    
    white = new Physijs.createMaterial(new THREE.MeshLambertMaterial({color:0xffffff}), 0.5, 0.5);
    
    pyramids = new Physijs.ConeMesh(new THREE.ConeGeometry(5, 5, 4), sand);
    pyramids.castShadow = true;
    pyramids.position.set(-30, 15, 15);
    scene.add(pyramids);
    pyramids = new Physijs.ConeMesh(new THREE.ConeGeometry(4, 4, 4), sand);
    pyramids.castShadow = true;
    pyramids.position.set(-35, 15, 22);
    scene.add(pyramids);
    
    eiffel = new Physijs.ConeMesh(new THREE.ConeGeometry(2, 15, 4), metal);
    eiffel.castShadow = true;
    eiffel.position.set(-10, 20, 10);
    scene.add(eiffel);
    
    china = new Physijs.BoxMesh(new THREE.BoxGeometry(20, 4, 3), wood);
    china.castShadow = true;
    china.position.set(0, 20, 25);
    china.rotation.y = 0.4; 
    scene.add(china);
    
    opera = new Physijs.ConeMesh(new THREE.ConeGeometry(1, 8, 4), white);
    opera.castShadow = true;
    opera.position.set(40, 20, 35);
    scene.add(opera);
    opera = new Physijs.ConeMesh(new THREE.ConeGeometry(1, 6, 4), white);
    opera.castShadow = true;
    opera.position.set(42, 20, 35);
    scene.add(opera);
    opera = new Physijs.ConeMesh(new THREE.ConeGeometry(1, 6, 4), white);
    opera.castShadow = true;
    opera.position.set(38, 20, 35);
    scene.add(opera);
    
    house = new Physijs.BoxMesh(new THREE.BoxGeometry(3, 3, 3), white);
    house.castShadow = true;
    house.position.set(3, 15, -20);
    scene.add(house);
    house = new Physijs.BoxMesh(new THREE.BoxGeometry(3, 4, 3), white);
    house.castShadow = true;
    house.position.set(0, 15, -20);
    scene.add(house);
    house = new Physijs.ConeMesh(new THREE.ConeGeometry(3, 3, 4), white);
    house.castShadow = true;
    house.position.set(0, 20, -20);
    scene.add(house);
    house = new Physijs.BoxMesh(new THREE.BoxGeometry(3, 3, 3), white);
    house.castShadow = true;
    house.position.set(-3, 15, -20);
    scene.add(house);
}