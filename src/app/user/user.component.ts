import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  message: string | undefined;

  constructor(private http: HttpClient, public appService: AppService) {}

  ngOnInit() {
    this.listUser();
    this.listAccount();
    this.listProduct();
  }

  ////////////USER////////////////

  users: User[] = [];
  user: User = new User();

  saveUser() {
    if (this.user.id) {
      this.appService
        .put('/user/' + this.user.id, this.user)
        .then((result) => {
          this.user = new User();
          this.listUser();
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          this.message = error.error.message;
        });
    } else {
      this.appService
        .post('/user', this.user)
        .then((result) => {
          this.user = new User();
          this.listUser();
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          this.message = error.error.message;
        });
    }
    this.message = '';
  }

  cancelUser() {
    this.user = new User();
    this.message = '';
  }

  listUser() {
    this.appService
      .get('/user')
      .then((result) => {
        this.users = result.content;
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        this.message = error.error.message;
      });
    this.message = '';
  }

  selectUserForEdit(user: User) {
    this.user = new User();
    this.user.id = user.id;
    this.user.name = user.name;
    this.user.email = user.email;
    this.message = '';
  }

  deleteUser(id: number) {
    this.appService
      .delete('/user/' + id)
      .then((result) => {
        this.user = new User();
        this.listUser();
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        this.message = error.error.message;
      });
    this.message = '';
  }

  ////////////ACCOUNT

  accounts: Account[] = [];
  account: Account = new Account();

  saveAccount() {
    if (this.account.id) {
      this.appService
        .put('/account/' + this.account.id, this.account)
        .then((result) => {
          this.account = new Account();
          this.listAccount();
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          this.message = error.error.message;
        });
    } else {
      this.appService
        .post('/account', this.account)
        .then((result) => {
          this.account = new Account();
          this.listAccount();
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          this.message = error.error.message;
        });
    }
    this.message = '';
  }

  cancelAccount() {
    this.account = new Account();
    this.message = '';
  }

  listAccount() {
    this.appService
      .get('/account')
      .then((result) => {
        this.accounts = result.content;
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        this.message = error.error.message;
      });
    this.message = '';
  }

  selectAccountForEdit(account: Account) {
    this.account = new Account();
    this.account.id = account.id;
    this.account.accountName = account.accountName;
    this.account.iban = account.iban;
    this.account.userId = account.userId;
    this.message = '';
  }

  deleteAccount(id: number) {
    this.appService
      .delete('/account/' + id)
      .then((result) => {
        this.user = new User();
        this.listAccount();
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        this.message = error.error.message;
      });
    this.message = '';
  }

  ////////////PRODUCT

  products: Product[] = [];
  product: Product = new Product();

  saveProduct() {
    if (this.product.id) {
      this.appService
        .put('/product/' + this.product.id, this.product)
        .then((result) => {
          this.product = new Product();
          this.listProduct();
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          this.message = error.error.message;
        });
    } else {
      this.appService
        .post('/product', this.product)
        .then((result) => {
          this.product = new Product();
          this.listProduct();
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          this.message = error.error.message;
        });
    }
    this.message = '';
  }

  cancelProduct() {
    this.product = new Product();
    this.message = '';
  }

  listProduct() {
    this.appService
      .get('/product')
      .then((result) => {
        this.products = result.content;
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        this.message = error.error.message;
      });
    this.message = '';
  }

  selectProductForEdit(product: Product) {
    this.product = new Product();
    this.product.id = product.id;
    this.product.name = product.name;
    this.product.price = product.price;
    this.product.accountId = product.accountId;
    this.message = '';
  }

  deleteProduct(id: number) {
    this.appService
      .delete('/product/' + id)
      .then((result) => {
        this.product = new Product();
        this.listProduct();
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        this.message = error.error.message;
      });
    this.message = '';
  }
}

export class User {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
}

export class Account {
  id: number | undefined;
  accountName: string | undefined;
  iban: string | undefined;
  userId: number | undefined;
}

export class Product {
  id: number | undefined;
  name: string | undefined;
  price: number | undefined;
  accountId: number | undefined;
}
