import { useState } from "react";

export default function ConfiguratorForm({ onChange }) {
  const [config, setConfig] = useState({
    width: 900,
    height: 2100,
    frameColor: "#1f1f1f",
    glassType: "satinato",
    handleType: "modern",
  });

  function updateConfig(key, value) {
    const newConfig = { ...config, [key]: value };
    setConfig(newConfig);
    onChange?.(newConfig); // sends data to 3D scene
  }

  return (
    <div style={styles.panel}>
      <h2 style={styles.title}>Door Configurator</h2>

      {/* Width */}
      <label>
        Door Width (mm)
        <input
          type="number"
          value={config.width}
          min={700}
          max={1200}
          onChange={(e) => updateConfig("width", Number(e.target.value))}
        />
      </label>

      {/* Height */}
      <label>
        Door Height (mm)
        <input
          type="number"
          value={config.height}
          min={1900}
          max={2400}
          onChange={(e) => updateConfig("height", Number(e.target.value))}
        />
      </label>

      {/* Frame color */}
      <label>
        Frame Color
        <input
          type="color"
          value={config.frameColor}
          onChange={(e) => updateConfig("frameColor", e.target.value)}
        />
      </label>

      {/* Glass type */}
      <label>
        Glass Type
        <select
          value={config.glassType}
          onChange={(e) => updateConfig("glassType", e.target.value)}
        >
          <option value="clear">Clear Glass</option>
          <option value="satinato">Satinato (Frosted)</option>
        </select>
      </label>

      {/* Handle */}
      <label>
        Handle Type
        <select
          value={config.handleType}
          onChange={(e) => updateConfig("handleType", e.target.value)}
        >
          <option value="modern">Modern</option>
          <option value="classic">Classic</option>
          <option value="none">No Handle</option>
        </select>
      </label>
    </div>
  );
}

const styles = {
  panel: {
    width: 280,
    padding: 16,
    background: "#f4f4f4",
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    fontFamily: "sans-serif",
  },
  title: {
    marginBottom: 8,
  },
};
