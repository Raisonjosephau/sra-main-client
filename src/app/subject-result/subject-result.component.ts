import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ServerService} from '../_services/server.service'
import {PaginationService} from '../_services/pagination.service'
import {Page} from '../_objects/page'
import {PagedData} from '../_objects/page-data'

import {Observable} from 'rxjs/Observable';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-student-result',
  templateUrl: './subject-result.component.html',
  styleUrls: ['./subject-result.component.css']
})

export class SubjectResultComponent implements OnInit {

  data = [
    {
      'id': 0,
      'name': 'Little Cleveland',
      'grade': 'C+'
    },
    {
      'id': 1,
      'name': 'Dorsey Dillard',
      'grade': 'O'
    },
    {
      'id': 2,
      'name': 'Rosario Grant',
      'grade': 'D+'
    },
    {
      'id': 3,
      'name': 'Boyd Olsen',
      'grade': 'B+'
    },
    {
      'id': 4,
      'name': 'Mcdowell Peters',
      'grade': 'O'
    },
    {
      'id': 5,
      'name': 'Madeline Dickson',
      'grade': 'C'
    },
    {
      'id': 6,
      'name': 'Letitia Serrano',
      'grade': 'A+'
    },
    {
      'id': 7,
      'name': 'Thelma Forbes',
      'grade': 'B'
    },
    {
      'id': 8,
      'name': 'Randall Leonard',
      'grade': 'O'
    },
    {
      'id': 9,
      'name': 'Moreno Melendez',
      'grade': 'O'
    },
    {
      'id': 10,
      'name': 'Gabrielle Allen',
      'grade': 'O'
    },
    {
      'id': 11,
      'name': 'Tia Porter',
      'grade': 'B+'
    },
    {
      'id': 12,
      'name': 'Naomi Mcintosh',
      'grade': 'O'
    },
    {
      'id': 13,
      'name': 'Lela Morrow',
      'grade': 'B+'
    },
    {
      'id': 14,
      'name': 'Gay Harmon',
      'grade': 'D+'
    },
    {
      'id': 15,
      'name': 'Snow Harris',
      'grade': 'B'
    },
    {
      'id': 16,
      'name': 'Melissa Mosley',
      'grade': 'A'
    },
    {
      'id': 17,
      'name': 'Hardy Cochran',
      'grade': 'O'
    },
    {
      'id': 18,
      'name': 'Porter Santos',
      'grade': 'C'
    },
    {
      'id': 19,
      'name': 'Mills Irwin',
      'grade': 'A+'
    },
    {
      'id': 20,
      'name': 'Hancock Boyle',
      'grade': 'B+'
    },
    {
      'id': 21,
      'name': 'Rose Mercado',
      'grade': 'C'
    },
    {
      'id': 22,
      'name': 'Marcella Lyons',
      'grade': 'P'
    },
    {
      'id': 23,
      'name': 'Wynn Pena',
      'grade': 'O'
    },
    {
      'id': 24,
      'name': 'Myrna Savage',
      'grade': 'A+'
    },
    {
      'id': 25,
      'name': 'Ophelia Wells',
      'grade': 'C+'
    },
    {
      'id': 26,
      'name': 'Cherry Tucker',
      'grade': 'D+'
    },
    {
      'id': 27,
      'name': 'Tabatha Higgins',
      'grade': 'A+'
    },
    {
      'id': 26,
      'name': 'Cherry Tucker',
      'grade': 'D+'
    },
    {
      'id': 27,
      'name': 'Tabatha Higgins',
      'grade': 'A+'
    }
  ];
   subjects = [
    {
      'name': 'Machine Learning',
      'id': 'CS000'
    },
    {
      'name': 'Operating System',
      'id': 'CS001'
    },
    {
      'name': 'Data Structure',
      'id': 'CS002'
    },
    {
      'name': 'Computer Architecture',
      'id': 'CS003'
    },
    {
      'name': 'Discrete Computational Structure',
      'id': 'CS004'
    },
    {
      'name': 'Java',
      'id': 'CS005'
    },
    {
      'name': 'Computer Networks',
      'id': 'CS006'
    },
    {
      'name': 'Graph Theory',
      'id': 'CS007'
    },
    {
      'name': 'DBMS',
      'id': 'CS008'
    },
    {
      'name': 'Distributed Computing',
      'id': 'CS009'
    },
    {
      'name': 'Soft Computing',
      'id': 'CS0010'
    },
    {
      'name': 'Microprocessor',
      'id': 'CS0011'
    },
    {
      'name': 'Computer Grapohics',
      'id': 'CS0012'
    },
    {
      'name': 'Compiler Design',
      'id': 'CS0013'
    },
    {
      'name': 'Theory of Computation',
      'id': 'CS0014'
    },
    {
      'name': 'Design ana Analysis of Algorithms',
      'id': 'CS0015'
    },
    {
      'name': 'Application Development lab',
      'id': 'CS0016'
    },
    {
      'name': 'Design Project',
      'id': 'CS0017'
    },
    {
      'name': 'System Software',
      'id': 'CS0018'
    },
    {
      'name': 'Data Communication',
      'id': 'CS0019'
    },
    {
      'name': 'Software Engineering and Project Management',
      'id': 'CS0020'
    },
    {
      'name': 'Web Technologies',
      'id': 'CS0021'
    },
    {
      'name': 'System Software Lab',
      'id': 'CS0022'
    },
    {
      'name': 'Life Skills',
      'id': 'CS0023'
    },
    {
      'name': 'Computer Sysetm Architecture',
      'id': 'CS0024'
    },
    {
      'name': 'Cryptography and Computer Security',
      'id': 'CS0025'
    },
    {
      'name': 'Switching Theory ana Logical Design',
      'id': 'CS0026'
    },
    {
      'name': 'Data Structure Lab',
      'id': 'CS0027'
    },
    {
      'name': 'Digital System Lab',
      'id': 'CS0028'
    }
  ];

