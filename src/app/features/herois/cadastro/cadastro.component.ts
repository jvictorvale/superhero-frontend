import { Superpoderes } from './../../../data/models/superpoderes.model';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SuperpoderesService } from '../../../core/services/superpoderes.service';
import { Location, NgForOf, NgIf } from '@angular/common';
import { HeroiService } from '../../../core/services/heroi.service';
import { dataPassadoValidator } from '../../../shared/validators/data-passado.validator';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule, NgForOf, NgIf],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent implements OnInit {
  heroiForm!: FormGroup;
  superpoderes: Superpoderes[] = [];
  isEdicao: boolean = false;
  heroiIdEdit?: number;
  heroiEdit: any;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _superpoderesService: SuperpoderesService,
    private readonly _heroiService: HeroiService,
    private readonly _router: Router,
    private readonly _location: Location,
  ) {
    const nav = this._router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['heroi']) {
      this.isEdicao = true;
      this.heroiEdit = nav.extras.state['heroi'];
      this.heroiIdEdit = this.heroiEdit.id;
    }
  }

  ngOnInit() {
    this.carregarSuperpoderes();

    this.heroiForm = this._fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(120),
        ],
      ],
      nomeHeroi: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(120),
        ],
      ],
      dataNascimento: ['', [Validators.required, dataPassadoValidator()]],
      altura: [0, [Validators.required, Validators.min(0.01)]],
      peso: [0, [Validators.required, Validators.min(0.01)]],
      superpoderId: [[],[Validators.required, Validators.minLength(1)]],
    });

    if (this.isEdicao) {
      this.preencherForm(this.heroiEdit);
    }
  }

  carregarSuperpoderes() {
    this._superpoderesService.getSuperpoderes().subscribe({
      next: (superpoderes) => {
        this.superpoderes = superpoderes;
      },
    });
  }

  salvar() {
    if (this.heroiForm.valid) {
      const heroi = {
        ...this.heroiForm.value,
        id: this.isEdicao ? this.heroiIdEdit : 0,
      };

      if (this.isEdicao) {
        this._heroiService.atualizarHeroi(heroi).subscribe({
          next: () => {
            this._router.navigate(['/lista-herois']);
          },
          error: (err) => {
            console.error('Erro ao atualizar herói:', err);
          },
        });
      } else {
        this._heroiService.salvarHeroi(heroi).subscribe({
          next: () => this._router.navigate(['/lista-herois']),
          error: (err) => console.error('Erro ao salvar herói:', err),
        });
      }
    }
  }

  preencherForm(heroi: any) {
    const idsSelecionados = heroi.superpoderes.map((sp: any) => Number(sp.superpoderId));

    this.heroiForm.patchValue({
      nome: heroi.nome,
      nomeHeroi: heroi.nomeHeroi,
      dataNascimento: heroi.dataNascimento
        ? heroi.dataNascimento.split('T')[0]
        : null,
      altura: heroi.altura,
      peso: heroi.peso,
      superpoderId: idsSelecionados
    });

    this.heroiForm.get('superpoderId')?.updateValueAndValidity();
  }

  onCheckChange(event: any) {
    const id = Number(event.target.value);
    let selecionados = this.heroiForm.get('superpoderId')?.value;

    if (!Array.isArray(selecionados)) {
      selecionados = [];
    }

    if (event.target.checked) {
      selecionados.push(id);
    } else {
      selecionados = selecionados.filter((s: number) => s !== id);
    }

    const control = this.heroiForm.get('superpoderId');
    if (control) {
      control.setValue(selecionados);
      control.markAsDirty();
      control.markAsTouched();
      control.updateValueAndValidity();
    }
  }

  estaMarcado(id: number): boolean {
    const selecionados = this.heroiForm.get('superpoderId')?.value;
    return Array.isArray(selecionados) && selecionados.includes(id);
  }

  voltar(): void {
    this._location.back();
  }
}
