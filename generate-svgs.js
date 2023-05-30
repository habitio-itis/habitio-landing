const svgstore = require('svgstore');
const fs = require('fs');
const path = require('path');

let sprite = svgstore();

const folder = './src/icons';

fs.readdir(folder, (err, files) => {
	files.forEach(file => {
		sprite = sprite.add(file.split('.')[0], fs.readFileSync(path.join(folder, file), 'utf8'));
	});

	fs.writeFileSync('./src/assets/sprite.svg', sprite.toString());
});
