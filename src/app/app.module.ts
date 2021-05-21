import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {DulceriaComponent} from './components/dulceria/dulceria.component';
import{MatCardModule} from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatSnackBarModule} from '@angular/material/snack-bar'

import { ListaUsserComponent } from './components/lista-usser/lista-usser.component';
import { AppLoginComponent } from './components/login-usser/login-usser.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { Prueba2Component } from './components/prueba2/prueba2.component';




@NgModule({
  declarations: [
    AppComponent,
    DulceriaComponent,
    ListaUsserComponent,
    AppLoginComponent,
    FormularioReactivoComponent,
    PruebaComponent,
    Prueba2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 