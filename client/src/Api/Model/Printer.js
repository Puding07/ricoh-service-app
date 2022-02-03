export const pritner = {
  serial: "",
  type: "",
  connected: {},
  user: "",
  inspectedBy: "",
  trader: "",
  hdd: "",
  features: {
    documentFeeder: false,
    duplex: false,
    paperBank: false,
    bypass: false,
    sortingTray: false,
    largeCapacityTray: false,
    puncher: false,
    printerScanner: false,
    fax: false,
    wheeledTable: false,
    ps: false,
    faxTray: false,
    java: false,
    fiery: false,
  },
  inPrints: {
    bw: 0,
    colour: 0,
  },
  outPrints: {
    bw: 0,
    colour: 0,
  },
  status: "",
  sideState: 0,
  eventLog: [],
  difficulty: 0,
  startOfDoc: null,
  endOfDoc: null,
  parts: [],
};

export const printerEventLog = {
  name: "Rob",
  partno: "Felmérésre vár",
  pieces: "2021.02.28",
};

export const printerPart = {
  name: "Toner Bw",
  product_number: "842657",
  pieces: "1",
  status: "érkező",
};

export const defaultPrinter = {
  type: "",
  parts: {},
  connected: {},
};
