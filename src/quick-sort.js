'use strict';

function quickSort(input) {
    var temp = input;
    var res;
    if(input.length == 0 ||  input.length == 1){
        return input;
    }
    if(typeof input[0] =='number'){
         res = sort(input,0,input.length-1);
       
    }else{
        res = temp.sort();
    }
     
 return res;
};
function  sort(arr, left, right)
{
	var i = left;
	var j = right;
	var tmp;
	var pivotidx = (left + right) / 2; 
	var pivot = parseInt(arr[pivotidx.toFixed()]);  
	/* partition */
	while (i <= j)
	{
		while (parseInt(arr[i]) < pivot)
		i++;
		while (parseInt(arr[j]) > pivot)
			j--;
		if (i <= j)
		{
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
			j--;
		}
	}

	/* recursion */
	if (left < j)
		sort(arr, left, j);
	if (i < right)
		sort(arr, i, right);
	return arr;
}
module.exports = quickSort;