console.clear();

let snake_wrap = document.querySelector('.snake_wrap'),
	wall_wrap = document.querySelector('.wall_wrap'),
	btn_snake = document.querySelector('.btn_snake'),
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

// При клике на кнопку запуска опускаемся вниз и убираем скролл

btn_snake.onclick = function () {
	var scrollHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);

	let posWin = scrollHeight - document.documentElement.clientHeight
	scrollBy(0, posWin);

	document.body.style.overflow = "hidden"
}
// Управление змейкой через стрелки

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