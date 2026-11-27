import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './componets/hero-list/hero-list.component';
import { AboutComponent } from './components/about/about.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/herois', pathMatch: 'full'},
  {path: 'herois', component: HeroListComponent },
  {path: 'sobre', component: AboutComponent },
  {path: 'herois/id', component: HeroDetailComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
