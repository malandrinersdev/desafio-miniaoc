const findSmartHackers = (emails) => {
    const domainCounter = {}
    emails.map((email) => {
        const domain = email.split("@")[1]
        domainCounter[domain] = (domainCounter[domain] || 0) + 1
    })
    const maxDomainsCount = Math.max(...Object.values(domainCounter))
    const hackersDomain = Object.keys(domainCounter).find(
        (domain) => domainCounter[domain] === maxDomainsCount
    )
    const hackersEmails = emails.filter(
        (email) => email.split("@")[1] === hackersDomain
    )
    const distinctHackersEmails = [...new Set(hackersEmails)]
    return distinctHackersEmails
}

module.exports = findSmartHackers
