import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { IndexComponent } from './views/index/index.component';

const routes: Routes = [
  { path:"", component:IndexComponent },
  { path:"about", component:AboutComponent },
  { path:"contact", component:ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
