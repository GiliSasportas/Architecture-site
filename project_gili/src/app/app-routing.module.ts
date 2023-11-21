import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbouteComponent } from './aboute/aboute.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ReplyComponent } from './reply/reply.component';
import { ShowReplyComponent } from './show-reply/show-reply.component';
import { PrivateHomeComponent } from './private-home/private-home.component';
import { ModernComponent } from './modern/modern.component';
import { GaleryComponent } from './galery/galery.component';



const routes: Routes = [
   {path:"home",component:HomeComponent},
   {path:"aboute",component:AbouteComponent},
   {path:"service",component:ServiceComponent,
   children:[    
   {path:"privatehome/:item",component:PrivateHomeComponent},
   {path:"privatehome",component:PrivateHomeComponent},

    // {path:"privatehome",component:PrivateHomeComponent},
  ],
   },
   {path:"privatehome",component:PrivateHomeComponent},
    {path:"privatehome/:item",component:PrivateHomeComponent},
    // {path:"service/privatehome",component:PrivateHomeComponent},
   {path:"contact",component:ContactComponent},
   {path:"reply",component:ReplyComponent},
   {path:"modern",component:ModernComponent},
   {path:"galery",component:GaleryComponent},

  // {path:"**",component:NotFoundPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
