import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsportesPageRoutingModule } from './esportes-routing.module';

import { EsportesPage } from './esportes.page';
import { MenuModule } from '../shared/components/menu/menu.module';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsportesPageRoutingModule,
    MenuModule,
    FooterModule
  ],
  declarations: [EsportesPage]
})
export class EsportesPageModule {}
