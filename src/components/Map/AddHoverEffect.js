const addHoverEffect = (map) => {
  // When the user moves their mouse over the state-fill layer, we'll update the
  // feature state for the feature under the mouse.
  let hoveredStateId = null;
  let features;
  map.on(
    "mousemove",
    [
      "panay-fill-regional",
      "province-bound-fill",
      "fill-town",
      "barangay-fill",
    ],
    (e) => {
      if (e.features.length > 0) {
        // GET THE CURRENT DISPLAYED FEATURE
        features = map.queryRenderedFeatures(e.point);
        // console.log(features);
        if (hoveredStateId !== null) {
          map.setFeatureState(
            {
              source: features[0].layer.source,
              id: hoveredStateId,
              sourceLayer: features[0].sourceLayer,
            },

            { hover: false }
          );
        }
        hoveredStateId = e.features[0].properties.id;
        map.setFeatureState(
          {
            source: features[0].layer.source,
            id: hoveredStateId,
            sourceLayer: features[0].sourceLayer,
          },

          { hover: true }
        );
      }
    }
  );

  // When the mouse leaves the state-fill layer, update the feature state of the
  // previously hovered feature.
  map.on(
    "mouseleave",
    [
      "panay-fill-regional",
      "province-bound-fill",
      "fill-town",
      "barangay-fill",
    ],
    () => {
      if (hoveredStateId !== null) {
        // console.log(features[0].sourceLayer);
        map.setFeatureState(
          {
            source: features[0].layer.source,
            id: hoveredStateId,
            sourceLayer: features[0].sourceLayer,
          },

          { hover: false }
        );
      }
      hoveredStateId = null;
    }
  );
};
export default addHoverEffect;
