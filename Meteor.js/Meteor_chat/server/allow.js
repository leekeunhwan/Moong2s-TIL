Rooms.allow({
    insert(userId, doc) {
        return (userId && doc.owner === userId);
    }
})