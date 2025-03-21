
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
