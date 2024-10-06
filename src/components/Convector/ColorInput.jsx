import { useState } from "react";
import ColorChange from "./ColorChange";

export default function ColorInput() {
  const [hex, setHex] = useState("#FFFFFF");

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const onChangeHex = ({ target }) => {
    setHex(target.value);
  };

  console.log(hex);

  return (
    <div className="page-container" style={{ background: hex }}>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="hex"
        value={hex}
        onInput={onChangeHex}
        maxLength="7"
        placeholder="#ваш цвет"
      />
      <ColorChange hex={hex} />
    </form>
    </div>
  );
}
