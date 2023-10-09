import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBottomtabsComponent } from './map-bottomtabs.component';

describe('MapBottomtabsComponent', () => {
  let component: MapBottomtabsComponent;
  let fixture: ComponentFixture<MapBottomtabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapBottomtabsComponent]
    });
    fixture = TestBed.createComponent(MapBottomtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
