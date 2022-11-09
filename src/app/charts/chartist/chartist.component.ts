import { Component, OnInit } from "@angular/core";
import * as Chartist from "chartist";

@Component({
  selector: "app-chartist",
  templateUrl: "./chartist.component.html"
})
export class ChartistComponent implements OnInit {
  seriesData: any[] = [];
  apiDataArray = [
    {
      current: 40,
      max: 70,
      position: 14,
      name: "CP3",
      time: "02:34:28"
    },
    {
      current: 80,
      max: 100,
      position: 14,
      name: "CP3",
      time: "02:34:28"
    }
  ];

  rndInt: any;

  type: any = "Line";
  options: any = {
    axisX: {
      type: Chartist.FixedScaleAxis
    }
  };

  apiResponseData: any[] = [];

  data: any = {
    // series: []
  };

  constructor() {
    for (let i = 0; i < this.apiDataArray.length; i++) {
      let index = this.apiDataArray[i].max - this.apiDataArray[i].current;
      this.rndInt =
        Math.floor(Math.random() * index) + this.apiDataArray[i].current;
      this.apiResponseData[i] = { x: this.rndInt, y: 0 };
    }
  }

  ngOnInit() {
    this.data = {
      // labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90'],
      series: [
        {
          name: "series-1",
          data: [
            { x: 10, y: 53 },
            { x: 20, y: 40 },
            { x: 30, y: 45 },
            { x: 40, y: 40 },
            { x: 50, y: 20 },
            { x: 60, y: 32 },
            { x: 70, y: 18 },
            { x: 80, y: 11 }
          ]
        }
      ]
    };

    this.apiResponseData.map((idata) => {
      let array = [];
      array[0] = idata;
      this.data.series.push({ data: array });
    });
  }
}
