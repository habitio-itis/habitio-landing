import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    Renderer2,
    inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';
import { IconService } from '@services/icon.service';
import { getSize } from './utils';

@Component({
    selector: 'hb-icon',
    standalone: true,
    imports: [CommonModule],
    template: '',
    styleUrls: ['./icon.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
	get src(): string {
		return this._src;
	}

	@Input('icon') set src(value: string) {
		if (this._src === value) {
			return;
		}

		this._src = value;

		this.svgService
			.getIconCached(value)
			.pipe(
				tap(src => {
					if (!src) {
						throw Error(`Could not load icon with name ${this.src}`);
					}
				}),
			)
			.subscribe((src: string | null) => {
				if (!src) {
					return;
				}
				this.innerSrc = src;
				this.updateSize();
				this.elementRef.nativeElement.innerHTML = src;
			});
	}

	private _src: string;

	get size(): string | number | null {
		return this._size;
	}

	@Input() set size(value: string | number | null) {
		this._size = value;
		this.updateSize();
	}

	private _size: string | number | null;

	private innerSrc: string;

    private svgService = inject(IconService);
    private elementRef = inject(ElementRef);
    private renderer = inject(Renderer2);

	updateSize(): void {
		if (!this.innerSrc) {
			return;
		}
		const [iconWidth, iconHeight] = getSize(this.innerSrc);
		const width = +(this._size || iconWidth || 24);
		const height = +(this._size || iconHeight || 24);

		this.renderer.setAttribute(this.elementRef.nativeElement, 'style', `width: ${width}px; height: ${height}px`);
	}
}
