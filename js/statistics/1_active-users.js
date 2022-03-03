const active_users_raw = [
{
    date: "2021-04-01",
    active_users: 3049346.84
}, 
{
    date: "2021-05-01",
    active_users: 3327002.01
}, 
{
    date: "2021-06-01",
    active_users: 2883372.88
}, 
{
    date: "2021-07-01",
    active_users: 2727479.22
}, 
{
    date: "2021-08-01",
    active_users: 2600700.25
}, 
{
    date: "2021-09-01",
    active_users: 2531497.20
}, 
{
    date: "2021-10-01",
    active_users: 2449499.42
}, 
{
    date: "2021-11-01",
    active_users: 2236462.82
}, 
{
    date: "2021-12-01",
    active_users: 1945557.48
}, 
{
    date: "2022-01-01",
    active_users: 2429567.50
}, 
{
    date: "2022-02-01",
    active_users: 2444022.41
},
{
    date: "2022-03-01",
    active_users: 2444022.41
}
]

const active_users = active_users_raw.map(({date, ...rest}) => {
  return {date: new Date(date), ...rest};
});
