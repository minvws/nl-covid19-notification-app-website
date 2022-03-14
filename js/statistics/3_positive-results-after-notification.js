// ggd_positive_test_authorisations

const positive_results_after_notification_raw = [
    { 
        date: "2020-10-31",
        tests_after_notification: 13888,
        positive: 1618,
    },
    { 
        date: "2020-11-30",
        tests_after_notification: 14727,
        positive: 1596,
    },
    { 
        date: "2020-12-31", 
        tests_after_notification: 48705,
        positive: 3685,
    },
    {
        date: "2021-01-31",
        tests_after_notification: 22630,
        positive: 2020,
    },
    {
        date: "2021-02-28",
        tests_after_notification: 13897,
        positive: 960,
    },
    {
        date: "2021-03-31",
        tests_after_notification: 27148,
        positive: 1532,
    },
    {
        date: "2021-04-30",
        tests_after_notification: 30732,
        positive: 1869,
    },
    {
        date: "2021-05-31",
        tests_after_notification: 19391,
        positive: 1012,
    },
    {
        date: "2021-06-30",
        tests_after_notification: 4006,
        positive: 220,
    },
    {
        date: "2021-07-31",
        tests_after_notification: 11986,
        positive: 1011,
    },
    {
        date: "2021-08-31",
        tests_after_notification: 1960,
        positive: 187,
    },
    {
        date: "2021-09-30",
        tests_after_notification: 1655,
        positive: 142,
    },
    {
        date: "2021-10-31",
        tests_after_notification: 5121,
        positive: 579,
    },
    {
        date: "2021-11-30",
        tests_after_notification: 18117,
        positive: 2145,
    },
    {
        date: "2021-12-31",
        tests_after_notification: 12389,
        positive: 1731,
    },
    {
        date: "2022-01-31",
        tests_after_notification: 20373,
        positive: 4797,
    },
    {
        date: "2022-02-28",
        tests_after_notification: 22538,
        positive: 7151,
    },
    {
        date: "2022-03-11",
        tests_after_notification:  18164,
        positive: 7931,
    },
]

const positive_results_after_notification = positive_results_after_notification_raw.map(({date, ...rest}) => {
  return {date: new Date(date), ...rest};
});

const totals = {
    total_tested: 307451,
    tested_positive: 40210
}
