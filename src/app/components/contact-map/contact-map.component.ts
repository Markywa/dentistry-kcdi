import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
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
import { ModalControllerService, ModalID } from "../../services/modal/modal-controller.component";
import { ContactsEntity, ContactsService } from "../../services/contacts/contacts.service";


@Component({
    selector: 'app-contact-map',
    templateUrl: './contact-map.component.html',
    styleUrls: ['./contact-map.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default, 
})

export class ContactMapComponent implements AfterViewInit, OnInit {
    constructor(
      private mapService: MapService, 
      private modalControllerService: ModalControllerService,
      private contactsService: ContactsService
    ){}
    public map = new Map();
    public zoomLevel: number = 17;
    public maxZoomLevel: number = 18;
    public minZoomLevel: number = 14;
    public contacts!: ContactsEntity; 

    ngOnInit(): void {
      this.contactsService.get().subscribe((data) => this.contacts = data)
    }

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
          geometry: new Point([92.83890366, 56.00980877])  // Координаты маркера
        });
    
        // Опционально: устанавливаем стиль маркера
        const markerStyle = new Style({
          image: new Icon({
            anchor: [0.5, 1],
            src: 'assets/icons/marker.svg',  // Путь к иконке маркера
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

      public openSignUpConsultation(): void {
        this.modalControllerService.openModal(ModalID.consultation)
    }
}