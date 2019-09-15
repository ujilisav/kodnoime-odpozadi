exports.addTimeForCookie = (hours) => {
    const current = new Date();
    const currentHours = current.getHours();
    const modifiedHours = currentHours + hours;
    current.setHours(modifiedHours);
    return current;
}