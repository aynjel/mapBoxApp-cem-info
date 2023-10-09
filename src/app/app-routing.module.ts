import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from 'ngx-mapbox-gl';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'map',
    pathMatch: 'full'
  },
  {
    path: 'map/:lng/:lat/:zoom',
    component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
