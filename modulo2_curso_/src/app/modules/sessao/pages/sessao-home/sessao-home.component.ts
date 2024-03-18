import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sessao } from '../../../../models/interfaces/Sessao/sessao';
import { Subject } from 'rxjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SessaoService } from '../../../../services/sessao/sessao.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sessao-home',
  templateUrl: './sessao-home.component.html',
  styleUrl: './sessao-home.component.css'
})
export class SessaoHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$:Subject<void> = new Subject();
  private ref!: DynamicDialogRef;


  constructor(private sessaoService: SessaoService,
    private messageService: MessageService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService
    ){}



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  handleDeleteSessao($event: any) {
    throw new Error('Method not implemented.');
  }
  handleSessaoEvent($event: any) {
  throw new Error('Method not implemented.');
  }
  sessaoList: Sessao[] = [];
  ngOnDestroy(): void{
    this.destroy$.next();
    this.destroy$.complete();
  }

}
