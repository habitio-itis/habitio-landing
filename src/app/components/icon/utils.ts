const WIDTH_REGEX = /viewBox=['"]0 0 (\d+) \d+['"]/;
const HEIGHT_REGEX = /viewBox=['"]0 0 \d+ (\d+)['"]/;

const SymbolRegex = (symbol: string): RegExp => new RegExp(`<symbol[^>]*id="${symbol}"[\\s\\S]*?<\/symbol>`, 'g');
const ViewboxRegex = /viewBox=['"](.*?)['"]/;

export function getSize(source: string): [number | null, number | null] {
	const matchedWidth = source.match(WIDTH_REGEX);
	const matchedHeight = source.match(HEIGHT_REGEX);

	if (!matchedWidth || !matchedWidth) {
		return [null, null];
	}

	return [+matchedWidth[1], +(matchedHeight?.[1] ?? 0)];
}

export function setSize(source: string, width?: number, height?: number): string {
	return source.replace(WIDTH_REGEX, `width="${width}"`).replace(HEIGHT_REGEX, `height="${height}"`);
}

export function symbolToSvg(res: string, mappedSrc: string): string | null {
	const use = mappedSrc.split('#')[1];
	const matched = res.match(SymbolRegex(use));

	if (!matched?.length) {
		return null;
	}

	const matchedViewbox = matched[0].match(ViewboxRegex);
	if (!(matchedViewbox && matchedViewbox[1])) {
		return null;
	}

	return `<svg
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			focusable='false'
			viewBox='${matchedViewbox[1]}'
		>
			<use xlink:href='${mappedSrc}'></use>
		</svg>`;
}

export type StringHandler<T> = (item: T) => string;

export const DEFAULT_ICONS_PATH: StringHandler<string> = name =>
	name.includes('.svg#') ? name : `assets/sprite.svg#${name}`;
