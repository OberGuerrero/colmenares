import { Component, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from './auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl:  './login/login.component.html',
  styleUrl: './login/login.component.css'
})
export class AppComponent {
  title = 'appColmenares';
}

@Injectable()
export class AuthService {
  constructor(private databaseService: DatabaseService) { }

  getDataFromDatabase(): void {
    this.databaseService.getData().subscribe(
      (data) => {
        console.log(data); // Aquí puedes manejar los datos obtenidos
      },
      (error) => {
        console.error(error); // Manejo de errores
      }
    );
  }

  sendDataToDatabase(): void {
    const data = { value1: 'ejemplo1', value2: 'ejemplo2' };
    this.databaseService.sendData(data).subscribe(
      (response) => {
        console.log(response); // Manejo de la respuesta del servidor
      },
      (error) => {
        console.error(error); // Manejo de errores
      }
    );
  }
}
