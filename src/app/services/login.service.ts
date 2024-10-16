import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map } from 'rxjs/operators';
import { environment } from "../../environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  url: string = environment.apiUrl;

  public login(tipoDocumento: string, nroDocumento: string, clave: string): Observable<any> {
    const url = `${this.url}/users?tipoDocumento=${tipoDocumento}&nroDocumento=${nroDocumento}&clave=${clave}`;
    return this.http.get<any[]>(url).pipe(
      map(users => {
        if (users.length > 0) {
          return users[0];
        } else {
          return 'Usuario o clave incorrectos';
        }
      })
    );
  }

  public registrar(tipoDocumento: string, nroDocumento: string, clave: string): Observable<any> {
    const url = `${this.url}/users`;
    const body = {
      tipoDocumento,
      nroDocumento,
      clave,
    };
    return this.http.post<any>(url, body);
  }
}
