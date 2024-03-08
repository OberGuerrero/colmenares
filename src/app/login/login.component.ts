import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    return this.http.post('http://localhost/phpmyadmin/index.php?route=/sql&db=colmenares&table=clientes&pos=0', { username, password });
  }
}
