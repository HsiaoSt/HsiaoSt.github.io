'use strict';

var imagePrefix = "img/skybox/space";
var directions  = ["right", "left", "top", "bottom", "back", "front"];
var imageSuffix = ".png";
   
function skybox()
{
    var materialArray = [];
    for (var i = 0; i < 6; i++)
        materialArray.push( new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
            side: THREE.BackSide
        }));

    var skyGeometry = new THREE.CubeGeometry( 1000, 1000, 1000 );
    var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
    var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
    //skyBox.rotation.x += Math.PI / 2;
    scene.add( skyBox );
}