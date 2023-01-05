import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { CurativeComponent } from './Components/curative/curative.component';
import { PrecautionComponent } from './Components/precaution/precaution.component';
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Curative', component: CurativeComponent },
  { path: 'Precaution', component: PrecautionComponent },
  { path: 'Contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
