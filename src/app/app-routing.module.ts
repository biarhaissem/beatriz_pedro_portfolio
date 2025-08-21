import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { IotComponent } from './iot/iot.component';
import { MobileComponent } from './mobile/mobile.component';
import { MoreComponent } from './more/more.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'web', component: WebComponent },
  { path: 'mobile', component: MobileComponent },
  { path: 'iot', component: IotComponent },
  { path: 'data', component: DataComponent },
  { path: 'more', component: MoreComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
