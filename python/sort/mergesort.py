import math

def merge(arr, l, r):
    # create temp array and copy data to it
    print(arr[l:r])
    temp = arr[:]
    
    m = math.floor((l + r) / 2)
    i1=l
    i2=m+1
    for curr in range(l,r+1):
        if(i1==m+1):
            arr[curr]=temp[i2]
            i2+=1
            
        elif(i2>r):
            arr[curr]=temp[i1]
            i1+=1
        
        elif(temp[i1]<temp[i2]):
            arr[curr]=temp[i1]
            i1+=1
        
        else:
            arr[curr]=temp[i2]
            i2+=1
            

def mergesort(arr, l, r):
    if l < r:
        m = math.floor((l + r) / 2)
        mergesort(arr, l, m)
        mergesort(arr, m + 1, r)
        merge(arr, l, r)


def main():
    # A = [5,2,1,7,0]
    A = [4, 3, 2, 10, 12, 1, 5, 6]
    print(len(A))
    mergesort(A, 0, len(A) - 1)
    print(A)



if __name__ == '__main__':
    main()