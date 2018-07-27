import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpClientModule} from '@angular/common/http';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {LoginPage} from '../pages/login/login';
import {CadastroPage} from '../pages/cadastro/cadastro';
import {HomePage} from '../pages/home/home';
import {AcompanhantePage} from '../pages/serviceAcompanhante/acompanhante';
import {FixoPage} from '../pages/serviceFixo/fixo';
import {InfoacompanhantePage} from '../pages/infoAcompanhante/infoacompanhante';
import {InfofixoPage} from '../pages/infoFixo/infofixo';

import {API} from "../services/abstract/api";
import {StorageIGOM} from "../services/abstract/storageIgom";
import {VerifyAccessToken} from "../services/abstract/verifyAccessToken";
import {UserService} from "../services/userService";
import {FieldsValidation} from "../services/fieldsValidation";
import {FieldsTranslator} from "../services/fieldsTranslator";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CadastroPage,
    HomePage,
    AcompanhantePage,
    FixoPage,
    InfoacompanhantePage,
    InfofixoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CadastroPage,
    HomePage,
    AcompanhantePage,
    FixoPage,
    InfoacompanhantePage,
    InfofixoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    API,
    StorageIGOM,
    VerifyAccessToken,
    UserService,
    FieldsValidation,
    FieldsTranslator
  ]
})
export class AppModule {
}
