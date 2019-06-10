import { Component, OnInit } from '@angular/core';
import { Contato } from '../entidade/contato';

@Component({
  selector: 'app-salvar-contato',
  templateUrl: './salvar-contato.component.html',
  styleUrls: ['./salvar-contato.component.scss'],
})
export class SalvarContatoComponent implements OnInit {

  contao: Contato = new Contato();
  contato: any;
  constructor() { }

  ngOnInit() {}

  salvar(){
    alert(this.contato.nome);
  }
}
