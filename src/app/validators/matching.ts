import { AbstractControl, ValidationErrors } from '@angular/forms';

export const matching = (
  matchTo: string
): ((AbstractControl) => ValidationErrors | null) => {
  return (control: AbstractControl): ValidationErrors | null => {
    return !!control.parent &&
      !!control.parent.value &&
      control.value === control.parent.get(matchTo)?.value
      ? null
      : { isMatching: false };
  };
};
