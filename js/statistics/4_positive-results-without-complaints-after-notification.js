const positive_results_without_complaints_after_notification_raw = [
  {
    date: "2020-12-31",
    tested_total: 45495,
    tested_positive: 3637,
    had_no_complaints: 1067,
    percentage_positive_no_complaints: '2%'
  },
  {
    date: "2021-01-31",
    tested_total: 21706,
    tested_positive: 2059,
    had_no_complaints: 639,
    percentage_positive_no_complaints: '3%'
  },
  {
    date: "2021-02-28",
    tested_total: 12765,
    tested_positive: 955,
    had_no_complaints: 350,
    percentage_positive_no_complaints: '3%'
  },
  {
    date: "2021-03-31",
    tested_total: 25241,
    tested_positive: 1514,
    had_no_complaints: 661,
    percentage_positive_no_complaints: '3%'
  },
  {
    date: "2021-04-30",
    tested_total: 28778,
    tested_positive: 1889,
    had_no_complaints: 781,
    percentage_positive_no_complaints: '3%'
  },
  {
    date: "2021-05-31",
    tested_total: 18442,
    tested_positive: 1033,
    had_no_complaints: 448,
    percentage_positive_no_complaints: '2%'
  },
  {
    date: "2021-06-30",
    tested_total: 3976,
    tested_positive: 235,
    had_no_complaints: 84,
    percentage_positive_no_complaints: '2%'
  },
  {
    date: "2021-07-31",
    tested_total: 11148,
    tested_positive: 1006,
    had_no_complaints: 328,
    percentage_positive_no_complaints: '3%'
  },
  {
    date: "2021-08-31",
    tested_total: 1892,
    tested_positive: 188,
    had_no_complaints: 52,
    percentage_positive_no_complaints: '3%'
  },
  {
    date: "2021-09-30",
    tested_total: 1560,
    tested_positive: 146,
    had_no_complaints: 3,
    percentage_positive_no_complaints: '0%'
  },
  {
    date: "2021-10-31",
    tested_total: 4587,
    tested_positive: 547,
    had_no_complaints: 106,
    percentage_positive_no_complaints: '2%'
  },
  {
    date: "2021-11-30",
    tested_total: 16586,
    tested_positive: 2092,
    had_no_complaints: 487,
    percentage_positive_no_complaints: '3%'
  },
  {
    date: "2021-12-31",
    tested_total: 11683,
    tested_positive: 1743,
    had_no_complaints: 494,
    percentage_positive_no_complaints: '4%'
  },
  {
    date: "2022-01-31",
    tested_total: 18434,
    tested_positive: 4669,
    had_no_complaints: 1116,
    percentage_positive_no_complaints: '6%'
  },
  {
    date: "2022-02-28",
    tested_total: 16985,
    tested_positive: 7046,
    had_no_complaints: 841,
    percentage_positive_no_complaints: '5%'
  },
]

const positive_results_without_complaints_after_notification = positive_results_without_complaints_after_notification_raw.map(({date, ...rest}) => {
  return {date: new Date(date), ...rest};
});

const positive_results_without_complaints_after_notification_totals = {
    total_tested_positive: 31947,
    tested_positive_without_complaints: 7457
}
