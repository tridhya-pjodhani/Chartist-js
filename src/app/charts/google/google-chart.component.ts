import { Component } from "@angular/core";

@Component({
  selector: "app-google-chart",
  templateUrl: "./google-chart.component.html"
})
export class GoogleChartComponent {
  public columns = ["Year", "Sales", "Expenses"];
  public data = [
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540]
  ];
}
