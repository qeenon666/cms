import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component2';
import { ProductseditComponent } from './products/products.edit-component';
import { ECommerceComponent } from './e-commerce.component';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteCustomerModalComponent } from './customers/components/delete-customer-modal/delete-customer-modal.component';
import { DeleteCustomersModalComponent } from './customers/components/delete-customers-modal/delete-customers-modal.component';
import { FetchCustomersModalComponent } from './customers/components/fetch-customers-modal/fetch-customers-modal.component';
import { UpdateCustomersStatusModalComponent } from './customers/components/update-customers-status-modal/update-customers-status-modal.component';
import { EditCustomerModalComponent } from './customers/components/edit-customer-modal/edit-customer-modal.component';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CustomersComponent,
    ProductsComponent,
    ProductseditComponent,
    ECommerceComponent,
    DeleteCustomerModalComponent,
    DeleteCustomersModalComponent,
    FetchCustomersModalComponent,
    UpdateCustomersStatusModalComponent,
    EditCustomerModalComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ECommerceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbDatepickerModule
  ],
  entryComponents: [
    DeleteCustomerModalComponent,
    DeleteCustomersModalComponent,
    UpdateCustomersStatusModalComponent,
    FetchCustomersModalComponent,
    EditCustomerModalComponent,
  ]
})
export class ECommerceModule {}
