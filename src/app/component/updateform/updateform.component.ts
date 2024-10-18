import { Component } from '@angular/core';

@Component({
  selector: 'app-updateform',
  standalone: true,
  imports: [],
  templateUrl: './updateform.component.html',
  styleUrl: './updateform.component.css'
})
export class UpdateformComponent {

  public updatedata() {
    
    let myid = (document.getElementById("item_id") as HTMLInputElement).value;
    let myname =  (document.getElementById("item_name") as HTMLInputElement).value;
    let myprice = (document.getElementById("item_price") as HTMLInputElement).value;
    let mydescription = (document.getElementById("item_description") as HTMLInputElement).value;

    console.log("name : ",myname)
    let datajson = {
      "itemname": myname,
      "itemprice": myprice,
      "itemdescription": mydescription
    }


    fetch("http://localhost:9080/updatedata/" + myid,
      {
        method: "PUT",
        body: JSON.stringify(datajson),
        headers: {
          "content-type": "application/json"
        }

      })
      .then(res =>
        console.log("updated")
      )

  }

}
