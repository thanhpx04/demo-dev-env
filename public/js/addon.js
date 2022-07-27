/* App frontend script */
async function getGitHubInfo(issueKey) {
    const owner = 'thanhpx04';
    const repo = 'test-github-plugin';
    const token = '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';
    // const context = await AP.context.getContext();
    // var issueKey = context.jira.issue.key;
    console.log(issueKey);
    const responseGet = await fetch(` https://api.github.com/repos/${owner}/${repo}/branches`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`}
    });
    const dataGet = await responseGet.json();
    let result = dataGet.filter(function (item) { return item.name.includes(issueKey); });
    console.log(result);
    console.log(result.length);
}

function getContext() {
    AP.context.getContext().then(
        response => {
            console.log("getContext-LOG");
            console.log(response);
        }
    );
}
