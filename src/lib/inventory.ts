export type StoreStock = {
  store: string;
  S: "available" | "low" | "out";
  M: "available" | "low" | "out";
  L: "available" | "low" | "out";
};

export const inventory: StoreStock[] = [
  {
    store: "Phoenix Mall",
    S: "out",
    M: "available",
    L: "low",
  },
  {
    store: "Select Citywalk",
    S: "available",
    M: "low",
    L: "out",
  },
  {
    store: "CP Store",
    S: "out",
    M: "available",
    L: "out",
  },
];
