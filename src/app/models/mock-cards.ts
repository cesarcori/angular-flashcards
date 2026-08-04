import { Card } from './card.model'

export const MOCK_CARDS: readonly Card[] = [
    // --- GEOGRAPHY (10) ---
    { id: 1, question: 'What is the capital of France?', answer: 'Paris', category: 'Geography' },
    { id: 2, question: 'What is the capital of Spain?', answer: 'Madrid', category: 'Geography' },
    { id: 3, question: 'What is the capital of Germany?', answer: 'Berlin', category: 'Geography' },
    { id: 4, question: 'What is the capital of Japan?', answer: 'Tokyo', category: 'Geography' },
    { id: 5, question: 'What is the largest ocean on Earth?', answer: 'Pacific Ocean', category: 'Geography' },
    { id: 6, question: 'Which country has the largest land area in the world?', answer: 'Russia', category: 'Geography' },
    { id: 7, question: 'What is the longest river in the world?', answer: 'Nile River', category: 'Geography' },
    { id: 8, question: 'Mount Everest is located in which mountain range?', answer: 'Himalayas', category: 'Geography' },
    { id: 9, question: 'What is the capital of Australia?', answer: 'Canberra', category: 'Geography' },
    { id: 10, question: 'Which island country is the largest in the world by area?', answer: 'Greenland', category: 'Geography' },

    // --- SCIENCE & NATURE (10) ---
    { id: 11, question: 'What chemical element has the symbol O?', answer: 'Oxygen', category: 'Science & Nature' },
    { id: 12, question: 'What is the hardest natural substance on Earth?', answer: 'Diamond', category: 'Science & Nature' },
    { id: 13, question: 'Which planet in our solar system is known as the Red Planet?', answer: 'Mars', category: 'Science & Nature' },
    { id: 14, question: 'What gas do plants absorb from the atmosphere for photosynthesis?', answer: 'Carbon Dioxide', category: 'Science & Nature' },
    { id: 15, question: 'What is the center of an atom called?', answer: 'Nucleus', category: 'Science & Nature' },
    { id: 16, question: 'How many bones are in the adult human body?', answer: '206', category: 'Science & Nature' },
    { id: 17, question: 'What is the speed of light approximately in km/s?', answer: '300,000 km/s', category: 'Science & Nature' },
    { id: 18, question: 'What is the largest mammal on Earth?', answer: 'Blue Whale', category: 'Science & Nature' },
    { id: 19, question: 'Which particle carries a negative electric charge?', answer: 'Electron', category: 'Science & Nature' },
    { id: 20, question: 'What is the process by which liquid water becomes water vapor?', answer: 'Evaporation', category: 'Science & Nature' },

    // --- HISTORY (10) ---
    { id: 21, question: 'In which year did World War II end?', answer: '1945', category: 'History' },
    { id: 22, question: 'Who was the first President of the United States?', answer: 'George Washington', category: 'History' },
    { id: 23, question: 'Which ancient civilization built the Great Pyramids of Giza?', answer: 'Ancient Egyptians', category: 'History' },
    { id: 24, question: 'What historic event occurred on July 20, 1969?', answer: 'Apollo 11 Moon Landing', category: 'History' },
    { id: 25, question: 'Who was the famous queen of Ancient Egypt during the late Ptolemaic Kingdom?', answer: 'Cleopatra', category: 'History' },
    { id: 26, question: 'In which city was the Titanic constructed?', answer: 'Belfast', category: 'History' },
    { id: 27, question: 'Which empire was ruled by Julius Caesar?', answer: 'Roman Empire', category: 'History' },
    { id: 28, question: 'The Renaissance began in which European country?', answer: 'Italy', category: 'History' },
    { id: 29, question: 'Who painted the ceiling of the Sistine Chapel?', answer: 'Michelangelo', category: 'History' },
    { id: 30, question: 'What fall in November 1989 symbolized the end of the Cold War in Europe?', answer: 'Berlin Wall', category: 'History' },

    // --- POP CULTURE & ENTERTAINMENT (10) ---
    { id: 31, question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci', category: 'Pop Culture & Entertainment' },
    { id: 32, question: 'Which British rock band released the song "Bohemian Rhapsody"?', answer: 'Queen', category: 'Pop Culture & Entertainment' },
    { id: 33, question: 'What is the highest-grossing film of all time (unadjusted for inflation)?', answer: 'Avatar', category: 'Pop Culture & Entertainment' },
    { id: 34, question: 'Who wrote the play "Romeo and Juliet"?', answer: 'William Shakespeare', category: 'Pop Culture & Entertainment' },
    { id: 35, question: 'What fictional school does Harry Potter attend?', answer: 'Hogwarts', category: 'Pop Culture & Entertainment' },
    { id: 36, question: 'Which superhero is also known as Bruce Wayne?', answer: 'Batman', category: 'Pop Culture & Entertainment' },
    { id: 37, question: 'What streaming service released the series "Stranger Things"?', answer: 'Netflix', category: 'Pop Culture & Entertainment' },
    { id: 38, question: 'Which pop singer is known as the "Queen of Pop"?', answer: 'Madonna', category: 'Pop Culture & Entertainment' },
    { id: 39, question: 'What is the name of the fictional kingdom in "Frozen"?', answer: 'Arendelle', category: 'Pop Culture & Entertainment' },
    { id: 40, question: 'How many Oscars did the movie "Titanic" (1997) win?', answer: '11', category: 'Pop Culture & Entertainment' },

    // --- TECHNOLOGY (10) ---
    { id: 41, question: 'What does "HTTP" stand for in web addresses?', answer: 'Hypertext Transfer Protocol', category: 'Technology' },
    { id: 42, question: 'Who co-founded Microsoft alongside Paul Allen?', answer: 'Bill Gates', category: 'Technology' },
    { id: 43, question: 'What open-source frontend framework maintained by Google is currently on version 13+?', answer: 'Angular', category: 'Technology' },
    { id: 44, question: 'What programming language is primary for native Android app development?', answer: 'Kotlin', category: 'Technology' },
    { id: 45, question: 'What does CPU stand for?', answer: 'Central Processing Unit', category: 'Technology' },
    { id: 46, question: 'In computer science, what is a binary digit commonly called?', answer: 'Bit', category: 'Technology' },
    { id: 47, question: 'Which company developed the iPhone?', answer: 'Apple', category: 'Technology' },
    { id: 48, question: 'What database query language stands for Structured Query Language?', answer: 'SQL', category: 'Technology' },
    { id: 49, question: 'What year was the World Wide Web invented?', answer: '1989', category: 'Technology' },
    { id: 50, question: 'What is the primary language used to style web pages?', answer: 'CSS', category: 'Technology' },

    // -- MEDICINE (10) --
    { id: 51, question: 'What is the largest organ in the human body?', answer: 'Skin', category: 'Medicine' },
    { id: 52, question: 'Which gland in the human body regulates metabolism?', answer: 'Thyroid gland', category: 'Medicine' },
    { id: 53, question: 'What hormone produced by the pancreas allows cells to absorb glucose from the blood?', answer: 'Insulin', category: 'Medicine' },
    { id: 54, question: 'Which blood type is considered the universal donor for red blood cells?', answer: 'O Negative (O-)', category: 'Medicine' },
    { id: 55, question: 'What type of blood vessel carries oxygenated blood away from the heart?', answer: 'Artery', category: 'Medicine' },
    { id: 56, question: 'What is the medical term for high blood pressure?', answer: 'Hypertension', category: 'Medicine' },
    { id: 57, question: 'Which organ produces bile to assist in digesting fats?', answer: 'Liver', category: 'Medicine' },
    { id: 58, question: 'What is the medical term for the human kneecap?', answer: 'Patella', category: 'Medicine' },
    { id: 59, question: 'Which blood cells are primarily responsible for fighting infections?', answer: 'White blood cells (Leukocytes)', category: 'Medicine' },
    { id: 60, question: 'What diagnostic technology uses strong magnetic fields and radio waves to generate detailed body scans?', answer: 'MRI (Magnetic Resonance Imaging)', category: 'Medicine' },

    // --- NURSING (10) ---
    { id: 61, question: 'Who is widely considered the pioneer and founder of modern nursing?', answer: 'Florence Nightingale', category: 'Nursing' },
    { id: 62, question: 'Which basic assessment instrument is used to listen to heart, lung, and bowel sounds?', answer: 'Stethoscope', category: 'Nursing' },
    { id: 63, question: 'What is the standard normal resting heart rate range for a healthy adult?', answer: '60 to 100 beats per minute', category: 'Nursing' },
    { id: 64, question: 'What process do nurses use in emergency settings to prioritize patients based on condition severity?', answer: 'Triage', category: 'Nursing' },
    { id: 65, question: 'In vital sign monitoring, what does "SpO2" measure?', answer: 'Peripheral capillary oxygen saturation (Blood oxygen level)', category: 'Nursing' },
    { id: 66, question: 'What scale is used in clinical assessment to evaluate a patient\'s level of consciousness after trauma?', answer: 'Glasgow Coma Scale (GCS)', category: 'Nursing' },
    { id: 67, question: 'What life-saving medication is administered intravenously or intranasally to reverse an opioid overdose?', answer: 'Naloxone (Narcan)', category: 'Nursing' },
    { id: 68, question: 'What does the acronym "CPR" stand for?', answer: 'Cardiopulmonary Resuscitation', category: 'Nursing' },
    { id: 69, question: 'What essential nursing practice involves five core steps: Assessment, Diagnosis, Planning, Implementation, and Evaluation?', answer: 'The Nursing Process (ADPIE)', category: 'Nursing' },
    { id: 70, question: 'What type of precaution is required when caring for patients with airborne diseases like tuberculosis?', answer: 'Airborne Precautions (N95 respirator/negative pressure room)', category: 'Nursing' }
]