import { Component } from '@angular/core';

@Component({
  selector: 'app-ko-fi',
  imports: [],
  templateUrl: './ko-fi.component.html',
  styleUrl: './ko-fi.component.css'
})
export class KoFiComponent {
  redirigirKoFi() {
    window.open('https://ko-fi.com/S6S619M4ED', '_blank');
  }
}
