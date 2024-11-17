import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function CarModel({ modelPath }) {
  const model = useGLTF(modelPath);
  const ref = useRef();

  return <primitive ref={ref} object={model.scene} />;
}

export default CarModel;
