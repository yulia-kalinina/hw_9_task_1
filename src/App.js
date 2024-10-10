import { useState } from "react";
import ColorInput from "./components/Convector/ColorInput";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    hex: "",
    rgb: "",
  });

  const hexToRGB = (hex) => {
    if (!hex.match(/^#[a-fA-F\d]{6}$/)) {
      return "Ошибка";
    } else {
      hex = "0x" + hex.slice(1);
      let r = (hex >> 16) & 0xff;
      let g = (hex >> 8) & 0xff;
      let b = hex & 0xff;
      return `rgb(${r}, ${g}, ${b})`;
    }
  };

  const handleHexChange = (e) => {
    const hex = e.target.value;
    setForm((prevForm) => ({
      ...prevForm,
      hex: hex,
      rgb: hex.length === 7 ? hexToRGB(hex) : prevForm.rgb,
    }));
  };

  return (
    <div
      className="app"
      style={{
        background: form.rgb === "Ошибка" ? `rgb(227, 38, 54)` : form.rgb,
      }}
    >
      <ColorInput onHexChange={handleHexChange} form={form} />
    </div>
  );
}

export default App;
