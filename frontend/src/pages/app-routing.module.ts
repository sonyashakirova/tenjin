import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage, NotFoundPageModule } from './not-found';
import { CatalogModule, CatalogPage } from './catalog';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: CatalogPage },
  {
    path: 'article/:id',
    loadChildren: () =>
      import('./article/article.module').then(
        (m) => m.ArticleModule
      ),
  },
  { path: '**', component: NotFoundPage },
];

@NgModule({
  imports: [NotFoundPageModule, CatalogModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}