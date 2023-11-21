import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AbouteComponent } from './aboute/aboute.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReplyComponent } from './reply/reply.component';
import { ShowReplyComponent } from './show-reply/show-reply.component';
import { AddReplyComponent } from './add-reply/add-reply.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrivateHomeComponent } from './private-home/private-home.component';
import { ModernComponent } from './modern/modern.component';
import { OurPipePipe } from './our-pipe.pipe';
import { GaleryComponent } from './galery/galery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    AbouteComponent,
    ContactComponent,
    ReplyComponent,
    ShowReplyComponent,
    AddReplyComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    PrivateHomeComponent,
    ModernComponent,
    OurPipePipe,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
