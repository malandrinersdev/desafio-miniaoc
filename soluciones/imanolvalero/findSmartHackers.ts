interface CandidateClassification<Type> {
	item: Type;
	isCandidate: boolean;
}

interface HackerClassification extends CandidateClassification<string> {}

function hackerClassificator (email: string): HackerClassification {
    const word: string = 'hack'
    return {item:email, isCandidate:email.includes(word)}
}

const classifySmartHackers = (emails: string[]): HackerClassification[] =>
    emails.map( email => hackerClassificator(email))


export const findSmartHackers = (emails: string[]) => 
    classifySmartHackers(emails)
        .filter((hacker: HackerClassification) => hacker.isCandidate)
        .map((hacker: HackerClassification) => hacker.item)

