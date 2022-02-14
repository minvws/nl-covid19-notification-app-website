const approached_through_bco_raw = [
  {
    date: "2020-08-31",
    complaints: 15,
    approached: 27
  },
  {
    date: "2020-09-30",
    complaints: 230,
    approached: 417
  },
  {
    date: "2020-10-31",
    complaints: 10386,
    approached: 22747
  },
  {
    date: "2020-11-30",
    complaints: 20569,
    approached: 45795
  },
  {
    date: "2020-12-31",
    complaints: 21164,
    approached: 84140
  },
  {
    date: "2021-01-31",
    complaints: 20390,
    approached: 106453
  },
  {
    date: "2021-02-28",
    complaints: 20518,
    approached: 118318
  },
  {
    date: "2021-03-31",
    complaints: 20768,
    approached: 138108
  },
  {
    date: "2021-04-30",
    complaints: 60768,
    approached: 160019
  },
  {
    date: "2021-05-31",
    complaints: 20172,
    approached: 176022
  },
  {
    date: "2021-06-30",
    complaints: 20349,
    approached: 182726
  },
  {
    date: "2021-07-31",
    complaints: 12162,
    approached: 194596
  },
  {
    date: "2021-08-31",
    complaints: 20108,
    approached: 198044
  },
  {
    date: "2021-09-30",
    complaints: 23065,
    approached: 200450
  },
  {
    date: "2021-10-31",
    complaints: 172553,
    approached: 208408
  },
  {
    date: "2021-11-30",
    complaints: 122820,
    approached: 235765
  },
  {
    date: "2021-12-31",
    complaints: 153815,
    approached: 257602
  },
  {
    date: "2022-01-31",
    complaints: 102476,
    approached: 305182
  },
  {
    date: "2022-02-07",
    complaints: 202154,
    approached: 322773,
  }
]

const approached_through_bco = approached_through_bco_raw.map(({date, ...rest}) => {
  return {date: new Date(date), ...rest};
});
