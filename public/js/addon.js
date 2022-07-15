/* App frontend script */
function getToken() {
    AP.context.getToken().then(
        response => {
            console.log("getToken-LOG");
            console.log(response);
        }
    );
}

function getContext() {
    AP.context.getContext().then(
        response => {
            console.log("getContext-LOG");
            console.log(response);
        }
    );
}
