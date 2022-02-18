const approached_through_bco_raw = [
  {
    date: "2020-08-31",
    tested_positive: 15,
    tested_total: 27
  },
  {
    date: "2020-09-30",
    tested_positive: 230,
    tested_total: 417
  },
  {
    date: "2020-10-31",
    tested_positive: 10386,
    tested_total: 22747
  },
  {
    date: "2020-11-30",
    tested_positive: 20569,
    tested_total: 45795
  },
  {
    date: "2020-12-31",
    tested_positive: 21164,
    tested_total: 84140
  },
  {
    date: "2021-01-31",
    tested_positive: 20390,
    tested_total: 106453
  },
  {
    date: "2021-02-28",
    tested_positive: 20518,
    tested_total: 118318
  },
  {
    date: "2021-03-31",
    tested_positive: 20768,
    tested_total: 138108
  },
  {
    date: "2021-04-30",
    tested_positive: 60768,
    tested_total: 160019
  },
  {
    date: "2021-05-31",
    tested_positive: 20172,
    tested_total: 176022
  },
  {
    date: "2021-06-30",
    tested_positive: 20349,
    tested_total: 182726
  },
  {
    date: "2021-07-31",
    tested_positive: 12162,
    tested_total: 194596
  },
  {
    date: "2021-08-31",
    tested_positive: 20108,
    tested_total: 198044
  },
  {
    date: "2021-09-30",
    tested_positive: 23065,
    tested_total: 200450
  },
  {
    date: "2021-10-31",
    tested_positive: 172553,
    tested_total: 208408
  },
  {
    date: "2021-11-30",
    tested_positive: 122820,
    tested_total: 235765
  },
  {
    date: "2021-12-31",
    tested_positive: 153815,
    tested_total: 257602
  },
  {
    date: "2022-01-31",
    tested_positive: 102476,
    tested_total: 305182
  },
  {
    date: "2022-02-07",
    tested_positive: 202154,
    tested_total: 322773,
  }
]

const approached_through_bco = approached_through_bco_raw.map(({date, ...rest}) => {
  return {date: new Date(date), ...rest};
});
