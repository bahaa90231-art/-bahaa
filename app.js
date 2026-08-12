/* =========================================
   إعداد التطبيق
========================================= */

const STORAGE_KEY = "religious_quiz_progress";

let currentLevel = null;
let currentStage = null;
let currentQuestion = 0;
let currentScore = 0;
let selectedAnswer = null;


/* =========================================
   الأسئلة
========================================= */

const questions = {

    easy: {

        1: [
            {
                q: "كم عدد أركان الإسلام؟",
                answers: [
                    "ثلاثة",
                    "أربعة",
                    "خمسة",
                    "ستة",
                    "سبعة"
                ],
                correct: 2
            },
            {
                q: "ما هو أول أركان الإسلام؟",
                answers: [
                    "الصلاة",
                    "الزكاة",
                    "الصوم",
                    "الشهادتان",
                    "الحج"
                ],
                correct: 3
            },
            {
                q: "كم عدد الصلوات المفروضة في اليوم والليلة؟",
                answers: [
                    "ثلاث",
                    "أربع",
                    "خمس",
                    "ست",
                    "سبع"
                ],
                correct: 2
            },
            {
                q: "ما هو شهر الصيام؟",
                answers: [
                    "شعبان",
                    "رمضان",
                    "محرم",
                    "رجب",
                    "شوال"
                ],
                correct: 1
            },
            {
                q: "ما اسم الكتاب الذي أنزله الله على محمد ﷺ؟",
                answers: [
                    "التوراة",
                    "الإنجيل",
                    "الزبور",
                    "القرآن الكريم",
                    "الصحف"
                ],
                correct: 3
            },
            {
                q: "إلى أين يتجه المسلمون في الصلاة؟",
                answers: [
                    "المسجد النبوي",
                    "الكعبة",
                    "المسجد الأقصى",
                    "جبل عرفات",
                    "المدينة"
                ],
                correct: 1
            },
            {
                q: "كم مرة يحج المسلم إلى بيت الله إذا استطاع؟",
                answers: [
                    "مرة في السنة",
                    "مرتين",
                    "مرة واحدة في العمر",
                    "ثلاث مرات",
                    "لا يوجد عدد"
                ],
                correct: 2
            },
            {
                q: "ما اسم النبي الذي ابتلعه الحوت؟",
                answers: [
                    "موسى",
                    "يونس",
                    "يوسف",
                    "نوح",
                    "إبراهيم"
                ],
                correct: 1
            },
            {
                q: "ما أول سورة في القرآن؟",
                answers: [
                    "البقرة",
                    "الإخلاص",
                    "الفاتحة",
                    "الناس",
                    "العلق"
                ],
                correct: 2
            },
            {
                q: "ما هي الصلاة التي تؤدى عند طلوع الفجر؟",
                answers: [
                    "الظهر",
                    "العصر",
                    "المغرب",
                    "الفجر",
                    "العشاء"
                ],
                correct: 3
            }
        ]

    },

    medium: {

        1: [
            {
                q: "ما اسم أول مسجد وضع للناس؟",
                answers: [
                    "المسجد النبوي",
                    "المسجد الحرام",
                    "المسجد الأقصى",
                    "مسجد قباء",
                    "مسجد القبلتين"
                ],
                correct: 1
            },

            {
                q: "في أي شهر هجري يؤدي المسلمون فريضة الحج؟",
                answers: [
                    "رمضان",
                    "محرم",
                    "ذو الحجة",
                    "رجب",
                    "شوال"
                ],
                correct: 2
            },

            {
                q: "ما السورة التي لا تبدأ بالبسملة؟",
                answers: [
                    "الفاتحة",
                    "التوبة",
                    "الناس",
                    "الكهف",
                    "الملك"
                ],
                correct: 1
            },

            {
                q: "ما اسم أم المؤمنين التي كانت أول زوجات النبي ﷺ؟",
                answers: [
                    "عائشة",
                    "حفصة",
                    "خديجة",
                    "سودة",
                    "زينب"
                ],
                correct: 2
            },

            {
                q: "ما اسم الغار الذي نزل فيه الوحي أول مرة؟",
                answers: [
                    "غار ثور",
                    "غار حراء",
                    "غار أحد",
                    "غار بدر",
                    "غار النور"
                ],
                correct: 1
            },

            {
                q: "من هو أول الخلفاء الراشدين؟",
                answers: [
                    "عمر بن الخطاب",
                    "عثمان بن عفان",
                    "علي بن أبي طالب",
                    "أبو بكر الصديق",
                    "معاوية"
                ],
                correct: 3
            },

            {
                q: "ما السورة التي تسمى أم الكتاب؟",
                answers: [
                    "البقرة",
                    "الفاتحة",
                    "يس",
                    "الإخلاص",
                    "الملك"
                ],
                correct: 1
            },

            {
                q: "ما اسم والد النبي ﷺ؟",
                answers: [
                    "أبو طالب",
                    "عبد الله",
                    "عبد المطلب",
                    "حمزة",
                    "العباس"
                ],
                correct: 1
            },

            {
                q: "ما اسم مرضعة النبي ﷺ؟",
                answers: [
                    "آمنة",
                    "حليمة السعدية",
                    "خديجة",
                    "صفية",
                    "فاطمة"
                ],
                correct: 1
            },

            {
                q: "ما اسم المدينة التي هاجر إليها النبي ﷺ؟",
                answers: [
                    "مكة",
                    "الطائف",
                    "المدينة المنورة",
                    "القدس",
                    "بدر"
                ],
                correct: 2
            }
        ]

    },

    hard: {

        1: [
            {
                q: "ما اسم الصحابي الذي جمع القرآن في مصحف واحد في عهد أبي بكر؟",
                answers: [
                    "زيد بن ثابت",
                    "عبدالله بن مسعود",
                    "أبي بن كعب",
                    "عثمان بن عفان",
                    "علي بن أبي طالب"
                ],
                correct: 0
            },

            {
                q: "في أي سنة هجرية وقعت غزوة بدر؟",
                answers: [
                    "السنة الأولى",
                    "السنة الثانية",
                    "السنة الثالثة",
                    "السنة الرابعة",
                    "السنة الخامسة"
                ],
                correct: 1
            },

            {
                q: "من هو الصحابي الملقب بذي النورين؟",
                answers: [
                    "عمر",
                    "علي",
                    "عثمان",
                    "أبو بكر",
                    "طلحة"
                ],
                correct: 2
            },

            {
                q: "ما اسم السورة التي تسمى قلب القرآن؟",
                answers: [
                    "يس",
                    "الرحمن",
                    "الملك",
                    "الكهف",
                    "الواقعة"
                ],
                correct: 0
            },

            {
                q: "من هو الصحابي الذي نام في فراش النبي ﷺ ليلة الهجرة؟",
                answers: [
                    "أبو بكر",
                    "عمر",
                    "علي",
                    "عثمان",
                    "الزبير"
                ],
                correct: 2
            },

            {
                q: "كم عدد الأشهر الحرم؟",
                answers: [
                    "ثلاثة",
                    "أربعة",
                    "خمسة",
                    "ستة",
                    "اثنا عشر"
                ],
                correct: 1
            },

            {
                q: "ما اسم أول معركة بحرية في الإسلام؟",
                answers: [
                    "ذات الصواري",
                    "بدر",
                    "اليرموك",
                    "القادسية",
                    "صفين"
                ],
                correct: 0
            },

            {
                q: "من هو سيف الله المسلول؟",
                answers: [
                    "خالد بن الوليد",
                    "سعد بن أبي وقاص",
                    "أبو عبيدة",
                    "حمزة",
                    "علي"
                ],
                correct: 0
            },

            {
                q: "من هو الصحابي المعروف بترجمان القرآن؟",
                answers: [
                    "ابن عمر",
                    "ابن عباس",
                    "أبو هريرة",
                    "ابن مسعود",
                    "زيد بن ثابت"
                ],
                correct: 1
            },

            {
                q: "ما اسم المعركة التي استشهد فيها عدد كبير من حفظة القرآن في عهد أبي بكر؟",
                answers: [
                    "بدر",
                    "أحد",
                    "اليمامة",
                    "الخندق",
                    "خيبر"
                ],
                correct: 2
            }
        ]

    }

};


