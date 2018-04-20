// módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// componentes
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { IMCComponent } from './IMC/imc.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    IMCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
