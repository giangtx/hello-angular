import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRoutingModule } from './test-routing-module';
import { TestComponent } from './test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TestComponent]
})
export class TestModule { }