/*
   ملاحظة:
   إذا لم تكن هناك أسئلة للمرحلة 2-10
   سيستخدم التطبيق أسئلة المرحلة الأولى مؤقتًا.

   لاحقًا يمكنك وضع 10 أسئلة مختلفة لكل مرحلة.
*/


/* =========================================
   إنشاء بقية المراحل تلقائيًا
========================================= */

function prepareQuestions() {

    const levels = ["easy", "medium", "hard"];

    levels.forEach(level => {

        if (!questions[level]) {
            questions[level] = {};
        }

        const firstStage = questions[level][1];

        for (let stage = 1; stage <= 10; stage++) {

            if (!questions[level][stage]) {

                questions[level][stage] =
                    JSON.parse(
                        JSON.stringify(firstStage)
                    );

            }

        }

    });

}


/* =========================================
   حفظ واسترجاع التقدم
========================================= */

function getProgress() {

    const saved =
        localStorage.getItem(STORAGE_KEY);

    if (saved) {

        return JSON.parse(saved);

    }

    return {

        easy: {
            unlocked: 1,
            completed: []
        },

        medium: {
            unlocked: 1,
            completed: []
        },

        hard: {
            unlocked: 1,
            completed: []
        }

    };

}


function saveProgress(progress) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
    );

}


