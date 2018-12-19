import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AboutComponent } from './components/about/about.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { UpdateArticComponent } from './components/update-artic/update-artic.component';
import { CategoryComponent } from './category/category.component';
import { NewsComponent } from './news/news.component';
import { TechnicalComponent } from './technical/technical.component';
import { MelaminaComponent } from './components/melamina/melamina.component';
import { PrefinishedComponent } from './components/prefinished/prefinished.component';
import { VinilicoComponent } from './components/vinilico/vinilico.component';


const routes: Routes = [
    { path: '', component: HomeComponent  },
    { path: 'login', component: LoginPageComponent},    
    { path: 'new-article', component: NewArticleComponent },
    { path: 'private', canActivate:[AuthGuardService], component: AdminComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'product', component: CategoryComponent },
    { path: 'melamina', component: MelaminaComponent },
    { path: 'prefinished', component: PrefinishedComponent },
    { path: 'vinilico', component: VinilicoComponent },
    { path: 'news', component: NewsComponent },
    { path: 'technical', component: TechnicalComponent },
    { path: 'update-artic/:id', component: UpdateArticComponent },
    { path: 'about', component: AboutComponent },
    { path: 'wait', component: WaitingComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})

export class AppRoutingModule { }