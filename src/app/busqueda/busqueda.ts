import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";

interface TipoDocumento {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-busqueda",
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatListModule,
  ],
  templateUrl: "./busqueda.html",
  styleUrls: ["./busqueda.css"],
})
export class Busqueda {
  tiposDocumento: TipoDocumento[] = [
    { value: "cedula", viewValue: "Cédula de Ciudadanía" },
    { value: "cedulaExtranjeria", viewValue: "Cédula de Extranjería" },
    { value: "tarjetaIdentidad", viewValue: "Tarjeta de Identidad" },
  ];

  originalData: { id: number; value: string }[] = [
    { id: 1, value: "Tomás" },
    { id: 2, value: "Valeria" },
    { id: 3, value: "Carlos" },
    { id: 3, value: "Roberto" },
  ];

  filteredData: { id: number; value: string }[] = [...this.originalData];

  searchId: number | null = null;

  searchData(): void {
    if (this.searchId === null) {
      // If the input is empty, show all data
      this.filteredData = [...this.originalData];
      return;
    }

    this.filteredData = this.originalData.filter((item) => {
      // Filter logic: check if the numeric ID matches the search input
      return item.id === this.searchId;
    });
  }

  updateSearchId(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchId = value ? Number(value) : null;
  }
}
