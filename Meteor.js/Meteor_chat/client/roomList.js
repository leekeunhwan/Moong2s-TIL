Template.roomList.onCreated(function () {
    let self = this;
    self.roomListSub = self.subscribe('roomList');
})

Template.roomList.onDestroyed(function () {
    let self = this;
    self.roomListSub.stop();
})

Template.roomList.helpers({
    list() {
        return Rooms.find();
    }
})