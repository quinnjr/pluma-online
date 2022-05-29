import { AbstractControl, ValidatorFn, ValidationErrors, Validator, NG_VALIDATORS } from "@angular/forms";

/**
 * Validates that email and display name are not equivalent
 * @param email User email handle
 * @returns Valid -> null
 *          Invalid -> InvalidDisplayName Error
 */
export function sameAsEmailValidator(email: string): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null =>
    control.value?.toLowerCase() != email ? null : {InvalidDisplayName: control.value};

}
