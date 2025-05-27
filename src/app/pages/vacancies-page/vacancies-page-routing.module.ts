import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VacanciesPageComponent } from "./vacancies-page.component";

const routes: Routes = [
  {
    path: '',
    component: VacanciesPageComponent,
    data: {animation: 'slideInAnimation'}
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class VacanciesPageRoutingModule {}