import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hb-section-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-welcome.component.html',
  styleUrls: ['./section-welcome.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionWelcomeComponent {

}
