let arr = [
  {
    name: "Ha",
    gender: "female",
    poin: 8,
  },
  {
    name: "Huy",
    gender: "male",
    poin: 9,
  },
  {
    name: "Hung",
    gender: "male",
    poin: 7,
  },
  {
    name: "Phuong",
    gender: "female",
    poin: 6,
  },
  {
    name: "Huyen",
    gender: "female",
    poin: 10,
  },
  {
    name: "Long",
    gender: "male",
    poin: 5,
  },
  {
    name: "Luan",
    gender: "male",
    poin: 10,
  },
  {
    name: "Linh",
    gender: "female",
    poin: 8,
  },
];

let male = 0;
let female = 0;

arr.filter((item) => {
  if (item.gender === "female") {
    female += item.poin / arr.length;
  }
});
arr.filter((item) => {
  if (item.gender === "male") {
    male += item.poin / arr.length;
  }
});
console.log("điểm trung bình của nữ là :" + female);
console.log("điểm trung bình của nam là :" + male);
