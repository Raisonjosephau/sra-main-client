import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service'

import * as Chartist from 'chartist';

@Component({
  selector: 'app-student-result',
  templateUrl: './subject-result.component.html',
  styleUrls: ['./subject-result.component.css']
})

export class SubjectResultComponent implements OnInit {
  items = [
    {
      'id': 0,
      'reg': 'SGICS3',
      'name': 'Sreelaksmi Sudeer'
    },
    {
      'id': 1,
      'reg': 'SGICS27',
      'name': 'Savid Joe Sunny'
    },
    {
      'id': 2,
      'reg': 'SGICS28',
      'name': 'Joel Jose Parekattil'
    },
    {
      'id': 3,
      'reg': 'SGICS13',
      'name': 'Jimenez Cote'
    },
    {
      'id': 4,
      'reg': 'SGICS3',
      'name': 'Gonzales Griffith'
    },
    {
      'id': 5,
      'reg': 'SGICS31',
      'name': 'Kirby Woods'
    },
    {
      'id': 6,
      'reg': 'SGICS2',
      'name': 'Barry Hinton'
    },
    {
      'id': 7,
      'reg': 'SGICS31',
      'name': 'Leila Mcfarland'
    },
    {
      'id': 8,
      'reg': 'SGICS15',
      'name': 'Liliana Stein'
    },
    {
      'id': 9,
      'reg': 'SGICS29',
      'name': 'Perez Stone'
    },
    {
      'id': 10,
      'reg': 'SGICS3',
      'name': 'Marie Noel'
    },
    {
      'id': 11,
      'reg': 'SGICS21',
      'name': 'Daniel Sanders'
    },
    {
      'id': 12,
      'reg': 'SGICS6',
      'name': 'Booker Roach'
    },
    {
      'id': 13,
      'reg': 'SGICS18',
      'name': 'Marietta Sykes'
    },
    {
      'id': 14,
      'reg': 'SGICS12',
      'name': 'Gabriela Lindsey'
    },
    {
      'id': 15,
      'reg': 'SGICS24',
      'name': 'Lloyd Robinson'
    }
  ]; public lineBigDashboardChartType;
  public gradientStroke;
  public chartColor;
  public canvas: any;
  public ctx;
  public gradientFill;
  public radarChartData: Array<any>;
  public radarChartOptions: any;
  public radarChartLables: Array<any>;
  public radarChartColors: Array<any>

  public gradientChartOptionsConfiguration: any;
  public gradientChartOptionsConfigurationWithNumbersAndGrid: any;

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  public hexToRGB(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.chartColor = '#212121';
    this.canvas = document.getElementById('radarChart');
    this.ctx = this.canvas.getContext('2d');

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.24)');

    this.radarChartData = [
        {
          label: '2015-19',
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          borderWidth: 2,
          data: [2, 3, 5, 6, 7, 2, 3, 4, 1, 5]
        }

      ];
      this.radarChartColors = [
        {
        backgroundColor: this.gradientFill,
        borderColor: '#6c6',
        pointBorderColor: '#6c6',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: '#6c6',
      }
     ];
    this.radarChartLables = ['O', 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'P', 'F'];
    this.radarChartOptions = {
      maintainAspectRatio: true,
      legend: {
        display: false
      },

      pointLabelFontSize: '50px',
      spanGaps: false,
      elements: {
          line: {
              tension: 0.000001
          }
      },
      plugins: {
          filler: {
              propagate: false
          },
          'samples-filler-analyser': {
              target: 'chart-analyser'
          }
      },
      scale: {
        ticks: {
          beginAtZero: true,
          minTicksLimit: 10,
          maxTicksLimit: 10,
          padding: 10,
          display: false
        },

        pointLabels: {
            fontSize: 13,
            fontColor: '#212121',
            fontFamily: 'Montserrat',
        },
      },
      responsive: true,
      scaleLineColor: 'rgba(0,0,0,.09)',
      angleLineColor: 'rgba(0,0,0,.2)',
      tooltips: {
        backgroundColor: '#fff',
        titleFontColor: '#212121',
        titleFontFamily: 'Montserrat',
        bodyFontColor: '#212121',
        bodyFontFamily: 'Montserrat',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
      }
    };

    this.lineBigDashboardChartType = 'radar';



    this.ctx = this.canvas.getContext('2d');

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, 'rgba(249, 99, 59, 0.40)');

  }

}
