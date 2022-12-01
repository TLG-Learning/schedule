const findSquares = (num) => {
  let min;
  let max;

  if (num % 2 > 0) {
    const sN = Math.floor(num / 2);

    min = sN * sN;
    max = (num - sN) * (num - sN);
  }

  return `${max}-${min}`;
};
