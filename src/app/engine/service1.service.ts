import * as THREE from 'three';
import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Injectable({ providedIn: 'root' })
export class EngineService implements OnDestroy {
    private canvas: HTMLCanvasElement;
    private renderer: THREE.WebGLRenderer;
    private camera: THREE.PerspectiveCamera;
    private scene: THREE.Scene;
    private light: THREE.AmbientLight;
    private frameId: number = 0;
    private loader: THREE.GLTFLoader;

    public constructor(private ngZone: NgZone) {
    }

    public ngOnDestroy(): void {
        if (this.frameId != null) {
            cancelAnimationFrame(this.frameId);
        }
    }

    public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
        // The first step is to get the reference of the canvas element from our HTML document
        this.canvas = canvas.nativeElement;
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,    // transparent background
            antialias: true // smooth edges
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        // create the scene
        this.scene = new THREE.Scene();

        /*this.camera = new THREE.PerspectiveCamera(
          75, window.innerWidth / window.innerHeight, 0.1, 1000
        );
        */
        this.camera = new THREE.PerspectiveCamera(
            75, 585 / 488, 0.1, 1000
        );
        this.camera.position.z = 5;
        this.scene.add(this.camera);

        // soft white light
        this.light = new THREE.AmbientLight(0x404040);
        this.light.position.z = 10;
        this.scene.add(this.light);

        //const geometry = new THREE.BoxGeometry(1, 1, 1);
        //const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        //this.cube = new THREE.Mesh(geometry, material);

        //const scene = new THREE.Scene();
        //const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        //renderer.setSize(window.innerWidth, window.innerHeight);
        //document.body.appendChild(renderer.domElement);

        this.loader = new GLTFLoader();
        loader.load('/assets/Models/Shirt01.glb', function (gltf) {
            this.scene.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });

        //this.scene.add(this.loader);

    }

    public animate(): void {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
            if (document.readyState !== 'loading') {
                this.render();
            } else {
                window.addEventListener('DOMContentLoaded', () => {
                    this.render();
                });
            }

            window.addEventListener('resize', () => {
                this.resize();
            });
        });
    }

    public render(): void {
        this.frameId = requestAnimationFrame(() => {
            this.render();
        });

        this.loader.rotation.x += 0.01;
        this.loader.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }

    public resize(): void {
        const width = 585;
        const height = 488;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
    }
}