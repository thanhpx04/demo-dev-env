/* App frontend script */
async function getGitHubInfo(issueKey) {
    const owner = 'thanhpx04';
    const repo = 'test-github-plugin';
    const token = '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';
    // const context = await AP.context.getContext();
    // var issueKey = context.jira.issue.key;
    console.log(issueKey);
    issueKey = 'PD-15';
    console.log(issueKey);
    const responseBranches = await fetch(` https://api.github.com/repos/${owner}/${repo}/branches`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`}
    });
    const dataBranches = await responseBranches.json();
    let listFilteredBranches = dataBranches.filter(function (item) { return item.name.includes(issueKey); });
    console.log(listFilteredBranches);
    console.log(listFilteredBranches.length);
    const responseCommits = await fetch(` https://api.github.com/repos/${owner}/${repo}/commits`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`}
    });
    const dataCommits = await responseCommits.json();
    let listFilteredCommits = dataCommits.filter(function (item) { return item.commit.message.includes(issueKey); });
    console.log(listFilteredCommits);
    console.log(listFilteredCommits.length);
    displayData(listFilteredBranches.length, listFilteredCommits.length);
}

function displayData(noBranches, noCommits) {
    const githubInfo = document.getElementById("githubInfo");

    // clean data
    $("#githubInfo").empty();

    // populate data
    githubInfo.innerHTML += 
    `<div class="aui-message">
    <p class="subtitle">No. branches: ${noBranches}</p>
    <p class="subtitle">No. commits: ${noCommits}</p>
    </div>`;
}

function openDialog() {
    AP.dialog.create({
        key: 'dialog-module-key',
        width: '500px',
        height: '200px',
        chrome: true,
        submitText: 'Close'
      }).on("close", callbackFunc);
}

function callbackFunc() {
    console.log("closed");
}


// Shows the dialog when the "Show dialog" button is clicked
AJS.$("#dialog-show-button").on('click', function(e) {
    e.preventDefault();
    AJS.dialog2("#demo-dialog").show();
});

// Hides the dialog
AJS.$("#dialog-submit-button").on('click', function (e) {
    e.preventDefault();
    AJS.dialog2("#demo-dialog").hide();
});