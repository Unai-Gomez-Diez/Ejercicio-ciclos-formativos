import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  titulo1 = "ALUMNOS DAM";
  titulo2 = "ALUMNOS DAW";
  titulo3 = "ALUMNOS ASIR";
  titulo4 = "ALUMNOS ...";
  misCabeceras: string[] = ["Nº", "Alumno"];
  misDatos: any[] = [
    {
      "Nº": "1",
      "Alumno": "Daniel Andela López"
    },
    {
      "Nº": "2",
      "Alumno": "José María Dorado Ruiz"
    },
    {
      "Nº": "3",
      "Alumno": "Natalia Cano López"
    }
  ];
  misDatos2: any[] = [
    {
      "Nº": "1",
      "Alumno": "María Muñoz López"
    },
    {
      "Nº": "2",
      "Alumno": "José Rodríguez Martín"
    },
    {
      "Nº": "3",
      "Alumno": "Lucía Sánchez Arribas"
    }
  ];
  misDatos3: any[] = [
    {
      "Nº": "1",
      "Alumno": "Alejandro Galán López"
    },
    {
      "Nº": "2",
      "Alumno": "José María Dorado Ruiz"
    },
    {
      "Nº": "3",
      "Alumno": "Arturo Carrasco Pérez"
    }
  ];
  misDatos4: any[] = [
    {
      "Nº": "1",
      "Alumno": "Silvia Muñoz López"
    },
    {
      "Nº": "2",
      "Alumno": "María Martínez Ruiz"
    },
    {
      "Nº": "3",
      "Alumno": "Jorge Nieto López"
    }
  ];
}
