export function priceFormat(price) {
  return `${price.currency === "ARS" ? "$ " : "U$S "}${price.decimals
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".")}`;
}

export function decimalsFormat(num) {
  if (num.amount.toString().includes(".")) {
    let numS = num.amount.toString();
    return numS.slice(numS.length - 2);
  } else {
    return "00";
  }
}
