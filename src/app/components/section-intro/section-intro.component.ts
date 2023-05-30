import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hb-section-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-intro.component.html',
  styleUrls: ['./section-intro.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionIntroComponent {

}
