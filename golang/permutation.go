package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
)

var (
	in  = bufio.NewReader(os.Stdin)
	out = bufio.NewWriter(os.Stdout)
)

func main() {
	defer out.Flush()
	a:=int{1,2,3}
	var t int
	fmt.Fscan(in, &t)
	for ; t > 0; t-- {
		var n int
		fmt.Fscan(in, &n)
		arr := make([]int, n)
		for i := 0; i < n; i++ {
			fmt.Fscan(in, &arr[i])
		}

		v1 := solve(arr)
		fmt.Fprintln(out, v1)
	}
}

func printarr(arr []int) {
	for i := 0; i < len(arr); i++ {
		fmt.Fprint(out, arr[i], " ")
	}
	fmt.Fprint(out, "\n")
}

func changes(arr []int) int{
	inplace := 0

	for i, num := range arr {
		if num == i+1 {
			inplace++
		}
	}

	return len(arr) - inplace
}

func solve(arr []int) int{
	m := make(map[int]struct{})
	indexes := make (map[int]struct{})

	for i := len(arr); i >= 0; i-- {
		m[i] = struct{}{}
	}

	for i, num := range arr {

		if num == 0 {
			indexes[i] = struct{}{}
			continue
		}

		delete(m, num)
	}

	keys := make([]int, 0, len(m))
	for k := range m {
		keys = append(keys, k)
	}

	sort.Sort(sort.Reverse(sort.IntSlice(keys)))
	
	keysIndex := 0
	for k, _ := range indexes {
		arr[k] = keys[keysIndex]
		keysIndex++
	}

	printarr(arr)
	return changes(arr)
}