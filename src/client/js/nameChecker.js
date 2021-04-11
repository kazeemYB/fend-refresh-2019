const checkForName = (formText) => {
    var res = formText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    var url = document.querySelector('#url').value;

    if (res == null) {
        alert("Please enter a valid URL");
        console.log(`Invalid URL --> ${url}`);
        document.querySelector('#invalid').innerHTML = `Please Enter a Valid URL - (${url})`;
        return false;
    } else {
        document.querySelector('#invalid').innerHTML = "";
        console.log(`Valid URL --> ${url}`);
        return true;
    }
}


export { checkForName }
