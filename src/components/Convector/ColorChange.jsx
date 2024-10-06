export default function ColorChange({ hex }) {
  const hexToRGB = (hex) => {
    if (hex[0] === "#" && hex.length === 7 && hex !== "") {
      const numericValue = parseInt(hex.slice(1), 16);
      const r = (numericValue >> 16) & 0xff;
      const g = (numericValue >> 8) & 0xff;
      const b = numericValue & 0xff;
      if (r === 0 && g === 0 && b === 0) {
        return "Ошибка!";
      } else {
        return `rgb(${r}, ${g}, ${b})`;
      }
    } else if (hex[0] !== "#" && hex.length === 7) {
      return "Ошибка! Начните с #";
    }
  };

  return (
    <input
      type="text"
      name="rgb"
      value={hexToRGB(hex) || "# введите цвет"}
      style={{ background: hexToRGB(hex) }}
      readOnly
    />
  );
}
