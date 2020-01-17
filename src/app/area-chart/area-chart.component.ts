import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit {

  @ViewChild('areaChart', {static: false}) areaChart : ElementRef

  drawChart = () => {

    const data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7],
      ['Roaming', 1]
    ]);

    const options = {
      title: 'My Daily Activities',
      legend: {position: 'top'}
    };

    const chart = new google.visualization.ColumnChart(this.areaChart.nativeElement);

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
