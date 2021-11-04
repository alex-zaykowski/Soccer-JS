let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

let renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
camera.position.z = 50;
scene.add(camera);

let boxGeometry = new THREE.BoxGeometry(10, 10, 10);
let basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
let cube = new THREE.Mesh(boxGeometry, basicMaterial);
scene.add(cube);
cube.rotation.set(0.4, 0.2, 0);

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();