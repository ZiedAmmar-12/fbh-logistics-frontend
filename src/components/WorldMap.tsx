import { ComposableMap, Geographies, Geography, GeographiesProps  } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const salesData: Record<string, number> = {
  FRA: 120, // France
  USA: 300, // USA
  TUN: 90,  // Tunisia
  CHN: 250, // China
};

const WorldMap = () => {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any[] }) => // ✅ typage explicite
          geographies.map((geo: any) => {
            const value = salesData[geo.properties.ISO_A3] || 0;
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={value > 200 ? "#3b82f6" : value > 100 ? "#22c55e" : "#f87171"}
                stroke="#fff"
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default WorldMap;
