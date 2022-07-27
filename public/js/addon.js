/* App frontend script */
function getGitHubInfo() {
    // get issue key
    // const context = await AP.context.getContext();
    // var issueKey = context.jira.issue.key;
    console.log(issueKey);
}

function getContext() {
    AP.context.getContext().then(
        response => {
            console.log("getContext-LOG");
            console.log(response);
        }
    );
}
