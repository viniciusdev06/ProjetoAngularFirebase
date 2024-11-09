import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsportesPage } from './esportes.page';

describe('EsportesPage', () => {
  let component: EsportesPage;
  let fixture: ComponentFixture<EsportesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EsportesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
