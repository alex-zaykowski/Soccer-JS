const scene = new THREE.Scene();
scene.add(new THREE.AmbientLight(0x222222));
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

let light = new THREE.DirectionalLight();
light.position.set(10,10,10);
scene.add(light);

let light2 = new THREE.DirectionalLight();
light2.position.set(-10,0,0);
scene.add(light2);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const loader = new THREE.GLTFLoader();
loader.load("player.glb", addPlayer);

let player = new THREE.Object3D();
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
scene.add(player);
camera.position.z = 5;
renderer.setClearColor("white");

const animate = function () {
    requestAnimationFrame( animate );

    player.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();