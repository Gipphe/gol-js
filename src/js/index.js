/* jshint esversion: 6 */
const body = document.getElementById('body');

const grid = [];
const row = ','.repeat(100).split(',').slice(0, -1).map(function(val) {
	return Boolean(val);
});
for (let i = 0; i < 100; i++) {
	grid.push(row);
}

const createCell = () => {
	const cell = document.createElement('DIV');
	const text = document.createTextNode(String.fromCharCode(160));
	cell.classList.add('cell');
	cell.appendChild(text);
	return cell;
};

const display = function() {
	grid.forEach(function(row, y) {
		row.forEach(function(cellVal, x) {
			const cell = createCell();
			cell.classList.toggle('Alive', cellVal);
			cell.setAttribute('data-x', x);
			cell.setAttribute('data-y', y);
			body.appendChild(cell);
		});
	});
};

body.addEventListener('click', function(e) {
	const cell = e.target;
	if (!cell.classList.contains('cell')) {
		return;
	}
	console.log(e.target);
	cell.classList.add('alive');
});


display();
$('.cell').css({'height': $('.cell').width() + 'px'});
