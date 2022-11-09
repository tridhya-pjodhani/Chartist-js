import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { GoogleChartsModule } from "angular-google-charts";
import { ChartsModule } from "ng2-charts";
import { ChartistModule } from "ng-chartist";

import { AppComponent } from "./app.component";
import { GoogleChartComponent } from "./charts/google/google-chart.component";
import { ChartjsComponent } from "./charts/chartjs/chartjs.component";
import { ChartistComponent } from "./charts/chartist/chartist.component";

@NgModule({
  declarations: [
    AppComponent,
    GoogleChartComponent,
    ChartjsComponent,
    ChartistComponent
  ],
  imports: [BrowserModule, GoogleChartsModule, ChartsModule, ChartistModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
