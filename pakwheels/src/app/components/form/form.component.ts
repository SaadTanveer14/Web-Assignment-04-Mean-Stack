import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  myFunction() {
    var x=document.getElementById("collapse1");
    if (x?.style.display == "none") {
      x.style.display = "block";
      
    }
    else {
      if(x!=null){
        x.style.display = "none";
        
      }
    }
  }
  
  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  onSubmit(data: any)
  {
    
    console.warn(data)
    console.warn(data['model'])

    
    var temp = "Pakistanzindabad carmela";
    temp=temp.toLowerCase();
    console.warn(temp.includes("car".toLowerCase()));

    this.myEvent.emit(data);

  }



}
