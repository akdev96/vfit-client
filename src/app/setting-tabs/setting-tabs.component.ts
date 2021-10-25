import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EngineComponent } from '../engine/engine.component';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


@Component({
  selector: 'app-setting-tabs',
  templateUrl: './setting-tabs.component.html',
  styleUrls: ['./setting-tabs.component.css']
})
export class SettingTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('rendererContainer') canvas: ElementRef<HTMLCanvasElement>;

  // 1
  changeTexture1(event: any) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(12, 622 / 516, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      //canvas: canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(622, 516);

    document.body.appendChild(renderer.domElement); //render content on page

    const loader = new GLTFLoader();

    let modelLoader = new THREE.TextureLoader().load('./assets/Textures/Shirt_Texture_01.png');
    loader.load('./assets/Models/Shirt01.glb', (gltf) => {
      let model = gltf.scene;
      model.traverse(function (node) {
        if (node instanceof THREE.Mesh) {
          node.material.map = modelLoader;
        }
      });
      //scene.add(model);
      scene.background = new THREE.Color(0xffffff);
      scene.add(gltf.scene);
      model.position.set(0, -1.35, 0);
      modelLoader.repeat.set(1, 1); //scaling texture
      modelLoader.needsUpdate = true;
    });

    camera.position.z = 4;

    const controls = new OrbitControls(camera, renderer.domElement);
    const pointLight = new THREE.PointLight(0xffffff)
    const pointLight2 = new THREE.PointLight(0xffffff)
    pointLight.position.set(25, 25, 25)
    pointLight2.position.set(-25, 25, -35)

    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(pointLight, pointLight2, ambientLight)

    //const lightHelper = new THREE.PointLightHelper(pointLight);
    //const gridHelper = new THREE.GridHelper(200, 50)
    //scene.add(lightHelper, gridHelper)

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      controls.update();
    }
    animate();

  }

  // 2
  changeTexture2(event: any) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(12, 622 / 516, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      //canvas: canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(622, 516);

    document.body.appendChild(renderer.domElement); //render content on page

    const loader = new GLTFLoader();

    let modelLoader = new THREE.TextureLoader().load('./assets/Textures/01231010301.jpg');
    loader.load('./assets/Models/Shirt01.glb', (gltf) => {
      let model = gltf.scene;
      model.traverse(function (node) {
        if (node instanceof THREE.Mesh) {
          node.material.map = modelLoader;
        }
      });
      //scene.add(model);
      scene.background = new THREE.Color(0xffffff);
      scene.add(gltf.scene);
      model.position.set(0, -1.35, 0);
      modelLoader.repeat.set(1, 1); //scaling texture
      modelLoader.needsUpdate = true;
    });

    camera.position.z = 4;

    const controls = new OrbitControls(camera, renderer.domElement);
    const pointLight = new THREE.PointLight(0xffffff)
    const pointLight2 = new THREE.PointLight(0xffffff)
    pointLight.position.set(25, 25, 25)
    pointLight2.position.set(-25, 25, -35)

    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(pointLight, pointLight2, ambientLight)

    //const lightHelper = new THREE.PointLightHelper(pointLight);
    //const gridHelper = new THREE.GridHelper(200, 50)
    //scene.add(lightHelper, gridHelper)

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      controls.update();
    }
    animate();

  }

  // 3
  changeTexture3(event: any) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(12, 622 / 516, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      //canvas: canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(622, 516);

    document.body.appendChild(renderer.domElement); //render content on page

    const loader = new GLTFLoader();

    let modelLoader = new THREE.TextureLoader().load('./assets/Textures/01231010303.jpg');
    loader.load('./assets/Models/Shirt01.glb', (gltf) => {
      let model = gltf.scene;
      model.traverse(function (node) {
        if (node instanceof THREE.Mesh) {
          node.material.map = modelLoader;
        }
      });
      //scene.add(model);
      scene.background = new THREE.Color(0xffffff);
      scene.add(gltf.scene);
      model.position.set(0, -1.35, 0);
      modelLoader.repeat.set(1, 1); //scaling texture
      modelLoader.needsUpdate = true;
    });

    camera.position.z = 4;

    const controls = new OrbitControls(camera, renderer.domElement);
    const pointLight = new THREE.PointLight(0xffffff)
    const pointLight2 = new THREE.PointLight(0xffffff)
    pointLight.position.set(25, 25, 25)
    pointLight2.position.set(-25, 25, -35)

    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(pointLight, pointLight2, ambientLight)

    //const lightHelper = new THREE.PointLightHelper(pointLight);
    //const gridHelper = new THREE.GridHelper(200, 50)
    //scene.add(lightHelper, gridHelper)

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      controls.update();
    }
    animate();

  }

  // 4
  changeTexture4(event: any) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(12, 622 / 516, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      //canvas: canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(622, 516);

    document.body.appendChild(renderer.domElement); //render content on page

    const loader = new GLTFLoader();

    let modelLoader = new THREE.TextureLoader().load('./assets/Textures/01231110301.jpg');
    loader.load('./assets/Models/Shirt01.glb', (gltf) => {
      let model = gltf.scene;
      model.traverse(function (node) {
        if (node instanceof THREE.Mesh) {
          node.material.map = modelLoader;
        }
      });
      //scene.add(model);
      scene.background = new THREE.Color(0xffffff);
      scene.add(gltf.scene);
      model.position.set(0, -1.35, 0);
      modelLoader.repeat.set(1, 1); //scaling texture
      modelLoader.needsUpdate = true;
    });

    camera.position.z = 4;

    const controls = new OrbitControls(camera, renderer.domElement);
    const pointLight = new THREE.PointLight(0xffffff)
    const pointLight2 = new THREE.PointLight(0xffffff)
    pointLight.position.set(25, 25, 25)
    pointLight2.position.set(-25, 25, -35)

    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(pointLight, pointLight2, ambientLight)

    //const lightHelper = new THREE.PointLightHelper(pointLight);
    //const gridHelper = new THREE.GridHelper(200, 50)
    //scene.add(lightHelper, gridHelper)

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      controls.update();
    }
    animate();

  }

  // 5
  changeTexture5(event: any) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(12, 622 / 516, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      //canvas: canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(622, 516);

    document.body.appendChild(renderer.domElement); //render content on page

    const loader = new GLTFLoader();

    let modelLoader = new THREE.TextureLoader().load('./assets/Textures/01232110300.jpg');
    loader.load('./assets/Models/Shirt01.glb', (gltf) => {
      let model = gltf.scene;
      model.traverse(function (node) {
        if (node instanceof THREE.Mesh) {
          node.material.map = modelLoader;
        }
      });
      //scene.add(model);
      scene.background = new THREE.Color(0xffffff);
      scene.add(gltf.scene);
      model.position.set(0, -1.35, 0);
      modelLoader.repeat.set(1, 1); //scaling texture
      modelLoader.needsUpdate = true;
    });

    camera.position.z = 4;

    const controls = new OrbitControls(camera, renderer.domElement);
    const pointLight = new THREE.PointLight(0xffffff)
    const pointLight2 = new THREE.PointLight(0xffffff)
    pointLight.position.set(25, 25, 25)
    pointLight2.position.set(-25, 25, -35)

    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(pointLight, pointLight2, ambientLight)

    //const lightHelper = new THREE.PointLightHelper(pointLight);
    //const gridHelper = new THREE.GridHelper(200, 50)
    //scene.add(lightHelper, gridHelper)

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      controls.update();
    }
    animate();

  }

  // 6
  changeTexture6(event: any) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(12, 622 / 516, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      //canvas: canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(622, 516);

    document.body.appendChild(renderer.domElement); //render content on page

    const loader = new GLTFLoader();

    let modelLoader = new THREE.TextureLoader().load('./assets/Textures/01232110300_hd.jpg');
    loader.load('./assets/Models/Shirt01.glb', (gltf) => {
      let model = gltf.scene;
      model.traverse(function (node) {
        if (node instanceof THREE.Mesh) {
          node.material.map = modelLoader;
        }
      });
      //scene.add(model);
      scene.background = new THREE.Color(0xffffff);
      scene.add(gltf.scene);
      model.position.set(0, -1.35, 0);
      modelLoader.repeat.set(1, 1); //scaling texture
      modelLoader.needsUpdate = true;
    });

    camera.position.z = 4;

    const controls = new OrbitControls(camera, renderer.domElement);
    const pointLight = new THREE.PointLight(0xffffff)
    const pointLight2 = new THREE.PointLight(0xffffff)
    pointLight.position.set(25, 25, 25)
    pointLight2.position.set(-25, 25, -35)

    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(pointLight, pointLight2, ambientLight)

    //const lightHelper = new THREE.PointLightHelper(pointLight);
    //const gridHelper = new THREE.GridHelper(200, 50)
    //scene.add(lightHelper, gridHelper)

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      controls.update();
    }
    animate();

  }

  // 7
  changeTexture7(event: any) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(12, 622 / 516, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      //canvas: canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(622, 516);

    document.body.appendChild(renderer.domElement); //render content on page

    const loader = new GLTFLoader();

    let modelLoader = new THREE.TextureLoader().load('./assets/Textures/01233010301.jpg');
    loader.load('./assets/Models/Shirt01.glb', (gltf) => {
      let model = gltf.scene;
      model.traverse(function (node) {
        if (node instanceof THREE.Mesh) {
          node.material.map = modelLoader;
        }
      });
      //scene.add(model);
      scene.background = new THREE.Color(0xffffff);
      scene.add(gltf.scene);
      model.position.set(0, -1.35, 0);
      modelLoader.repeat.set(1, 1); //scaling texture
      modelLoader.needsUpdate = true;
    });

    camera.position.z = 4;

    const controls = new OrbitControls(camera, renderer.domElement);
    const pointLight = new THREE.PointLight(0xffffff)
    const pointLight2 = new THREE.PointLight(0xffffff)
    pointLight.position.set(25, 25, 25)
    pointLight2.position.set(-25, 25, -35)

    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(pointLight, pointLight2, ambientLight)

    //const lightHelper = new THREE.PointLightHelper(pointLight);
    //const gridHelper = new THREE.GridHelper(200, 50)
    //scene.add(lightHelper, gridHelper)

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      controls.update();
    }
    animate();

  }
}