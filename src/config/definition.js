import config from "./config";

const { cellSize } = config;

const LADDER_DEFINITION = [
  {
    id: 1,width: 149,height: 189,direction: "EN",incX: 2,incY: 3,
  },
  {
    id: 2,
    width: 99,
    height: 172,
    direction: "EN",
    incX: 1,
    incY: 3,
  },
  {
    id: 3,
    width: 78,
    height: 101,
    direction: "EN",
    incX: 1,
    incY: 2,
  },
  {
    id: 4,
    width: 172,
    height: 94,
    direction: "EN",
    incX: 3,
    incY: 1,
  },
  {
    id: 5,
    width: 46,
    height: 95,
    direction: "N",
    incX: 0,
    incY: 2,
  },
  {
    id: 6,
    width: 74,
    height: 85,
    direction: "WN",
    incX: -1,
    incY: 1,
  },
  {
    id: 7,
    width: 166,
    height: 93,
    direction: "WN",
    incX: -3,
    incY: 1,
  },
];

const SNAKE_DEFINITION = [
  {
    id: 1,
    direction: "left",
    incX: 1,
    incY: -1,
    width: 150,
    height: 100,
  },
  {
    id: 2,
    direction: "right",
    incX: -1,
    incY: -2,
    width: 150,
    height: 150,
  },
  {
    id: 3,
    direction: "left",
    incX: 1,
    incY: -3,
    width: 120,
    height: 200,
    paddingX: cellSize / 2,
    paddingY: -cellSize / 4,
  },
  {
    id: 4,
    direction: "left",
    incX: 3,
    incY: 0,
    width: 190,
    height: 72,
    paddingX: -cellSize / 4,
  },
  {
    id: 5,
    direction: "right",
    incX: 0,
    incY: -5,
    width: 96,
    height: 310,
    paddingY: -cellSize / 4,
  },
  {
    id: 6,
    direction: "right",
    incX: -3,
    incY: -1,
    width: 170,
    height: 90,
    paddingX: cellSize / 4,
  },
];


const PLAYER_DEFINITION = [
  {
    width: 58,
    height: 70,
  },
  {
    width: 50,
    height: 72,
  },
  {
    width: 60,
    height: 70,
  },
];

export { SNAKE_DEFINITION, LADDER_DEFINITION, PLAYER_DEFINITION };
