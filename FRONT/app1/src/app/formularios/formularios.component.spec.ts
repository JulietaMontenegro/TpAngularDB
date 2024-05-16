import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosComponent } from './formularios.component';//QUE GRANDE CIRRI 
//TORETE 


describe('FormulariosComponent', () => {
  let component: FormulariosComponent;
  let fixture: ComponentFixture<FormulariosComponent>;
//QUE GRANDE CIRRI 
//TORETE 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariosComponent]
    })
    .compileComponents();
    //QUE GRANDE CIRRI 
//TORETE 

    fixture = TestBed.createComponent(FormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });//QUE GRANDE CIRRI 
  //TORETE 
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
