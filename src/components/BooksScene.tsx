import React from 'react';

export function BooksScene() {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Books Scene</title>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/100/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
<script src="https://unpkg.com/three@0.84.0/examples/js/controls/OrbitControls.js"></script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: monospace;
    background: transparent !important; /* Transparent background to fuse */
  }

  body {
    font-family: Bague, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #canvas-container {
    height: 100vh;
    width: 100vw;
    position: relative;
    background: transparent !important; /* Transparent background to fuse */
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    height: 100% !important;
    width: 100% !important;
    display: block;
    z-index: 1;
  }

  .overlay-text {
    display: none; 
  }
</style>
</head>
<body>

<div id="canvas-container"></div>

<script>
  window.addEventListener('load', init, false);

  function init() {
    createWorld();
    createLights();
    createPrimitive();
    animation();
  }

  var scene, camera, renderer;
  var _group = new THREE.Group();

  function createWorld() {
    const _width  = window.innerWidth;
    const _height = window.innerHeight;

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xFFFFFF, 10, 16);
    // Removed scene.background to keep it transparent

    camera = new THREE.PerspectiveCamera(35, _width / _height, 1, 1000);
    camera.position.set(0, 0, 10);

    // alpha: true allows the canvas to be transparent
    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(0.75); 
    renderer.setSize(_width, _height);
    renderer.setClearColor(0x000000, 0); // Transparent clear color
    renderer.shadowMap.enabled = false;

    document.getElementById('canvas-container').appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
  }

  function onWindowResize() {
    const _width  = window.innerWidth;
    const _height = window.innerHeight;
    renderer.setSize(_width, _height);
    camera.aspect = _width / _height;
    camera.updateProjectionMatrix();
  }

  function createLights() {
    const hemiLight = new THREE.HemisphereLight(0xFFFFFF, 0x303030, 1.2);
    scene.add(hemiLight);
  }

  function CreateBook() {
    this.mesh = new THREE.Object3D();

    const geo_cover = new THREE.BoxGeometry(2.4, 3, 0.05);
    const lmo_cover = new THREE.BoxGeometry(0.05, 3, 0.59);
    const ppr_cover = new THREE.BoxGeometry(2.3, 2.8, 0.5);

    const dartmouthGreens = [0x475b47];
    const randomGreen = dartmouthGreens[0];

    const mat       = new THREE.MeshLambertMaterial({ color: randomGreen });
    const mat_paper = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });

    const _cover1 = new THREE.Mesh(geo_cover, mat);
    const _cover2 = new THREE.Mesh(geo_cover, mat);
    const _lomo   = new THREE.Mesh(lmo_cover, mat);
    const _paper  = new THREE.Mesh(ppr_cover, mat_paper);

    _cover1.position.z = 0.3;
    _cover2.position.z = -0.3;
    _lomo.position.x   = 2.4 / 2;

    this.mesh.add(_cover1, _cover2, _lomo, _paper);
  }

  function isTooClose(newObj, others, minDistance = 1.0) {
    const newPos = newObj.position;
    for (let existing of others) {
      const dx   = newPos.x - existing.position.x;
      const dy   = newPos.y - existing.position.y;
      const dz   = newPos.z - existing.position.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < minDistance) return true;
    }
    return false;
  }

  function createPrimitive() {
    const placedBooks = [];
    const a = 3.5; // Tighter spread so books don't wander left

    // 15 books for the smaller area on the right
    for (let i = 0; i < 15; i++) {
      const _object = new CreateBook();
      const s = 0.1 + Math.random() * 0.4;
      _object.mesh.scale.set(s, s, s);

      let tries = 0;
      do {
        _object.mesh.position.x = (Math.random() - 0.5) * a * 2;
        _object.mesh.position.y = (Math.random() - 0.5) * a * 2;
        _object.mesh.position.z = (Math.random() - 0.5) * a * 2;
        tries++;
      } while (isTooClose(_object.mesh, placedBooks) && tries < 40);

      _object.mesh.rotation.x = Math.random() * 2 * Math.PI;
      _object.mesh.rotation.y = Math.random() * 2 * Math.PI;
      _object.mesh.rotation.z = Math.random() * 2 * Math.PI;

      TweenMax.to(_object.mesh.rotation, 8 + Math.random() * 8, {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
        z: (Math.random() - 0.5) * 0.5,
        yoyo:   true,
        repeat: -1,
        ease:   Sine.easeInOut,
        delay:  0.05 * i
      });

      _group.add(_object.mesh);
      placedBooks.push(_object.mesh);
    }

    scene.add(_group);
    
    // Position the entire cluster to the right half of the screen
    _group.position.x = 4.5; 
  }

  let clock = new THREE.Clock();
  let delta = 0;
  let interval = 1 / 30;

  function animation() {
    requestAnimationFrame(animation);
    
    delta += clock.getDelta();
    if (delta > interval) {
      _group.rotation.x -= 0.003;
      _group.rotation.y -= 0.003;
      _group.rotation.z -= 0.003;
      renderer.render(scene, camera);
      delta = delta % interval;
    }
  }
</script>
</body>
</html>
  `;

  return (
    <section className="w-full h-screen relative bg-white overflow-hidden flex items-center">
      {/* Left side: Image */}
      <div className="absolute left-0 w-full md:w-[60%] h-full flex items-center justify-start pointer-events-none">
        <img
          src="/assets/book.png"
          alt="Book Presentation"
          className="w-full h-full object-contain object-left-bottom"
        />
        
        {/* Overlay Text centered perfectly over the line draw */}
        <div className="absolute top-[25%] left-0 md:left-[18%] w-full flex justify-center pointer-events-none z-20">
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Roboto+Mono&display=swap');
            .correction-container {
              font-family: 'Roboto Mono', monospace;
              font-size: clamp(1.5rem, 3vw, 3em);
              display: flex;
              justify-content: center;
              width: 100%;
            }
            .correction-text {
              width: 80%;
              max-width: 600px;
              text-align: center;
              color: #111;
              line-height: 1.4;
            }
            .correction-text del {
              text-decoration-color: red;
            }
            .correction-text ins {
              text-decoration: none;
              font-family: 'Caveat', cursive;
              font-size: 1.5em;
              color: red;
              position: absolute;
              left: 50%;
              top: 0;
              transform: translate(-50%, -80%) rotate(-10deg);
              white-space: nowrap;
            }
            .correction-wrapper {
              position: relative;
              display: inline-block;
            }
            @media (min-width: 768px) {
              .correction-text {
                width: 60%;
              }
            }
          `}</style>
          <div className="correction-container">
            <p className="correction-text">
              I'm silently correcting <span className="correction-wrapper"><del>you're</del><ins>your</ins></span> code and design.
            </p>
          </div>
        </div>
      </div>

      {/* 3D Scene overlaid on top */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <iframe
          title="Books Scene"
          srcDoc={htmlContent}
          className="w-full h-full border-none outline-none"
          style={{ background: 'transparent' }}
          allowTransparency={true}
        />
      </div>
    </section>
  );
}
