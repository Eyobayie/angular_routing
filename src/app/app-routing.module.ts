import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApplyComponent } from './apply/apply.component';
import { ContactComponent } from './contact/contact.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SecondComComponent } from './second-com/second-com.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [

  { path: '', component: SecondComComponent },
  { path: 'about', component: AboutComponent },
  { path: 'apply',component: ApplyComponent},
  { path: 'contact', component: ContactComponent,},
  { path: 'service', component: ServiceComponent},
  { path: 'mainpage',component:MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
