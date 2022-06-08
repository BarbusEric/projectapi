function getFlagIcon(iconCode) {
  let iconCodeLowercase = iconCode.toLowerCase();
  console.log(iconCodeLowercase);
  return `https://flagcdn.com/w320/${iconCodeLowercase}.png`;
}
