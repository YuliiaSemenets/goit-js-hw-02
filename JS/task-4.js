function formatString(string, maxLength = 40) {
  const breakSenetence = string.split("");

  if (breakSenetence.length > maxLength) {
    breakSenetence.length = maxLength;
    return breakSenetence.join("") + "...";
  } else if (
    (breakSenetence.length = maxLength || breakSenetence.length < maxLength)
  ) {
    return breakSenetence.join("");
  }
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
