import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/about' },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
    AboutComponent
  ];
}
