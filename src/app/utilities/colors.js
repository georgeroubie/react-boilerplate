function extractColorDimensions(color) {
  const value = color[0] === '#' ? color.slice(1) : color;

  const num = parseInt(value, 16);
  const red = num >> 16;
  const green = num & 0x0000ff;
  const blue = (num >> 8) & 0x00ff;

  return {
    red,
    green,
    blue,
  };
}

function lightenDarkenColor(color, percent) {
  const usePound = color[0] === '#';
  const dimensions = extractColorDimensions(color);

  let r = dimensions.red + percent;
  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  let b = dimensions.blue + percent;
  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  let g = dimensions.green + percent;
  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
}

export function lighten(color, percent) {
  return lightenDarkenColor(color, percent);
}

export function darken(color, percent) {
  return lightenDarkenColor(color, -percent);
}

export function addOpacity(color, percent) {
  const dimensions = extractColorDimensions(color);

  return `rgba(${dimensions.red}, ${dimensions.green}, ${dimensions.blue}, ${percent / 100})`;
}
