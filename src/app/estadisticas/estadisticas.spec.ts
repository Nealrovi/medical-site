import { TestBed } from "@angular/core/testing";
import { Estadisticas } from "./estadisticas";

describe("Componente Estadisticas", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estadisticas],
    }).compileComponents();
  });

  it("debe crear el componente Estadisticas", () => {
    const fixture = TestBed.createComponent(Estadisticas);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it("debe crear la gráfica de Estadísticas", () => {
    const fixture = TestBed.createComponent(Estadisticas);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("canvasjs-chart")?.textContent).toBeDefined();
  });
});
