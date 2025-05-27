import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {

  public sendVacanciesForm(form: any): void{
    emailjs
    .send('service_1ov9m3e', 'template_jeeonjh', form, {
      publicKey: 'jZ3o91fiEW9rcaGfB',
      blockList: {
        watchVariable: 'Office@kcdi24.ru',
      },
      limitRate: {
        throttle: 0, 
      },
    })
    .then(
      (response) => {
        // console.log('SUCCESS!', response.status, response.text);
      },
      (err) => {
        // console.log('FAILED...', err);
      },
    );
  }
}
