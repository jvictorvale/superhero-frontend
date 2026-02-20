import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Heroi } from '../../../data/models/heroi.model';
import { HeroiService } from '../../../core/services/heroi.service';
import { VisualizarModalComponent } from '../modals/visualizar-modal/visualizar-modal.component';
import { ConfirmacaoExclusaoModalComponent } from '../modals/confirmacao-exclusao-modal/confirmacao-exclusao-modal.component';

@Component({
  selector: 'app-lista',
  imports: [NgForOf, DatePipe, RouterLink, VisualizarModalComponent, ConfirmacaoExclusaoModalComponent, NgIf],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent implements OnInit {
  herois: Heroi[] = [];

  heroiSelecionado: any = null;
  exibirModal: boolean = false;

  exibirConfirmacaoExclusao: boolean = false;
  heroiExcluir: any = null;

  constructor(
    private readonly _heroiService: HeroiService,
    private readonly _router: Router,
  ) {}

  ngOnInit(): void {
    this.carregarHerois();
  }

  carregarHerois() {
    this._heroiService.getHerois().subscribe((herois) => {
      this.herois = herois;
    });
  }

  editarHeroi(h: Heroi) {
    this._router.navigate(['/cadastro-heroi'], { state: { heroi: h } });
  }

  abrirConfirmacao(heroi: any) {
    this.heroiExcluir = heroi;
    this.exibirConfirmacaoExclusao = true;
  }

  confirmarExclusao() {
    if (this.heroiExcluir) {
      this._heroiService
        .excluirHeroi(this.heroiExcluir.id)
        .subscribe(() => {
          this.carregarHerois();
          this.exibirConfirmacaoExclusao = false;
        });
    }
  }

  visualizarHeroi(h: Heroi) {
    this.heroiSelecionado = h;
    this.exibirModal = true;
  }

  fecharModal() {
    this.exibirModal = false;
    this.heroiSelecionado = null;
  }
}
