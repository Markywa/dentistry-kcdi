import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./main-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    data: {animation: 'slideInAnimation'}
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class MainPageRoutingModule {}