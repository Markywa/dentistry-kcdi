import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

export const routes: Routes = [
      {
        path: '',
        redirectTo: 'kcdi24',
        pathMatch: 'full',
      },
      {
        path: 'kcdi24',
        loadChildren: () =>
          import('./pages/main-page/main-page.module').then(
            (m) => m.MainPageModule,
          ),
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
        RouterModule.forRoot(routes, config),
        
    ],
    exports: [RouterModule],
  })

  export class AppRoutingModule {}