import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'studentList' },
  { path: 'studentList', component: StudentListComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'departmentList', component: DepartmentListComponent },
  { path: 'department/:departmentId', component: DepartmentComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
