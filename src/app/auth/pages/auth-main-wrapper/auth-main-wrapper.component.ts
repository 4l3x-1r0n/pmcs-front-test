import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-main-wrapper',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './auth-main-wrapper.component.html',
  styleUrls: ['./auth-main-wrapper.component.sass']
})
export class AuthMainWrapperComponent {

}
