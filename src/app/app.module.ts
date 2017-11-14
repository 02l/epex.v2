import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forRoot(
      appRoutes,
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
