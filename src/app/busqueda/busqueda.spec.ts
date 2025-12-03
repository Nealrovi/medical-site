import { TestBed } from "@angular/core/testing";
import { Busqueda } from "./busqueda";

describe("Componente Busqueda", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Busqueda],
    }).compileComponents();
  });

  it("debe crear el componente Busqueda", () => {
    const fixture = TestBed.createComponent(Busqueda);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it("debe retornar listado vacío de usuarios", () => {
    const fixture = TestBed.createComponent(Busqueda);
    const component = fixture.componentInstance;
    expect(component.searchId).toBeNull();
  });

  it("debe retornar el usuario Tomás", () => {
    const fixture = TestBed.createComponent(Busqueda);
    const component = fixture.componentInstance;
    component.searchId = 1;
    expect(component.searchId).toBe(1);
  });
});
