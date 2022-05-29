import { AbstractControl, ValidatorFn, ValidationErrors, Validator, NG_VALIDATORS } from "@angular/forms";

/**
 * Validates that both password inputs are equivalent
 * @param pass First edited password
 * @returns Valid -> null
 *          Invalid -> PassMismatch Error
 */
export function samePassValidator(pass: string): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null =>
    control.value === pass ? null : {PassMismatch: control.value};

}
