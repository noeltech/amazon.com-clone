import React from "react";
import styled from "styled-components";
// import axios from "axios";

import "mapbox-gl/dist/mapbox-gl.css";

import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import addLayers from "./AddLayer";
import addHoverEffect from "./AddHoverEffect";
import AdminBoundaryLabel from "./AdminBoundaryLabel";
import { zoomToClicked, setVisibleLayer } from "./ZoomToClicked";

function Map() {
  const mapContainer = React.useRef(null);
  const map = React.useRef(null);
  // const [mapState, setMapState] = React.useState(initialMapState);
  // const [lat, setLat] = useState(42.35);
  const [zoomLevel, setZoomLevel] = React.useState(null);
  // const [isZoomToNext, setZoomToNext] = React.useState(false);
  const [boundaryNames, setBoundaryNames] = React.useState(["Philippines"]);
  let mapState = React.useRef([]);
  mapboxgl.accessToken =
    "pk.eyJ1Ijoibm9lbHRlY2giLCJhIjoiY2o1dWJla2N1MDJ1OTMzbzBldzM5dmR5eSJ9.ZSEWjDx8XRX2HybapnSpmQ";

  React.useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      // style: { version: 8, sources: {}, layers: [] },
      style: "mapbox://styles/noeltech/cl3mf681w000n14qlh7wa7mu5?optimize=true",
      center: [121.774, 12.8797],
      zoom: 5.4,
    });
    console.log("Map Loads..");
  }, []);

  React.useEffect(() => {
    console.log("adding layers and custom effects");
    map.current.on("load", () => {
      map.current.addSource("ph_regional", {
        type: "vector",
        tiles: [
          // "http://localhost:3000/public.ph_regional_boundary/{z}/{x}/{y}.pbf",
          // "http://localhost:7800/public.ph_provinces_boundary/{z}/{x}/{y}.pbf",
          // "http://localhost:7800/public.ph_town_boundary{z}/{x}/{y}.pbf",
          // "http://localhost:7800/public.ph_barangay_boundary/{z}/{x}/{y}.pbf",
          "http://localhost:8080/data/regional-boundary/{z}/{x}/{y}.pbf",
        ],
        promoteId: "id",
        // properties=objectid,admin1name_en
      });

      map.current.addSource("ph_province", {
        type: "vector",
        tiles: [
          // "http://localhost:3000/public.ph_provinces_boundary/{z}/{x}/{y}.pbf",
          "http://localhost:8080/data/provinces-boundary/{z}/{x}/{y}.pbf",
        ],

        promoteId: "id",
        // properties=objectid,admin1name_en
      });

      map.current.addSource("ph_town", {
        type: "vector",
        tiles: [
          "http://localhost:3000/public.ph_town_boundary/{z}/{x}/{y}.pbf",
        ],
        promoteId: "id",
        // properties=objectid,admin1name_en
      });

      map.current.addSource("ph_barangay", {
        type: "vector",
        tiles: [
          "http://localhost:3000/public.ph_barangay_boundary/{z}/{x}/{y}.pbf",
        ],
        promoteId: "id",
        // properties=objectid,admin1name_en
      });

      map.current.on("zoomend", () => {
        // setZoomLevel(map.current.getZoom());
        console.log(map.current.getZoom());
      });

      // ADD ALL LAYERS
      addLayers(map.current);

      // ADD HOVER EFFECT ON ALL LAYERS
      addHoverEffect(map.current);

      // ADD ZOOM TO CLICKED AREA EFFECT
      zoomToClicked(map.current, mapState, handleBoundaryNamesUpdate);
      //RECORD THE INITIAL MAP STATE
      mapState.current.push({
        bounds: map.current.getBounds(),
        layer_id: "panay-fill-regional",
      });
    });
  }, []);

  const handleBoundaryNamesUpdate = ({ isAdd, updates }) => {
    console.log(updates);
    if (isAdd) {
      setBoundaryNames((state) => [...state, updates]);
    } else {
      let newAddres = [...boundaryNames];
      newAddres.length = updates;
      setBoundaryNames(newAddres);
    }
  };

  // React.useEffect(() => {
  //   let boundaryAddress = "";
  //   console.log(boundaryNames);
  //   boundaryNames.forEach((item, index) => {
  //     if (index === 0) {
  //       boundaryAddress = item;
  //     } else {
  //       boundaryAddress = boundaryAddress + "," + item;
  //     }
  //   });
  //   console.log(boundaryAddress);
  // }, [boundaryNames]);

  const handleGoBackv2 = (e) => {
    console.log(e);
    if (mapState.current.length - 1 !== e) {
      console.log("do this");
      // const previousState = mapState.current.length - 2;

      // GET AND SHOW PREVIOUS LAYER AND HIDE THE REST
      setVisibleLayer(map.current, mapState.current[e].layer_id);
      // GET AND MOVE TO PREVIOUS BOUNDS
      const bounds = mapState.current[e].bounds;
      // console.log(bounds);
      map.current.fitBounds(bounds, { padding: 40 });
      // UPDATE THE MAP STATE
      mapState.current.length = e + 1;
      handleBoundaryNamesUpdate({ isAdd: false, updates: e + 1 });
    }
  };

  const handleGoBack = () => {
    // RENDER THE PREVIOUS MAP STATE

    if (mapState.current.length >= 2) {
      const previousState = mapState.current.length - 2;

      // GET AND SHOW PREVIOUS LAYER AND HIDE THE REST
      setVisibleLayer(map.current, mapState.current[previousState].layer_id);
      // GET AND MOVE TO PREVIOUS BOUNDS
      const bounds = mapState.current[previousState].bounds;
      console.log(bounds);
      map.current.fitBounds(bounds, { padding: 40 });
      // UPDATE THE MAP STATE BY REMOVING THE LAST STATE
      mapState.current.pop();
      handleBoundaryNamesUpdate(null);
    }
  };

  return (
    <Container>
      <Headings>
        <HeadingMargin>
          <HeadingText>
            Philippines - Subnational Administrative Boundaries
          </HeadingText>
        </HeadingMargin>
      </Headings>
      <MapContainer>
        <AdminBoundaryLabel
          list={boundaryNames}
          handleGoBackv2={handleGoBackv2}
        />
        <MapWrapper ref={mapContainer} />
        {/* <BackButton onClick={handleGoBack}>Go Back</BackButton> */}
      </MapContainer>
    </Container>
  );
}

export default Map;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: grey;
`;

const Headings = styled.div`
  height: 54px;
  background: #323232;
  width: auto;
`;

const HeadingMargin = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;

const HeadingText = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #d8d8d8;
`;

const MapContainer = styled.div`
  position: relative;
  height: 100%;
  background: grey;
`;

const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: grey;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20%;
  margin: 0;
  height: 30px;
  width: 120px;
`;
