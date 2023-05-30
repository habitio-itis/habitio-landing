import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[hbButton]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

}
