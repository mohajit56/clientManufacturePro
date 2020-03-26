import { EquipmentItemsModel } from './equipmentItems.model';
import { ManufacturerTypesModel } from './manufacturerTypes.model';
import { VehicleTypesModel } from './vehicleTypes.model';

export class ResultsModel {
    Address: string;
	Address2: string;
	City: string;
	ContactEmail: string;
	ContactFax: string;
	ContactPhone: string;
	Country: string;
	DBAs: string;
	EquipmentItems: EquipmentItemsModel[];
	LastUpdated: string;
	ManufacturerTypes: ManufacturerTypesModel[];
	Mfr_CommonName: string;
	Mfr_ID: string;
	Mfr_Name: string;
	OtherManufacturerDetails: string;
	PostalCode: string;
	PrimaryProduct: string;
	PrincipalFirstName: string;
	PrincipalLastName: string;
	PrincipalPosition: string;
	StateProvince: string;
	SubmittedName: string;
	SubmittedOn: string;
	SubmittedPosition: string;
	VehicleTypes: VehicleTypesModel[];
   
    clear() {
       
    }
}