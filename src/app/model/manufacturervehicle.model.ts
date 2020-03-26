import { ResultsModel } from './results.model';

export class ManufacturerVehicleModel {
    Count: string;
    Message: string;
    SearchCriteria: string;
    Results: ResultsModel[];
   
    clear() {
        this.Results = [];
		this.Count = '';
    	this.Message ='';
    	this.SearchCriteria ='';
    }
}