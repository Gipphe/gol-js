var body = document.getElementById('body');

var grid = [];
var row = ','.repeat(100).split(',').slice(0, -1).map(function(val) {
	return Boolean(val);
});
for (var i = 0; i < 100; i++) {
	grid.push(row);
}

var display = function() {
	grid.forEach(function(row, y) {
		var cell;
		row.forEach(function(cell, x) {
			cell = document.createElement('DIV');
			cell.classList.add('cell');
			cell.setAttribute('data-x', x);
			cell.setAttribute('data-y', y);
			body.appendChild(cell);
		});
	});
};

body.addEventListener('click', function(e) {
	var cell = e.target;
	if (!e.classList.contains('cell')) {
		return;
	}
	cell.classList.add('alive');
});

var loop = function() {
	var oldGrid = grid.slice();
	oldGrid.forEach(function(row, y) {
		var cell;
		row.forEach(function(cell, x) {
			console.log(cell, x, y);
		});
	});

	setTimeout(loop, 500);
};
