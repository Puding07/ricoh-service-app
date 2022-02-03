export const setSessionItem = (type, item) => {
  sessionStorage.setItem(type, JSON.stringify(item));
};

/**
 *
 * @param {string} type
 * @returns {array}
 */
export const getSessionItem = (type) => {
  const item = sessionStorage.getItem(type);
  return JSON.parse(item);
};

const emptyUser = {
  _id: "",
  role: "",
  name: "",
  email: "",
  phone: "",
  performance: [],
  holiday: {
    max: null,
    left: null,
    takeout: [],
  },
  sickleave: {
    max: null,
    left: null,
    takeout: [],
  },
};

const user = {
  _id: "6171bc92b76ef82f57e1108b",
  role: "admin",
  name: "Tóth Áron",
  email: "bs.aaron.toth@gmail.com",
  phone: "+36201234567",
  performance: [
    {
      year: 2021,
      month: "November",
      points: {
        now: 0.15,
        needed: 15.3,
        dailyNeed: 0.9,
      },
      inspection: [
        {
          _id: { $oid: "586aa67d405624fdc7ad0c4e" },
          type: "MP 301",
          serial: "W914P56012",
          value: 0.15,
        },
      ],
      refurbishment: [],
    },
  ],
  holiday: {
    max: 20,
    left: 8,
    takeout: [
      "2021.11.15.",
      "2021.11.22.",
      "2021.12.17.",
      "2021.12.27.",
      "2021.12.28.",
      "2021.12.29.",
      "2021.12.30.",
      "2021.12.31.",
    ],
  },
  sickleave: {
    max: 15,
    left: 0,
    takeout: [
      "2021.11.01.",
      "2021.11.02.",
      "2021.11.03.",
      "2021.11.04.",
      "2021.11.05.",
    ],
  },
};

const coworkers = [
  {
    _id: "617aa8be402124bdc7ad0c51",
    role: "admin",
    name: "Sinka-Pálinkás Nándor",
    email: "sinka.nandor@gmail.com",
    phone: "+36201234567",
    performance: [],
    holiday: {
      max: 22,
      left: 12,
      takeout: [],
    },
    sickleave: {
      max: 15,
      left: 10,
      takeout: [],
    },
  },
  {
    _id: "617aa3df5e3515ab2e616fbb",
    role: "moderator",
    name: "Milák Csongor",
    email: "milak.csongor@gmail.com",
    phone: "+36201234567",
    performance: [],
    holiday: {
      max: 22,
      left: 12,
      takeout: [],
    },
    sickleave: {
      max: 15,
      left: 12,
      takeout: [],
    },
  },
  {
    _id: "617aa830402124bdc7ad0c4f",
    role: "technician",
    name: "Varga László",
    email: "varga.laszlo@gmail.com",
    phone: "+36201234567",
    performance: [],
    holiday: {
      max: 20,
      left: 12,
      takeout: [],
    },
    sickleave: {
      max: 3,
      left: 3,
      takeout: [],
    },
  },
];

const rauPrinters = [
  {
    _id: "617aa4155e3515ab2e616fbc",
    serial: "W914P56012",
    type: "MP 301",
    connected: {},
    user: "Tóth Áron",
    inspectedBy: "Tóth Áron",
    trader: "",
    hdd: "w765c82",
    features: {
      documentFeeder: true,
      duplex: true,
      paperBank: false,
      bypass: true,
      sortingTray: false,
      largeCapacityTray: false,
      puncher: false,
      printerScanner: true,
      fax: true,
      wheeledTable: false,
      ps: true,
      faxTray: false,
      java: false,
      fiery: false,
    },
    inPrints: {
      bw: 1350,
      colour: 0,
    },
    outPrints: {
      bw: 0,
      colour: 0,
    },
    status: "Javításra vár",
    sideState: 0,
    eventLog: [{ name: "Rob", partno: "Felmérésre vár", pieces: "2021.02.28" }],
    difficulty: 1,
    startOfDoc: null,
    endOfDoc: null,
    parts: [
      {
        name: "Toner Bw",
        product_number: "842657",
        pieces: "1",
        status: "érkező",
      },
      {
        name: "Toner Y",
        product_number: "842654",
        pieces: "1",
        status: "raktáron",
      },
    ],
  },
];

const rauParts = [
  {
    _id: "617be4e67d8063fcc461eb9f",
    name: "Toner Bw",
    product_number: "842657",
    pieces: "1",
  },
  {
    _id: "617aa67d402124bdc7ad0c4e",
    name: "Toner Y",
    product_number: "842654",
    pieces: "1",
  },
  {
    _id: "617aa67d402125pdc7ad0c4e",
    name: "Toner Y",
    product_number: "D2399591",
    pieces: "1",
  },
];

