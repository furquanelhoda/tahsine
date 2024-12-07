// حساب قيم الحروف الأبجدية
const letterValues = {
    'ا': 1, 'أ': 1, 'إ': 1, 'آ': 1,
    'ب': 2,
    'ج': 3,
    'د': 4,
    'ه': 5, 'ة': 5,
    'و': 6,
    'ز': 7,
    'ح': 8,
    'ط': 9,
    'ي': 10, 'ى': 10,
    'ك': 20,
    'ل': 30,
    'م': 40,
    'ن': 50,
    'س': 60,
    'ع': 70,
    'ف': 80,
    'ص': 90,
    'ق': 100,
    'ر': 200,
    'ش': 300,
    'ت': 400,
    'ث': 500,
    'خ': 600,
    'ذ': 700,
    'ض': 800,
    'ظ': 900,
    'غ': 1000
};

// دالة حساب عدد الكلمات
function countWords() {
    let text = document.getElementById('text').value.trim();
    let wordCount = text ? text.split(/\s+/).length : 0;
    document.getElementById('best4').textContent = wordCount;
}

// دالة حساب عدد الحروف
function countLetters() {
    let text = document.getElementById('text').value.replace(/\s/g, '');
    document.getElementById('best6').textContent = text.length;
}

// دالة حساب القيمة العددية للنص
function calculateNumericalValue() {
    let text = document.getElementById('text').value;
    let total = 0;
    
    for (let char of text) {
        if (letterValues[char]) {
            total += letterValues[char];
        }
    }
    
    document.getElementById('best3').textContent = total;
    document.getElementById('numbero').value = total;
}

// دالة تجمع كل الحسابات
function countWord() {
    countWords();
    countLetters();
    calculateNumericalValue();
}

// دالة حساب البرج والساعة الروحانية
function run_rohani() {
    let numericalValue = parseInt(document.getElementById('numbero').value);
    if (!numericalValue) return;

    // حساب البرج (القسمة على 12)
    let zodiacNumber = numericalValue % 12;
    // إذا كان الباقي صفر، فهذا يعني البرج الثاني عشر (الحوت)
    if (zodiacNumber === 0) zodiacNumber = 12;
    
    // قائمة الأبراج مرتبة حسب الترتيب الصحيح
    const zodiacs = [
        "الحمل", "الثور", "الجوزاء", "السرطان",
        "الأسد", "العذراء", "الميزان", "العقرب",
        "القوس", "الجدي", "الدلو", "الحوت"
    ];

    // الساعات الروحانية مرتبة حسب الترتيب
    const spiritualHours = [
        "الساعة الأولى بعد الشروق",
        "الساعة الثانية بعد الشروق",
        "الساعة الثالثة بعد الشروق",
        "الساعة الرابعة بعد الشروق",
        "الساعة الخامسة بعد الشروق",
        "الساعة السادسة بعد الشروق",
        "الساعة السابعة بعد الشروق",
        "الساعة الثامنة بعد الشروق",
        "الساعة التاسعة بعد الشروق",
        "الساعة العاشرة بعد الشروق",
        "الساعة الحادية عشر بعد الشروق",
        "الساعة الثانية عشر بعد الشروق"
    ];

    // حساب اليوم (القسمة على 7)
    let dayNumber = numericalValue % 7;
    // قائمة الأيام مرتبة حسب الترتيب الصحيح
    const days = [
        "السبت", "الأحد", "الإثنين", "الثلاثاء",
        "الأربعاء", "الخميس", "الجمعة"
    ];

    // الطبائع حسب البرج
    const natures = {
        1: "ناري", 2: "ترابي", 3: "هوائي", 4: "مائي",
        5: "ناري", 6: "ترابي", 7: "هوائي", 8: "مائي",
        9: "ناري", 10: "ترابي", 11: "هوائي", 12: "مائي"
    };

    // الكواكب حسب البرج
    const planets = {
        1: "المريخ", 2: "الزهرة", 3: "عطارد", 4: "القمر",
        5: "الشمس", 6: "عطارد", 7: "الزهرة", 8: "المريخ",
        9: "المشتري", 10: "زحل", 11: "زحل", 12: "المشتري"
    };

    let zodiac = zodiacs[zodiacNumber - 1];
    let spiritualHour = spiritualHours[zodiacNumber - 1];
    let day = days[dayNumber];
    let nature = natures[zodiacNumber];
    let planet = planets[zodiacNumber];

    let result = 
        "بسم الله الرحمن الرحيم\n\n" +
        "باقي القسمة على (12) = " + zodiacNumber + "\n" +
        "البرج الروحاني = " + zodiac + "\n" +
        "الطالع = " + planet + "\n" +
        "الطبع / المثلث = " + nature + "\n" +
        "الساعة الروحانية = " + spiritualHour + "\n" +
        "يومك هو = " + day;

    alert(result);
}

// إضافة مستمعي الأحداث عند تحميل الصفحة
window.onload = function() {
    const textArea = document.getElementById('text');
    textArea.addEventListener('input', countWord);
    
    const button = document.getElementById('a');
    button.addEventListener('click', run_rohani);
};
