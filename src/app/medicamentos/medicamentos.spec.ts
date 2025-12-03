import { TestBed } from "@angular/core/testing";
import { Medicamentos } from "./medicamentos";

describe("Componente Medicamentos", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Medicamentos],
    }).compileComponents();
  });

  it("debe crear el componente Medicamentos", () => {
    const fixture = TestBed.createComponent(Medicamentos);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it("debe crear las tarjetas de información de medicamentos", () => {
    const fixture = TestBed.createComponent(Medicamentos);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("mat-card")?.textContent).toBeDefined();
  });
});
