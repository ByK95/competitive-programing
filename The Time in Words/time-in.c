#include <assert.h>
#include <limits.h>
#include <math.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* readline();

// Complete the timeInWords function below.

// Please either make the string static or allocate on the heap. For example,
// static char str[] = "hello world";
// return str;
//
// OR
//
// char* str = "hello world";
// return str;
//
char* timeInWords(int h, int m) {
  static char numbers[][10] = {"one",  "two", "three",  "four",
                               "five", "six", "seven",  "eight",
                               "nine", "ten", "eleven", "twelve"};
  if (m > 30) {
    return numbers[h];
  }
  return numbers[h - 1];
}

int main() {
  FILE* fptr = fopen(getenv("OUTPUT_PATH"), "w");

  char* h_endptr;
  char* h_str = readline();
  int h = strtol(h_str, &h_endptr, 10);

  if (h_endptr == h_str || *h_endptr != '\0') {
    exit(EXIT_FAILURE);
  }

  char* m_endptr;
  char* m_str = readline();
  int m = strtol(m_str, &m_endptr, 10);

  if (m_endptr == m_str || *m_endptr != '\0') {
    exit(EXIT_FAILURE);
  }

  char* result = timeInWords(h, m);

  fprintf(fptr, "%s\n", result);

  fclose(fptr);

  return 0;
}

char* readline() {
  size_t alloc_length = 1024;
  size_t data_length = 0;
  char* data = malloc(alloc_length);

  while (true) {
    char* cursor = data + data_length;
    char* line = fgets(cursor, alloc_length - data_length, stdin);

    if (!line) {
      break;
    }

    data_length += strlen(cursor);

    if (data_length < alloc_length - 1 || data[data_length - 1] == '\n') {
      break;
    }

    size_t new_length = alloc_length << 1;
    data = realloc(data, new_length);

    if (!data) {
      break;
    }

    alloc_length = new_length;
  }

  if (data[data_length - 1] == '\n') {
    data[data_length - 1] = '\0';
  }

  data = realloc(data, data_length);

  return data;
}
