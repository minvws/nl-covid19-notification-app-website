const approached_through_bco_raw = [
  {
    date: "2020-08-31",
    tested_total: 27,
    tested_positive: 15
  },
  {
    date: "2020-09-30",
    tested_total: 417,
    tested_positive: 230
  },
  {
    date: "2020-10-31",
    tested_total: 22747,
    tested_positive: 10386
  },
  {
    date: "2020-11-30",
    tested_total: 45795,
    tested_positive: 20569
  },
  {
    date: "2020-12-31",
    tested_total: 84140,
    tested_positive: 21164
  },
  {
    date: "2021-01-31",
    tested_total: 106453,
    tested_positive: 20390
  },
  {
    date: "2021-02-28",
    tested_total: 118318,
    tested_positive: 20518
  },
  {
    date: "2021-03-31",
    tested_total: 138108,
    tested_positive: 20768
  },
  {
    date: "2021-04-30",
    tested_total: 160019,
    tested_positive: 60768
  },
  {
    date: "2021-05-31",
    tested_total: 176022,
    tested_positive: 20172
  },
  {
    date: "2021-06-30",
    tested_total: 182726,
    tested_positive: 20349
  },
  {
    date: "2021-07-31",
    tested_total: 194596,
    tested_positive: 12162
  },
  {
    date: "2021-08-31",
    tested_total: 198044,
    tested_positive: 20108
  },
  {
    date: "2021-09-30",
    tested_total: 200450,
    tested_positive: 23065
  },
  {
    date: "2021-10-31",
    tested_total: 208408,
    tested_positive: 172553
  },
  {
    date: "2021-11-30",
    tested_total: 235765,
    tested_positive: 122820
  },
  {
    date: "2021-12-31",
    tested_total: 257602,
    tested_positive: 153815
  },
  {
    date: "2022-01-31",
    tested_total: 305182,
    tested_positive: 102476
  },
  {
    date: "2022-02-06",
    tested_positive: 202154,
    tested_total: 322773,
  }
]

const approached_through_bco = approached_through_bco_raw.map(({date, ...rest}) => {
  return {date: new Date(date), ...rest};
});
