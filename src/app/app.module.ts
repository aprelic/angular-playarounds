import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
    import { HttpClientModule } from '@angular/common/http';
    import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
    import { InMemoryDataService } from './in-memory-data.service';
    import { MatTableModule } from '@angular/material';
    import { MatPaginatorModule} from '@angular/material/paginator';
    import { MatSortModule } from '@angular/material';
    // import {NoopAnimationsModule} from '@angular/platform-browser/animations';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { MatFormFieldModule } from '@angular/material/form-field';

    import { AppComponent } from './app.component';
    import { HeroesComponent } from './heroes/heroes.component';
    import { HeroDetailComponent } from './hero-detail/hero-detail.component';
    import { MessagesComponent } from './messages/messages.component';
    import { AppRoutingModule } from './/app-routing.module';
    import { DashboardComponent } from './dashboard/dashboard.component';
    import { HeroSearchComponent } from './hero-search/hero-search.component';
    import { TableDataComponent } from './table-data/table-data.component';
    import { UtilPieChartComponent } from './util-pie-chart/util-pie-chart.component';
    import { TableDataChartComponent } from './table-data-chart/table-data-chart.component';

    @NgModule({
      declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent,
        HeroSearchComponent,
        TableDataComponent,
        UtilPieChartComponent,
        TableDataChartComponent
          ],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        MatFormFieldModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        BrowserAnimationsModule, // paginator
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
            dataEncapsulation: false
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
