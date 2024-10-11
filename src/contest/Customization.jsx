import { createContext, useContext, useState } from "react";

const lensColors = [
    {
      color: "#683434",
      name: "brown",
    },
    {
      color: "#1a5e1a",
      name: "green",
    },
    {
      color: "#659994",
      name: "blue",
    },
    {
      color: "#896599",
      name: "mauve",
    },
    {
      color: "#ffa500",
      name: "orange",
    },
    {
      color: "#59555b",
      name: "grey",
    },
    {
      color: "#222222",
      name: "black",
    },
    {
      color: "#ececec",
      name: "white",
    },
  ];
  
  const cushionColors = [
    {
      color: "#683434",
      name: "brown",
    },
    {
      color: "#1a5e1a",
      name: "green",
    },
    {
      color: "#659994",
      name: "blue",
    },
    {
      color: "#896599",
      name: "mauve",
    },
    {
      color: "#ffa500",
      name: "orange",
    },
    {
      color: "#59555b",
      name: "grey",
    },
    {
      color: "#222222",
      name: "black",
    },
    {
      color: "#ececec",
      name: "white",
    },
  ];

const CustomizationContext =createContext();

export const CustomizationProvider=(props)=>{
    const [material, setMaterial]=useState("plastic");
    const [lensColor, setLensColor] = useState(lensColors[0]);
    const [template, setTemplate] = useState("plastic");
    const [templateTips, setTemplateTips] = useState("plastic");
    return(
        <CustomizationContext.Provider value={{
            material,
            setMaterial,
            template,
            setTemplate,
            lensColors,
            lensColor,
            setLensColor,
            templateTips,
            setTemplateTips,
        }}>
            {props.children}
        </CustomizationContext.Provider>
    )
}

export const useCustomization=()=>{
    return useContext(CustomizationContext);
}