import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { HelpPageComponent } from "./help-page.component";

const routes: Routes = [
  {
    path: '',
    component: HelpPageComponent,
    data: {animation: 'slideInAnimation'}
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class HelpPageRoutingModule {}