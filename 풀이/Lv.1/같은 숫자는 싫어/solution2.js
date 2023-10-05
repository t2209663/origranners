function solution(arr)
{
	return arr.filter((val,index) => val != arr[index+1]);
} //효율성은 떨어짐
