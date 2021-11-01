import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';



@NgModule({
  declarations: [
    SidebarComponentComponent
  ],
  exports: [SidebarComponentComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
