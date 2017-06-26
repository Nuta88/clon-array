function clonArrayInNewArray(arr) {
	var newArray = new Array(arr.length);
	for (var i = 0; i < arr.length; i++) {
		newArray[i] = new Array(arr[i].length);
		for (var j = 0; j < arr[i].length; j++) {
			newArray[i][j] = arr[i][j];
		}
	}
	return newArray;
}

function testCopyArray() {
	var inputArray = [ [ 2, 3, 4 ], [ 1, 9, 7 ], [ 8, 8, 5 ] ];
	var expectedArr = [ [ 2, 3, 4 ], [ 1, 9, 7 ], [ 8, 8, 5 ] ];
	var receivedArr = clonArrayInNewArray(inputArray);
	if (expectedArr.toString() == receivedArr.toString()) {
		document.write("function is working good");
	} else {
		document.write("function is working bad");
	}
}
 testCopyArray();
