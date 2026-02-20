import { DatePipe, NgIf, NgForOf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Heroi } from '../../../../data/models/heroi.model';

@Component({
  selector: 'app-visualizar-modal',
  imports: [NgIf, DatePipe, NgForOf],
  templateUrl: './visualizar-modal.component.html',
  styleUrl: './visualizar-modal.component.scss',
})
export class VisualizarModalComponent {
  @Input() heroi?: Heroi;
  @Input() exibir: boolean = false;
  @Output() fechar = new EventEmitter<void>();

  fecharModal() {
    this.fechar.emit();
  }
}
