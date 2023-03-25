
//defining function

const swap=(arr,i,j)=>{
    if(i>arr.length-1||j>arr.length-1){
        return "check provided indeces if they are not greater than provided array length"
    }
  let x=arr[i];
  arr[i]=arr[j];
  arr[j]=x;
  return arr;
}

//calling function

console.log(swap([1,2,3,4],0,3))