const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(); 
const material = new THREE.MeshStandardMaterial({color: 0x00ff00}); 
const cube = new THREE.Mesh(geometry, material);

const mainLight = new DirectionalLight('white', 1);
mainLight.position.set(0, 0, 5);
scene.add(mainLight);

mainLight.

scene.add(cube); 
camera.position.z = 5;


function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01; 
    cube.rotation.y += 0.02;  
    renderer.render(scene, camera); 
} 
animate();