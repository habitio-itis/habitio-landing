import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hb-section-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-features.component.html',
  styleUrls: ['./section-features.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionFeaturesComponent {

}
