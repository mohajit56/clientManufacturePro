import { Component } from '@angular/core';
import { ManufactureserviceService } from './service/manufactureservice.service';
import { ManufactureDataSource } from './model/manufacturedatasource';
import { ManufacturerVehicleModel } from './model/manufacturervehicle.model';
import { MatTableDataSource } from '@angular/material';
import { ResultsModel } from './model/results.model';
import { SearchModel } from './model/search.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientManufacturePro';
  vehicleSearch:string;
  containsTheData:boolean;
  manufacturerVehicleModel: ManufacturerVehicleModel;
  searchModel: SearchModel;
  resultslist: any;
    constructor(private manufactureserviceService: ManufactureserviceService) {
	this.searchModel =new SearchModel();
   }
	displayedColumns: string[] = ['seqNo', 'mrfId', 'mrfName', 'mrfCity', 'mrfState', 'mrfCountry','edit','delete'];
    dataSource1: ManufactureDataSource;
    dataSource: MatTableDataSource<ResultsModel>;
    ngOnInit() {
	   this.resultslist=null;
       this.containsTheData=false;
    }
	onRowClicked(row) {
	    console.log('Row clicked: ', row);
	}

  onSubmit() {
	var val=this.searchModel.Name;
	if(val !=null){
		this.manufactureserviceService.loadManufactureDetails(val).subscribe(res => {
			if(res !=null){
				this.manufacturerVehicleModel=res;
				this.resultslist = this.manufacturerVehicleModel;  
				console.log("this.resultslist:"+JSON.stringify(this.resultslist, null, 2));
				this.dataSource=new MatTableDataSource(this.resultslist['results']);
				this.containsTheData=true;
			}else{
				this.dataSource=null;
				this.resultslist=null;
				this.containsTheData=false;
			}
	 }, error => {
            console.log('yearList not received error....');
     });
	}else{
		this.dataSource=null;
		this.resultslist=null;
		this.containsTheData=false;
	}
	
  }
	deleteRow(rowIndex: number) {
        console.log("removing row data: " + rowIndex);
		if(rowIndex>0){
			this.resultslist['results']=this.manufacturerVehicleModel['results'].filter(item => item.mfr_ID !== rowIndex);
        	this.dataSource=new MatTableDataSource(this.resultslist['results']);
		}
	}
}
