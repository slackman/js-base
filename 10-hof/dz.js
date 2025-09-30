const arr = [3, 6, 9, 2];

function needsRemoval(element) {
    return element > 5 ? true : false;
}

function deleteElementsFromArray() {

	for (let i = arr.length - 1; i >= 0; i--) {
		if (needsRemoval(arr[i])) {
			arr.splice(i, 1);
		}
	}

}

function deleteElements(arr, deleteElementsFromArray) {
	deleteElementsFromArray();
	return arr;
}

const arrAfterDelete = deleteElements(arr, deleteElementsFromArray);
console.log(arrAfterDelete);