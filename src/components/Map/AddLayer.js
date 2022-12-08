const addLayers = (map) => {
  map.addLayer({
    id: "province-bound-fill",
    type: "fill",
    source: "ph_province", // reference the data source
    "source-layer": "provinces",
    // filter: ["==", ["get", "admin2pcode"], ""],
    // minzoom: 6,
    // maxzoom: 8,
    layout: { visibility: "none" },
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-outline-color": "#444444",
      "fill-opacity": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        1,
        0.5,
      ],
    },
  });

  // ADD PROVINCE BOUNDARY LINE LAYER
  // map.current.addLayer({
  //   id: "province-bound-line",
  //   type: "line",
  //   "source-layer": "public.ph_provinces_boundary",
  //   source: "ph_province",
  //   minzoom: 6,
  //   maxzoom: 8,
  //   layout: {},
  //   paint: {
  //     "line-color": "#000",
  //     "line-width": 1,
  //   },
  // });

  // ADD TOWN-LINE LAYER
  // map.current.addLayer({
  //   id: "outline-town",
  //   type: "line",
  //   "source-layer": "public.ph_town_boundary",
  //   source: "ph_province",
  //   minzoom: 8,
  //   maxzoom: 12,
  //   layout: {},
  //   paint: {
  //     "line-color": "#000",
  //     "line-width": 1,
  //   },
  // });
  // // ADD TOWN-FILL LAYER
  map.addLayer({
    id: "fill-town",
    type: "fill",
    "source-layer": "public.ph_town_boundary",
    source: "ph_town",
    // minzoom: 8,
    // maxzoom: 12,
    layout: { visibility: "none" },
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-outline-color": "#444444",
      "fill-opacity": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        1,
        0.5,
      ],
    },
  });

  // ADD REGIONAL BOUNDARY LINE-LAYER
  map.addLayer({
    id: "outline-regional",
    type: "line",

    "source-layer": "Regional_generalize",
    source: "ph_regional",
    minzoom: 2,
    maxzoom: 6,
    layout: {},
    paint: {
      "line-color": [
        "match",
        ["number", ["get", "id"]],
        1,
        "#DFFF00",
        2,
        "#FFBF00",
        3,
        "#FF7F50",
        4,
        "#DE3163",
        5,
        "#9FE2BF",
        6,
        "#40E0D0",
        7,
        "#6495ED",
        8,
        "#CCCCFF",
        9,
        "#F94144",
        10,
        "#F8961E",
        11,
        "#F9844A",
        12,
        "#F9C74F",
        13,
        "#90BE6D",
        14,
        "#43AA8B",
        15,
        "#4D908E",
        16,
        "#577590",
        17,
        "#277DA1",
        "#277DA1",
      ],
      "line-width": 1,
    },
  });
  // ADD REGIONAL BOUNDARY FILL-LAYER
  map.addLayer({
    id: "panay-fill-regional",
    type: "fill",
    source: "ph_regional", // reference the data source
    "source-layer": "Regional_generalize",
    minzoom: 2,
    maxzoom: 7,
    layout: {},
    paint: {
      "fill-color": [
        "match",
        ["number", ["get", "objectid"]],
        1,
        "#DFFF00",
        2,
        "#FFBF00",
        3,
        "#FF7F50",
        4,
        "#DE3163",
        5,
        "#9FE2BF",
        6,
        "#40E0D0",
        7,
        "#6495ED",
        8,
        "#CCCCFF",
        9,
        "#F94144",
        10,
        "#F8961E",
        11,
        "#F9844A",
        12,
        "#F9C74F",
        13,
        "#90BE6D",
        14,
        "#43AA8B",
        15,
        "#4D908E",
        16,
        "#577590",
        17,
        "#277DA1",
        "#277DA1",
      ],

      "fill-opacity": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        1,
        0.5,
      ],
    },
  });

  // ADD REGIONAL BOUNDARY TEXT-LAYER
  map.addLayer({
    id: "panay-text-regional",
    type: "symbol",
    source: "ph_regional", // reference the data source
    "source-layer": "Regional_generalize",
    minzoom: 2,
    maxzoom: 6,
    layout: {
      "text-field": ["get", "admin1name_en"],
      "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
      "text-size": 11,
    },
    paint: {
      "text-color": "#202",
      "text-halo-color": "#fff",
      "text-halo-width": 2,
    },
  });

  // ADD BARANGAY BOUNDARY FILL-LAYER
  map.addLayer({
    id: "barangay-fill",
    type: "fill",
    source: "ph_barangay", // reference the data source
    "source-layer": "public.ph_barangay_boundary",
    // minzoom: 12.1,
    // maxzoom: 20,
    layout: { visibility: "none" },
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        1,
        0.5,
      ],
      "fill-outline-color": "#444444",
    },
  });

  map.addLayer({
    id: "barangay-fill-last",
    type: "fill",
    source: "ph_barangay", // reference the data source
    "source-layer": "public.ph_barangay_boundary",
    // minzoom: 12.1,
    // maxzoom: 20,
    layout: { visibility: "none" },
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": 0.5,
      //[
      //   "case",
      //   ["boolean", ["feature-state", "hover"], false],
      //   1,
      //   0.5,
      // ],
      "fill-outline-color": "#444444",
    },
  });

  // ADD BARANGAY BOUNDARY LINE-LAYER
  // map.current.addLayer({
  //   id: "barangay-line",
  //   type: "line",

  //   "source-layer": "public.ph_barangay_boundary",
  //   source: "ph_province",
  //   minzoom: 12.1,
  //   maxzoom: 16,
  //   layout: {},
  //   paint: {
  //     "line-color": "#FF0000",
  //     "line-width": 1,
  //   },
  // });
};

export default addLayers;
