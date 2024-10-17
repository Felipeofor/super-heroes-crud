import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { environment } from '../../environment';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });

    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a user when login is successful', () => {
    const mockUser = [{ tipoDocumento: 'DNI', nroDocumento: '12345678', clave: 'password123' }];
    const tipoDocumento = 'DNI';
    const nroDocumento = '12345678';
    const clave = 'password123';

    service.login(tipoDocumento, nroDocumento, clave).subscribe(user => {
      expect(user).toEqual(mockUser[0]);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/users?tipoDocumento=${tipoDocumento}&nroDocumento=${nroDocumento}&clave=${clave}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });

  it('should return error message when no user is found', () => {
    const tipoDocumento = 'DNI';
    const nroDocumento = '12345678';
    const clave = 'wrongpassword';

    service.login(tipoDocumento, nroDocumento, clave).subscribe(response => {
      expect(response).toEqual('Usuario o clave incorrectos');
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/users?tipoDocumento=${tipoDocumento}&nroDocumento=${nroDocumento}&clave=${clave}`
    );
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should register a new user successfully', () => {
    const mockUser = { tipoDocumento: 'DNI', nroDocumento: '12345678', clave: 'password123' };
    const tipoDocumento = 'DNI';
    const nroDocumento = '12345678';
    const clave = 'password123';

    service.registrar(tipoDocumento, nroDocumento, clave).subscribe(newUser => {
      expect(newUser).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/users`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockUser);
    req.flush(mockUser);
  });
});
