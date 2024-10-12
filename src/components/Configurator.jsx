import { SketchPicker } from "react-color";
import { useCustomization } from "../contest/Customization";


const Configurator = () => {

  const handleColorChange = (color) => {
    setCustomColor(color.hex);
  };
  const {
    material,
    setMaterial,
    lensColors,
    lensColor,
    setLensColor,
    template,
    setTemplate,
    templateTips,
    setTemplateTips,
    customColor,
    setCustomColor
  } = useCustomization();

  return (
    <div className="configurator p-4">
      <div className="  configurator__section">
        <div className="configurator__section__title">Glass Material</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material === "plastic" ? "item--active" : ""}`}
            onClick={() => setMaterial("plastic")}
          >
            <div className="item__label">Plastic</div>
          </div>
          <div
            className={`item ${material === "deitalhes" ? "item--active" : ""}`}
            onClick={() => setMaterial("deitalhes")}
          >
            <div className="item__label">Deitalhes</div>
          </div>
        </div>
      </div>
      <div className="configurator__section  ">
        <div className="configurator__section__title">Temples Material</div>
        <div className="configurator__section__values">
          <div
            className={`item ${template === "plastic" ? "item--active" : ""}`}
            onClick={() => setTemplate("plastic")}
          >
            <div className="item__label">Plastic</div>
          </div>
          <div
            className={`item ${template === "deitalhes" ? "item--active" : ""}`}
            onClick={() => setTemplate("deitalhes")}
          >
            <div className="item__label">Deitalhes</div>
          </div>
        </div>
      </div>
      <div className="configurator__section  ">
        <div className="configurator__section__title">Temples Tips</div>
        <div className="configurator__section__values">
          <div
            className={`item ${templateTips === "plastic" ? "item--active" : ""}`}
            onClick={() => setTemplateTips("plastic")}
          >
            <div className="item__label">Plastic</div>
          </div>
          <div
            className={`item ${templateTips === "deitalhes" ? "item--active" : ""}`}
            onClick={() => setTemplateTips("deitalhes")}
          >
            <div className="item__label">Deitalhes</div>
          </div>
        </div>
      </div>
      <div className="configurator__section  ">
        <div className="configurator__section__title">Top Bar Color</div>
        <div className="configurator__section__values">
          {lensColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === lensColor.color ? "item--active" : ""
              }`}
              onClick={() => setLensColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title"> Lens Color</div>
        <div className="configurator__section__values">
            <SketchPicker color={customColor} onChange={handleColorChange} />
        </div>
      </div>
    </div>
  );
};

export default Configurator;