import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {AboutComponent} from '../pages/about/about.component';
import {ContactComponent} from '../pages/contact/contact.component';
import {HomeComponent} from '../pages/home/home.component';
import {TabsComponent} from '../pages/tabs/tabs.component';

import {MyApp} from './app.component';

@NgModule({
  declarations:
      [MyApp, AboutComponent, ContactComponent, HomeComponent, TabsComponent],
  imports: [IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents:
      [MyApp, AboutComponent, ContactComponent, HomeComponent, TabsComponent],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
