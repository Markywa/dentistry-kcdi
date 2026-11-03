import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { InformationPageComponent } from "./information-page.component";

const routes: Routes = [
  {
    path: '',
    component: InformationPageComponent,
    data: {animation: 'slideInAnimation'}
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class InformationPageModuleRouting {}