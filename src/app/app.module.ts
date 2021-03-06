import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { FormacaoComponent } from './pages/formacao/formacao.component';
import { ProfissionalComponent } from './pages/profissional/profissional.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ContatoComponent } from './pages/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SobreMimComponent,
    FormacaoComponent,
    ProfissionalComponent,
    HabilidadesComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