/* =========================================
   شاشة البداية
========================================= */

function startApp() {

    document
        .getElementById("splashScreen")
        .classList.add("hidden");

    document
        .getElementById("app")
        .classList.remove("hidden");

    showPage("home");

}


/* =========================================
   التنقل الرئيسي
========================================= */

function showPage(page) {

    if (page === "home") {

        document
            .getElementById("homePage")
            .classList.remove("hidden");

        document
            .getElementById("quizPage")
            .classList.add("hidden");

        document
            .getElementById("stagesPage")
            .classList.add("hidden");

        document
            .getElementById("questionsPage")
            .classList.add("hidden");

        document
            .getElementById("homeNav")
            .classList.add("active");

        document
            .getElementById("quizNav")
            .classList.remove("active");

    }


    if (page === "quiz") {

        document
            .getElementById("homePage")
            .classList.add("hidden");

        document
            .getElementById("quizPage")
            .classList.remove("hidden");

        document
            .getElementById("stagesPage")
            .classList.add("hidden");

        document
            .getElementById("questionsPage")
            .classList.add("hidden");

        document
            .getElementById("homeNav")
            .classList.remove("active");

        document
            .getElementById("quizNav")
            .classList.add("active");

    }

}


/* =========================================
   فتح المستوى
========================================= */

function openLevel(level) {

    currentLevel = level;

    const names = {

        easy: "المستوى السهل",

        medium: "المستوى المتوسط",

        hard: "المستوى الصعب"

    };

    document
        .getElementById("stageLevelTitle")
        .textContent = names[level];

    document
        .getElementById("quizPage")
        .classList.add("hidden");

    document
        .getElementById("stagesPage")
        .classList.remove("hidden");

    renderStages();

}


/* =========================================
   عرض المراحل
========================================= */

function renderStages() {

    const container =
        document.getElementById(
            "stagesContainer"
        );

    container.innerHTML = "";

    const progress = getProgress();

    const levelProgress =
        progress[currentLevel];

    for (let stage = 1; stage <= 10; stage++) {

        const unlocked =
            stage <= levelProgress.unlocked;

        const completed =
            levelProgress.completed.includes(stage);

        const card =
            document.createElement("button");

        card.className =
            "stage-card " +
            (!unlocked ? "locked" : "");

        card.innerHTML = `

            ${
                !unlocked
                ? `<div class="lock-icon">🔒</div>`
                : completed
                ? `<div class="lock-icon">✅</div>`
                : ""
            }

            <div class="stage-number">
                ${stage}
            </div>

            <h3>
                المرحلة ${stage}
            </h3>

            <p>
                ${
                    completed
                    ? "تم اجتياز المرحلة"
                    : unlocked
                    ? "10 أسئلة"
                    : "مغلقة"
                }
            </p>
        `;


        if (unlocked) {

            card.onclick = () =>
                startStage(stage);

        } else {

            card.onclick = () => {

                showToast(
                    "🔒 أكمل المرحلة السابقة بدرجة 7/10 على الأقل"
                );

            };

        }


        container.appendChild(card);

    }

}


/* =========================================
   العودة للمستويات
========================================= */

function backToLevels() {

    document
        .getElementById("stagesPage")
        .classList.add("hidden");

    document
        .getElementById("quizPage")
        .classList.remove("hidden");

}


/* =========================================
   بدء المرحلة
========================================= */

