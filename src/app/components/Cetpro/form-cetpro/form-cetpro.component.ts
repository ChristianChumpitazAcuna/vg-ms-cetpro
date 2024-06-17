import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-form-cetpro',
  templateUrl: './form-cetpro.component.html',
  styles: [
  ]
})
export class FormCetproComponent {

  private apiService = inject(ApiService);
  private fb = inject(FormBuilder);
  form: FormGroup

  constructor() {
    this.form = this.fb.group({
      name: [''],
      modularCode: [''],
      dreGre: [''],
      managementType: ['']
    });
  }

  onSubmit() {
    const data = this.form.value;
    this.apiService.postData(data).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
