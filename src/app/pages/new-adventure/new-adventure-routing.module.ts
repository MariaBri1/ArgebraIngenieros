import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAdventureComponent } from './new-adventure.component';

const routes: Routes = [{ path: '', component: NewAdventureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewAdventureRoutingModule { }
