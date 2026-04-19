import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const w = mount.clientWidth;
    const h = mount.clientHeight;
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(0, 0.2, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setSize(w, h);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x334466, 0.6));
    const key = new THREE.DirectionalLight(0x88ccff, 1.6);
    key.position.set(3, 3, 4);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xaa66ff, 1.2);
    rim.position.set(-3, 1, -2);
    scene.add(rim);
    const fill = new THREE.PointLight(0x44ccff, 1.4, 10);
    fill.position.set(0, -1.5, 2);
    scene.add(fill);

    const robot = new THREE.Group();
    scene.add(robot);

    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: 0xe8f0f5,
      metalness: 0.85,
      roughness: 0.22,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
    });
    const darkMat = new THREE.MeshPhysicalMaterial({
      color: 0x0e141b,
      metalness: 0.9,
      roughness: 0.35,
    });
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x5ee8ff });
    const accentMat = new THREE.MeshBasicMaterial({ color: 0xc98bff });

    // Head
    const headGeo = new THREE.BoxGeometry(1.5, 1.4, 1.25, 6, 6, 6);
    {
      const pos = headGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const v = new THREE.Vector3().fromBufferAttribute(pos, i);
        v.normalize().multiplyScalar(0.98).add(v.clone().multiplyScalar(0.1));
      }
    }
    const head = new THREE.Mesh(headGeo, bodyMat);
    robot.add(head);

    // Visor
    const visor = new THREE.Mesh(
      new THREE.BoxGeometry(1.15, 0.55, 0.08),
      new THREE.MeshPhysicalMaterial({
        color: 0x000814,
        metalness: 0.6,
        roughness: 0.05,
        clearcoat: 1,
        transmission: 0.2,
        ior: 1.4,
      })
    );
    visor.position.set(0, 0.1, 0.63);
    robot.add(visor);

    // Eyes
    const eyeGeo = new THREE.SphereGeometry(0.11, 24, 24);
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(-0.28, 0.1, 0.69);
    const eyeR = eyeL.clone();
    eyeR.position.x = 0.28;
    robot.add(eyeL);
    robot.add(eyeR);

    function makeGlow(color: string) {
      const c = document.createElement('canvas');
      c.width = 128;
      c.height = 128;
      const ctx = c.getContext('2d')!;
      const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      g.addColorStop(0, color + 'ff');
      g.addColorStop(0.4, color + '66');
      g.addColorStop(1, color + '00');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 128, 128);
      const tex = new THREE.CanvasTexture(c);
      return new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: tex,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
    }

    const glowL = makeGlow('#5ee8ff');
    glowL.scale.set(0.55, 0.55, 1);
    glowL.position.copy(eyeL.position);
    glowL.position.z += 0.02;
    robot.add(glowL);
    const glowR = makeGlow('#5ee8ff');
    glowR.scale.set(0.55, 0.55, 1);
    glowR.position.copy(eyeR.position);
    glowR.position.z += 0.02;
    robot.add(glowR);

    // Antenna
    const antennaStem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.45, 12),
      darkMat
    );
    antennaStem.position.set(0, 1, 0);
    robot.add(antennaStem);
    const antennaBall = new THREE.Mesh(
      new THREE.SphereGeometry(0.07, 20, 20),
      accentMat
    );
    antennaBall.position.set(0, 1.28, 0);
    robot.add(antennaBall);
    const antennaGlow = makeGlow('#c98bff');
    antennaGlow.scale.set(0.45, 0.45, 1);
    antennaGlow.position.copy(antennaBall.position);
    robot.add(antennaGlow);

    // Ears
    const earGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.12, 24);
    const earL = new THREE.Mesh(earGeo, darkMat);
    earL.rotation.z = Math.PI / 2;
    earL.position.set(-0.8, 0, 0);
    robot.add(earL);
    const earR = earL.clone();
    earR.position.x = 0.8;
    robot.add(earR);
    const earRingL = new THREE.Mesh(
      new THREE.TorusGeometry(0.19, 0.015, 12, 40),
      accentMat
    );
    earRingL.rotation.y = Math.PI / 2;
    earRingL.position.set(-0.86, 0, 0);
    robot.add(earRingL);
    const earRingR = earRingL.clone();
    earRingR.position.x = 0.86;
    robot.add(earRingR);

    // Jaw
    const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.15, 0.6), darkMat);
    jaw.position.set(0, -0.75, 0.15);
    robot.add(jaw);

    // Neck
    const neck = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.28, 0.35, 18),
      darkMat
    );
    neck.position.set(0, -1.05, 0);
    robot.add(neck);

    // Collar
    const collar = new THREE.Mesh(
      new THREE.TorusGeometry(0.42, 0.05, 14, 40),
      bodyMat
    );
    collar.rotation.x = Math.PI / 2;
    collar.position.set(0, -1.3, 0);
    robot.add(collar);

    // Core
    const core = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.18, 0.18),
      new THREE.MeshBasicMaterial({ color: 0x5ee8ff })
    );
    core.position.set(0, -1.55, 0);
    robot.add(core);
    const coreGlow = makeGlow('#5ee8ff');
    coreGlow.scale.set(0.9, 0.9, 1);
    coreGlow.position.copy(core.position);
    robot.add(coreGlow);

    // Rings
    const rings = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const g = new THREE.TorusGeometry(1.5 + i * 0.15, 0.006, 8, 120);
      const m = new THREE.MeshBasicMaterial({
        color: i === 0 ? 0x5ee8ff : i === 1 ? 0xc98bff : 0xffffff,
        transparent: true,
        opacity: 0.35,
      });
      const r = new THREE.Mesh(g, m);
      r.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.4;
      r.rotation.y = Math.random() * Math.PI;
      r.userData.sp = {
        x: (Math.random() - 0.5) * 0.004,
        y: (Math.random() - 0.5) * 0.005,
        z: (Math.random() - 0.5) * 0.003,
      };
      rings.add(r);
    }
    robot.add(rings);

    // Particles
    const pCount = 240;
    const pGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const r = 2 + Math.random() * 3;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(p) * Math.cos(t);
      pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      pos[i * 3 + 2] = r * Math.cos(p);
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({
        color: 0x8fdcff,
        size: 0.025,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    scene.add(particles);

    // Orbit wireframe
    const orbit = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.2, 1),
      new THREE.MeshBasicMaterial({
        color: 0x5580aa,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      })
    );
    scene.add(orbit);

    // Mouse parallax
    let tx = 0,
      ty = 0,
      px = 0,
      py = 0;
    const onMouseMove = (e: MouseEvent) => {
      const r = mount.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const onMouseLeave = () => {
      tx = 0;
      ty = 0;
    };
    mount.addEventListener('mousemove', onMouseMove);
    mount.addEventListener('mouseleave', onMouseLeave);

    const onResize = () => {
      const w2 = mount.clientWidth;
      const h2 = mount.clientHeight;
      camera.aspect = w2 / h2;
      camera.updateProjectionMatrix();
      renderer.setSize(w2, h2);
    };
    window.addEventListener('resize', onResize);

    // Blink
    let blinkT = 0;
    let blinking = false;
    let blinkPhase = 0;
    const updateBlink = (dt: number) => {
      blinkT += dt;
      if (!blinking && blinkT > 2.5 + Math.random() * 2) {
        blinking = true;
        blinkT = 0;
        blinkPhase = 0;
      }
      if (blinking) {
        blinkPhase += dt * 10;
        const s = blinkPhase < 1 ? 1 - blinkPhase : blinkPhase - 1;
        const sc = Math.max(0.1, Math.min(1, s));
        eyeL.scale.y = sc;
        eyeR.scale.y = sc;
        if (blinkPhase > 2) {
          blinking = false;
          blinkT = 0;
          eyeL.scale.y = 1;
          eyeR.scale.y = 1;
        }
      }
    };

    const clock = new THREE.Clock();
    let frameId = 0;
    const tick = () => {
      const dt = clock.getDelta();
      const t = clock.elapsedTime;

      px += (tx - px) * 0.05;
      py += (ty - py) * 0.05;
      robot.rotation.y = px * 0.6 + Math.sin(t * 0.4) * 0.1;
      robot.rotation.x = py * 0.3 + Math.sin(t * 0.5) * 0.04;
      robot.position.y = Math.sin(t * 0.8) * 0.08;

      rings.rotation.y += 0.003;
      rings.children.forEach((r) => {
        const sp = r.userData.sp as { x: number; y: number; z: number };
        r.rotation.x += sp.x;
        r.rotation.y += sp.y;
        r.rotation.z += sp.z;
      });

      orbit.rotation.y += 0.001;
      orbit.rotation.x += 0.0008;

      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0003;

      const pulse = 0.8 + Math.sin(t * 3) * 0.3;
      antennaBall.scale.set(pulse, pulse, pulse);
      antennaGlow.scale.set(0.45 * pulse, 0.45 * pulse, 1);

      const eyePulse = 0.85 + Math.sin(t * 2) * 0.15;
      glowL.scale.set(0.55 * eyePulse, 0.55 * eyePulse, 1);
      glowR.scale.set(0.55 * eyePulse, 0.55 * eyePulse, 1);

      const cp = 0.9 + Math.sin(t * 2.5) * 0.2;
      coreGlow.scale.set(0.9 * cp, 0.9 * cp, 1);

      updateBlink(dt);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      mount.removeEventListener('mousemove', onMouseMove);
      mount.removeEventListener('mouseleave', onMouseLeave);
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="hero-3d" ref={mountRef}>
      <div className="hero-3d-overlay">
        <span className="line"></span>MOUSE · DRAG · EXPLORE<span className="line"></span>
      </div>
    </div>
  );
};

export default ThreeScene;
