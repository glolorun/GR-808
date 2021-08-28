import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfaceElementComponent } from './interface-element.component';

describe('InterfaceElementComponent', () => {
  let component: InterfaceElementComponent;
  let fixture: ComponentFixture<InterfaceElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
