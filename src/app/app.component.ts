import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hb-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'habitio-landing';
}
