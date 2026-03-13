const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container").appendChild(renderer.domElement);

camera.position.set(0,10,20);
camera.lookAt(0,0,0);


// Create grid of cubes
const cubes = [];
const size = 10;

for(let x=-size;x<size;x++){
for(let z=-size;z<size;z++){

const geometry = new THREE.BoxGeometry(0.5,0.5,0.5);

const material = new THREE.MeshBasicMaterial({
color:0x00ffcc,
wireframe:true
});

const cube = new THREE.Mesh(geometry,material);

cube.position.x = x;
cube.position.z = z;

scene.add(cube);

cubes.push(cube);

}
}

let time = 0;


// Animation
function animate(){

requestAnimationFrame(animate);

time += 0.05;

cubes.forEach(cube=>{
cube.position.y = Math.sin(time + cube.position.x + cube.position.z);
});

renderer.render(scene,camera);

}

animate();