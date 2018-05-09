Template.createRoom.events({
    "click button[name=saveRoom]" (evt, tmpl) {
        Rooms.insert({
            _id: tmpl.find('input[name=roomId]').value,
            name: tmpl.find('input[name=roomId]').value,
            owner: Meteor.userId(),
            userList: [Meteor.userId()]
        });
        tmpl.find('input[name=roomId]').value = "";
    }
})