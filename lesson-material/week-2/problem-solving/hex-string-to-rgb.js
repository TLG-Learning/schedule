function hexStringToRGB(hexString) {
  const hexArr = hexString.split("");

  const r = parseInt(hexArr[1] + hexArr[2], 16);
  const g = parseInt(hexArr[3] + hexArr[4], 16);
  const b = parseInt(hexArr[5] + hexArr[6], 16);

  const rbgObj = {
    r,
    g,
    b,
  };

  return rbgObj;
}
