import { Component, OnInit } from '@angular/core';
import { PublicacionService } from './publicacion.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  publicaciones: any = []

  constructor(protected pservice: PublicacionService) { 
    this.pservice.listar().subscribe(
      (res: any) => {
        console.log(res);
        this.publicaciones = res;
      }
    )
  }

  ngOnInit(): void {
  }

}
