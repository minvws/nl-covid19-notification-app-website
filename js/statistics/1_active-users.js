const active_users_raw = [
    {
        date: "2021-04-30",
        active_users: 3049346.84
    }, 
    {
        date: "2021-05-31",
        active_users: 3327002.01
    }, 
    {
        date: "2021-06-30",
        active_users: 2883372.88
    }, 
    {
        date: "2021-07-29",
        active_users: 2727479.22
    }, 
    {
        date: "2021-08-31",
        active_users: 2600700.25
    }, 
    {
        date: "2021-09-30",
        active_users: 2531497.20
    }, 
    {
        date: "2021-10-31",
        active_users: 2449499.42
    }, 
    {
        date: "2021-11-30",
        active_users: 2236462.82
    }, 
    {
        date: "2021-12-31",
        active_users: 1945557.48
    }, 
    {
        date: "2022-01-31",
        active_users: 2429567.50
    }, 
    {
        date: "2022-02-28",
        active_users: 2443276.73
    },
    {
        date: "2022-03-30",
        active_users: 2341465
    },
    {
        date: "2022-04-21",
        active_users: 1197947
    },
    {
        date: "2022-05-05",
        active_users: 0
    }
]

const active_users = active_users_raw.map(({date, ...rest}) => {
  return {date: new Date(date), ...rest};
});
