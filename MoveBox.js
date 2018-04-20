'use strict';

var textbox, movabox, keycode;
var speed = 10;
var rock, meteor, fire, loop, boo = true;

function spawnBox()
{
//    window.addEventListener("keydown", onkeydown, false);

    textbox = new Physijs.createMaterial(new THREE.MeshBasicMaterial({color:0xffffff}), 0.5, 0.5);

    movabox = new Physijs.BoxMesh(new THREE.BoxGeometry(5, 5, 5), textbox);
    movabox.castShadow = true;
    movabox.position.set(Math.random() * 100 - 50, 20, Math.random() * 100 - 50);
    movabox.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    scene.add(movabox);

//    function onkeydown(event)
//    {
//        keycode = event.which;  
//
//        if(keycode == 87){movabox.position.z -= speed;}
//        else if(keycode == 83){movabox.position.z += speed;}
//        else if(keycode == 65){movabox.position.x -= speed;}
//        else if(keycode == 68){movabox.position.x += speed;}
//        else if(keycode == 32){movabox.position.set(0, 20, 0);}
//    }
    
}

function spawnMeteor()
{
    rock = new Physijs.createMaterial(new THREE.MeshBasicMaterial({color:0xab2e00}), 0.5, 0);
    
    meteor = new Physijs.SphereMesh(new THREE.SphereGeometry(30, 8, 5), rock);
//    meteor.castShadow = true;
    meteor.position.set(Math.random() * 200 - 100, 200, Math.random() * 200 - 100);
    scene.add(meteor);
    
    fire = new THREE.PointLight(0xff0000);
    scene.add(fire);
}