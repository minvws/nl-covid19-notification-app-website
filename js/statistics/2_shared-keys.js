const shared_keys_raw = [
    { 
        date: "2020-10-31",
        shared_keys: 22747,
        cumulative_shared_keys:	22747
    },
    { 
        date: "2020-11-30",
        shared_keys: 23048,
        cumulative_shared_keys:	45795
    },
    { 
        date: "2020-12-01",
        shared_keys: 38345,
        cumulative_shared_keys:	84140 
    },
    { 
        date: "2021-01-31",
        shared_keys: 22313,
        cumulative_shared_keys:	106453
    },
    { 
        date: "2021-02-28",
        shared_keys: 11865,
        cumulative_shared_keys:	118318
    },
    { 
        date: "2021-03-31",
        shared_keys: 19790,
        cumulative_shared_keys:	138108
    },
    { 
        date: "2021-04-30",
        shared_keys: 21911,
        cumulative_shared_keys:	160019
    },
    { 
        date: "2021-05-31",
        shared_keys: 16003,
        cumulative_shared_keys:	176022
    },
    { 
        date: "2021-06-30",
        shared_keys: 2704,
        cumulative_shared_keys:	178726
    },
    { 
        date: "2021-07-31",
        shared_keys: 15870,
        cumulative_shared_keys:	194596
    },
    { 
        date: "2021-08-31",
        shared_keys: 3448,
        cumulative_shared_keys:	198044
    },
    { 
        date: "2021-09-30",
        shared_keys: 2406,
        cumulative_shared_keys:	200450
    },
    { 
        date: "2021-10-31",
        shared_keys: 7958,
        cumulative_shared_keys:	208408
    },
    { 
        date: "2021-11-30",
        shared_keys: 27357,
        cumulative_shared_keys:	235765
    },
    { 
        date: "2021-12-31",
        shared_keys: 21837,
        cumulative_shared_keys:	257602 
    },
    { 
        date: "2022-01-31",
        shared_keys: 47580,
        cumulative_shared_keys:	305182
    },
    { 
        date: "2022-02-28",
        shared_keys: 57139,
        cumulative_shared_keys:	362321
    },
    { 
        date: "2022-03-18",
        shared_keys: 53138,
        cumulative_shared_keys:	415504
    },
]

const shared_keys = shared_keys_raw.map(({date, ...rest}) => {
  return {date: new Date(date), ...rest};
});
