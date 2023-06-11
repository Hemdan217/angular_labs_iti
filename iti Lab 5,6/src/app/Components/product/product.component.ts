import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ActivatedRoute } from '@angular/router';
import { ProductsApiService } from '../../Services/products-api.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product: IProduct | undefined;
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private productsServiceApi: ProductsApiService
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('prodID')
      ? Number(this.route.snapshot.paramMap.get('prodID'))
      : 0;
    // this.product = this.productsService.getProductByID(this.id);
    // c.	In product details component, display the product details from the new service (getProductByID(pID)).
    this.productsServiceApi.getProductByID(this.id).subscribe((data) => {
      this.product = data;
      console.log('hdudhu');
    });
  }
}
