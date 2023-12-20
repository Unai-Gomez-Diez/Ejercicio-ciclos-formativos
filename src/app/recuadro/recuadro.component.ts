import { Component, Input } from '@angular/core';
import { CicloformativoService } from '../cicloformativo.service';

@Component({
  selector: 'app-recuadro',
  templateUrl: './recuadro.component.html',
  styleUrls: ['./recuadro.component.css']
})
export class RecuadroComponent {
  constructor(private cicloFormativoService: CicloformativoService) { }
  @Input() titulo: String = "";
  @Input() cabecera: any[] = [];
  @Input() datos: any[] = []

  onClickConsultar(): void {
    this.cicloFormativoService.showAlert(this.titulo);
  }
}
