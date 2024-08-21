import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const routes: Routes = [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
        data: {animation: 'slideInAnimation'}
      },
      {
        path: 'main',
        loadChildren: () =>
          import('./pages/main-page/main-page.module').then(
            (m) => m.MainPageModule,
          )
      },
      {
        path: 'specialist',
        loadChildren: () =>
          import('./pages/specialist-page/specialist-page.module').then(
            (m) => m.SpecialistPageModule,
          )
      },
      {
        path: 'prices',
        loadChildren: () =>
          import('./pages/prices-page/prices-page.module').then(
            (m) => m.PricePageModule,
          )
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('./pages/contacts-page/contacts-page.module').then(
            (m) => m.ContactsPageModule,
          )
      },
      {
        path: 'stock',
        loadChildren: () =>
          import('./pages/stock-page/stock-page.module').then(
            (m) => m.StockPageModule,
          )
      },
      {
        path: 'services/:id',
        loadChildren: () =>
          import('./pages/services-page/services-page.module').then(
            (m) => m.ServicesPageModule,
          )
      },
];

const config: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    // scrollOffset: [0, 90],
  };

@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'}),
    ],
    exports: [RouterModule],
  })

  export class AppRoutingModule {}