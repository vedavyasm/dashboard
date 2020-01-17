import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @ViewChild('pieChart', {static: false}) pieChart : ElementRef

  drawChart = () => {

    const data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 17],
      ['Roaming', 1]
    ]);

    const options = {
      title: 'My Daily Activities',
      legend: {position: 'top'}
    };

    const chart = new google.visualization.AreaChart(this.pieChart.nativeElement);

    chart.draw(data, options);

  }

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

  constructor() { }

  ngOnInit() {
  }

}
