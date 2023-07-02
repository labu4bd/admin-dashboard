import { Component, OnInit, ElementRef  } from '@angular/core';
import * as Chartist from 'chartist';
import Chart from 'chart.js/auto';
//import { Chartist  } from 'chartist';
//import 'chartist/dist/index.css';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public lineChart: any;
  public barChart: any;
  public bubbleChart: any;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.createLineChart();
    this.createBarChart();
    this.createBubbleChart();
  }
  createLineChart(){
    let htmlRef = this.elementRef.nativeElement.querySelector(`#dailySalesChart`);
    const data_line = {
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [{
        label: 'Daily Sale',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: 'rgb(220, 239, 245)',
        tension: 0.1
      }]
    };
      
    this.lineChart = new Chart(htmlRef, {
      type: 'line', //this denotes tha type of chart
      data: data_line,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
      
    });
  }
  createBarChart(){
    let htmlRef = this.elementRef.nativeElement.querySelector(`#subsBarChart`);
    let data_bar = {// values on X-Axis
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ], 
        datasets: [{
          label: 'Subscriptions',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.3)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgb(85, 104, 2, 0.3)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      };
      
    this.barChart = new Chart(htmlRef, {
      type: 'bar', //this denotes tha type of chart
      data: data_bar,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
      
    });
  }
  createBubbleChart(){
    let htmlRef = this.elementRef.nativeElement.querySelector(`#completedTasksBubbleChart`);
    const data_bubble = {
      datasets: [{
        label: 'Task Completed',
        data: [{
          x: 20, y: 30, r: 15
        }, {
          x: 24, y: 18, r: 30
        }, {
          x: 28, y: 26, r: 10
        },  {
          x: 32, y: 20, r: 20
        },  {
          x: 36, y: 24, r: 25
        }, {
          x: 40, y: 10, r: 10
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    };
    this.bubbleChart = new Chart(htmlRef, {
      type: 'bubble', //this denotes tha type of chart
      data: data_bubble,
      options: {
      }
      
    });
  }
}
