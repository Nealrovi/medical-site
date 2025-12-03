import { TestBed } from "@angular/core/testing";
import { Home } from "./home";

describe("Componente Home", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
    }).compileComponents();
  });

  it("debe crear el componente Home", () => {
    const fixture = TestBed.createComponent(Home);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it("debe renderizar la información requerida para reclamar medicamentos", () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("li")?.textContent).toBeDefined();
  });
});
