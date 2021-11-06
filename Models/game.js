//initialize scene and camera
const scene = new THREE.Scene();
scene.add(new THREE.AmbientLight(0x222222, 3));
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 10;
camera.position.y = 11;
camera.rotateX(-Math.PI / 4);
//set up lighting
let light = new THREE.DirectionalLight();
light.position.set(10,10,10);
scene.add(light);

let light2 = new THREE.DirectionalLight();
light2.position.set(-10,0,0);
scene.add(light2);

//set up renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("white");
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const loader = new THREE.GLTFLoader();
loader.load("player.glb", addPlayer);

//set up player and player velocity
const player = new THREE.Object3D();

function addPlayer(data){
    player.add(data.scene);
    player.material = new THREE.MeshPhongMaterial({
        color: 0xeeb5f5,
        specular: 0x222222,
        shininess: 16,
        flatShading: false
    });
}
player.scale.set(0.5,0.5,0.5);
player.position.y = 2;

const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(1,1),
    new THREE.MeshBasicMaterial({
        color: 0xffff00,
        side: THREE.DoubleSide
    })
);
ground.rotateX(Math.PI / 2);
ground.geometry.scale(10,10,10);

player.add(camera);
scene.add(ground);
scene.add(player);

let keyupD = true;
let keyupA = true;
let keyupS = true;
let keyupW = true;
let velocityX = 0;
let velocityZ = 0;
const animate = function () {
    requestAnimationFrame( animate );
    if(keyupA && velocityX <= 0){
        velocityX += 0.01;
    }
    if(keyupD && velocityX >= 0){
        velocityX -= 0.01;
    }
    if((velocityX < 0.03 && velocityX > -0.03) && (keyupA && keyupD)){
        velocityX = 0;
    }

    if(keyupW && velocityZ < 0){
        velocityZ += 0.01;
    }
    if(keyupS && velocityZ > 0){
        velocityZ -= 0.01;
    }
    if((velocityZ < 0.03 && velocityZ > -0.03) && (keyupW && keyupS)){
        velocityZ = 0;
    }
    player.position.x += velocityX;
    player.position.z += velocityZ;
    renderer.render( scene, camera );
};

animate();