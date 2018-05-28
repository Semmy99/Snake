console.clear();

let snake_wrap = document.querySelector('.snake_wrap'),
	wall_wrap = document.querySelector('.wall_wrap'),
	step = 50,
	posHoriz = 0,
	posVert = 0;


document.onkeyup = function (e) {
	let rectSnake = snake_wrap.getBoundingClientRect(),
			rectWall = wall_wrap.getBoundingClientRect();

	switch (e.keyCode) {
		case 40:
			if (rectSnake.bottom + snake_wrap.offsetWidth > rectWall.bottom) {
				posVert =  rectWall.bottom - rectWall.top - snake_wrap.offsetWidth
				snake_wrap.style.top = posVert + 'px';
			} else {
				posVert += step;
				snake_wrap.style.top = posVert + 'px';
			}
			break;
		case 38:
			if (rectSnake.top - snake_wrap.offsetWidth < rectWall.top) {
				posVert = 0
				snake_wrap.style.top = posVert + 'px';
			} else {
				console.log(123)
				posVert -= step;
				snake_wrap.style.top = posVert + 'px';
			}
			break;
		case 39:
			if (rectSnake.right + snake_wrap.offsetWidth > rectWall.right) {
				posHoriz = rectWall.right - rectWall.left - snake_wrap.offsetWidth
				snake_wrap.style.left = posHoriz + 'px';
			} else {
				posHoriz += step;
				snake_wrap.style.left = posHoriz + 'px';
			}
			break;
		case 37:
			if (rectSnake.left - snake_wrap.offsetWidth < rectWall.left) {
				posHoriz = 0
				snake_wrap.style.left = posHoriz + 'px';
			} else {
				posHoriz -= step;
				snake_wrap.style.left = posHoriz + 'px';
			}
			break;
	}
}