const rauInspection = {
  _id: { $oid: "617be4bd7d8063fcc461eb9e" },
  guide: [
    "Külső szemrevételezés",
    "Görgők, PTR (kopott alk.)",
    "DF kifújás, Szkenner tisztítás",
    "Papírtálcák feltöltése, gép bekapcsolása",
    "Nyomatok nyomtatása (SMC, Firmware, Java)",
    "Reset 5.801.3 - 5.801.20",
    "5.816.1 és 5.816.3",
    "5.618.1 = 0-ra",
    "Tesztelés",
    "Teli nyomatok",
    "5db Kétoldalas DF-ből",
    "Ricoh A3-as",
    "Tálcánként 50 db oldal",
    "Frissítés (Firmware, Java, Android)",
    "Friss nyomatok (Firmware, Java)",
    "Alkatrész rendelése",
    "Munkalap nyomtatása",
    "Megjegyzés",
  ],
};

const rauRefurbishments = {
  _id: { $oid: "617be8007d8063fcc461eba1" },
  guide: [
    "Alkatrészek ellenörzése",
    "Leburkolás",
    "Burkolatok mosása",
    "Alkatrészek kiszerelése",
    "Kifújás kompresszorral",
    "Tonerportartó kiürítése",
    "Letörölgetés",
    "Alkatrészek cseréje",
    "Összeszerelés",
    "HDD beszerelése",
  ],
};

const partStatus = [
  { _id: { $oid: "6186c0812234cfef4935ecb1" }, name: "érkező" },
  { _id: { $oid: "6186c0b12234cfef4935ecb2" }, name: "raktáron" },
  { _id: { $oid: "6186c0bc2234cfef4935ecb3" }, name: "beépítve" },
];

const status = [
  { _id: { $oid: "617bd7497d8063fcc461eb98" }, name: "Felmérésre vár" },
  { _id: { $oid: "617bd7517d8063fcc461eb99" }, name: "Felmérésre folyamatban" },
  { _id: { $oid: "617bd7637d8063fcc461eb9a" }, name: "Alkatrész rendelés" },
  { _id: { $oid: "617bd76e7d8063fcc461eb9b" }, name: "Javításra vár" },
  { _id: { $oid: "617bd7727d8063fcc461eb9c" }, name: "Javításra folyamatban" },
  { _id: { $oid: "617bd77e7d8063fcc461eb9d" }, name: "Kész" },
];

const parts = [
  {
    _id: { $oid: "617aa67d402124bdc7ad0c4e" },
    image: {},
    name: "NVRAM",
    product_number: "D2399591",
    links: ["MP C3004SP"],
  },
  {
    _id: { $oid: "617aa67d402124bgc4ad0c4e" },
    image: {},
    name: "Toner Bw",
    product_number: "842657",
    links: ["MP 301"],
  },
  {
    _id: { $oid: "617aa67d405624fdc7ad0c4e" },
    image: {},
    name: "Toner Y",
    product_number: "842654",
    links: ["MP 301"],
  },
];

const printers = [
  {
    _id: { $oid: "586aa67d405624fdc7ad0c4e" },
    type: "MP 301",
    code: "",
    colour: false,
    android: false,
    small: true,
    value: {
      inspection: 0.15,
      refurbishment: 0.6,
    },
    pdf: {
      parts_cat: {
        printer: {},
        peripheral: {},
      },
      service_man: {
        printer: {},
        peripheral: {},
      },
      bulletins: {
        printer: {},
        peripheral: {},
      },
    },
    parts: [
      {
        product_number: "842657",
        name: "Toner Bw",
      },
      {
        product_number: "842654",
        name: "Toner Y",
      },
    ],
  },
];

export const popSessionData = () => {
  if (!getSessionItem("user"))
    sessionStorage.setItem("user", JSON.stringify(emptyUser));
  if (!getSessionItem("rauPrinters")) sessionStorage.setItem("rauPrinters", []);
  if (!getSessionItem("rhuPrinters")) sessionStorage.setItem("rhuPrinters", []);
  sessionStorage.setItem("partStatus", JSON.stringify(partStatus));
  sessionStorage.setItem("rauParts", JSON.stringify(rauParts));
  sessionStorage.setItem("status", JSON.stringify(status));
  sessionStorage.setItem("parts", JSON.stringify(parts));
  sessionStorage.setItem("printers", JSON.stringify(printers));
  sessionStorage.setItem("rauInspection", JSON.stringify(rauInspection));
  sessionStorage.setItem(
    "rauRefurbishments",
    JSON.stringify(rauRefurbishments)
  );
  /*
  sessionStorage.setItem("coworkers", JSON.stringify(coworkers));
  */
};

/**
 * user
 * printers
 * parts
 * partStatus
 * coworkers
 * rauPrinters
 * rhuPrinters
 * rauParts
 * rhuParts
 */
