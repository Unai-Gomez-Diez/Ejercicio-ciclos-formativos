import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recuadro',
  templateUrl: './recuadro.component.html',
  styleUrls: ['./recuadro.component.css']
})
export class RecuadroComponent {
  @Input() titulo: String = "";
  @Input() cabecera: any[] = [];
  @Input() datos: any[] = []

}
