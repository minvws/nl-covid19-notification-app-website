const warning_notifications_raw = [
  {
    date: "2020-08-31",
    notifications: 27
  },
  {
    date: "2020-09-30",
    notifications: 417
  },
  {
    date: "2020-10-31",
    notifications: 22747
  },
  {
    date: "2020-11-30",
    notifications: 45795
  },
  {
    date: "2020-12-31",
    notifications: 84140
  },
  {
    date: "2021-01-31",
    notifications: 106453
  },
  {
    date: "2021-02-28",
    notifications: 118318
  },
  {
    date: "2021-03-31",
    notifications: 138108
  },
  {
    date: "2021-04-30",
    notifications: 160019
  },
  {
    date: "2021-05-31",
    notifications: 176022
  },
  {
    date: "2021-06-30",
    notifications: 178726
  },
  {
    date: "2021-07-31",
    notifications: 194596
  },
  {
    date: "2021-08-31",
    notifications: 198044
  },
  {
    date: "2021-09-30",
    notifications: 200450
  },
  {
    date: "2021-10-31",
    notifications: 208408
  },
  {
    date: "2021-11-30",
    notifications: 235765
  },
  {
    date: "2021-12-31",
    notifications: 257602
  },
  {
    date: "2022-01-31",
    notifications: 305182
  },
  {
    date: "2022-02-06",
    notifications: 322773,
  }
]

const warning_notifications = warning_notifications_raw.map(({date, ...rest}) => {
  return {date: new Date(date), ...rest};
});
