import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

import {AppComponent} from './app.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {AboutComponent} from './about/about.component';
import {EducationComponent} from './education/education.component';
import {MiniaturesComponent} from "./miniatures/miniatures.component";
import {MusicComponent} from './music/music.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { HistoryComponent } from './history/history.component';
import { ProjectsComponent } from './projects/projects.component';
import {ContactComponent} from "./contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AboutComponent,
    EducationComponent,
    MiniaturesComponent,
    MusicComponent,
    HistoryComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: AboutComponent, pathMatch: 'full'},
      {path: 'education', component: EducationComponent},
      {path: 'history', component: HistoryComponent},
      {path: 'music', component: MusicComponent},
      {path: 'miniatures', component: MiniaturesComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'contact', component: ContactComponent},
    ]),
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
