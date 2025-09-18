package main

import (
	"bufio"
	"fmt"
	"os"
)

var (
	in  = bufio.NewReader(os.Stdin)
	out = bufio.NewWriter(os.Stdout)
)

func main() {
	defer out.Flush()

	var t int
	fmt.Fscan(in, &t)
	for ; t > 0; t-- {
		var n int
		fmt.Fscan(in, &n)
		arr := make([]int, n)
		for i := 0; i < n; i++ {
			fmt.Fscan(in, &arr[i])
		}

		v1,v2 := solve(arr)
		fmt.Fprintln(out, v1, v2)
	}
}

func printarr(arr []int) {
	for i := 0; i < len(arr); i++ {
		fmt.Fprint(out, arr[i], " ")
	}
	fmt.Fprint(out, "\n")
}

func sum(arr []int) int {
	total := 0
	for _, v := range arr {
		total += v
	}
	return total
}

func checkZeroSum(arrs ...[]int) bool {
	for _, arr := range arrs {
		if sum(arr) % 3 != 0 {
			return false
		}
	}
	return true
}

func checkDifferentSum(arrs ...[]int) bool {
	m := make(map[int]struct{})
	for _, arr := range arrs {
		summed := sum(arr) % 3
		if _, exists := m[summed]; exists {
			return false
		}
		m[summed] = struct{}{}
	}
	return true
}

func solve(arr []int) (int, int){
	l := 1
	r := len(arr) - 1
	cnt := 0

	for l != r {
		r1 := checkDifferentSum(arr[0:l], arr[l:r], arr[r:])
		r2 := checkZeroSum(arr[0:l], arr[l:r], arr[r:])

		if r1 || r2 {
			return l, r
		}

		cnt++
		if cnt % 2 == 0 {
			l++
		} else {
			r--
		}
	}


	return 0, 0
}