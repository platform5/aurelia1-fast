import { inject, BindingEngine, bindable} from 'aurelia-framework';
import { Three } from './resources';

// Potree
import { AmbientLight, BoxGeometry,  Mesh, MeshBasicMaterial, PerspectiveCamera, Raycaster, Scene, SphereGeometry, Vector2, Vector3, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { PointCloudOctree, Potree } from 'potree-core';


@inject(Element, BindingEngine)
export class App {

  public three: Three;
  constructor(private element: Element, private bindingEngine: BindingEngine) {
  }

  public attached(): void {

      // three.js
      
      // this.scene.add(new AmbientLight(0xffffff));
      
    }
    
    private clic(): void {
      
      console.log('Goooo');
      
        const geometry = new BoxGeometry(35, 0.1, 35);
        const material = new MeshBasicMaterial({color: 0x663300});
        const cube = new Mesh(geometry, material);
        cube.position.x = 15;
        cube.position.y = -0.05;
      this.three.scene.scene.add(cube);
  }

}
