import { Component } from "@angular/core";

@Component({
  selector: "app-chartjs",
  templateUrl: "./chartjs.component.html"
})
export class ChartjsComponent {
  public columns = ["Year", "Sales", "Expenses"];
  public data = [
    {
      data: [1000, 200, 400, 1222],
      label: "Something"
    }
  ];
  public labels = ["2004", "2005", "2006", "2007"];
}
