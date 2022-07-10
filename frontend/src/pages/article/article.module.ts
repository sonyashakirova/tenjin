import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/lib';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticlePage } from './article.page';

@NgModule({
  declarations: [ArticlePage],
  imports: [
    ArticleRoutingModule,
    SharedModule,
  ],
})
export class ArticleModule {}