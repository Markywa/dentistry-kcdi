import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { ModalControllerService } from "../../services/modal/modal-controller.component";

class Button {
    constructor(public name: string, public isActive: boolean, public link: string[]) {}
  }
  
class ButtonFactory {
    static createButtons(buttonData: { name: string, isActive: boolean, link: string[] }[]): Button[] {
        return buttonData.map(data => new Button(data.name, data.isActive, data.link));
    }
}

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TopMenuComponent {
    constructor(private router: Router, private modalControllerService: ModalControllerService){}

    private buttonData = [
        { name: 'Главная', isActive: this.router.url.includes('main'), link: ['/main'] },
        { name: 'Услуги', isActive: this.router.url.includes('services'), link: ['/services'] },
        { name: 'Цены', isActive: this.router.url.includes('prices'), link: ['/prices'] },
        { name: 'Специалисты', isActive: this.router.url.includes('specialist'), link: ['/specialist'] },
        { name: 'Акции', isActive: this.router.url.includes('stock'), link: ['/stock'] },
        { name: 'Отзывы', isActive: this.router.url.includes('reviews'), link: ['/reviews'] },
        { name: 'Контакты', isActive: this.router.url.includes('contacts'), link: ['/contacts'] },
    ];

    changeSelected(item: Button): void {
        this.buttons.forEach((button) => button.isActive = false);
        item.isActive = true;
    }

    public buttons = ButtonFactory.createButtons(this.buttonData);

    public openCallbackModal(): void {
        this.modalControllerService.openModal()
    }
}