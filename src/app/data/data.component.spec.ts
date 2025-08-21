import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});






// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { MobileComponent } from './mobile.component';

// describe('MobileComponent', () => {
//   let component: MobileComponent;
//   let fixture: ComponentFixture<MobileComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ MobileComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MobileComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
