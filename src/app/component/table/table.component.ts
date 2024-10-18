import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

public getdata(){

 let tabledata = document.getElementById("tbody") as HTMLTableElement;

 tabledata.innerHTML =''

  fetch("http://localhost:9080/getdata")
  .then(res => res.json())
  .then(data => {
    console.log(data);

data.forEach((datas:any) => {
  let row =  
                      `
                      <tr>
                   
                     <td>${datas.itemname}</td>
                      <td>${datas.itemprice}</td>
                      <td>${datas.itemdescription}</td>
                      </tr>`
  
                      tabledata.innerHTML+=row
});

    

  })

}


}
