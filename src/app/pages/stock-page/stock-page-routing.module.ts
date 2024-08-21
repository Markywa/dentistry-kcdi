import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { StockPageComponent } from "./stock-page.component";

const routes: Routes = [
  {
    path: '',
    component: StockPageComponent,
    data: {animation: 'slideInAnimation'}
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class StockPageRoutingModule {}