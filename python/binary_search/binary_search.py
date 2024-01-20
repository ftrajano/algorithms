def binary_search(arr, start, end, key):
	while start <= end:
		mid = (start + end)//2
		if arr[mid]==key:
			return mid
		elif arr[mid] < key:
			start = mid+1
		else:
			end = mid-1
	return -1


def main():
	a = [ 4,6,9,13,18,21,24,38]
	print(a)
	print(binary_search(a,0,len(a)-1, 4))
	print(binary_search(a,0,len(a)-1, 6))
	print(binary_search(a,0,len(a)-1, 13))
	print(binary_search(a,0,len(a)-1, 38))



if __name__ == '__main__':
	main()