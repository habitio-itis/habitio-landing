import { Injectable, inject } from '@angular/core';
import { StaticRequestService } from '@services/static-request.service';
import { TK_ICONS_PATH } from '@components/icon/tokens';
import { Observable, map, of, shareReplay } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { symbolToSvg } from '@components/icon/utils';

@Injectable({
    providedIn: 'root',
})
export class IconService {
    private cache = new Map<string, Observable<string | null>>();

    private sanitizer = inject(DomSanitizer);
    private path = inject(TK_ICONS_PATH);
    private staticRequestService = inject(StaticRequestService);

	getIcon(src: string): Observable<string | null> {
		if (src.includes('<svg')) {
			return of(src);
		}

		if (src.includes('.svg')) {
			return this.staticRequestService.request(src);
		}

		return this.staticRequestService.request(this.path(src)).pipe(
			// преобразовываем символ в свгшку, работать с ними одинаково
			map((res: string) => symbolToSvg(res, this.path(src))),
		);
	}

	getIconCached(src: string): Observable<string | null> {
		const cache = this.cache.get(src);

		if (cache) {
			return cache;
		}

		const piped = this.getIcon(src).pipe(shareReplay(1));

		this.cache.set(src, piped);

		return piped;
	}
}
