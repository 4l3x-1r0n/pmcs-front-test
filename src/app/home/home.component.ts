import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule, FooterComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
