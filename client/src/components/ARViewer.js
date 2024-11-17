import React from "react";

function ARViewer() {
  return (
    <a-scene>
      <a-assets>
        <a-asset-item id="carModel" src="/path/to/car-model.glb"></a-asset-item>
      </a-assets>
      <a-entity gltf-model="#carModel" position="0 1 -3"></a-entity>
      <a-camera-static></a-camera-static>
    </a-scene>
  );
}

export default ARViewer;
