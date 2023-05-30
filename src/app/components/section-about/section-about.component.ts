import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hb-section-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionAboutComponent {

}