  semList = [
    {'id': 1, 'name': 'Semester 1'},
    {'id': 2, 'name': 'Semester 2'},
    {'id': 3, 'name': 'Semester 3'},
    {'id': 4, 'name': 'Semester 4'},
    {'id': 5, 'name': 'Semester 5'},
    {'id': 6, 'name': 'Semester 6'},
    {'id': 7, 'name': 'Semester 7'},
    {'id': 8, 'name': 'Semester 8'}
  ];
  batchList = [
    {'id': 1, 'name': '2015-19'},
    {'id': 2, 'name': '2016-20'},
    {'id': 3, 'name': '2017-21'},
    {'id': 4, 'name': '2018-22'},
    {'id': 5, 'name': '2019-23'},
  ];


  semSettings = {};
  batchSettings = {};
  batch = [{'id': 1, 'name': '2015-19'}];
  semester = [{'id': 1, 'name': 'Semester 7'}];
  page = 1;
  pages = new Page()
  pageData = new PagedData()

  private studList: Array<any>;
  private grade = 'All';
  public gradientStroke;
  public chartColor;
  public canvas: any;
  public ctx;
  public gradientFill;

  // Radar Chart varaibles for grade count
  public radarChartType;
  public radarChartData: Array<any>;
  public radarChartOptions: any;
  public radarChartLables: Array<any>;
  public radarChartColors: Array<any>

  // Past result chart variables

  public lineBigDashboardChartType;
  public lineBigDashboardChartData: Array<any>;
  public lineBigDashboardChartOptions: any;
  public lineBigDashboardChartLabels: Array<any>;
  public lineBigDashboardChartColors: Array<any>

  public gradientChartOptionsConfiguration: any;
  public gradientChartOptionsConfigurationWithNumbersAndGrid: any;


  constructor(private userService: ServerService, private paginationService: PaginationService) {

   }

