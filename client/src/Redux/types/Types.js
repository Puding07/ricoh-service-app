export const USER = {
  update: "user/update",
  jwt: "user/jwt",
  performance: {
    new: "user/performance/new",
    update: "user/performance/update",
    delete: "user/performance/delete",
    points: {
      now: {
        update: "user/performance/points/now",
      },
      needed: {
        update: "user/performance/points/needed",
      },
      dailyneed: {
        update: "user/performance/points/dailyneed",
      },
    },
    inspection: {
      update: "user/performance/inspection/update",
    },
    refurbishment: {
      update: "user/performance/refurbishment/update",
    },
  },
  holiday: {
    max: "user/holiday/max",
    left: "user/holiday/left",
    takeout: {
      new: "user/holiday/takeout/new",
      update: "user/holiday/takeout/update",
      delete: "user/holiday/takeout/delete",
    },
  },
  sickleave: {
    max: "user/sickleave/max",
    left: "user/sickleave/left",
    takeout: {
      new: "user/sickleave/takeout/new",
      update: "user/sickleave/takeout/update",
      delete: "user/sickleave/takeout/delete",
    },
  },
};

export const COWORKERS = {
  new: "coworkers/new",
  update: "coworkers/update",
  delete: "coworker/delete",
};

export const MENU = {
  resize: "resize",
};

export const PRINTERS = {
  printers: {
    new: "printers/new",
    update: "printers/update",
    delete: "printers/delete",
    refresh: "printers/refresh",
  },
  rau: {
    new: "printers/rau/new",
    parts: {
      update: "printers/rau/parts/update",
    },
    delete: "printers/rau/delete",
    refresh: "printers/rau/refresh",
  },
  rhu: {
    new: "printers/rhu/new",
    update: "printers/rhu/update",
    delete: "printers/rhu/delete",
    refresh: "printers/rhu/refresh",
  },
};

export const PARTS = {
  parts: {
    new: "parts/new",
    update: "parts/update",
    delete: "parts/delete",
    refresh: "parts/refresh",
  },
  status: {
    update: "parts/status/update",
  },
  rau: {
    new: "parts/rau/new",
    update: "parts/rau/update",
    delete: "parts/rau/delete",
    refresh: "parts/rau/refresh",
  },
  rhu: {
    new: "parts/rhu/new",
    update: "parts/rhu/update",
    delete: "parts/rhu/delete",
    refresh: "parts/rhu/refresh",
  },
};

export const STATES = {
  status: {
    new: "status/new",
    update: "status/update",
    delete: "status/delete",
  },
  partStatus: {
    new: "status/part/new",
    update: "status/part/update",
    delete: "status/part/delete",
  },
  rau: {
    new: "states/rau/new",
    update: "states/rau/update",
    delete: "states/rau/delete",
  },
  rhu: {
    new: "states/rau/new",
    update: "states/rau/update",
    delete: "states/rau/delete",
  },
};

export const LIST_ITEM = {
  open: "open",
  close: "close",
};
