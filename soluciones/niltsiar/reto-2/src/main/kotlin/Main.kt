fun main() {
    val passwords = generateTrollPassword("mola")
    passwords.forEach { password -> println(password) }
}

fun generateTrollPassword(seed: String, prefix: String = ""): List<String> {
    if (seed.length == 1) {
        return listOf(prefix + seed)
    }

    return seed.mapIndexed { index, c ->
        generateTrollPassword(seed.removeRange(index, index + 1), prefix + c)
    }.flatten()
}
