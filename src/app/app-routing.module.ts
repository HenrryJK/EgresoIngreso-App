import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


/// pasos para crear un sistema de rutas en tu aplicacion si no tienes instalado por defecto un routing modules.

  const routes: Routes =[
    {path: 'login', component: LoginComponent} ,
    {path: 'register',component: RegisterComponent},
    {path: '', component:DashboardComponent},
    {path:'**' , redirectTo:''}
  ];

@NgModule({
    imports:[
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
})

export class AppRoutingModule{

}
