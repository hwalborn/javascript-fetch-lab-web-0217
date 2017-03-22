const bsRepo = "javascript-fetch-lab"
function getIssues() {
  let issueTemplate = document.getElementById('issues-template').innerHTML
  let template = Handlebars.compile(issueTemplate)
  fetch(`https://api.github.com/repos/${bsRepo}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
  .then(showIssues)
}

function showIssues(json) {
  let issuesTemplate = document.getElementById('issues-template').innerHTML
  let results = Handlebars.compile(issuesTemplate)
  document.getElementById('issues').innerHTML = results(json)
}

function createIssue() {
  let url = `https://api.github.com/repos/${bsRepo}/issues`
  newTitle = document.getElementById('title').value
  newBody = document.getElementById('body').value
  fetch(url, {
    method: 'post',
    title: newTitle,
    body: newBody,
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(showIssues)
}

function showResults(json) {
  let repoTemplate = document.getElementById('repo-template').innerHTML
  let results = Handlebars.compile(repoTemplate)
  document.getElementById('results').innerHTML = results(json)

}


function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
  .then(json => showResults(json))
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
