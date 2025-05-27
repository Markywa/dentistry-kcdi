import { ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { EmailSenderService } from '../../services/email-sender/email-sender.service';

@Component({
  selector: 'app-vacancies-form',
  templateUrl: './vacancies-form.component.html',
  styleUrl: './vacancies-form.component.scss'
})
export class VacanciesFormComponent {
  constructor(private emailSenderService: EmailSenderService, private renderer: Renderer2, private cdr: ChangeDetectorRef){}
  public isSend = false;
  @ViewChild('drawer') drawer!: ElementRef;

  public previewImage(event: any) {
    const imagePreview = document.getElementById('image-preview');
    imagePreview!.innerHTML = '';

    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target!.result as string;

            img.onload = () => {
                // Создаем canvas для сжатия изображения
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Устанавливаем новые размеры
                const MAX_WIDTH = 256; // Максимальная ширина
                const MAX_HEIGHT = 256; // Максимальная высота
                let width = img.width;
                let height = img.height;

                // Сохраняем пропорции
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }

                canvas.width = width;
                canvas.height = height;

                ctx!.drawImage(img, 0, 0, width, height);

                canvas.toBlob((blob) => {
                    if (blob) {
                        const compressedImgUrl = URL.createObjectURL(blob);
                        const compressedImg = new Image();
                        compressedImg.src = compressedImgUrl;
                        compressedImg.style.maxWidth = '300px';
                        compressedImg.style.maxHeight = '300px';
                        compressedImg.style.marginRight = '10px';
                        compressedImg.id = 'sender-img';

                        const removeButton = document.createElement('button');
                        removeButton.textContent = 'Удалить';
                        removeButton.onclick = () => {
                            imagePreview!.innerHTML = '';
                            (document.getElementById('image-upload')! as HTMLInputElement).value = ''; 
                        };

                        imagePreview!.appendChild(compressedImg);
                        imagePreview!.appendChild(removeButton);
                    }
                }, 'image/jpeg', 0.7); 
            };
        };
        reader.readAsDataURL(file);
    }
}

submit(form: any) {
  const imgElement = document.getElementById('sender-img') as HTMLImageElement;
  let imgSrc = '';
  if (imgElement) {
      imgSrc = imgElement.src;
  } 
  
  if (form.valid) {
    const formData = {
      title: 'Отклик на вакансию',
      ...form.value,
    };

    this.isSend = true;
        if(imgSrc){
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
        
            const img = new Image();
            img.src = imgSrc;
        
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height; 
        
                ctx!.drawImage(img, 0, 0);
        
                const dataURL = canvas.toDataURL('image/jpeg', 0.7); 
        
                formData.img = `<img src="${dataURL}"/>`;

                this.emailSenderService.sendVacanciesForm(formData);
            };
        } else {
            this.emailSenderService.sendVacanciesForm(formData);    
        }        
        this.renderer.addClass(this.drawer.nativeElement, 'up');
        setTimeout(() => {
            this.renderer.addClass(this.drawer.nativeElement, 'down');
            this.renderer.removeClass(this.drawer.nativeElement, 'up');
            form.resetForm();
            setTimeout(() => {
                this.isSend = false;
                this.renderer.removeClass(this.drawer.nativeElement, 'down');
                this.cdr.markForCheck();
            }, 500);
        }, 3000);
        
        
    }
}
}
