import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmacao-exclusao-modal',
  imports: [NgIf],
  templateUrl: './confirmacao-exclusao-modal.component.html',
  styleUrl: './confirmacao-exclusao-modal.component.scss'
})
export class ConfirmacaoExclusaoModalComponent {
  @Input() exibir: boolean = false;
  @Input() nomeHeroi: string = '';
  @Output() confirmar = new EventEmitter<void>();
  @Output() cancelar = new EventEmitter<void>();
}
