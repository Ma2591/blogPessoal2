// o SERVICE tem a função de enviar o json (informações) do front para o back-end, e vice versa.

import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(

    private http: HttpClient // injeção
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    //local host e endereço do http vai mudar de acordo com o servidor(heroku, amazon, entre outros)/ a porta tbm pode mudar/
    //--/usuarios/logar é de acordo com o que está no back-end    
    return this.http.post<UserLogin>("http://localhost:8080/usuarios/logar", userLogin)

  }
    //local host e endereço do http vai mudar de acordo com o servidor(heroku, amazon, entre outros)/ a porta tbm pode mudar/
    //--/usuarios/cadastrar é de acordo com o que está no back-end    
  cadastrar(user: User): Observable<User>{
    return this.http.post<User>("http://localhost:8080/usuarios/cadastrar", user)

  }
  
  logado(){
    let ok: boolean = false

    if(environment.token !=""){
      ok = true
    }

    return ok
  }

}
