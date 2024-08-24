import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { ReviewsPageComponent } from "./reviews-page.component";

const routes: Routes = [
  {
    path: '',
    component: ReviewsPageComponent,
    data: {animation: 'slideInAnimation'}
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class ReviewsPageRoutingModule {}