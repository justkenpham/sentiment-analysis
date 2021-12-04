
import { ProductFilter } from "../constants/Product";

function swap(arr, leftIndex, rightIndex) {
    var temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
}

function partition(arr, left, right) {
    var pivot = arr[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

export const SortRating = (arr, order) => {
    order == ProductFilter.tag.rating['Lowest To Highest']
    ? arr.sort((prod_1, prod_2) => prod_1.rating > prod_2.rating ? 1 : -1)
    : arr.sort((prod_1, prod_2) => prod_1.rating < prod_2.rating ? 1 : -1)
}