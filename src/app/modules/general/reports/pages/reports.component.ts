import { Component, OnInit } from '@angular/core';
import * as QuickSightEmbedding from 'amazon-quicksight-embedding-sdk';
import { ReportsService } from 'src/app/core/services/aws/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  dashboard: any;
  dashboardURL: string = "";
  searchURL: string = "";
  search:any;

  constructor(
    private reportsService: ReportsService
  ) { }

ngOnInit(): void {
    this.GetAmazonURL();
  }

  //obtiene el url en amazon del dashboard
  public async GetAmazonURL() {
    await this.reportsService.getQuicksightURL()
      .toPromise().then(response => { 
        this.dashboardURL = response.embed_url
        this.Dashboard(this.dashboardURL);
      });
  }

  //configura el dashboard para embeberlo
  public Dashboard(embeddedURL: any) {
    var containerDiv = document.getElementById("dashboardContainer");
    var options = {
      url: embeddedURL,
      container: containerDiv,
      scrolling: "no",
      height: "AutoFit",
      iframeResizeOnSheetChange: true,
      printEnabled: true,
      width: "100%"
    };
    this.dashboard = QuickSightEmbedding.embedDashboard(options);
  }
}
