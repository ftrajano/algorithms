// Mergesort

function merge(arr, l, r){

    let m = Math.floor((l+r)/2)
    // copy the A array to a temporary array
    var temp = []
    
    for(let i=0; i<arr.length; i++){
        temp[i] = arr[i]
    }

    let i1 = l
    let i2 = m+1
    for(let curr=l; curr<=r; curr++){
        if(i1 ==m+1){
            arr[curr] = temp[i2++]
        } else if (i2>r){
            arr[curr] = temp[i1++]
        } else if (temp[i1] < temp[i2]){
            arr[curr] = temp[i1++]
        } else {
            arr[curr] = temp[i2++]
            
    }
    }
}

function mergesort(arr,l,r){
    if(l<r){
        console.log(l,r)
        let m = Math.floor((l+r)/2)
        mergesort(arr, l, m)
        mergesort(arr, m+1, r)
        merge(arr, l, r)
    }
}


a = [4, 3, 2, 10, 12, 1, 5, 6]
mergesort(a, 0, a.length-1)
console.log(a)