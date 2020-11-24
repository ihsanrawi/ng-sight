import { Component, OnInit } from '@angular/core';
import {LINE_CHART_COLORS} from '../../shared/chart.colors'

const SAMPLE_LINECHART_DATA: any[] = [
  {data:[65, 59, 80, 81, 56, 54, 30], label:"Sentiment Analysis"},
  {data:[225, 39, 60, 91, 56, 54], label:"Image Recognition"},  
  {data:[115, 29, 34, 81, 36, 74], label:"Forecasting"},  
];

const SAMPLE_LINECHART_LABELS: string[] = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  public lineChartData: any[] = SAMPLE_LINECHART_DATA;
  public lineChartLabels: string[] = SAMPLE_LINECHART_LABELS;
  public lineChartType = "line";
  public lineChartLegend = false;
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors = LINE_CHART_COLORS

  ngOnInit(): void {
  }

}
