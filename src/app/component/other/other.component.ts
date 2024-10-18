import { Component } from '@angular/core';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {


 public  deletedata(){

 let itemids =  (document.getElementById("itemid") as HTMLInputElement).value;

 fetch("http://localhost:9080/deletedata/" + itemids, { method: 'DELETE' })
     .then(res => {
      console.log('Data deleted:'); 
     }
    )
   
     

  }

}
