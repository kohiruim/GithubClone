export const formattedNumber = (num: number): string => {
  if (num >= 1000) {
    const abbreviation = ["", "k", "m", "b"];
    const abbreviationIndex = Math.floor(("" + num).length / 3);
    const shortNum = num / Math.pow(10, abbreviationIndex * 3);
    return shortNum.toFixed(1) + abbreviation[abbreviationIndex];
  }
  return num.toString();
};
