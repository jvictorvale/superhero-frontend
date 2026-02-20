import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dataPassadoValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const dataInput = new Date(value);
    const dataDeHoje = new Date();

    return dataInput > dataDeHoje ? { dataFutura: true } : null;
  };
}
