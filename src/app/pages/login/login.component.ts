import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {LoaderService} from "../../services/loading.service";
import { MatDialog } from '@angular/material/dialog';
import { DialogErrorComponent } from '../../components/dialog-error/dialog-error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  form: FormGroup = new FormGroup({})

  constructor(
    private loginService: LoginService,
    public fb: FormBuilder,
    private router: Router,
    private loadingService: LoaderService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tipoDocumento: ['DNI', Validators.required],
      nroDocumento: ['12000333', Validators.required],
      clave: ['123456', Validators.required],
    });
  }


  LogIn() {
    const tipoDocumento = this.form.value.tipoDocumento!;
    const nroDocumento = this.form.value.nroDocumento!;
    const clave = this.form.value.clave!;

    if (this.form.valid) {
      this.loginService.login(tipoDocumento, nroDocumento, clave).subscribe(
        (data: any) => {
          if ( data === 'Usuario o clave incorrectos'){
            // modal de error
            this.dialog.open(DialogErrorComponent, {
              data: {title: 'Error', message: data}
            });
          }
          else {
            localStorage.setItem('token', data);
            this.loadingService.setLoading(true);
            setTimeout(() => {
              this.loadingService.setLoading(false);  
              this.router.navigate(['home']);
            } , 500);
          }
        }
      );
    }
  }

  registrate() {
    this.router.navigate(['registrar']);
  }

}
