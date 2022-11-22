import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiOrganizacionSocialComponent } from './mi-organizacion-social.component';

describe('MiOrganizacionSocialComponent', () => {
  let component: MiOrganizacionSocialComponent;
  let fixture: ComponentFixture<MiOrganizacionSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiOrganizacionSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiOrganizacionSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
