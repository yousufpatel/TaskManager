import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appClientLocationStatusValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ClientLocationStatusValidatorDirective, multi: true }]
})
export class ClientLocationStatusValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {

    let isValid = true;
    if (control.value.ClientLocation == 6 && control.value.Status == "Support") {
      isValid = false;
    }
    if (isValid == true) {
      return null;
    } else {

      return { clientLocationStatus: { valid: false } }
    }
    
  }


  constructor() { }

}
