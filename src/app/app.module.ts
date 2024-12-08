import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AdjustedTableComponent } from './adjusted-table/adjusted-table.component';
import { BonusScreenComponent } from './Components/bonus-component/bonus-screen/bonus-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    // AdjustedTableComponent,
    BonusScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
