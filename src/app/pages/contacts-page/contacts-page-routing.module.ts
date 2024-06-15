import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { ContactsPageComponent } from "./contacts-page.component";

const routes: Routes = [
  {
    path: '',
    component: ContactsPageComponent,
    data: {animation: 'slideInAnimation'}
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class ContactsPageRoutingModule {}