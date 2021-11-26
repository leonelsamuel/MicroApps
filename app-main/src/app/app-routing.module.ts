import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'company',
    loadChildren: () =>
      import('company/CompanyModule').then((m) => {
        return m.CompanyModule;
      }),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('clients/ClientModule').then((m) => {
        return m.ClientModule;
      }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
