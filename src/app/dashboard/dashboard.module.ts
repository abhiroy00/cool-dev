import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { ProfileComponent } from './right-menu/profile/profile.component';
import { CourseComponent } from './right-menu/course/course.component';
import { AudioBookComponent } from './right-menu/audio-book/audio-book.component';
import { LiveClassComponent } from './right-menu/live-classes/live-class.component';
import { ProjectsComponent } from './right-menu/projects/projects.component';
import { MatarialComponent } from './right-menu/matarial/matarial.component';


@NgModule({
  declarations: [
    RightMenuComponent,
    ProfileComponent,
    CourseComponent,
    AudioBookComponent,
    LiveClassComponent,
    ProjectsComponent,
    MatarialComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
