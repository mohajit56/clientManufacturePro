import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { catchError, finalize } from 'rxjs/operators';
import {CollectionViewer} from "@angular/cdk/collections";
import { ManufactureserviceService } from '../service/manufactureservice.service';
import { ResultsModel } from './results.model';

@Injectable({
  providedIn: 'root'
})
export class ManufactureDataSource implements DataSource<ResultsModel> {

    private lessonsSubject = new BehaviorSubject<ResultsModel[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private manufactureserviceService: ManufactureserviceService) {}

    connect(collectionViewer: CollectionViewer): Observable<ResultsModel[]> {
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }

    /*loadManufactureDetails(courseId: number, filter = '',
                sortDirection = 'asc', pageIndex = 0, pageSize = 3,name:string) {

        this.loadingSubject.next(true);

        this.manufactureserviceService.getManufactureDetails(courseId, filter, sortDirection,
            pageIndex, pageSize,name).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(lessons => this.lessonsSubject.next(lessons[0]));
    }  */

    loadToDataSource(name:string){
		this.loadingSubject.next(true);
		this.manufactureserviceService.loadManufactureDetails(name).subscribe(res => {
			console.log("Json Data Display:"+JSON.stringify(res, null, 2));
			this.lessonsSubject.next(res['Results'])
		}, error => {
            console.log('yearList not received error....');
        });
	}

     loadData(name:ResultsModel[]){
		this.loadingSubject.next(true);
	}
}
