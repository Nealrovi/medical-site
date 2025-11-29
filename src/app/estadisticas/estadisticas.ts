import { Component } from "@angular/core";
import { CanvasJSAngularChartsModule } from "@canvasjs/angular-charts";

@Component({
  selector: "app-estadisticas",
  imports: [CanvasJSAngularChartsModule],
  templateUrl: "estadisticas.html",
  styleUrls: [`estadisticas.css`],
})
export class Estadisticas {
  chartOptions = {
    animationEnabled: true,
    title: {
      text: "Inventario por medicamento",
    },
    data: [
      {
        type: "doughnut",
        yValueFormatString: "#,###.##'%'",
        indexLabel: "{name}",
        dataPoints: [
          { y: 28, name: "Acetaminofem niños" },
          { y: 10, name: "Acetato de aluminio" },
          { y: 20, name: "Aciclovir" },
          { y: 15, name: "Amoxicilina" },
          { y: 23, name: "Dolex gripa" },
          { y: 17, name: "Esomeprazol" },
        ],
      },
    ],
  };
}
