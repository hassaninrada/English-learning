/**
 * Advanced English Learning Content Data
 * 25 Progressive Units with Locked System
 */

const LINGO_CONTENT = [
    {
        id: 'unit-1',
        title: 'Unit 1: Foundations',
        description: 'Common greetings and self-introductions.',
        color: '#58cc02',
        lessons: [
            {
                id: 'l1-01',
                title: 'Saying Hello',
                type: 'vocabulary',
                xp: 100,
                questions: [
                    {
                        id: 'q1',
                        type: 'multiple-choice',
                        question: 'Which of these means "Hello"?',
                        options: ['Hi', 'Goodbye', 'Apple', 'Red'],
                        answer: 'Hi',
                        audio: 'Hi'
                    },
                    {
                        id: 'q1-2',
                        type: 'speaking',
                        question: 'Say "Hello, how are you?"',
                        answer: 'hello how are you',
                        display: 'Hello, how are you?',
                        instruction: 'Click the mic and speak clearly.'
                    },
                    {
                        id: 'q3',
                        type: 'arrange',
                        question: 'Translate: "Hello, how are you?"',
                        words: ['you?', 'how', 'Hello,', 'are'],
                        answer: 'Hello, how are you?'
                    }
                ]
            },
            {
                id: 'l1-02',
                title: 'Introductions',
                type: 'grammar',
                xp: 120,
                questions: [
                    {
                        id: 'q4',
                        type: 'fill-blank',
                        question: 'My name ___ John.',
                        options: ['am', 'is', 'are'],
                        answer: 'is'
                    },
                    {
                        id: 'q4-2',
                        type: 'speaking',
                        question: 'Say "Nice to meet you"',
                        answer: 'nice to meet you',
                        display: 'Nice to meet you',
                        instruction: 'Speak the sentence shown above.'
                    }
                ]
            },
            {
                id: 'l1-03',
                title: 'Basic Questions',
                type: 'vocabulary',
                xp: 100,
                questions: [
                    {
                        id: 'q1-3-1',
                        type: 'multiple-choice',
                        question: 'How do you ask someone\'s name?',
                        options: ['What is your name?', 'Where are you?', 'How old are you?', 'What time is it?'],
                        answer: 'What is your name?',
                        audio: 'What is your name?'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-2',
        title: 'Unit 2: Daily Life',
        description: 'Talk about your routine and objects.',
        color: '#1cb0f6',
        lessons: [
            {
                id: 'l2-01',
                title: 'At Home',
                type: 'vocabulary',
                xp: 150,
                questions: [
                    {
                        id: 'q6',
                        type: 'multiple-choice',
                        question: 'Where do you sleep?',
                        options: ['Kitchen', 'Bedroom', 'Garage', 'Garden'],
                        answer: 'Bedroom',
                        audio: 'Bedroom'
                    },
                    {
                        id: 'q7',
                        type: 'fill-blank',
                        question: 'I cook in the ____.',
                        options: ['bathroom', 'kitchen', 'hallway'],
                        answer: 'kitchen',
                        audio: 'I cook in the kitchen'
                    }
                ]
            },
            {
                id: 'l2-02',
                title: 'Daily Routine',
                type: 'grammar',
                xp: 130,
                questions: [
                    {
                        id: 'q2-2-1',
                        type: 'arrange',
                        question: 'Arrange: "I wake up at 7 AM"',
                        words: ['at', 'wake', 'I', '7', 'up', 'AM'],
                        answer: 'I wake up at 7 AM'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-3',
        title: 'Unit 3: Food & Dining',
        description: 'Ordering food and restaurant vocabulary.',
        color: '#ffc800',
        lessons: [
            {
                id: 'l3-01',
                title: 'At the Restaurant',
                type: 'vocabulary',
                xp: 200,
                questions: [
                    {
                        id: 'q8',
                        type: 'multiple-choice',
                        question: 'Coffee or ____?',
                        options: ['Tea', 'Table', 'Menu', 'Waitress'],
                        answer: 'Tea',
                        audio: 'Tea'
                    },
                    {
                        id: 'q9',
                        type: 'arrange',
                        question: 'Translate: "I would like a menu"',
                        words: ['menu', 'like', 'a', 'would', 'I'],
                        answer: 'I would like a menu'
                    },
                    {
                        id: 'q10',
                        type: 'speaking',
                        question: 'Say "Check, please"',
                        answer: 'check please',
                        display: 'Check, please',
                        instruction: 'Request the bill.'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-4',
        title: 'Unit 4: Shopping',
        description: 'Learn to shop and ask for prices.',
        color: '#ce82ff',
        lessons: [
            {
                id: 'l4-01',
                title: 'At the Store',
                type: 'vocabulary',
                xp: 180,
                questions: [
                    {
                        id: 'q4-1-1',
                        type: 'multiple-choice',
                        question: 'How much does this ____?',
                        options: ['cost', 'costs', 'costing', 'costed'],
                        answer: 'cost'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-5',
        title: 'Unit 5: Travel & Directions',
        description: 'Navigate the city and ask for directions.',
        color: '#ff4b4b',
        lessons: [
            {
                id: 'l5-01',
                title: 'Getting Around',
                type: 'vocabulary',
                xp: 220,
                questions: [
                    {
                        id: 'q5-1-1',
                        type: 'multiple-choice',
                        question: 'Where is the ____?',
                        options: ['station', 'happy', 'running', 'blue'],
                        answer: 'station'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-6',
        title: 'Unit 6: Family & Friends',
        description: 'Talk about relationships and people.',
        color: '#58cc02',
        lessons: [
            {
                id: 'l6-01',
                title: 'My Family',
                type: 'vocabulary',
                xp: 160,
                questions: [
                    {
                        id: 'q6-1-1',
                        type: 'multiple-choice',
                        question: 'Your mother\'s mother is your ____.',
                        options: ['grandmother', 'aunt', 'sister', 'cousin'],
                        answer: 'grandmother'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-7',
        title: 'Unit 7: Work & School',
        description: 'Professional and academic vocabulary.',
        color: '#1cb0f6',
        lessons: [
            {
                id: 'l7-01',
                title: 'At Work',
                type: 'vocabulary',
                xp: 190,
                questions: [
                    {
                        id: 'q7-1-1',
                        type: 'fill-blank',
                        question: 'I work in an ____.',
                        options: ['office', 'apple', 'ocean'],
                        answer: 'office'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-8',
        title: 'Unit 8: Weather & Seasons',
        description: 'Describe weather and seasonal changes.',
        color: '#ffc800',
        lessons: [
            {
                id: 'l8-01',
                title: 'Today\'s Weather',
                type: 'vocabulary',
                xp: 170,
                questions: [
                    {
                        id: 'q8-1-1',
                        type: 'multiple-choice',
                        question: 'It is ____ today.',
                        options: ['sunny', 'table', 'running', 'happy'],
                        answer: 'sunny'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-9',
        title: 'Unit 9: Hobbies & Sports',
        description: 'Talk about activities and interests.',
        color: '#ce82ff',
        lessons: [
            {
                id: 'l9-01',
                title: 'My Hobbies',
                type: 'vocabulary',
                xp: 200,
                questions: [
                    {
                        id: 'q9-1-1',
                        type: 'multiple-choice',
                        question: 'I like to play ____.',
                        options: ['soccer', 'kitchen', 'window', 'happy'],
                        answer: 'soccer'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-10',
        title: 'Unit 10: Health & Body',
        description: 'Medical vocabulary and body parts.',
        color: '#ff4b4b',
        lessons: [
            {
                id: 'l10-01',
                title: 'At the Doctor',
                type: 'vocabulary',
                xp: 210,
                questions: [
                    {
                        id: 'q10-1-1',
                        type: 'multiple-choice',
                        question: 'I have a ____.',
                        options: ['headache', 'table', 'running', 'blue'],
                        answer: 'headache'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-11',
        title: 'Unit 11: Technology',
        description: 'Modern tech and digital vocabulary.',
        color: '#58cc02',
        lessons: [
            {
                id: 'l11-01',
                title: 'Digital World',
                type: 'vocabulary',
                xp: 230,
                questions: [
                    {
                        id: 'q11-1-1',
                        type: 'multiple-choice',
                        question: 'I use my ____ every day.',
                        options: ['smartphone', 'tree', 'water', 'happy'],
                        answer: 'smartphone'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-12',
        title: 'Unit 12: Nature & Animals',
        description: 'Wildlife and environmental vocabulary.',
        color: '#1cb0f6',
        lessons: [
            {
                id: 'l12-01',
                title: 'In the Forest',
                type: 'vocabulary',
                xp: 180,
                questions: [
                    {
                        id: 'q12-1-1',
                        type: 'multiple-choice',
                        question: 'A ____ lives in the jungle.',
                        options: ['tiger', 'car', 'phone', 'book'],
                        answer: 'tiger'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-13',
        title: 'Unit 13: Emotions & Feelings',
        description: 'Express how you feel.',
        color: '#ffc800',
        lessons: [
            {
                id: 'l13-01',
                title: 'How I Feel',
                type: 'vocabulary',
                xp: 150,
                questions: [
                    {
                        id: 'q13-1-1',
                        type: 'multiple-choice',
                        question: 'I am very ____.',
                        options: ['happy', 'table', 'running', 'blue'],
                        answer: 'happy'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-14',
        title: 'Unit 14: Time & Dates',
        description: 'Tell time and talk about dates.',
        color: '#ce82ff',
        lessons: [
            {
                id: 'l14-01',
                title: 'What Time Is It?',
                type: 'vocabulary',
                xp: 190,
                questions: [
                    {
                        id: 'q14-1-1',
                        type: 'multiple-choice',
                        question: 'It is 3 ____.',
                        options: ['o\'clock', 'running', 'happy', 'blue'],
                        answer: 'o\'clock'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-15',
        title: 'Unit 15: Colors & Shapes',
        description: 'Describe objects and appearances.',
        color: '#ff4b4b',
        lessons: [
            {
                id: 'l15-01',
                title: 'Rainbow Colors',
                type: 'vocabulary',
                xp: 140,
                questions: [
                    {
                        id: 'q15-1-1',
                        type: 'multiple-choice',
                        question: 'The sky is ____.',
                        options: ['blue', 'table', 'running', 'happy'],
                        answer: 'blue'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-16',
        title: 'Unit 16: Numbers & Money',
        description: 'Count and handle finances.',
        color: '#58cc02',
        lessons: [
            {
                id: 'l16-01',
                title: 'Counting',
                type: 'vocabulary',
                xp: 160,
                questions: [
                    {
                        id: 'q16-1-1',
                        type: 'multiple-choice',
                        question: 'After nine comes ____.',
                        options: ['ten', 'five', 'two', 'twenty'],
                        answer: 'ten'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-17',
        title: 'Unit 17: Clothing & Fashion',
        description: 'Wardrobe and style vocabulary.',
        color: '#1cb0f6',
        lessons: [
            {
                id: 'l17-01',
                title: 'What to Wear',
                type: 'vocabulary',
                xp: 170,
                questions: [
                    {
                        id: 'q17-1-1',
                        type: 'multiple-choice',
                        question: 'I wear ____ on my feet.',
                        options: ['shoes', 'hat', 'gloves', 'scarf'],
                        answer: 'shoes'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-18',
        title: 'Unit 18: Entertainment',
        description: 'Movies, music, and fun activities.',
        color: '#ffc800',
        lessons: [
            {
                id: 'l18-01',
                title: 'At the Cinema',
                type: 'vocabulary',
                xp: 200,
                questions: [
                    {
                        id: 'q18-1-1',
                        type: 'multiple-choice',
                        question: 'I watch a ____ at the theater.',
                        options: ['movie', 'book', 'song', 'game'],
                        answer: 'movie'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-19',
        title: 'Unit 19: Transportation',
        description: 'Vehicles and public transit.',
        color: '#ce82ff',
        lessons: [
            {
                id: 'l19-01',
                title: 'Getting There',
                type: 'vocabulary',
                xp: 180,
                questions: [
                    {
                        id: 'q19-1-1',
                        type: 'multiple-choice',
                        question: 'I take the ____ to work.',
                        options: ['bus', 'tree', 'water', 'happy'],
                        answer: 'bus'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-20',
        title: 'Unit 20: Celebrations',
        description: 'Holidays and special occasions.',
        color: '#ff4b4b',
        lessons: [
            {
                id: 'l20-01',
                title: 'Party Time',
                type: 'vocabulary',
                xp: 220,
                questions: [
                    {
                        id: 'q20-1-1',
                        type: 'multiple-choice',
                        question: 'We celebrate ____ in December.',
                        options: ['Christmas', 'Summer', 'Monday', 'Blue'],
                        answer: 'Christmas'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-21',
        title: 'Unit 21: Business English',
        description: 'Professional communication skills.',
        color: '#58cc02',
        lessons: [
            {
                id: 'l21-01',
                title: 'Meetings',
                type: 'vocabulary',
                xp: 250,
                questions: [
                    {
                        id: 'q21-1-1',
                        type: 'multiple-choice',
                        question: 'Let\'s schedule a ____.',
                        options: ['meeting', 'tree', 'water', 'happy'],
                        answer: 'meeting'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-22',
        title: 'Unit 22: Advanced Grammar',
        description: 'Complex sentence structures.',
        color: '#1cb0f6',
        lessons: [
            {
                id: 'l22-01',
                title: 'Conditionals',
                type: 'grammar',
                xp: 280,
                questions: [
                    {
                        id: 'q22-1-1',
                        type: 'fill-blank',
                        question: 'If I ____ rich, I would travel.',
                        options: ['were', 'am', 'is'],
                        answer: 'were'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-23',
        title: 'Unit 23: Idioms & Phrases',
        description: 'Common English expressions.',
        color: '#ffc800',
        lessons: [
            {
                id: 'l23-01',
                title: 'Popular Sayings',
                type: 'vocabulary',
                xp: 240,
                questions: [
                    {
                        id: 'q23-1-1',
                        type: 'multiple-choice',
                        question: '"Break a leg" means ____.',
                        options: ['Good luck', 'Be careful', 'Run fast', 'Stop walking'],
                        answer: 'Good luck'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-24',
        title: 'Unit 24: Academic English',
        description: 'University and research vocabulary.',
        color: '#ce82ff',
        lessons: [
            {
                id: 'l24-01',
                title: 'In the Library',
                type: 'vocabulary',
                xp: 260,
                questions: [
                    {
                        id: 'q24-1-1',
                        type: 'multiple-choice',
                        question: 'I need to write a ____.',
                        options: ['thesis', 'tree', 'water', 'happy'],
                        answer: 'thesis'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-25',
        title: 'Unit 25: Mastery Challenge',
        description: 'Final comprehensive test.',
        color: '#ff4b4b',
        lessons: [
            {
                id: 'l25-01',
                title: 'Ultimate Test',
                type: 'mixed',
                xp: 500,
                questions: [
                    {
                        id: 'q25-1-1',
                        type: 'multiple-choice',
                        question: 'Choose the correct sentence:',
                        options: [
                            'She have been studying English for 5 years.',
                            'She has been studying English for 5 years.',
                            'She is been studying English for 5 years.',
                            'She was been studying English for 5 years.'
                        ],
                        answer: 'She has been studying English for 5 years.'
                    }
                ]
            }
        ]
    }
];

if (typeof module !== 'undefined') {
    module.exports = LINGO_CONTENT;
}
