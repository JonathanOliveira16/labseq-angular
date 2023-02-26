import { Component } from '@angular/core';
import { ConfigService } from './service/config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'labseq-angular';

  valueNumber:any
  inputValue:any 
  showResult: boolean = false
  showError: boolean = false
  message: any

  constructor(
    private service: ConfigService
  ){}

  getValueLabSeqOnClick(){
    this.showError = false
    this.showResult = false
    if(this.inputValue == null){
      this.message = "Please insert a value in the input!"
      this.showError = true
    }else{
      this.service.getLabseqValue(this.inputValue).subscribe(res=>{
        this.valueNumber = res;
        this.showResult =  true
      }, errrorResponse=>{
         console.log(errrorResponse)
         this.message = errrorResponse.error.message
         this.showError = true
      })
    }
  }

}
