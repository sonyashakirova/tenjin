import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/lib';

import { CatalogPage } from './catalog.page';

@NgModule({
  declarations: [CatalogPage],
  imports: [SharedModule],
  exports: [CatalogPage],
})
export class CatalogModule {}
