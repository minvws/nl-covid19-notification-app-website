// ggd_positive_test_authorisations
// not in use

const positive_results_after_notification_raw = [
  {
    date: "2020-08-31",
    ggd_daily: 5,
    ggd_cumulative: 27
  },
  {
    date: "2020-09-30",
    ggd_daily: 30,
    ggd_cumulative: 417
  },
  {
    date: "2020-10-31",
    ggd_daily: 1386,
    ggd_cumulative: 22747
  },
  {
    date: "2020-11-30",
    ggd_daily: 569,
    ggd_cumulative: 45795
  },
  {
    date: "2020-12-31",
    ggd_daily: 1164,
    ggd_cumulative: 84140
  },
  {
    date: "2021-01-31",
    ggd_daily: 390,
    ggd_cumulative: 106453
  },
  {
    date: "2021-02-28",
    ggd_daily: 518,
    ggd_cumulative: 118318
  },
  {
    date: "2021-03-31",
    ggd_daily: 768,
    ggd_cumulative: 138108
  },
  {
    date: "2021-04-30",
    ggd_daily: 0,
    ggd_cumulative: 160019
  },
  {
    date: "2021-05-31",
    ggd_daily: 172,
    ggd_cumulative: 176022
  },
  {
    date: "2021-06-30",
    ggd_daily: 49,
    ggd_cumulative: 178726
  },
  {
    date: "2021-07-31",
    ggd_daily: 162,
    ggd_cumulative: 194596
  },
  {
    date: "2021-08-31",
    ggd_daily: 108,
    ggd_cumulative: 198044
  },
  {
    date: "2021-09-30",
    ggd_daily: 65,
    ggd_cumulative: 200450
  },
  {
    date: "2021-10-31",
    ggd_daily: 553,
    ggd_cumulative: 208408
  },
  {
    date: "2021-11-30",
    ggd_daily: 820,
    ggd_cumulative: 235765
  },
  {
    date: "2021-12-31",
    ggd_daily: 815,
    ggd_cumulative: 257602
  },
  {
    date: "2022-01-31",
    ggd_daily: 2476,
    ggd_cumulative: 305182
  },
  {
    date: "2022-02-06",
    ggd_daily: 2154,
    ggd_cumulative: 322773,
  }
]

const positive_results_after_notification = positive_results_after_notification_raw.map(({date, ...rest}) => {
  return {date: new Date(date), ...rest};
});
