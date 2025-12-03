import { TestBed } from "@angular/core/testing";
import { PuntosReclamo } from "./puntos-reclamo";

describe("Busqueda", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuntosReclamo],
    }).compileComponents();
  });

  it("debe crear el componente PuntosReclamo", () => {
    const fixture = TestBed.createComponent(PuntosReclamo);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it("debe renderizar el listado de puntos de reclamo", () => {
    const fixture = TestBed.createComponent(PuntosReclamo);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("mat-list")?.textContent).toBeDefined();
  });
});
