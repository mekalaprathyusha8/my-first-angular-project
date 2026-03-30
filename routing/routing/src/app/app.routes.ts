import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { About } from "./about/about";  
import { Login } from "./login/login";
import { Contacts } from "./contact/contacts";
import { Services } from "./services/services";
import { NotFound } from "./not-found/not-found";

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: Home,
        title: 'Home Page'
    },
    {   
        path: 'about',
        component: About,
        title: 'About Page'
    },
    {
        path: 'login',
        component: Login,
        title: 'Login Page'
    },
    {
        path: 'contact',
        component: Contacts,
        title: 'Contact Page'
    },
    {
        path: 'services',
        component: Services,
        title: 'Services Page'
    },
    {
        path: '**', // wild cards
        component: NotFound,
        title: 'Not Found'
    }
]