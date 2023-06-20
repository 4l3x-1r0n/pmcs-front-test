import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, NzFormModule, NzInputModule,NzButtonModule,NzCheckboxModule, NzIconModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export default class LoginComponent implements OnInit {
    validateForm!: UntypedFormGroup;

    submitForm(): void {
        if (this.validateForm.valid) {
            console.log('submit', this.validateForm.value);
        } else {
            Object.values(this.validateForm.controls).forEach(control => {
            if (control.invalid) {
                control.markAsDirty();
                control.updateValueAndValidity({ onlySelf: true });
            }
        });
        }
    }

    constructor(private fb: UntypedFormBuilder) {}

    ngOnInit(): void {
        this.validateForm = this.fb.group({
        userName: [null, [Validators.required]],
        password: [null, [Validators.required]],
        remember: [true]
        });
    }
}
