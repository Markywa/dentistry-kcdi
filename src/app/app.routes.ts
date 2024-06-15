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
];

const config: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 90],
    useHash: true,
  };

@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, config),
    ],
    exports: [RouterModule],
  })

  export class AppRoutingModule {}