//Mock data for storing current (gold/coins), streak,
// and user customization data (theme, avatar, etc.)

export const initialProfile = {
    Username: "Guest2026",
    coins: 450, // money earned from games
    streak: 0, // current streak of days logged in
    equippedAvatar: "🧙‍♂️ Wizard",
    euippedBorder: "🌟 Glowing Gold"
};

// mock study sets containing categories, mastery progress, 
// and questions/answers for the interactive game view. 

export const initialStudySets = [
    {
        id: 1,
        title: "Data Structures",
        category: "Computer Science",
        progress: 85,
        questions: [
            { id: 101, question: "What does BST stand for?", 
                answer: "Binary Search Tree" },
            { id: 102, question: "What is a LIFO data structure?", 
                answer: "Stack" }
        ]
    },
    {
        id: 2,
        title: "Databases",
        category: "Computer Science",
        progress: 72,
        questions: [
            { id: 201, question: "What language is used for querying relational databases?", 
                answer: "SQL" }
        ]
    }
];


 //Mock catalog of cosmetics for the 
 // shop view where players spend coins.

export const shopItems = [
    { id: 1, name: "Cool Glasses", 
        category: "Avatar", 
        price: 200, 
        color: "var(--color-blue)" },
    { id: 2, name: "Wizard Hat", 
        category: "Avatar", 
        price: 300, 
        color: "var(--color-purple)" },
    { id: 3, name: "Golden Border", 
        category: "Border", 
        price: 175, 
        color: "var(--color-gold)" }
];