import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CicloformativoService {

  showAlert(titulo: String): void {
    alert(titulo)
  }
}
