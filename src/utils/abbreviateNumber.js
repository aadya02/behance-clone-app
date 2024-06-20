const abbreviateNumber = (value) => {
  let suffixes = ['', 'k', 'M', 'B', 'T'];
  let suffixIndex = 0;

  while (value >= 1000 && suffixIndex < suffixes.length) {
    value /= 1000;
    suffixIndex++;
  }

  return `${suffixIndex === 0 ? value : value.toFixed(1)}${
    suffixes[suffixIndex]
  }`;
};

export default abbreviateNumber;
