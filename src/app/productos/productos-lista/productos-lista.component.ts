import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Producto';
import { Subscription } from 'rxjs';
import { ProductosService } from '../productos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {

  productos: Producto[] = [];
  subscript: Subscription;
  carrito = this.router.url === '/carrito' ? true : false;
  productosCarrito: Producto[];

  constructor(private pService: ProductosService, private router: Router, private route: ActivatedRoute) { }

  add() {
    this.pService.addProduct();
  }

  ngOnInit() {
    if (this.carrito) {

    } else {
      this.productos = this.pService.getProductos();
      this.subscript = this.pService.actualizarP.subscribe(
        (arregloP: Producto[]) => {
          this.productos = arregloP;
        });
    }
  }

}
