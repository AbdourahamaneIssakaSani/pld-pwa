import { JoinUsComponent } from './components/join-us/join-us.component';
import { EssenceComponent } from './components/essence/essence.component';
import { CommunityComponent } from './components/community/community.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { HistoricComponent } from './components/historic/historic.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"historique",component: HistoricComponent},
  {path:"activités",component: ActivitesComponent},
  {path:"communauté",component: CommunityComponent},
  {path:"essence",component: EssenceComponent},
  {path:"nous-rejoindre",component: JoinUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
