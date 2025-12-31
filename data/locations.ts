import { LocationItem } from "./types";

export const locationsData: LocationItem[] = [
  // Primary market
  { slug: "garland-tx", name: "Garland", route: "/locations/garland-tx", type: "city" },
  
  // Major nearby cities
  { slug: "dallas-tx", name: "Dallas", route: "/locations/dallas-tx", type: "city" },
  { slug: "richardson-tx", name: "Richardson", route: "/locations/richardson-tx", type: "city" },
  { slug: "rowlett-tx", name: "Rowlett", route: "/locations/rowlett-tx", type: "city" },
  { slug: "sachse-tx", name: "Sachse", route: "/locations/sachse-tx", type: "city" },
  { slug: "wylie-tx", name: "Wylie", route: "/locations/wylie-tx", type: "city" },
  { slug: "rockwall-tx", name: "Rockwall", route: "/locations/rockwall-tx", type: "city" },
  { slug: "mesquite-tx", name: "Mesquite", route: "/locations/mesquite-tx", type: "city" },
  { slug: "sunnyvale-tx", name: "Sunnyvale", route: "/locations/sunnyvale-tx", type: "city" },
  { slug: "plano-tx", name: "Plano", route: "/locations/plano-tx", type: "city" },
  { slug: "murphy-tx", name: "Murphy", route: "/locations/murphy-tx", type: "city" },
  { slug: "allen-tx", name: "Allen", route: "/locations/allen-tx", type: "city" },
  { slug: "mckinney-tx", name: "McKinney", route: "/locations/mckinney-tx", type: "city" },
  { slug: "frisco-tx", name: "Frisco", route: "/locations/frisco-tx", type: "city" },
  { slug: "carrollton-tx", name: "Carrollton", route: "/locations/carrollton-tx", type: "city" },
  { slug: "farmers-branch-tx", name: "Farmers Branch", route: "/locations/farmers-branch-tx", type: "city" },
  { slug: "addison-tx", name: "Addison", route: "/locations/addison-tx", type: "city" },
  { slug: "irving-tx", name: "Irving", route: "/locations/irving-tx", type: "city" },
  { slug: "balch-springs-tx", name: "Balch Springs", route: "/locations/balch-springs-tx", type: "city" },
  { slug: "seagoville-tx", name: "Seagoville", route: "/locations/seagoville-tx", type: "city" },
  { slug: "forney-tx", name: "Forney", route: "/locations/forney-tx", type: "city" },
  { slug: "fate-tx", name: "Fate", route: "/locations/fate-tx", type: "city" },
  { slug: "royse-city-tx", name: "Royse City", route: "/locations/royse-city-tx", type: "city" },
  { slug: "lucas-tx", name: "Lucas", route: "/locations/lucas-tx", type: "city" },
  { slug: "heath-tx", name: "Heath", route: "/locations/heath-tx", type: "city" },
  
  // Garland neighborhoods and districts
  { slug: "downtown-garland-tx", name: "Downtown Garland", parent: "garland-tx", route: "/locations/downtown-garland-tx", type: "district" },
  { slug: "firewheel-tx", name: "Firewheel", parent: "garland-tx", route: "/locations/firewheel-tx", type: "district" },
  { slug: "north-garland-tx", name: "North Garland", parent: "garland-tx", route: "/locations/north-garland-tx", type: "neighborhood" },
  { slug: "south-garland-tx", name: "South Garland", parent: "garland-tx", route: "/locations/south-garland-tx", type: "neighborhood" },
  { slug: "east-garland-tx", name: "East Garland", parent: "garland-tx", route: "/locations/east-garland-tx", type: "neighborhood" },
  { slug: "west-garland-tx", name: "West Garland", parent: "garland-tx", route: "/locations/west-garland-tx", type: "neighborhood" },
  { slug: "spring-park-tx", name: "Spring Park", parent: "garland-tx", route: "/locations/spring-park-tx", type: "neighborhood" },
  { slug: "lakeview-centennial-tx", name: "Lakeview Centennial", parent: "garland-tx", route: "/locations/lakeview-centennial-tx", type: "neighborhood" },
  { slug: "duck-creek-tx", name: "Duck Creek", parent: "garland-tx", route: "/locations/duck-creek-tx", type: "neighborhood" },
  { slug: "lake-ray-hubbard-tx", name: "Lake Ray Hubbard", parent: "garland-tx", route: "/locations/lake-ray-hubbard-tx", type: "neighborhood" },
];
