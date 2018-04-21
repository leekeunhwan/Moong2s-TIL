let fixtures = [{
    name: "moong2",
    phone: "010-2076-3948",
    email: "dlrmsghks7@gmail.com",
    company: "Woowa Brothers Corp",
    birthday: "1990/07/22"
  },
  {
    name: "min_zzz",
    phone: "010-2562-8480",
    email: "bmj1012@naver.com",
    company: "Woowa Brothers Corp",
    birthday: "1995/03/09"
  },
  {
    name: "dilcheck",
    phone: "010-9206-4635",
    email: "dilcheck@gmail.com",
    company: "blocko corp",
    birthday: "1992/12/23"
  },
  {
    name: "graceLee",
    phone: "010-9034-4645",
    email: "lsgace@nate.com",
    company: "206meat",
    birthday: "1965/02/25"
  },
  {
    name: "mia",
    phone: "010-9282-4645",
    email: "ksmace7@naver.com",
    company: "206meat",
    birthday: "1966/02/05"
  },
  {
    name: "dongwon",
    phone: "010-4879-6131",
    email: "dongwontuna@naver.com",
    company: "tmon",
    birthday: "1992/08/05"
  },
  {
    name: "minsoo",
    phone: "010-7782-4828",
    email: "minsookim@gmail.com",
    company: "lotte",
    birthday: "1982/06/05"
  },
  {
    name: "jowon",
    phone: "010-9232-4115",
    email: "jowon123@nate.com",
    company: "next ent",
    birthday: "1986/12/15"
  },
  {
    name: "songsaebyul",
    phone: "010-3492-4388",
    email: "newstar@gmail.com",
    company: "wonderK",
    birthday: "1988/05/05"
  },
  {
    name: "siwon",
    phone: "010-8882-4335",
    email: "ksiinw@naver.com",
    company: "22div",
    birthday: "1996/02/05"
  },
  {
    name: "seonmyung",
    phone: "010-9992-4395",
    email: "seonmang9@naver.com",
    company: "musician",
    birthday: "1995/05/03"
  }
];

Meteor.startup(() => {
  if (AddressBook.find().count() === 0) {
    console.log("데이터가 존재하지 않습니다. fixture 데이터를 입력합니다.");
    for (let i = 0, len = 10; i < len; i++) {
      AddressBook.insert(fixtures[i]);
    }
  }
});