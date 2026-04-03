import { Routes } from '@angular/router';
import { ViewUsers } from './view-users/view-users';
import { AddEditUser } from './add-edit-user/add-edit-user';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'view-users',
        pathMatch: 'full',
    },
    {
        path: 'view-users',
        component: ViewUsers,
        title: 'Users List',
    },
    {
        path: 'add-user',
        component: AddEditUser,
        title: 'Add User',
    },
    {
        path: 'edit-user/:id',
        component: AddEditUser,
        title: 'Edit User',
    },
    {
        path: '**',
        component: Notfound,
        title: 'Page Not Found',
    }
    
];
