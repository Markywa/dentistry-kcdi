import { ChangeDetectionStrategy, Component } from "@angular/core";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import * as proj  from 'ol/proj'
import { Overlay } from 'ol'
import { defaults as defaultInteractions } from 'ol/interaction';
import { Icon, Style } from 'ol/style';
import { Vector as VectorSource } from 'ol/source';
import  Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import { MapService } from "../../services/map-service/map-service.service";
import VectorLayer from "ol/layer/Vector";


@Component({
    selector: 'app-contact-map',
    templateUrl: './contact-map.component.html',
    styleUrls: ['./contact-map.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default, 
})

export class ContactMapComponent {
    constructor(private mapService: MapService){}
    public map = new Map();
    public zoomLevel: number = 17;
    public maxZoomLevel: number = 18;
    public minZoomLevel: number = 14;

    ngAfterViewInit(): void {
      this.initializeMap();
    }
  
    public initializeMap(): void {
      proj.useGeographic() 
      this.map = new Map({
          target: 'map',
          layers: [
            new TileLayer({
              source: new XYZ({
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
              })
            })
          ],
          view: new View({
            center: [92.83690366, 56.00978477],
            zoom: this.zoomLevel
          }),
          controls: [],
          overlays: [
            new Overlay({
              element: document.getElementById('popup') as HTMLElement, // Ссылка на DOM-элемент для попапа
              positioning: 'bottom-center', // Позиционирование попапа
              stopEvent: false // Позволяет событиям проходить через попап
            })
          ],
          interactions: defaultInteractions({
            dragPan: false,  // Отключаем панорамирование
            mouseWheelZoom: false // Отключаем зуммирование колесом мыши
          }).extend([]) // Можно добавить любые другие нужные взаимодействия
        });      

        const marker = new Feature({
          geometry: new Point([92.83890366, 56.00982877])  // Координаты маркера
        });
    
        // Опционально: устанавливаем стиль маркера
        const markerStyle = new Style({
          image: new Icon({
            anchor: [0.5, 1],
              src: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<svg height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 293.334 293.334" xml:space="preserve">
                <g>
                  <g>
                    <path style="fill: #B8A186;" d="M146.667,0C94.903,0,52.946,41.957,52.946,93.721c0,22.322,7.849,42.789,20.891,58.878
                      c4.204,5.178,11.237,13.331,14.903,18.906c21.109,32.069,48.19,78.643,56.082,116.864c1.354,6.527,2.986,6.641,4.743,0.212
                      c5.629-20.609,20.228-65.639,50.377-112.757c3.595-5.619,10.884-13.483,15.409-18.379c6.554-7.098,12.009-15.224,16.154-24.084
                      c5.651-12.086,8.882-25.466,8.882-39.629C240.387,41.962,198.43,0,146.667,0z M146.667,144.358
                      c-28.892,0-52.313-23.421-52.313-52.313c0-28.887,23.421-52.307,52.313-52.307s52.313,23.421,52.313,52.307
                      C198.98,120.938,175.559,144.358,146.667,144.358z"/>
                    <circle style="fill:#B8A186;" cx="146.667" cy="90.196" r="21.756"/>
                </g>
              </g>
              </svg>`),  // Путь к иконке маркера
            width: 80,
          })
        });
        marker.setStyle(markerStyle);
    
        // Создаем векторный слой и добавляем маркер на карту
        const vectorLayer = new VectorLayer({
          source: new VectorSource({
            features: [marker]
          })
        });
        this.map.addLayer(vectorLayer);
        this.mapService.setMap(this.map);
    }

    onZoomChange(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.zoomLevel = parseFloat(input.value);
        this.mapService.setZoom(this.zoomLevel);
      }

    zoomIn(): void {
        this.zoomLevel = Math.min(this.zoomLevel + 0.5, this.maxZoomLevel);
        this.mapService.setZoom(this.zoomLevel);
      }
    
      zoomOut(): void {
        this.zoomLevel = Math.max(this.zoomLevel - 0.5, this.minZoomLevel);
        this.mapService.setZoom(this.zoomLevel);
      }
}