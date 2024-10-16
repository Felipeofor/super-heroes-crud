import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogErrorComponent } from 'src/app/components/dialog-error/dialog-error.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  form: FormGroup;

  constructor(
    private loginService: LoginService,
    public fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.form = this.fb.group({
      tipoDocumento: ['DNI', Validators.required],
      nroDocumento: ['', [Validators.required, Validators.minLength(7)]],
      clave: ['', Validators.required],
    });
  }

  registrar() {
    if (this.form.valid) {
      const { tipoDocumento, nroDocumento, clave } = this.form.value;
      
      this.loginService.registrar(tipoDocumento, nroDocumento, clave).subscribe(
        (response) => {
          console.log('Respuesta del servidor', response);
          if (response) {
            this.router.navigate(['login']);
            this.dialog.open(DialogErrorComponent, {
              data: {
                title: 'Registro exitoso',
                message: 'El usuario fue registrado exitosamente.',
              },
            });
          } else {
            alert(response.message || 'Error al registrar el usuario');
          }
        },
        (error) => {
          console.error('Error en el registro', error);
          alert('Ocurrió un error durante el registro. Intente nuevamente.');
        }
      );
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  }

  volver() {
    this.router.navigate(['login']);
  }
}
