// import { ChangeDetectionStrategy, Component } from "@angular/core";

// class Service {
//     constructor(public name: string, public link: string, public isDouble: boolean, img: string) {}
//   }
  
// class ServiceFactory {
//     static createServices(buttonData: { name: string, link: string, isDouble: boolean, img: string }[]): Service[] {
//         return buttonData.map(data => new Service(data.name, data.link, data.isDouble, data.img));
//     }
// }
// @Component({
//     selector: 'app-services-card',
//     templateUrl: './services-card.component.html',
//     styleUrls: ['./services-card.component.scss'],
//     changeDetection: ChangeDetectionStrategy.OnPush, 
// })

// export class ServicesCardComponent{
//     private serviceData = [
//         { name: 'Услуга 1', isDouble: false, link: '/section1', img: 'assets/images/service-1.png' },
//         { name: 'Услуга 2', isDouble: false, link: '/section2', img: 'assets/images/service-2.png' },
//         { name: 'Услуга 3', isDouble: false, link: '/section2', img: 'assets/images/service-3.png' },
//         { name: 'Услуга 4', isDouble: false, link: '/section2', img: 'assets/images/service-4.png'},
//         { name: 'Услуга 5', isDouble: true, link: '/section2', img: 'assets/images/service-5.png' },
//     ];

//     public services = ServiceFactory.createServices(this.serviceData);
// }