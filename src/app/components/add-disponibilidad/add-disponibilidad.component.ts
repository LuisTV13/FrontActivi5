import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/models/ciclo.model';
import { Disponibilidad } from 'src/app/models/disponibilidad.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CicloService } from 'src/app/services/ciclo.service';
import { DisponibilidadService } from 'src/app/services/disponibilidad.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-disponibilidad',
  templateUrl: './add-disponibilidad.component.html',
  styleUrls: ['./add-disponibilidad.component.css']
})
export class AddDisponibilidadComponent implements OnInit {

  disponibilidad: Disponibilidad ={
  
    idCiclo:{
      idCiclo:0,
    },
    idUsuario:{
      idUsuario:0,
    }
  }
  
  lstCiclo:Ciclo[]=[];
  lstUsuario:Usuario[]=[];

  constructor(private cicloServices:CicloService,
              private usuarioServices:UsuarioService,
              private disponibilidadServices:DisponibilidadService) {

          this.cicloServices.listaCiclo().subscribe(
            ciclo =>{
              this.lstCiclo = ciclo
            }
          ),
          this.usuarioServices.listaUsuarios().subscribe(
            usuario =>{
              this.lstUsuario = usuario
            }
          );
               }
          registra(){
              console.log(this.disponibilidad)
              this.disponibilidadServices.registarDisponibilidad(this.disponibilidad).subscribe(
                response =>{
                      console.log(response.mensaje)
                      alert(response.mensaje)
                },
                error =>{
                  console.log(error)
                },
              );
          }

  ngOnInit(): void {
  }

}
