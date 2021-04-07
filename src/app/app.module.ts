import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversationHeaderComponent } from './components/core/conversation-header/conversation-header.component';
import { ChatComponent } from './components/core/chat/chat.component';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/pages/home/home.component';
import { HistoricChatsComponent } from './components/pages/historic-chats/historic-chats.component';
import { ConversationComponent } from './components/pages/conversation/conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversationHeaderComponent,
    ChatComponent,
    NavbarComponent,
    HomeComponent,
    HistoricChatsComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
