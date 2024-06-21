import * as dat from "dat.gui";
import * as THREE from "three";
import gsap from "gsap";

if (document.querySelector(".three")) {
  const gui = new dat.GUI();
  const options = {
    time: 0,
    amplitude: 0.25,
    waveLength: 5.7,
  };

  const uniforms = {
    uTime: { value: options.time },
    uAmplitude: { value: options.amplitude },
    uWaveLength: { value: options.waveLength },
  };
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1, 45, 45),
    new THREE.ShaderMaterial({
      vertexShader: require("./shaders/vertex.glsl"),
      fragmentShader: require("./shaders/fragment.glsl"),
      uniforms,
      wireframe: true,
    }),
  );
  const texture = new THREE.TextureLoader().load(
    "../../img/content/08c811634a330cbae5e50c80af4bff2a.webp",
    (tex) => {
      tex.needsUpdate = true;
      mesh.scale.set(tex.image.width / window.innerWidth, 1.0, 1.0);
    },
  );
  uniforms.uTexture = { value: texture };

  const boilerplate = () => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000,
    );
    camera.position.set(0, 0, 2);

    scene.add(mesh);

    gui.add(options, "amplitude").onChange((e) => {
      mesh.material.uniforms.uAmplitude.value = e;
    });
    gui.add(options, "waveLength").onChange((e) => {
      mesh.material.uniforms.uWaveLength.value = e;
    });
    gui.add(options, "time").onChange((e) => {});

    gsap.ticker.add(myFunction);

    function myFunction() {
      mesh.material.uniforms.uTime.value += 0.04;
    }

    const updateSize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    renderer.setAnimationLoop((time) => {
      renderer.render(scene, camera);
    });
    document.body.appendChild(renderer.domElement);
  };

  boilerplate();
}
