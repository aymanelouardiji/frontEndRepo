import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { TasksComponent } from './tasks/tasks.component';
import { UploadTasksComponent } from './upload-tasks/upload-tasks.component';

const routes: Routes = [ { path: 'employees', component: EmployeesComponent },
{ path: 'tasks', component: TasksComponent },
{ path: 'upload-tasks', component: UploadTasksComponent },
{ path: '', redirectTo: '/employees', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
