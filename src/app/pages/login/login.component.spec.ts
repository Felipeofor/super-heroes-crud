import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { LoginService } from '../../services/login.service';
import { MatDialogModule } from '@angular/material/dialog'; // Importa MatDialogModule
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent, SpinnerComponent],
      imports: [
        HttpClientTestingModule, 
        MatDialogModule, 
        ReactiveFormsModule,
        MatFormFieldModule, 
        MatInputModule,
        NoopAnimationsModule],
      providers: [LoginService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
