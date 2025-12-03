import { TestBed } from "@angular/core/testing";
import { Contactenos } from "./contactenos";

describe("Componente Contactenos", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactenos],
    }).compileComponents();
  });

  it("debe crear el componente Contactenos", () => {
    const fixture = TestBed.createComponent(Contactenos);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it("debe renderizar los datos de contacto", () => {
    const fixture = TestBed.createComponent(Contactenos);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("li")?.textContent).toBeDefined();
  });
});
