function FirstFactorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * FirstFactorial(num - 1);
  }
}

// keep this function call here
FirstFactorial(readline());
