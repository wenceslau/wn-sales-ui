import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(public appService: AppService, private activeRoute: ActivatedRoute) {}

  uuid: string | undefined;

  payment: Payment = new Payment()

  message: string = '';
  
  ngOnInit(): void {
    let value = this.activeRoute.snapshot.paramMap.get('id')
    console.log('Value: '+ value)
    this.uuid = this.activeRoute.snapshot.params['id'];
    console.log('UUID: '+ this.uuid)

    this.listPayment(this.uuid)
  }

  listPayment(uuid: any) {
    this.appService
      .get('/payment/'+uuid)
      .then((result) => {
        this.payment = result;
        this.message = '';
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        this.message = error.error.message;
      });
    this.message = '';
  }

  confirmPayment() {
    this.appService
      .post('/payment/'+this.uuid, '')
      .then((result) => {
        this.payment = new Payment;
        this.message = result.message;
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        this.message = error.error.message;
      });
    this.message = '';
  }
}

export class Payment {
  accountId: number | undefined;
  accountName: string | undefined;
  totalPayment: string | undefined;
  products: Product[] = [];
}

export class Product {
  id: number | undefined;
  name: string | undefined;
  price: number | undefined;
  accountId: number | undefined;
}

