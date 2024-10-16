import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  form: FormGroup = new FormGroup({})


  constructor(
    private loginService: LoginService,
    public fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tipoDocumento: ['DNI', Validators.required],
      nroDocumento: ['12000333', Validators.required],
      clave: ['', Validators.required],
    });
  }



  registrar() {
    const tipoDocumento = this.form.value.tipoDocumento!;
    const nroDocumento = this.form.value.nroDocumento!;
    const clave = this.form.value.clave!;
    if (this.form.valid) {
      this.loginService.registrar(tipoDocumento, nroDocumento, clave).subscribe(
        (data: any) => {
          if (data === 'Usuario registrado correctamente') {
            this.router.navigate(['login']);
          }
          else {
            alert(data);
          }
        });
    }
  }

  volver() {
    this.router.navigate(['login']);
  }
}
