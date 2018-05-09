Meteor.publish('roomList', function () {
    return Rooms.find();
})