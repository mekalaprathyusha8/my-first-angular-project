import { Routes } from '@angular/router';
import { AddUser } from './add-user/add-user';
import { ViewUser } from './view-user/view-user';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'view-user',
        pathMatch: 'full'
    },
    {
        path:'add-user',
        component: AddUser
    },
    {
        path:'add-user/:userid',
        component: AddUser
    },
    {
        path:'view-user',
        component:ViewUser
    },
    {
        path: '**',
        component: Notfound
    }
];
