Meteor.startup(() => {
    if (!Rooms.findOne({
            _id: "MeteorSchool"
        })) {

        let usr1 = Accounts.createUser({
            username: "hwan",
            email: "dlrmsghks7@gmail.com",
            password: "hq1107!"
        });

        let usr2 = Accounts.createUser({
            username: "minji",
            email: "bmj1012@naver.com",
            password: "alswl8580"
        });

        Rooms.insert({
            _id: "MeteorSchool",
            name: "MeteorSchool",
            owner: usr1,
            userList: [usr1, usr2],
            createdAt: (new Date()).getTime()
        });
    }
});