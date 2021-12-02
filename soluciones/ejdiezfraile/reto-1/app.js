const list = ['hola@somoshackersastutos.com', 'ambrosio@outlook.com', 'coco@malandriners.dev', 'hello@somoshackersastutos.com', 'ambrosio@outlook.com', 'ciao@somoshackersastutos.com']

const findSmartHackers = (list) => {
    // Build a Map<domain, [addresses]>
    const map = new Map()
    list.forEach((item) => {
        const domain = item.split('@')[1];
        const addresses = map.has(domain) ? map.get(domain) : []
        addresses.push(item)
        map.set(domain, addresses)
    })

    // Reduce all values to the longest array
    const values = [...map.values()]
    return values.reduce((a, b) => a.length > b.length ? a : b)
}

console.log(findSmartHackers(list))