package main

import (
	"fmt"
	"regexp"
)

func replacePattern(input string) string {
    re := regexp.MustCompile(`\n.*,NULL,.*\n`)
    return re.ReplaceAllString(input, "\n")
}

func main() {
    text := "header,header\nANNUL,ANNULLED\nnull,NILL\nNULL,NULL"
    result := replacePattern(text)
    fmt.Println("Before:")
    fmt.Print(text)
    fmt.Println("\nAfter:")
    fmt.Print(result)
}
