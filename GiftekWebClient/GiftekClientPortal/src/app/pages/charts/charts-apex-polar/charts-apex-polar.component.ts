import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-charts-apex-polar',
  standalone: true,
  imports: [NgApexchartsModule,PageTitleComponent],
  templateUrl: './charts-apex-polar.component.html',
  styleUrl: './charts-apex-polar.component.scss'
})
export class ChartsApexPolarComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  basicPolarChart: any;
  monochromeChart: any;

  constructor() { }

  ngOnInit(): void {
    /** 
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Apexcharts' },
      { label: 'Polararea Charts', active: true }
    ];

    // Chart Color Data Get Function
    this._basicPolarChart('["--in-primary", "--in-success", "--in-warning","--in-danger", "--in-info", "--in-success", "--in-primary", "--in-dark", "--in-secondary"]');
    this._monochromeChart('["--in-primary"]');

  }

  // Chart Colors Set
  private getChartColorsArray(colors:any) {
    colors = JSON.parse(colors);
    return colors.map(function (value:any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
            if (color) {
            color = color.replace(" ", "");
            return color;
            }
            else return newValue;;
        } else {
            var val = value.split(',');
            if (val.length == 2) {
                var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                return rgbaColor;
            } else {
                return newValue;
            }
        }
    });
  }

   /**
 * Basic-Polar Area Chart
 */
  private _basicPolarChart(colors:any) {
    colors = this.getChartColorsArray(colors);
    this.basicPolarChart = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
        type: "polarArea",
        width: 400,
      },
      labels: [
        "Series A",
        "Series B",
        "Series C",
        "Series D",
        "Series E",
        "Series F",
        "Series G",
        "Series H",
        "Series I",
      ],
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      legend: {
        position: "bottom",
      },
      colors: colors,
    };
  }

  /**
 * Polar-Area Monochrome
 */
  private _monochromeChart(colors:any) {
    const colorsTest = this.getChartColorsArray(colors);
    this.monochromeChart = {
      series: [42, 47, 52, 58, 65],
      chart: {
        width: 400,
        type: "polarArea",
      },
      labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: colorsTest,
      },
      yaxis: {
        show: false,
      },
      legend: {
        position: "bottom",
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        mode: "dark",
        palette: "palette1",
        monochrome: {
          enabled: true,
          shadeTo: "light",
          color: "#405189",
          shadeIntensity: 0.6,
        },
      },
    };
  }
 
}
