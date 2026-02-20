import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CadastroComponent } from './features/herois/cadastro/cadastro.component';
import { ListaComponent } from './features/herois/lista/lista.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'cadastro-heroi', component: CadastroComponent},
  { path: 'lista-herois', component: ListaComponent},

];
