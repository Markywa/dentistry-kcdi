import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { PricesPageComponent } from "./prices-page.component";

const routes: Routes = [
  {
    path: '',
    component: PricesPageComponent,
    data: {animation: 'slideInAnimation'}
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class PricesPageRoutingModule {}