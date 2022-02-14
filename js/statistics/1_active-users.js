const active_users_raw = [
  {
    date: "2020-08-31",
    active_users: 27
  },
  {
    date: "2020-09-30",
    active_users: 417
  },
  {
    date: "2020-10-31",
    active_users: 22747
  },
  {
    date: "2020-11-30",
    active_users: 45795
  },
  {
    date: "2020-12-31",
    tested_positive: 21164,
    active_users: 84140
  },
  {
    date: "2021-01-31",
    tested_positive: 20390,
    active_users: 106453
  },
  {
    date: "2021-02-28",
    tested_positive: 20518,
    active_users: 118318
  },
  {
    date: "2021-03-31",
    active_users: 138108
  },
  {
    date: "2021-04-30",
    tested_positive: 60768,
    active_users: 160019
  },
  {
    date: "2021-05-31",
    active_users: 176022
  },
  {
    date: "2021-06-30",
    tested_positive: 20349,
    active_users: 182726
  },
  {
    date: "2021-07-31",
    tested_positive: 12162,
    active_users: 194596
  },
  {
    date: "2021-08-31",
    active_users: 198044
  },
  {
    date: "2021-09-30",
    active_users: 200450
  },
  {
    date: "2021-10-31",
    active_users: 208408
  },
  {
    date: "2021-11-30",
    active_users: 235765
  },
  {
    date: "2021-12-31",
    active_users: 257602
  },
  {
    date: "2022-01-31",
    active_users: 305182
  },
  {
    date: "2022-02-07",
    active_users: 322773,
  }
]

const active_users = active_users_raw.map(({date, ...rest}) => {
  return {date: new Date(date), ...rest};
});
