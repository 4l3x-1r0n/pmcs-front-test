import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@Component({
  selector: 'app-auth-main-wrapper',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent],
  templateUrl: './auth-main-wrapper.component.html',
  styleUrls: ['./auth-main-wrapper.component.sass']
})
export class AuthMainWrapperComponent {

}
