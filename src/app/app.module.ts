import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

import { AngularFireStorageModule } from 'angularfire2/storage';
import { FooterComponent } from './components/footer/footer.component';
import { WaitingComponent } from './components/waiting/waiting.component';

import { CarouselModule } from 'ngx-bootstrap';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { ArticleService } from './services/article.service';
import { UpdateArticComponent } from './components/update-artic/update-artic.component';
import { CategoryComponent } from './category/category.component';
import { NewsComponent } from './news/news.component';
import { TechnicalComponent } from './technical/technical.component';
import { MelaminaComponent } from './components/melamina/melamina.component';
import { VinilicoComponent } from './components/vinilico/vinilico.component';
import { PrefinishedComponent } from './components/prefinished/prefinished.component';
import { VariosComponent } from './components/varios/varios.component';
import { ZocalosComponent } from './components/zocalos/zocalos.component';
import { RevestimientosComponent } from './components/revestimientos/revestimientos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AdminComponent,
    AboutComponent,
    NotFoundComponent,
    ContactComponent,
    LoginPageComponent,
    FooterComponent,
    WaitingComponent,
    NewArticleComponent,
    UpdateArticComponent,
    CategoryComponent,
    NewsComponent,
    TechnicalComponent,
    MelaminaComponent,
    VinilicoComponent,
    PrefinishedComponent,
    VariosComponent,
    ZocalosComponent,
    RevestimientosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'taul-fire'),
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AngularFireModule,
    FormsModule,
    AngularFireStorageModule,
    CarouselModule.forRoot()
    
  ],
  providers: [AuthService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
