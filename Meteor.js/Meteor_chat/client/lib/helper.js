Template.registerHelper('currentMode', () => {
    return Session.get('viewMode');
});