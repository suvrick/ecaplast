import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { IndexComponent } from './views/index/index.component';
import { ProductsComponent } from './views/products/products.component';

const routes: Routes = [
  { path:"", component:IndexComponent },
  { path:"products", component:ProductsComponent },
  { path:"about", component:AboutComponent },
  { path:"contact", component:ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