  ngOnInit() {

    // Pagination

    this.pages.pageNumber = this.page - 1;
    this.pages.size = 7;
    this.pages.totalElements = this.data.length;
    this.pageData.page = this.pages;
    this.pageData.data = this.data;
    this.pagination(this.page);

    // Selectbox
    this.semSettings =  {
      singleSelection: true,
      text: 'Choose Semester',
      enableSearchFilter: true,
      classes: 'input-group-alternative',
      labelKey: 'name'
    }
    this.batchSettings =  {
      singleSelection: true,
      text: 'Choose Batch',
      enableSearchFilter: true,
      classes: 'input-group-alternative',
      labelKey: 'name'
    }
    // this.batch =  [{'id': 1, 'name': '2015-19'}];
    //

    this.chartColor = '#212121';
    this.canvas = document.getElementById('radarChart');
    this.ctx = this.canvas.getContext('2d');

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#6c6');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    // this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(0, 'rgba(102, 204, 102, .3)');
    this.gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
    this.radarChartData = [
        {
          label: 'Count',
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          borderWidth: 2,
          data: this.calcCount(),
          pointStyle: 'circle',
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
      maintainAspectRatio: false,
      legend: {
        display: false
      },
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
        bodyFontSize: 13,
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
      }
    };

    this.radarChartType = 'radar';


    // Line char/ Past Result Chart starts
    this.lineBigDashboardChartData = [
      {
        label: 'Pass',
        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,
        borderWidth: 2,
        data: [69.3, 32.1, 36, 50, 28]
      }
    ];
    this.lineBigDashboardChartColors = [
     {
      backgroundColor: this.gradientFill,
      borderColor: '#6c5',
      pointBorderColor:  '#6c5',
      pointBackgroundColor: '#ffffff',
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#6c5',
    }
   ];
    this.lineBigDashboardChartLabels = ['2015-19', '2016-20', '2017-21', '2018-22', '2019-23'];
    this.lineBigDashboardChartOptions = {

          layout: {
              padding: {
                  left: 20,
                  right: 20,
                  top: 0,
                  bottom: 0
              }
          },
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: '#fff',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest'
          },
          legend: {
              position: 'bottom',
              fillStyle: '#FFF',
              display: false
          },
          scales: {
              yAxes: [{
                  ticks: {
                      fontColor: 'rgba(0,0,0,0.9)',
                      fontStyle: '500',
                      fontFamily: 'Montserrat',
                      beginAtZero: true,
                      minTicksLimit: 8,
                      maxTicksLimit: 8,
                      padding: 10
                  },
                  gridLines: {
                      drawTicks: true,
                      drawBorder: false,
                      display: true,
                      color: 'rgba(0,0,0,0.1)',
                      zeroLineColor: 'transparent'
                  }

              }],
              xAxes: [{
                  gridLines: {
                      zeroLineColor: 'transparent',
                      color: 'rgba(0,0,0,0.1)',

                  },
                  ticks: {
                      padding: 10,
                      beginAtZero: true,
                      fontStyle: '500',
                      fontColor: 'rgba(0,0,0,0.9)',
                      fontFamily: 'Montserrat',
                  }
              }]
          }
    };

    this.lineBigDashboardChartType = 'line';
  }


  // Paginatio
  public pagination(e: any): void {
    this.pages.pageNumber = e - 1;
    this.studList =  [...this.paginationService.getHeroes(this.pageData).data ];
  }
  // events
  public chartClicked(e: any): void {

    if (e.active.length > 0) {
      const index = e.active[0]._index;
      this.grade = this.radarChartLables[index];
      this.pageData.data = this.data.filter(item => item.grade === this.grade);
      this.pagination(this.page);
    }
  }
  private showAll() {
    this.pageData.data = this.data;
    this.pagination(this.page);
    this.grade = 'All';
  }
  private calcCount() {
    let O = 0, Ap = 0, A = 0, Bp = 0, B = 0, Cp = 0, C = 0, Dp = 0, P = 0, F = 0;
    this.data.forEach(function(element) {
        switch (element.grade) {
          case 'O': O += 1; break;
          case 'A+': Ap += 1; break;
          case 'A': A += 1; break;
          case 'B+': Bp += 1; break;
          case 'B': B += 1; break;
          case 'C+': Cp += 1; break;
          case 'C': C += 1; break;
          case 'D+': Dp += 1; break;
          case 'P': P += 1; break;
          case 'F': F += 1; break;
          default:
            break;
        }
    });
    return [O, Ap, A, Bp, B, Cp, C, Dp, P, F];
  }
  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : this.subjects.filter(v => ((v.name.toLowerCase() + ' ' + v.id.toLocaleLowerCase()).indexOf(term.toLowerCase())) > -1).slice(0, 15 ))
  );

  formatter = (x: {name: string, id: string}) => x.name + ' : ' + x.id;
  private selectSearch(e: any): void {
    console.log(e, this.batch[0].name);

  }
}
