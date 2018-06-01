console.clear();

let snake_wrap = document.querySelector('.snake_wrap'),
	wall_wrap = document.querySelector('.wall_wrap'),
	step = 20,
	posHoriz = 0,
	posVert = 0;

let someElem = document.createElement('div');
someElem.style.width = '20px';
someElem.style.height = '20px';
someElem.style.backgroundColor = '#000';
someElem.style.position = 'absolute';
someElem.style.left = '300px';
someElem.style.top = '100px';


wall_wrap.appendChild(someElem);

document.onkeydown = function (e) {
	let rectSnake = snake_wrap.getBoundingClientRect(),
		rectWall = wall_wrap.getBoundingClientRect();

	switch (e.keyCode) {
		case 40:
			if (rectSnake.bottom + wall_wrap.clientTop > rectWall.bottom - wall_wrap.clientTop) {
				posVert = rectWall.bottom - rectWall.top - snake_wrap.offsetWidth - wall_wrap.clientTop * 2
				snake_wrap.style.top = posVert + 'px';
			} else {
				posVert += step;
				snake_wrap.style.top = posVert + 'px';
			}
			break;
		case 38:

			if (rectSnake.top - wall_wrap.clientTop < rectWall.top + wall_wrap.clientTop) {
				posVert = 0
				snake_wrap.style.top = posVert + 'px';
			} else {
				posVert -= step;
				snake_wrap.style.top = posVert + 'px';
			}
			break;
		case 39:
			if (rectSnake.right + wall_wrap.clientLeft > rectWall.right - wall_wrap.clientLeft) {
				posHoriz = rectWall.right - rectWall.left - snake_wrap.offsetWidth - wall_wrap.clientLeft * 2
				snake_wrap.style.left = posHoriz + 'px';
			} else {
				posHoriz += step;
				snake_wrap.style.left = posHoriz + 'px';
			}
			break;
		case 37:
			if (rectSnake.left - wall_wrap.clientLeft < rectWall.left + wall_wrap.clientLeft) {
				posHoriz = 0
				snake_wrap.style.left = posHoriz + 'px';
			} else {
				posHoriz -= step;
				snake_wrap.style.left = posHoriz + 'px';
			}
			break;
	}
	if (rectSnake.left - rectWall.left > someElem.getBoundingClientRect().right - rectWall.left) {

	}
}