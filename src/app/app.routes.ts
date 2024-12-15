import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';

const routes: Routes = [
    { path: 'productos', component: ProductosComponent },
    { path: 'proveedores', component: ProveedoresComponent },
    { path: '', redirectTo: '/productos', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
