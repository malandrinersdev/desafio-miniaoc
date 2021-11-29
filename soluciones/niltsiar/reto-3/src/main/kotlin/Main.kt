fun main() {
    letterCombinations(listOf('6')).forEach { combination -> println(combination) }
    letterCombinations("234".toCharArray().toList()).forEach { combination -> println(combination) }

    val key = "malo olma loma mola"
    println(key.toSmsDigits())
}

fun letterCombinations(digits: List<Char>): List<String> {
    if (digits.isEmpty()) {
        return emptyList()
    }

    return letterCombinations(digits.first(), digits.drop(1), emptyList())
}

tailrec fun letterCombinations(currentDigit: Char, remainingDigits: List<Char>, results: List<String>): List<String> {
    val letters = digitsMap[currentDigit] ?: return results

    val newResults = letters.map { c ->
        results.map { result -> result + c }
            .ifEmpty { listOf(c.toString()) }
    }
        .flatten()

    if (remainingDigits.isEmpty()) {
        return newResults
    }

    return letterCombinations(remainingDigits.first(), remainingDigits.drop(1), newResults)
}

fun String.toSmsDigits(): String {
    val chars = this.toCharArray().toList()
    return chars.mapNotNull { c -> letterMap[c] }
        .flatten()
        .joinToString(separator = "")
}

private val digitsMap: Map<Char, List<Char>> = mutableMapOf(
    '2' to listOf('a', 'b', 'c'),
    '3' to listOf('d', 'e', 'f'),
    '4' to listOf('g', 'h', 'i'),
    '5' to listOf('j', 'k', 'l'),
    '6' to listOf('m', 'n', 'o'),
    '7' to listOf('p', 'q', 'r', 's'),
    '8' to listOf('t', 'u', 'v'),
    '9' to listOf('w', 'x', 'y', 'z'),
    '0' to listOf(' '),
)

private val letterMap: Map<Char, List<Char>> = digitsMap
    .map { entry ->
        entry.value.mapIndexed { index, c ->
            c to buildList<Char> { repeat(index + 1) { add(entry.key) } }
        }
    }
    .flatten()
    .toMap()
