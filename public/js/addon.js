/* App frontend script */
async function getGitHubInfo(issueKey) {
    const owner = 'thanhpx04';
    const repo = 'test-github-plugin';
    const token = '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';
    const currentBranch = 'M4P-1-discuss-design-logo';
    // console.log(issueKey);
    // issueKey = 'M4P-1';
    console.log(issueKey);
    const responseBranches = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`}
    });
    const dataBranches = await responseBranches.json();
    let listFilteredBranches = dataBranches.filter(function (item) { return item.name.includes(issueKey); });
    console.log(listFilteredBranches);
    console.log(listFilteredBranches.length);
    const responseCommits = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?sha=${currentBranch}`, {
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

function openDialog(issueKey) {
    console.log(issueKey);
    let closeCallback = () => {
        alert('Close Callback');
    };

    AP.require('dialog', function (dialog) {
        var newDialog = dialog.create({
            key: 'dialog-module-key',
            width: '700px',
            height: '350px',
            chrome: true,
            header: 'Development',
            cancelText: 'Close',
        }, true).on('close', closeCallback);
    });
}

async function putEntity() {
    const contextResult = await AP.context.getContext();
    
    const thanhPropertyKey = 'thanh04PropertyKey';
    const bodyData = `{
        "issue": {
            "id": ${contextResult.jira.issue.id},
            "key": ${contextResult.jira.issue.key}
        },
        "project": {
            "id": ${contextResult.jira.project.id},
            "key": ${contextResult.jira.project.key}
        }
    }`;
    console.log(bodyData);

    AP.request(`rest/api/2/issue/${contextResult.jira.issue.key}/properties/${thanhPropertyKey}`, {
    method: 'PUT',
    body: bodyData
    })
    .then(response => {
        console.log(
        `Response: ${response.status} ${response.statusText}`
        );
        return response.text();
    })
    .then(text => console.log(text))
    .catch(err => console.error(err));
}

async function getEntity() {
    // console.log(issueKey);
    // const responseBranches = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches`, {
    //     headers: {
    //         "Accept": "application/json",
    //         "Authorization": `Bearer ${token}`}
    // });
    // const dataBranches = await responseBranches.json();
}
