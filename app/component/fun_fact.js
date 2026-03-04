import React from 'react'

const facts = [
    "Almost every Filipino has said 'Open the light' at least once. It comes directly from the Filipino 'buksan ang ilaw' — where 'buksan' means to open. In English, we turn on or switch on lights, because the action refers to the switch mechanism, not the light itself.",

    "Saying 'I'll ride the elevator' or 'Let's ride the escalator' is a classic Filipinism. The Filipino word 'sakay' covers all forms of getting on something — a jeep, a bus, even an elevator. In standard English, you take or use an elevator, you don't ride it.",

    "Filipinos love saying 'I can't cope up with the stress.' The standard phrase is simply 'cope with' — no 'up' needed. This likely came from mixing 'cope with' and 'keep up with' together, which is actually a really creative blend!",

    "'I'll take my breakfast first' is something every Filipino student has said before class. The Filipino phrase 'kainin muna' got translated literally. In English, you eat your breakfast — you don't take it (unless you're taking it to go!).",

    "In the Philippines, you'll hear 'She's my classmate since Grade 1.' In standard English, a classmate is only someone in your current class. Filipinos use it more like 'longtime school friend,' which is honestly a warmer and more endearing use of the word.",

    "'I need to go to the CR' (Comfort Room) is uniquely Filipino. The term 'Comfort Room' itself is a Filipinism — most English-speaking countries say restroom, bathroom, or toilet. 'CR' doesn't exist in standard English vocabulary at all!",
    
"Linguists point out that Filipinisms are a form of code-switching and language blending, which requires a bilingual or multilingual brain. The mistakes don't come from ignorance — they come from the brain actively translating between two complex language systems simultaneously. That's actually impressive!"
];

const randomFact = facts[Math.floor(Math.random() * facts.length)];

const fun_fact = () => {
    return (
        <p className="text-(--dark-text) text-xl">{randomFact}</p>
    );
}

export default fun_fact
