import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path : '',
    component: AppComponent
  },
  {
    path : 'a',
    component: TransactionsComponent
  },
  {
    path : '**',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
