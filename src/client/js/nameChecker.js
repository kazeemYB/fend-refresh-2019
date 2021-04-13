function checkForName(formText) {
    const url = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    // return url.test(formText);
    var regex = url;
    var newUrl = new RegExp(regex, 'i');
    return newUrl.test(formText);
}



export { checkForName }