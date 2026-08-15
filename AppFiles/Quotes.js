const QUOTES = [
    // Steve Jobs
    "The only way to do great work is to love what you do.",
    
    // Socrates
    "The unexamined life is not worth living.",
    "The only true wisdom is in knowing you know nothing.",
    
    // Albert Einstein
    "Imagination is more important than knowledge.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    
    // Maya Angelou
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    
    // Martin Luther King Jr.
    "The time is always right to do what is right.",
    
    // Winston Churchill
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    
    // Nelson Mandela
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    
    // Benjamin Franklin
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    
    // Eleanor Roosevelt
    "No one can make you feel inferior without your consent.",
    
    // Mark Twain
    "The secret of getting ahead is getting started."
];

// Alias in lowercase — the app looks for a variable/export named "quotes"
const quotes = QUOTES;

// Support both CommonJS and ES module import styles, plus plain <script> tag loading
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quotes, QUOTES };
}
if (typeof window !== 'undefined') {
    window.quotes = quotes;
}

// For debugging - log to confirm the file loaded
console.log('Quotes.js loaded successfully. Quotes count:', QUOTES.length);
