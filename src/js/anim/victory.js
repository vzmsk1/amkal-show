import * as dat from "dat.gui";
import * as THREE from "three";
import gsap from "gsap";

if (document.querySelector(".three")) {
  const gui = new dat.GUI();
  const options = {
    time: 0,
    amplitude: 0.1,
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
  uniforms.uDataTexture = {
    value: texture,
  };

  const boilerplate = () => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      60,
    );
    camera.position.set(0, 0, 0.5);

    scene.add(mesh);

    function getXFOV() {
      // Convert angle to radiant
      const FOV = camera.fov;
      let yFovRadiant = (FOV * Math.PI) / 180;
      // Calculate X-FOV Radiant
      let xFovRadiant =
        2 *
        Math.atan(
          Math.tan(yFovRadiant / 2) * (window.innerWidth / window.innerHeight),
        );
      // Convert back to angle
      let xFovAngle = (xFovRadiant * 180) / Math.PI;
      return xFovAngle;
    }

    const closeZ = 0.5 / Math.tan((getXFOV() * Math.PI) / 180.0);

    uniforms.uZMax = new THREE.Uniform(camera.position.z - closeZ);

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
