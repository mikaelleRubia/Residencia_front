import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SuinoDataTransferService } from './../../../../shared/service/suinos/suino-data-transfer.service';
import { SuinosService } from './../../../../services/suino/suinos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import {EventActon} from '../../../../models/enum/suino-enum'

@Component({
  selector: 'app-historicopeso-home',
  templateUrl: './historicopeso-home.component.html',
  styleUrl: './historicopeso-home.component.css'
})
export class HistoricopesoHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$:Subject<void> = new Subject();
  private ref!: DynamicDialogRef;

  constructor(private suinosService: SuinosService,
    private messageService: MessageService,
    private suinosDtService :SuinoDataTransferService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService){}
  ngOnInit(): void {
    this.getServiceHistoricoData();
  }
  getServiceHistoricoData() {
    throw new Error('Method not implemented.');
  }



  ngOnDestroy(): void{
    this.destroy$.next();
    this.destroy$.complete();
  }
}
