import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { EssenceComponent } from './components/essence/essence.component';
import { CommunityComponent } from './components/community/community.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { HistoricComponent } from './components/historic/historic.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HistoricComponent,
    ActivitesComponent,
    CommunityComponent,
    EssenceComponent,
    JoinUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
