import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SpecialistPageComponent } from "./specialist-page.component";

const routes: Routes = [
  {
    path: '',
    component: SpecialistPageComponent,
    data: {animation: 'slideInAnimation'}
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class SpecialistPageRoutingModule {}