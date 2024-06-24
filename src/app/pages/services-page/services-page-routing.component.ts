import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { ServicesPageComponent } from "./services-page.component";

const routes: Routes = [
  {
    path: '',
    component: ServicesPageComponent,
    data: {animation: 'slideInAnimation'}
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class ServicesPageRoutingModule {}