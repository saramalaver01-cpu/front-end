import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component/login.component';
import { HomeCardsComponent } from './home-cards.component/home-cards.component';
import { QueEsComponent } from './que-es.component/que-es.component';
import {ObjetivosComponent} from './objetivos.component/objetivos.component';
import {CreditosComponent} from './creditos.component/creditos.component';
import {CursoComponent} from './curso.component/curso.component';
import {MateComponent} from './mate.component/mate.component';
import {CodigoCComponent} from './codigo-c.component/codigo-c.component';
import {EscitalaComponent} from './escitala.component/escitala.component';
import {AnalisisComponent} from './analisis.component/analisis.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeCardsComponent },
  { path: 'que-es', component: QueEsComponent },
  { path: 'objetivos', component: ObjetivosComponent },
  { path: 'creditos', component: CreditosComponent },
  { path: 'curso', component: CursoComponent},
  { path: 'mate', component: MateComponent },
  { path: 'codigo-c', component: CodigoCComponent},
  { path: 'escitala', component: EscitalaComponent},
  { path: 'analisis', component: AnalisisComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
