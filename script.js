// بيانات الكلمات الفرنسية المأخوذة من الصورتين
const wordsData = {
    masculine: [
        { french: "un nom", arabic: "اسم" },
        { french: "un prénom", arabic: "اسم الشخص" },
        { french: "un élève", arabic: "تلميذ" },
        { french: "un collégien", arabic: "طالب إعدادي" },
        { french: "un étudiant", arabic: "طالب جامعي" },
        { french: "un garçon", arabic: "ولد" },
        { french: "un copain", arabic: "صديق / رفيق" },
        { french: "un ami", arabic: "صديق" },
        { french: "un collège", arabic: "مدرسة إعدادي" },
        { french: "un passeport", arabic: "جواز سفر" },
        { french: "un âge", arabic: "عمر" },
        { french: "un drapeau", arabic: "علم" },
        { french: "un pays", arabic: "دولة" },
        { french: "un lieu", arabic: "مكان" },
        { french: "un anniversaire", arabic: "عيد ميلاد" },
        { french: "un cadeau", arabic: "هدية" },
        { french: "un vélo", arabic: "دراجة" },
        { french: "un casque", arabic: "سماعة" },
        { french: "un mois", arabic: "شهر" },
        { french: "un jour", arabic: "يوم" },
        { french: "un gâteau", arabic: "تورتة / جاتوه" },
    ],
    feminine: [
        { french: "une fille", arabic: "بنت" },
        { french: "une collégienne", arabic: "طالبة إعدادي" },
        { french: "une étudiante", arabic: "طالبة جامعية" },
        { french: "une amie", arabic: "صديقة" },
        { french: "une copine", arabic: "صديقة / رفيقة" },
        { french: "une nationalité", arabic: "جنسية" },
        { french: "une adresse", arabic: "عنوان" },
        { french: "une ville", arabic: "مدينة" },
        { french: "une photo", arabic: "صورة" },
        { french: "une image", arabic: "صورة" },
        { french: "une rue", arabic: "شارع" },
        { french: "une carte scolaire", arabic: "بطاقة مدرسية" },
        { french: "une profession", arabic: "مهنة" },
        { french: "une année", arabic: "عام / سنة" },
        { french: "une fête", arabic: "حفلة" },
        { french: "une bougie", arabic: "شمعة" },
        { french: "une boisson", arabic: "مشروب" },
        { french: "la date de naissance", arabic: "تاريخ الميلاد" },
    ],
    verbs: [
        { french: "épeler", arabic: "يتهجى" },
        { french: "saluer", arabic: "يُحيي" },
        { french: "entrer", arabic: "يدخل" },
        { french: "arriver", arabic: "يصل" },
        { french: "visiter", arabic: "يزور" },
        { french: "remercier", arabic: "يشكر" },
        { french: "s'excuser", arabic: "يعتذر" },
        { french: "se présenter", arabic: "يقدم نفسه" },
    ],
    expressions: [
        { french: "et", arabic: "و (حرف عطف)" },
        { french: "aussi", arabic: "أيضاً" },
        { french: "absent (e)", arabic: "غائب" },
        { french: "présent (e)", arabic: "حاضر" },
        { french: "pour", arabic: "من أجل/لكي" },
        { french: "joyeux anniversaire !", arabic: "عيد ميلاد سعيد !" },
        { french: "voici", arabic: "هاهو/هاهي (إشارة للقريب)" },
        { french: "voilà", arabic: "هاهو/هاهي (إشارة للبعيد)" },
    ]
};

// الدالة المسؤولة عن بناء بطاقة الكلمة
function createWordCard(wordObj) {
    const card = document.createElement('div');
    card.classList.add('word-card');
    card.setAttribute('data-word', wordObj.french);
    
    // محتوى البطاقة
    card.innerHTML = `
        <div class="french-word">${wordObj.french}</div>
        <div class="arabic-translation">${wordObj.arabic}</div>
    `;

    // إضافة مستمع الحدث للنقر لتشغيل النطق
    card.addEventListener('click', () => speakWord(wordObj.french));

    return card;
}

// الدالة المسؤولة عن تشغيل النطق التلقائي (SpeechSynthesis)
function speakWord(word) {
    // التأكد من أن المتصفح يدعم SpeechSynthesis
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        
        // إعدادات اللغة: مهم جداً لتشغيل النطق الفرنسي الصحيح
        utterance.lang = 'fr-FR'; 

        // تشغيل النطق
        window.speechSynthesis.speak(utterance);
    } else {
        // رسالة تنبيه في حالة عدم دعم الخاصية
        alert("متصفحك لا يدعم خاصية النطق التلقائي (SpeechSynthesis).");
    }
}

// الدالة الرئيسية لتحميل الكلمات إلى الصفحة
function loadWords() {
    // جلب عناصر الشبكات
    const masculineGrid = document.getElementById('masculine-words');
    const feminineGrid = document.getElementById('feminine-words');
    const verbsGrid = document.getElementById('verbs-words');
    const expressionsGrid = document.getElementById('expressions-words');

    // تحميل الأسماء المذكرة
    wordsData.masculine.forEach(word => {
        masculineGrid.appendChild(createWordCard(word));
    });

    // تحميل الأسماء المؤنثة
    wordsData.feminine.forEach(word => {
        feminineGrid.appendChild(createWordCard(word));
    });

    // تحميل الأفعال
    wordsData.verbs.forEach(word => {
        verbsGrid.appendChild(createWordCard(word));
    });
    
    // تحميل التعابير
    wordsData.expressions.forEach(word => {
        expressionsGrid.appendChild(createWordCard(word));
    });
}

// تشغيل دالة تحميل الكلمات عند تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', loadWords);