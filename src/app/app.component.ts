import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length: number = 0;
  event1!: string;
  password: string = '';
  // disable: boolean = true;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
    // this.disable = !this.disable;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
    // this.disable = !this.disable;

  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
    // this.disable = !this.disable;

  }

  onChangeLength(event: Event){
    this.event1 = (<HTMLInputElement>event.target).value;
    let parsedInt = parseInt(this.event1);
    // console.log('ParsedInt: ', parsedInt);

    if(!isNaN(parsedInt)){
      this.length = parsedInt;
      console.log('length: ', this.length);
    }
  }

onButtonClick(){
  let letters: string = 'abcdefghijklmnopqrstuvxywz';
  let numbers: string = '1234567890';
  let symbol: string = '!@#$%^&*(),';
  let validChars: string = '';

  if(this.includeLetters){
    validChars += letters;
  }

  if(this.includeNumbers){
    validChars += numbers;
  }

  if(this.includeSymbols){
    validChars += symbol;
  }

  let generatedPwd: string = '';
  // console.log('Legnth of valid chars: ', validChars.length);
  for(let i =0; i< this.length; i++){
    let index = Math.floor(Math.random() * validChars.length);
    // console.log("Index is: ", index);
    generatedPwd += validChars[index];
    // console.log('validChars[index]: ', validChars[index]);
  }
  this.password = generatedPwd;
  // console.log("This.includeLetters", this.includeLetters);
  // console.log("This.includeNumbers", this.includeNumbers);
  // console.log("This.includeSymbol", this.includeSymbol);
  // this.password = "My Password!";
}

//  getPassword(){
//    return this.password;
//  }

// getName(){
//   return 'Agomani';
// }

}
