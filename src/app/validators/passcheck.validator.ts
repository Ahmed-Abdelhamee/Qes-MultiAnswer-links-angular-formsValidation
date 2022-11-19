import { AbstractControl } from "@angular/forms";

export function passcheck (control:AbstractControl){
    const pass=control.get('password');
    const confirmpass=control.get('confirmpassword');

    if (pass.pristine || confirmpass.pristine){
        return " ";
    }else{
        return pass && confirmpass && pass.value != confirmpass.value ? 
            {"notEqual":true} : " ";
    }
}