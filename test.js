// These functions are extentions for standart Array type

Array.prototype.top = function () {
	if(this.length > 0) {
		return this[this.length - 1];
	} else {
		throw Error('Cannot make TOP for empty array');
	}
}

Array.prototype.isEmpty = function () {
	return this.length === 0;
}

describe('Nastya testing something', function () {

	var stack = [];

	beforeEach(function () {
		stack = [];
	});

	it('Test 1', function () {
		expect(stack.isEmpty()).toBe(true);
	});

	it('Test 2', function () {
		stack.push('Google');

		expect(stack.isEmpty()).not.toBe(true);
	});

	it('Test 3', function () {
		stack.push('google');
		stack.pop();

		expect(stack.isEmpty()).toBe(true);
	});

	it('Test 4', function () {

		var element = 'Nastya';
		stack.push(element);

		var takedElement = stack.pop();

		expect(element).toBe(takedElement);

	});

	// unshift  - FIFO

	it('Test 5', function () {

		var element1 = "N";
		stack.unshift(element1);
		var element2 = "A";
		stack.unshift(element2);
		var element3 = "S";
		stack.unshift(element3);

		expect(stack.pop()).toBe(element1);
		expect(stack.pop()).toBe(element2);
		expect(stack.pop()).toBe(element3);

	});

	it('Test 6', function () {

		stack.pop();

		expect(stack.length).toBe(0);

	});

	it('Test 7', function () {

		stack.push('yandex');

		stack.top();

		expect(stack.isEmpty()).not.toBe(true);

	});

	it('Test 8', function () {

		var element = 'Google';

		stack.unshift(element);

		var takedElement = stack.top();

		expect(element).toBe(takedElement);

	});

	it('Test 9', function () {

		var lastElement = 'lastElement';

		stack.push('elem1');
		stack.push('elem2');
		stack.push('elem3');
		stack.push(lastElement);

		expect(stack.top()).toBe(lastElement);

	});

	it('Test 10', function () {

		var lastElement = 'lastElement';

		stack.push('elem1');
		stack.push('elem2');
		stack.push('elem3');
		stack.push(lastElement);

		expect(stack.top()).toBe(lastElement);
		expect(stack.top()).toBe(lastElement);
		expect(stack.top()).toBe(lastElement);
		expect(stack.top()).toBe(lastElement);

	});

	it('Test 11', function () {

		// var lastElement = 'lastElement';

	});

	it('Test 12', function () {

		stack.push(null);

		expect(stack.isEmpty()).toBe(false);

	});

	it('Test 13', function () {

		stack.push(null);

		expect(stack.pop()).toBe(null);

	});

	it('Test 14', function () {

		stack.push(null);

		expect(stack.top()).toBe(null);

	});


});