import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RecuadroComponent } from './recuadro/recuadro.component';
import { TableComponent } from './table/table.component';
import { PanelComponent } from './panel/panel.component';
import { CicloformativoService } from './cicloformativo.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RecuadroComponent,
    TableComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CicloformativoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
