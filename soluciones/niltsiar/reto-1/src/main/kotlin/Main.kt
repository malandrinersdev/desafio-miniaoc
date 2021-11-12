fun main() {
    val mails = listOf(
        "hola@somoshackersastutos.com",
        "ambrosio@outlook.com",
        "coco@malandriners.dev",
        "hello@somoshackersastutos.com",
        "ambrosio@outlook.com",
        "ciao@somoshackersastutos.com",
    )

    println(findMostRepeatedDomain(mails))
}

fun findMostRepeatedDomain(mails: List<String>): List<String> {
    val groupedEmailsByDomain = mails.filter { mail -> mail.contains('@') } // a valid email address must contain the @
        .groupBy { mail -> mail.split('@').last() } // group by domain

    val emailsAndOccurrences =
        groupedEmailsByDomain.mapValues { group -> group.value.size } // count number of emails from each domain
            .map { entry -> entry.value to entry.key } // map domains by number of occurrences
            .groupBy({ it.first }, { it.second }) // group domains by number of occurrences just in case there is a tie

    // take the most repeated domains
    val maxRepeatedDomains = emailsAndOccurrences[emailsAndOccurrences.maxOf { it.key }] ?: emptyList()

    // return a list of email addresses from most repeated domains
    return groupedEmailsByDomain.filter { groupEmails -> maxRepeatedDomains.contains(groupEmails.key) }.values.flatten()
}
