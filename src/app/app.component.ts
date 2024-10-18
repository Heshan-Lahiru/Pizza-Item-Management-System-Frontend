import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { FormComponent } from './component/form/form.component';
import { TableComponent } from './component/table/table.component';
import { FooterComponent } from './component/footer/footer.component';
import { OtherComponent } from './component/other/other.component';
import { UpdateformComponent } from './component/updateform/updateform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,BodyComponent,FormComponent,TableComponent,FooterComponent,OtherComponent,UpdateformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-angular';
 
}
