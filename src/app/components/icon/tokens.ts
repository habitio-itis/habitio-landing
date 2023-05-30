import { InjectionToken } from '@angular/core';
import { DEFAULT_ICONS_PATH, StringHandler } from './utils';

export const TK_ICONS_PATH: InjectionToken<StringHandler<string>> = new InjectionToken<StringHandler<string>>(
	'A handler to retrieve USE id for icon by name',
	{
		factory: () => DEFAULT_ICONS_PATH,
	},
);
