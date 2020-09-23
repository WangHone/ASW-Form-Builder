import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../../material.module';

import { TextboxComponent } from './text-box/text-box.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { SelectComponent } from './select/select.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonComponent } from './button/button.component';
import { ConfirmDialogComponent } from './../../shared-components/confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,   
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    TextboxComponent,
    TextAreaComponent,
    SelectComponent,
    MultiSelectComponent,
    RadioButtonComponent,
    DatepickerComponent,
    ButtonComponent,
    ConfirmDialogComponent,
  ],
  exports: [
    TextboxComponent,
    TextAreaComponent,
    SelectComponent,
    MultiSelectComponent,
    RadioButtonComponent,
    DatepickerComponent,
    ButtonComponent,
    ConfirmDialogComponent,
  ]
})
export class ControlsModule { }
