const list = [
  "hola@somoshackersastutos.com",
  "ambrosio@outlook.com",
  "coco@malandriners.dev",
  "hello@somoshackersastutos.com",
  "ambrosio@outlook.com",
  "ciao@somoshackersastutos.com",
];

findSmartHackers(list);

//find most repeated domain
function findHackersDomain(list) {
  const domainHash = {};
  for (let email of list) {
    const domain = email.split("@")[1];
    if (!domainHash[domain]) {
      domainHash[domain] = 1;
    } else {
      domainHash[domain]++;
    }
  }

  let mostRepeatedDomain = "";
  let timesRepeated = 0;
  for (let domain in domainHash) {
    if (domainHash[domain] > timesRepeated) {
      mostRepeatedDomain = domain;
      timesRepeated = domainHash[domain];
    }
  }

  return mostRepeatedDomain;
}

//show emails by console
function findSmartHackers(list) {
  const hackersDomain = findHackersDomain(list);
  const hackerEmails = list.filter((email) => {
    return email.split("@")[1] === hackersDomain;
  });
  console.log(hackerEmails);
}
