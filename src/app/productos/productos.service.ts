import { Injectable } from '@angular/core';
import { Producto } from '../Producto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  actualizarP = new Subject<Producto[]>();

  private productos: Producto[] = [
    new Producto(1, 'Zbook', 'hp', 'laptop', 15000, 8),
    new Producto(2, 'Audifonos inalambricos', 'Bose', 'audifonos', 7000, 5),
    new Producto(3, 'Apple Watch', 'Apple', 'reloj', 9500, 28),
    new Producto(4, 'Camara D850', 'Nikon', 'camaras', 15000, 9),
    new Producto(5, 'Powerbank', 'ADATA', 'electronicos', 1500, 18),
    new Producto(6, 'Omen', 'hp', 'laptop', 15000, 8),
    new Producto(7, 'Inspiron', 'dell', 'laptop', 13000, 8),
]

  constructor() { }

  getProductos(): Producto[] {
    return this.productos.slice();
  }

  addProduct() {
  
  }

  private notificarCambios() {
    this.actualizarP.next(this.productos.slice());
  }
}
