import {Component, OnInit, TemplateRef} from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private dialogService: NbDialogService,) { }

  ngOnInit(): void {
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context: 'this is some additional help desk information',
      closeOnBackdropClick: false,
    });
  }
}
