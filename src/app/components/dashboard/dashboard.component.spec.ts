import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { GamesService } from 'src/app/services/games-service.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from 'src/app/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, FilterPipe ],
      imports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [GamesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have atleast one Discussion', fakeAsync(()=>{
  //   fixture.detectChanges();
  //   component.ngOnInit();
  //   fixture.detectChanges();
  //   tick(2000);
  //   expect(component.topDiscussions.length).toBeGreaterThan(0); 
  // }))

  // it('should have atleast one Follower', fakeAsync(()=>{
  //   fixture.detectChanges();
  //   component.ngOnInit();
  //   fixture.detectChanges();
  //   tick(2000);
  //   expect(component.followers.length).toBeGreaterThan(0); 
  // }))


  
});
