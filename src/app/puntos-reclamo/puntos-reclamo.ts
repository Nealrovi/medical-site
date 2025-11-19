import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';

interface Ciudad {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-puntos-reclamo',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, CommonModule, MatListModule],
  templateUrl: 'puntos-reclamo.html',
  styleUrls: [`puntos-reclamo.css`]
})
export class PuntosReclamo {
ciudades: Ciudad[] = [
    {value: 'villavicencio', viewValue: 'Villavicencio'},
    {value: 'bogota', viewValue: 'Bogota'},
    {value: 'neiva', viewValue: 'Neiva'},
  ];

  puntos: String[] = [
    "Cruz verde",
    "Colsubsidio",
    "Cafam"
  ]

  requisitos: String[] = [
    "1. Orden médica",
    "2. Fotocopia documento del paciente",
    "3. Fotocopia documento de quien recibe"
  ]


}
