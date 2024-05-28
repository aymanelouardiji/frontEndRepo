import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTasksComponent } from './upload-tasks.component';

describe('UploadTasksComponent', () => {
  let component: UploadTasksComponent;
  let fixture: ComponentFixture<UploadTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadTasksComponent]
    });
    fixture = TestBed.createComponent(UploadTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
