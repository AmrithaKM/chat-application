import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  // declarations: [RequiredFieldComponent, RequiredSelectComponent],
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
})
export class SharedModule {}
