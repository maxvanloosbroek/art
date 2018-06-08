import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSelfComponent } from './music-self.component';

describe('MusicSelfComponent', () => {
  let component: MusicSelfComponent;
  let fixture: ComponentFixture<MusicSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
