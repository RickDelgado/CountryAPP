import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutComponent } from './shared/pages/about/about-page.component';

const routes:Routes = [
    {
        path : 'home',
        component : HomePageComponent
    },
    {
        path : 'about',
        component : AboutComponent
    },
    {
        path : '**',
        component : HomePageComponent
    }
]

@NgModule({  
     imports: [
        RouterModule.forRoot(routes)
     ],
     exports: [
        RouterModule
     ]
})
export class AppRoutingModule { }
