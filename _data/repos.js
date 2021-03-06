const fetch = require("node-fetch")

module.exports = async () => {
    const reposUrl = 'https://api.github.com/users/kingultron99/repos'
    const repos = await fetch(reposUrl, {
        headers: {
            'Authorization': 'token 70b7230dc964e2b64cb16e9e5e934b5960aada71',
            'Accept': 'application/vnd.github.v3+json'
        }
    }).then(res => res.json())
    return repos
}