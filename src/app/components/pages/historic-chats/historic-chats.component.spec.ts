import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricChatsComponent } from './historic-chats.component';

describe('HistoricChatsComponent', () => {
  let component: HistoricChatsComponent;
  let fixture: ComponentFixture<HistoricChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricChatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
