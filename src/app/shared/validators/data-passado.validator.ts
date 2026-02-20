import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dataPassadoValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value || value.length < 10) {
      return null;
    }

    const partes = value.split('/');
    const dia = Number.parseInt(partes[0], 10);
    const mes = Number.parseInt(partes[1], 10) - 1;
    const ano = Number.parseInt(partes[2], 10);

    const dataInput = new Date(ano, mes, dia);
    const dataDeHoje = new Date();

    dataDeHoje.setHours(0, 0, 0, 0);

    return dataInput > dataDeHoje ? { dataFutura: true } : null;
  };
}
