import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintsBookComponent } from './complaints-book.component';

const routes: Routes = [{ path: '', component: ComplaintsBookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintsBookRoutingModule { }
