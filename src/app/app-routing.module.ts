import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { FilesComponent } from "./pages/files/files.component";
import { MessagesComponent } from "./pages/messages/messages.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'files', component: FilesComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '', redirectTo: 'files', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
