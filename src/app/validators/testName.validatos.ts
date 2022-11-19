import { AbstractControl } from "@angular/forms";

// function to check the prevented data entered
export function testName(regExp:RegExp){
    return (control:AbstractControl)=>{
        const tester=regExp.test(control.value)
        return tester ? {'invalidName' : {value:control.value}} :" ";
    }
}