const arr = [3, 6, 9, 2];

function needsRemoval(element) {
    return element > 5;
}

function deleteElementsFromArray(array, shouldRemove) {
	const copyArr = array.slice()
	for (let i = copyArr.length - 1; i >= 0; i--) {
		if (shouldRemove(copyArr[i])) {
            copyArr.splice(i, 1);
        }
	}
	return copyArr;
}

function deleteElements(array, remover) {
	return deleteElementsFromArray(array, remover);
}

const arrAfterDelete = deleteElements(arr, needsRemoval);
console.log(arrAfterDelete);