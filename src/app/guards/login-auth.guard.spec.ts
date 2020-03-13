import { TestBed, async } from '@angular/core/testing';

import { NeedAuthGuard } from './login-auth.guard';
import { DiscussionComponent } from '../components/discussion/discussion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginAuthGuard', () => {
  let guard: NeedAuthGuard;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [NeedAuthGuard]
    })
    .compileComponents();
    guard = TestBed.inject(NeedAuthGuard);
  }));
   

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
