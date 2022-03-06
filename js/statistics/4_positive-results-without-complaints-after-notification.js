const positive_results_without_complaints_after_notification_raw = [
  {
    date: "2020-12-31",
    tested_total: 45495,
    tested_positive: 1067
  },
  {
    date: "2021-01-31",
    tested_total: 21706,
    tested_positive: 639
  },
  {
    date: "2021-02-28",
    tested_total: 12765,
    tested_positive: 350
  },
  {
    date: "2021-03-31",
    tested_total: 25241,
    tested_positive: 661
  },
  {
    date: "2021-04-30",
    tested_total: 28778,
    tested_positive: 781
  },
  {
    date: "2021-05-31",
    tested_total: 18442,
    tested_positive: 448
  },
  {
    date: "2021-06-30",
    tested_total: 3976,
    tested_positive: 84
  },
  {
    date: "2021-07-31",
    tested_total: 11148,
    tested_positive: 328
  },
  {
    date: "2021-08-31",
    tested_total: 1892,
    tested_positive: 52
  },
  {
    date: "2021-09-30",
    tested_total: 1560,
    tested_positive: 3
  },
  {
    date: "2021-10-31",
    tested_total: 4587,
    tested_positive: 106
  },
  {
    date: "2021-11-30",
    tested_total: 16586,
    tested_positive: 487
  },
  {
    date: "2021-12-31",
    tested_total: 11683,
    tested_positive: 494
  },
  {
    date: "2022-01-31",
    tested_total: 18434,
    tested_positive: 1116
  },
  {
    date: "2022-02-28",
    tested_total: 18434,
    tested_positive: 841
  }
]

const positive_results_without_complaints_after_notification = positive_results_without_complaints_after_notification_raw.map(({date, ...rest}) => {
  return {date: new Date(date), ...rest};
});

const positive_results_without_complaints_after_notification_totals = {
    total_tested: 239278,
    tested_positive_without_complaints: 7457
}
