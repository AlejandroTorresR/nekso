import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailComponent } from './pages/detail/detail.component';

import { DriversComponent } from './pages/drivers/drivers.component';
import { PassengersComponent } from './pages/passengers/passengers.component';


const routes: Routes = [
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		children: [
			{
				path: 'drivers',
				component: DriversComponent
			},
			{
				path: 'passengers',
				component: PassengersComponent
			},
			{
				path: 'detail',
				component: DetailComponent
			},
			{
				path: 'detail/:id',
				component: DetailComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
