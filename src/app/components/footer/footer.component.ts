import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@components/icon/icon.component';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'hb-footer',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
