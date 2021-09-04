import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {

  constructor() {
  }
  //@ViewChild('rendererContainer', null) rendererCanvas: ElementRef;
  ngOnInit(): void {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 580 / 480, 0.1, 1000);
    //const rendererContainer: HTMLCanvasElement;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    renderer.setSize(580, 480);
    //this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    //document.getElementByClass('engine-wrapper').appendChild(renderer.domElement)
    document.body.appendChild(renderer.domElement);
    //rendererContainer.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load('assets/Models/Shirt01.glb', function (gltf) {
      scene.add(gltf.scene);
    }, undefined, function (error) {
      console.error(error);
    });

    camera.position.z = 3;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }

}
