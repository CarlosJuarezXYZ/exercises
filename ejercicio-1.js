function primos(a, b) {
  let parameter1 = a + 1;
  let parameter2 = b - 1;
  for (let i = parameter1; i <= parameter2; i++) {
    let count = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j == 0 && j != 1 && j < i) {
        count++;
      }
    }
    if (count == 0) {
      console.log(`numero primo ${i}`);
    }
  }
}

primos(1, 10);
