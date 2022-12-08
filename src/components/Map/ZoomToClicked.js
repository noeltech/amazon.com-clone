import { bbox, featureCollection } from "@turf/turf";

import { AdminBoundaryInfo } from "./AdminBoundaryInfo";

const getAdminInfo = (prop, layer_id) => {
  let foundItem = AdminBoundaryInfo.find((item) => item.layer_id === layer_id);
  return foundItem[prop];
};

const getNextAdminInfo = (layer_id) => {
  let nextAdminLevel = getAdminInfo("level", layer_id) + 1;

  let nextAdminLayerID = AdminBoundaryInfo.find(
    (item) => item.level === nextAdminLevel
  );

  return nextAdminLayerID ? nextAdminLayerID.layer_id : "barangay-fill";
};

const setVisibleLayer = (map, layer_id) => {
  AdminBoundaryInfo.forEach((item) => {
    if (item.layer_id === layer_id) {
      map.setLayoutProperty(item.layer_id, "visibility", "visible");
    } else {
      map.setLayoutProperty(item.layer_id, "visibility", "none");
    }
  });
};
const mapLayersID = [
  "panay-fill-regional",
  "province-bound-fill",
  "fill-town",
  "barangay-fill",
];

const zoomToClicked = (
  map,
  mapState,

  handleBoundaryNamesUpdate
) => {
  map.on("click", mapLayersID, (e) => {
    // console.log(e.features[0]);

    const features1 = map.queryRenderedFeatures({
      layers: mapLayersID,
      filter: ["==", "objectid", e.features[0].properties.objectid],
    });

    console.log(e.features[0].properties);
    // GET ADMIN LEVEL FROM CLICK FEATURE
    const adminCode = getAdminInfo("code", e.features[0].layer.id);

    const featureAdminCode =
      e.features[0].properties[
        adminCode === "admin4pcode" ? "objectid" : adminCode
      ];

    const layer = getNextAdminInfo(e.features[0].layer.id);

    const combinedFeatures = featureCollection(features1);
    const featureBbox = bbox(combinedFeatures);

    // UPDATE MAP STATE
    mapState.current.push({ bounds: featureBbox, layer_id: layer });

    // UPDATE BOUNDARY STATUS OR LOCATION
    const nameProp = getAdminInfo("name", e.features[0].layer.id);
    const FeatureName = e.features[0].properties[nameProp];

    handleBoundaryNamesUpdate({ isAdd: true, updates: FeatureName });
    // FOCUS THE MAP TO THE CURRENT FEATURE CLICKED
    map.fitBounds(featureBbox, { padding: 30 });

    //FILTER THE NEXT LAYER BY THE DESIRED FEATURE

    map.setFilter(layer, [
      "==",
      ["get", adminCode === "admin4pcode" ? "objectid" : adminCode],
      featureAdminCode,
    ]);

    // HIDE ALL THE LAYER THAT NOT NEEDED
    // SHOW THE THE DESIRED LAYER AND FILTER ONLY THE FEATURE NEEDED
    setVisibleLayer(map, layer);
    // console.log(bboxPolygon(featureBbox));
  });
};

export { zoomToClicked, setVisibleLayer };
