import { Injectable } from '@angular/core';
import { Observable, Observer, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticRequestService {
    private cache = new Map<string, Observable<string>>();

	request(url: string): Observable<string> {
		const urlBase = url.split('#')[0];
		const cache = this.cache.get(urlBase);

		if (cache) {
			return cache;
		}

		const observable = new Observable((observer: Observer<string>) => {
			const xhr = new XMLHttpRequest();

			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					const response = xhr.responseType ? xhr.response : xhr.responseText;

					if (xhr.status === 200) {
						observer.next(response);
						observer.complete();
					} else {
						observer.error(response);
					}
				}
			};
			xhr.open('GET', urlBase);
			xhr.send();

			return () => {
				xhr.abort();
			};
		});
		const piped = observable.pipe(shareReplay(1));

		this.cache.set(urlBase, piped);

		return piped;
	}
}
