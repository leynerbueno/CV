import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormacaoComponent } from './pages/formacao/formacao.component';
import { ProfissionalComponent } from './pages/profissional/profissional.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ContatoComponent } from './pages/contato/contato.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre-mim', component: SobreMimComponent},
  {path: 'formacao', component: FormacaoComponent},
  {path: 'profissional', component: ProfissionalComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
