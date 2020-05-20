import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(protected http:HttpClient) { }

  listar(){
    return this.http.get("https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest");
  }
  

}
