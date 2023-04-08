import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['../css/test.component.css']
})
export class TestComponent {
  isLoading: boolean = false;
  product: Product = {
    name: '',
    code: '',
    description: '',
    quantity: 0,
  };
  errors: Errors = {
    productName: '',
    productCode: '',
    productDescription: '',
    productQuantity: '',
  };
	hasError: boolean = false;

  ngOnInit() {
    this.isLoading = true;
    // gọi api  
    setTimeout(() => {
      // sau khi gọi xong
      this.isLoading = false;
    }, 1000)
  } 

  handleClick() {
		console.log('handle click')
		this.clearError();
    if (!this.product.name) {
			this.hasError = true;
      this.errors.productName = 'Product name require';
    } else if (this.product.name.length < 3) {
      this.hasError = true;
      this.errors.productName = 'Product name require > 3';
    }
    if (!this.product.code) {
			this.hasError = true;
      this.errors.productCode = 'Product code require';
    }
    if (!this.product.description) {
			this.hasError = true;
      this.errors.productDescription = 'Product description require'
    }
    if (this.product.quantity < 1) {
			this.hasError = true;
      this.errors.productQuantity = 'Product quantity require'
    }
		if(!this.hasError) {
			alert('success');
		}
  }
  clearError() {
		this.hasError = false;
    this.errors = {
      productName: '',
      productCode: '',
      productDescription: '',
      productQuantity: '',
    }
  }
}

interface Product {
  name: string,
  code: string,
  description: string,
  quantity: number,
};

interface Errors {
  productName: string,
  productCode: string,
  productDescription: string,
  productQuantity: string,
}