export default function ColorInput({ onHexChange, onSubmit, form }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="input"
        id="hex"
        name="hex"
        value={form.hex}
        maxLength="7"
        onChange={onHexChange}
      />
      <input
        className="label rgb"
        value={form.rgb}
        style={{
          background: form.rgb === "Ошибка" ? `rgb(227, 38, 54)` : form.rgb,
        }}
        readOnly
      />
    </form>
  );
}