function startStage(stage) {

    currentStage = stage;

    currentQuestion = 0;

    currentScore = 0;

    selectedAnswer = null;

    document
        .getElementById("stagesPage")
        .classList.add("hidden");

    document
        .getElementById("questionsPage")
        .classList.remove("hidden");

    document
        .getElementById("questionStageTitle")
        .textContent =
        `المرحلة ${stage}`;

    renderQuestion();

}


/* =========================================
   عرض السؤال
========================================= */

function renderQuestion() {

    const list =
        questions[currentLevel][currentStage];

    const question =
        list[currentQuestion];

    selectedAnswer = null;

    document
        .getElementById("questionCounter")
        .textContent =
        `السؤال ${currentQuestion + 1} من ${list.length}`;


    document
        .getElementById("questionNumber")
        .textContent =
        `السؤال ${currentQuestion + 1}`;


    document
        .getElementById("questionText")
        .textContent =
        question.q;


    const progress =
        ((currentQuestion + 1) /
            list.length) * 100;

    document
        .getElementById("progressBar")
        .style.width =
        `${progress}%`;


    const answers =
        document.getElementById(
            "answersContainer"
        );

    answers.innerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className = "answer";

            button.innerHTML = `

                <span class="answer-number">
                    ${index + 1}
                </span>

                <span>
                    ${answer}
                </span>

            `;


            button.onclick = () => {

                selectAnswer(
                    index,
                    button
                );

            };


            answers.appendChild(button);

        }
    );


    const nextButton =
        document.getElementById(
            "nextQuestionBtn"
        );

    nextButton.disabled = true;

    nextButton.textContent =
        currentQuestion === list.length - 1
            ? "إنهاء المرحلة"
            : "السؤال التالي";

}


/* =========================================
   اختيار إجابة
========================================= */

function selectAnswer(index, button) {

    selectedAnswer = index;

    document
        .querySelectorAll(".answer")
        .forEach(item => {

            item.classList.remove("selected");

        });

    button.classList.add("selected");

    document
        .getElementById(
            "nextQuestionBtn"
        )
        .disabled = false;

}


/* =========================================
   السؤال التالي
========================================= */

function nextQuestion() {

    if (selectedAnswer === null) {

        showToast(
            "اختر إجابة أولاً"
        );

        return;

    }


    const list =
        questions[currentLevel][currentStage];

    const question =
        list[currentQuestion];


    if (selectedAnswer === question.correct) {

        currentScore++;

    }


    if (
        currentQuestion <
        list.length - 1
    ) {

        currentQuestion++;

        renderQuestion();

    } else {

        finishStage();

    }

}


/* =========================================
   إنهاء المرحلة
========================================= */

function finishStage() {

    const passed =
        currentScore >= 7;

    if (passed) {

        const progress =
            getProgress();

        const levelProgress =
            progress[currentLevel];


        if (
            !levelProgress.completed.includes(
                currentStage
            )
        ) {

            levelProgress.completed.push(
                currentStage
            );

        }


        if (
            currentStage < 10 &&
            levelProgress.unlocked <
            currentStage + 1
        ) {

            levelProgress.unlocked =
                currentStage + 1;

        }


        saveProgress(progress);


        showToast(
            `🎉 ممتاز! نتيجتك ${currentScore}/10`
        );


        setTimeout(() => {

            exitQuiz();

        }, 1800);


    } else {

        showToast(
            `❌ حصلت على ${currentScore}/10. تحتاج إلى 7 إجابات صحيحة على الأقل`
        );


        setTimeout(() => {

            currentQuestion = 0;

            currentScore = 0;

            renderQuestion();

        }, 2200);

    }

}


/* =========================================
   الخروج من الاختبار
========================================= */

function exitQuiz() {

    document
        .getElementById("questionsPage")
        .classList.add("hidden");

    document
        .getElementById("stagesPage")
        .classList.remove("hidden");

    renderStages();

}


/* =========================================
   Toast
========================================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);

}


/* =========================================
   Service Worker
========================================= */

if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        () => {

            navigator.serviceWorker
                .register("sw.js")
                .then(() => {

                    console.log(
                        "Service Worker Registered"
                    );

                })
                .catch(error => {

                    console.error(
                        "Service Worker Error:",
                        error
                    );

                });

        }
    );

}


/* =========================================
   تشغيل التجهيز
========================================= */

prepareQuestions();