import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { Medicamentos } from "./medicamentos/medicamentos";
import { PuntosReclamo } from "./puntos-reclamo/puntos-reclamo";
import { Estadisticas } from "./estadisticas/estadisticas";
import { Contactenos } from "./contactenos/contactenos";
import { Busqueda } from "./busqueda/busqueda";

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'busqueda',
    component: Busqueda
  },
  {
    path: 'medicamentos',
    component: Medicamentos
  },
  {
    path: 'puntos-reclamo',
    component: PuntosReclamo
  },
  {
    path: 'estadisticas',
    component: Estadisticas
  },
  {
    path: 'contactenos',
    component: Contactenos
  }
]