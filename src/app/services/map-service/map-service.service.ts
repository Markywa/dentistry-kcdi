import { Injectable } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';

@Injectable({
  providedIn: 'root'
})
export class MapService {
    private readonly defaultZoom: number = 17;
  private map!: Map;

  setMap(map: Map): void {
    this.map = map;
  }
  
  setZoom(zoomLevel: number): void {
    const view = this.map.getView();
    view.setZoom(zoomLevel);
  }
//   setZoom(zoomLevel: number): void {
//     const view = this.map.getView();
//     const zoom = view.getZoom();
//     view.setZoom(this.defaultZoom + zoomLevel);
//   }

//   zoomIn(): void {
//     const view = this.map.getView();
//     const zoom = view.getZoom();
//     view.setZoom(zoom! + 0.1);
//   }

//   zoomOut(): void {
//     const view = this.map.getView();
//     const zoom = view.getZoom();
//     view.setZoom(zoom! - 0.1);
//   }
}