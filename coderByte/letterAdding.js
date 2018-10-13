function SimpleAdding(num) {
  if (num == 0) {
    return 0;
  } else {
    return num + SimpleAdding(num - 1);
  }
}

// keep this function call here
  SimpleAdding(readline());

