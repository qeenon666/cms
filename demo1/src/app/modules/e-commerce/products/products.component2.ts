// tslint:disable:no-string-literal
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductlistService } from '../_services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component2.html',
  styleUrls: ['./products.component2.scss'],
})
export class ProductsComponent {
isLoading: boolean;
filterGroup: FormGroup; 
searchGroup: FormGroup;
products : any;

private subscriptions: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    public productlistService: ProductlistService
) { }

  // angular lifecircle hooks
  ngOnInit(): void {
      this.searchProduct();
      console.log("실행");
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }


searchProduct() {
     this.productlistService.getAll().subscribe(
     data => {
         this.products = data;
         console.log(data);
      },
     error => {
     console.log(error);
      });
      console.log('a');
 }


save() {
    this.create();
}
create() {
this.productlistService.add(this.products).subscribe(
  response => {
    this.searchProduct();
  },
  error => {
    console.log(error);
  });
}

delete(VINCode: String){
this.productlistService.delete(VINCode).subscribe(
  response => {
    this.searchProduct(); 
  }, 
  error => { 
    console.log(error);
  });
}

}
