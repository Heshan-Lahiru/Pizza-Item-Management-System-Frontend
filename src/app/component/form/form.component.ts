import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
 
  public savepizza() {
    let name =  (document.getElementById("itemname") as HTMLInputElement).value;
    let price=  (document.getElementById("itemprice") as HTMLInputElement).value;
    let description=  (document.getElementById("itemdescription") as HTMLInputElement).value;
  
   
  let jsondata = 
    {
      "itemname" : name,
      "itemprice" : price,
      "itemdescription" : description
  }
  
  
    fetch("http://localhost:9080/postdata",
      {
        method : "POST",
        body : JSON.stringify(jsondata),
        headers : {
          "content-type" : "application/json"
        }
      }
    )
    .then(res => res.json())
    .then(data => {
      console.log("successfull");
      alert("successfully added");
    })
    
    }
}
