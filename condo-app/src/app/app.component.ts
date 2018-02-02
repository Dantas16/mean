import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Market';

  newProd = {name: '', price: 0};

  products = [
    {name: 'Shirt', price: 8.99},
    {name: 'Pants', price: 20.00}
  ];
  
  addProd(){
    this.products.push(this.newProd);
    this.newProd = {name: '', price: 0};
  }

  removeProd(prod){
    var id = this.products.indexOf(prod);
    this.products.splice(id, 1);
  }

}
