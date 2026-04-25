import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Services } from './components/services/services';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
    {path:'' , redirectTo:'home' , pathMatch:'full'},
    {path : 'home' , component : Home} ,
    {path : 'contact' , component:Contact} , 
    {path : 'services' , component: Services} ,
    {path:'**' , component:Notfound} 
];
