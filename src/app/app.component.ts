import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form-array-ex';
  fg: FormGroup;
  zoneTariffplans: FormArray;
  ngOnInit() {
    this.fg = new FormGroup({});
    this.fg.addControl('zoneTariffplans', new FormArray([]));
    const control = this.fg.controls.zoneTariffplans as FormArray;
    control.push(new FormGroup({
      zone: new FormControl(''), 
      tariffplan: new FormControl('')
    }));
    control.push(new FormGroup({
      zone: new FormControl(''), 
      tariffplan: new FormControl('')
    }));

      
    

  }
  addSkill() {    
    const control = this.fg.controls.zoneTariffplans as FormArray;
    control.push(new FormGroup({
      zone: new FormControl(''), 
      tariffplan: new FormControl('')
    }));
  }
  save() {
    console.log(this.fg);
    // for(const c of this.fg.controls.zoneTariffplans.controls) {
    //   console.log(c.value);
    // }
    for(const c of this.fg.get('zoneTariffplans')['controls']) {
      console.log(c.value);
    }
    
  }

}
