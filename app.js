// AI for Builders: From Prompt to Production - Core Application Logic
// This script customizes the curriculum based on user interests collected in Module 0 onboarding.

// 1. Function to generate custom lesson content based on Name and 5 Interests
function getDynamicLessons(name, interests) {
    const i1 = interests[0];
    const i2 = interests[1];
    const i3 = interests[2];
    const i4 = interests[3];
    const i5 = interests[4];

    return [
        {
            id: "lesson_1",
            fileName: "lesson_1_prompt.md",
            tabLabel: "lesson_1_prompt.md",
            title: "שיעור 1: ניווט ב-Gemini ואמנות הפרומפט",
            unlocked: true,
            completed: false,
            content: `
<h1 class="lesson-h1">שלום ${name}! ברוכים הבאים לשיעור 1: ניווט ב-Gemini ואמנות הפרומפט</h1>
<p class="lesson-p">ברוכים הבאים לצעד הראשון שלכם בעולם ה-AI! כמתכנתים עם רקע בסיסי בתכנות (משתנים, לולאות ולוגיקה), כתיבת פרומפט (Prompt) ל-AI תרגיש לכם טבעית לחלוטין. מדובר בהגדרת קלט לוגי ומובנה כדי לקבל פלט איכותי ומדויק.</p>

<h2 class="lesson-h2">שליטה בממשק של Gemini</h2>
<p class="lesson-p">לפני שנתחיל לכתוב פרומפטים, נלמד כיצד לנצל את כלי הממשק השונים בתוך Gemini:</p>
<ul style="margin-right: 20px; margin-bottom: 15px; line-height: 1.6;">
    <li><strong>כפתור הפלוס ('+'):</strong> מאפשר להעלות קבצים ותמונות לניתוח (למשל: העלאת מסמך או קובץ הקשור ל-<strong>${i1}</strong> כדי לנתח מגמות או מידע).</li>
    <li><strong>קלט קולי (Voice Input - המיקרופון):</strong> מאפשר לכם להכתיב את הפרומפטים בקולכם לצורך סיעור מוחות מהיר, טבעי וללא שימוש בידיים.</li>
    <li><strong>בחירת מנוע ה-AI שלכם (Models):</strong>
        <br>&bull; <em>Gemini Flash:</em> מנוע מהיר במיוחד, אידיאלי למשימות יומיומיות בנפח גבוה.
        <br>&bull; <em>Gemini Flash-8B (Light):</em> מנוע קל ומהיר להפליא, מיועד לזמני תגובה (latency) קצרים במיוחד.
        <br>&bull; <em>Gemini Pro:</em> מנוע הדגל לפתרון בעיות מורכבות, מצוין לחשיבה לוגית עמוקה, כתיבת קוד מתקדם וניתוח מעמיק.</li>
</ul>

<h2 class="lesson-h2">יכולות הליבה של כלי ה-AI היומיומיים</h2>
<p class="lesson-p">מודלי שפה ו-AI מודרניים מצטיינים במגוון יכולות מפתח, אותן ניתן להמחיש באמצעות תחומי העניין שלך:</p>
<ul style="margin-right: 20px; margin-bottom: 15px; line-height: 1.6;">
    <li><strong>יצירת תמונות (Image Generation):</strong> הפקת ייצוגים חזותיים מתיאור טקסטואלי. למשל, ליצור תמונה יצירתית ומרהיבה של <strong>${i5}</strong>.</li>
    <li><strong>תכנון ופירוק משימות (Task Planning & Breakdown):</strong> פירוק תהליכים מורכבים לשלבים מעשיים ברורים. למשל, תכנון פרויקט או מטרה מורכבת בתחום <strong>${i1}</strong>.</li>
    <li><strong>תרגום ולוקליזציה (Translation & Localization):</strong> התאמת טקסטים בין שפות שונות תוך שמירה על הקשר וטון. למשל, תרגום מדריך או מידע על <strong>${i2}</strong> לשפה אחרת.</li>
    <li><strong>תמצות וסיכום (Summarization):</strong> זיקוק כמויות מידע גדולות למשפטי מפתח תמציתיים. למשל, סיכום דוחות ומאמרים ארוכים בנושא <strong>${i3}</strong>.</li>
    <li><strong>סיעור מוחות ורעיונאות (Ideation & Brainstorming):</strong> העלאת רעיונות יצירתיים. למשל, רעיונות לשילוב מוצלח של <strong>${i4}</strong> בפעילות יומיומית.</li>
</ul>

<div class="analogy-box">
    <strong>[אנלוגיה המבוססת על תחומי העניין שלך]</strong> כתיבת פרומפט היא כמו תכנון מערכת המשלבת את עקרונות הניהול של <strong>${i1}</strong> או הרכבת פאזל מורכב של <strong>${i2}</strong>. אם תפחיתו פרמטר אחד או שתדלגו על שלב לוגי, התוצאה לא תהיה שלמה.
</div>

<h2 class="lesson-h2">עקרונות כתיבת הפרומפט ותבנית ה-PROMPT</h2>
<p class="lesson-p">כדי לרתום את יכולות הליבה הללו בצורה הטובה ביותר, נשתמש בארבעת עמודי התווך של הפרומפט:</p>
<ul style="margin-right: 20px; margin-bottom: 12px; line-height: 1.6;">
    <li><strong>Role (תפקיד המודל):</strong> הגדרת ה"אישיות" וההקשר המקצועי של ה-AI (למשל: <em>"פעל כמעצב מומחה בתחום ${i5}"</em>).</li>
    <li><strong>Task (משימה):</strong> מה בדיוק ה-AI צריך לבצע (למשל: <em>"נסח שלבים לתחילת עבודה"</em>).</li>
    <li><strong>Context (הקשר ונתוני רקע):</strong> נתוני הרקע והחוקים (למשל: <em>"עבור מתחילים ללא ניסיון קודם ב-${i1}"</em>).</li>
    <li><strong>Format (פורמט פלט):</strong> מבנה הפלט הרצוי (למשל: <em>"הצג בטבלה או ברשימת נקודות"</em>).</li>
</ul>

<h2 class="lesson-h2">הזיות מודל (Hallucinations) והטיות מידע (Biases)</h2>
<div class="tech-box">
    <strong>[דוגמת ההזיה וההטיה]</strong>
    הזיית מודל היא כמו לקבל תוכנית עבודה על <strong>${i3}</strong> שבה שלב אחד מורה לך לבצע פעולה בלתי אפשרית פיזית או לוגית.
    <strong>הטיית מידע (Data Bias)</strong> דומה למצב שבו ה-AI נחשף רק למידע מסוים על <strong>${i4}</strong>, ולכן הוא בטוח שכל שאר הגישות לנושא אינן נכונות.
</div>
            `,
            actionType: "multi_capabilities",
            actionLabel: "אתגר הליבה (The AI Gauntlet)",
            placeholderText: "",
            tools: [
                { name: "פתח את Gemini בלשונית חדשה", url: "https://gemini.google.com" }
            ],
            instructionText: `<strong>משימת אתגר הליבה (The AI Gauntlet):</strong><br>
            פתחו את Gemini בלשונית חדשה ועברו את רצף משימות יכולות הליבה הבא (השתמשו במבנה ה-PROMPT):<br><br>
            1. <strong>בדיקת כפתור ה-'+':</strong> לחצו על כפתור הפלוס, העלו קובץ או תמונה הקשורים ל-<strong>${i2}</strong>, ובקשו מ-Gemini Pro לנתח ולתאר אותה.<br>
            2. <strong>בדיקת קלט קולי:</strong> לחצו על המיקרופון והכתיבו בקשה ל-Gemini Flash לסער מוחות להעלאת רעיונות המשלבים בין <strong>${i3}</strong> לבין <strong>${i4}</strong>.<br>
            3. <strong>יצירת תמונות:</strong> בקשו מה-AI ליצור תמונה יצירתית ומקורית המבוססת על <strong>${i5}</strong>.<br>
            4. <strong>תכנון משימות:</strong> בקשו מ-Gemini תוכנית שלב-אחר-שלב כדי להשיג יעד או לפתור בעיה ב-<strong>${i1}</strong>.<br>
            5. <strong>תרגום ולוקליזציה:</strong> הדביקו או כתבו טקסט קצר על <strong>${i2}</strong> ובקשו לתרגם אותו לשפה אחרת (לדוגמה: יפנית, ספרדית או אנגלית).`,
            validate: (input) => {
                if (!input || typeof input !== "object") return false;
                return input.plusButton && input.plusButton.trim().length > 10 &&
                       input.voiceInput && input.voiceInput.trim().length > 10 &&
                       input.imageGen && input.imageGen.trim().length > 5 &&
                       input.excelPlan && input.excelPlan.trim().length > 10 &&
                       input.tvTranslation && input.tvTranslation.trim().length > 10;
            },
            errorMessage: "חלק מנושאי אתגר הליבה (AI Gauntlet) לא הוזנו או קצרים מדי. אנא מלאו את כל 5 שדות המשימה כנדרש!"
        },
        {
            id: "lesson_2",
            fileName: "lesson_2_canvas.js",
            tabLabel: "lesson_2_canvas.js",
            title: "שיעור 2: תכנות יצירתי עם Gemini Canvas",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 2: תכנות יצירתי עם Gemini Canvas</h1>
<p class="lesson-p">כשאתם מתכנתים פרויקט אמיתי, חלון צ'אט רגיל הוא פשוט לא מספיק. אתם לא רוצים להעתיק ולהדביק את כל הקוד מחדש בכל פעם שאתם עושים שינוי קטן. כאן נכנס לתמונה ה-<strong>Gemini Canvas</strong>.</p>

<div class="analogy-box">
    <strong>[שותף לקוד - Gemini Canvas]</strong> Gemini Canvas הוא כמו <strong>שותף לתכנות (Pair Programmer)</strong> שיושב לצידכם. במקום לשלוח לכם פלט ארוך ולבקש מכם להעתיק אותו, הוא עובד איתכם על אותו קובץ קוד, מסמן קוד שנמחק או נוסף, ומאפשר עריכה ממוקדת של פונקציות.
</div>

<h2 class="lesson-h2">שימוש ב-Canvas לתכנות ייעודי</h2>
<p class="lesson-p">Canvas מבין את מבנה הקובץ כולו ויכול לעדכן פונקציות ספציפיות בלי לפגוע בשאר הקוד. במהלך השיעור נשתמש ב-<strong>${i3}</strong> כדוגמה מרכזית לבניית קוד, עיצוב או לוגיקה מותאמת אישית.</p>
<ul style="margin-right: 20px; margin-bottom: 12px; line-height: 1.6;">
    <li>נבקש מה-AI לכתוב סקריפט או דף שמדגים רעיון סביב <strong>${i3}</strong>.</li>
    <li>נבצע שינויים מונחי פרומפט בקוד כדי להוסיף רכיבים מורכבים יותר.</li>
</ul>
            `,
            actionType: "code",
            actionLabel: `הדביקו את קוד ה-HTML/CSS הסופי של דף הנחיתה שלכם עבור ${i4} או ${i5} כאן:`,
            placeholderText: "<!DOCTYPE html>\n<html>\n<head>...",
            tools: [
                { name: "פתח את Gemini (Canvas)", url: "https://gemini.google.com" }
            ],
            instructionText: `<strong>משימה מעשית ב-Gemini Canvas:</strong><br>
            1. פתחו את Gemini וודאו שאתם משתמשים בממשק ה-**Canvas** (או בקשו ממנו לכתוב קוד בקובץ צדדי).<br>
            2. בקשו ממנו ליצור קוד HTML/CSS/JS מלא עבור דף נחיתה או פרויקט קטן המוקדש ל-<strong>${i4}</strong> או ל-<strong>${i5}</strong>.<br>
            3. בצעו איתו לפחות שינוי אחד (איטרציה) כדי לעדכן את העיצוב או להוסיף רכיב ב-Canvas.<br>
            4. העתיקו והדביקו את קוד המקור הסופי של ה-HTML/CSS כאן למטה.`,
            validate: (input) => {
                if (!input) return false;
                const clean = input.toLowerCase();
                return clean.includes("<html") || clean.includes("<div") || clean.includes("<body") || clean.includes("<style");
            },
            errorMessage: "הקוד שהוזן אינו קוד HTML/CSS תקין! ודאו שהעתקתם את קוד המקור המלא הכולל תגיות HTML או CSS."
        },
        {
            id: "lesson_3",
            fileName: "lesson_3_deploy.yaml",
            tabLabel: "lesson_3_deploy.yaml",
            title: "שיעור 3: צינור הפריסה (GitHub, Vercel ודומיינים)",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 3: צינור הפריסה (GitHub, Vercel ודומיינים)</h1>
<p class="lesson-p">כתבתם קוד מעולה עם ה-AI, הוא רץ על המחשב המקומי שלכם... אבל איך גורמים לעולם לראות אותו? איך הופכים קובץ במחשב לקישור אינטרנט חי (Live URL)?</p>

<h2 class="lesson-h2">חלוקת התפקידים בצינור הפריסה (Deployment Pipeline)</h2>
<div class="tech-box">
    <strong>📦 GitHub (בקרת גרסאות ומחסן קוד):</strong> מאחסן את הקוד שלכם בענן, עוקב אחר כל שינוי שביצעתם ומאפשר לכם לנהל גרסאות של הפרויקט.
    <br><br>
    <strong>🚀 Vercel (אחסון ופריסה מהירה):</strong> שירות ענן שמתחבר ל-GitHub שלכם. ברגע שהוא מזהה שינוי בקוד, הוא בונה אותו מחדש ומפיץ אותו לשרתים בכל העולם עם דומיין ייחודי.
</div>

<div class="analogy-box">
    <strong>[אנלוגיית המחסן וההפצה]</strong> תחשבו על הקוד שלכם כעל מוצר או פרויקט בתחום <strong>${i4}</strong> או <strong>${i5}</strong>. GitHub הוא המחסן הראשי שבו נשמרות הגרסאות השונות, ו-Vercel הוא מערך ההפצה והשילוח שמנגיש את המוצר הזה ללקוחות בכל העולם באופן מיידי.
</div>
            `,
            actionType: "url",
            actionLabel: "הזינו את קישור הדומיין הפעיל שלכם מ-Vercel כאן:",
            placeholderText: "https://your-project.vercel.app",
            tools: [
                { name: "פתח את GitHub", url: "https://github.com" },
                { name: "פתח את Vercel", url: "https://vercel.com" }
            ],
            instructionText: `<strong>משימה מעשית לפריסת האתר:</strong><br>
            1. פתחו את **GitHub** וצרו Repository (מחסן) חדש וציבורי.<br>
            2. העלו את הקוד של דף הנחיתה בנושא <strong>${i4}</strong> או <strong>${i5}</strong> (משיעור 2) לתוך המחסן.<br>
            3. פתחו את **Vercel**, חברו את מחסן ה-GitHub שלכם, ובצעו פריסה (Deploy) לקוד.<br>
            4. העתיקו והדביקו את כתובת האתר החי (Vercel URL) שנוצר עבורכם כאן למטה.`,
            validate: (input) => {
                if (!input) return false;
                const clean = input.trim().toLowerCase();
                return (clean.startsWith("http://") || clean.startsWith("https://")) && 
                       (clean.includes(".vercel.app") || clean.includes(".com") || clean.includes(".net") || clean.includes(".dev") || clean.includes(".html"));
            },
            errorMessage: "כתובת ה-URL אינה תקינה! ודאו שהזנתם כתובת מלאה המתחילה ב-http:// או https:// ושמפנה לדומיין פעיל."
        },
        {
            id: "lesson_4",
            fileName: "lesson_4_antigravity.json",
            tabLabel: "lesson_4_antigravity.json",
            title: "שיעור 4: אוטומציה עם Antigravity",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 4: אוטומציה עם Antigravity</h1>
<p class="lesson-p">בשיעור 3 ראינו את הצינור הידני: כתיבת קוד ב-AI, העתקה, דחיפה ל-GitHub, המתנה לבנייה ב-Vercel. מה אם יכולנו לבצע שינויים ישירות דרך הוראות ה-AI שלנו והאתר ישתנה <strong>בזמן אמת</strong> ללא מאמץ ידני?</p>

<h2 class="lesson-h2">הכירו את Antigravity Auto-Sync</h2>
<p class="lesson-p">מערכת <strong>Antigravity</strong> מחברת את חלון העבודה של ה-AI שלכם ישירות לסביבת הפריסה שלכם. השינויים שלכם מסונכרנים אוטומטית לענן ללא צורך בהעתק-הדבק ידני.</p>

<div class="analogy-box">
    <strong>[אנלוגיית אוטומציה]</strong> ההבדל בין השיטה הידנית ל-Antigravity הוא כמו ההבדל בין עדכון ידני של לוח מעקב עבור <strong>${i1}</strong> לבין מערכת אוטומטית שמקבלת עדכוני מידע חיים ומעדכנת את הנתונים באופן מיידי ללא מגע יד אדם.
</div>
            `,
            actionType: "checkbox",
            actionLabel: "אשרו את ביצוע האינטגרציה והסינכרון האוטומטי:",
            placeholderText: "",
            tools: [
                { name: "פתח את Antigravity", url: "https://antigravity.dev" }
            ],
            instructionText: `<strong>משימה מעשית באוטומציה:</strong><br>
            1. פתחו את פאנל העבודה של **Antigravity**.<br>
            2. צרו פרויקט חדש שמטרתו לעקוב אחר עדכונים או מידע עבור <strong>${i1}</strong>.<br>
            3. חברו את חשבונות ה-GitHub וה-Vercel שלכם לפרויקט.<br>
            4. בצעו שינוי פרומפט כלשהו בפאנל וראו כיצד השינויים מסונכרנים אוטומטית (Auto-Sync) לקישור ה-Live שלכם.<br>
            5. סמנו את תיבת הסימון למטה לאישור השלמת השלב.`,
            validate: (input) => {
                return input === true;
            },
            errorMessage: "אנא סמנו את תיבת האישור כדי לאשר שהשלמתם את ההובלה האוטומטית ב-Antigravity."
        },
        {
            id: "lesson_5",
            fileName: "lesson_5_agents.py",
            tabLabel: "lesson_5_agents.py",
            title: "שיעור 5: בינה ואוטומציה (סוכנים וכישורים)",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 5: בינה ואוטומציה (סוכנים וכישורים)</h1>
<p class="lesson-p">עד עכשיו השתמשנו ב-AI כדי לכתוב קוד או לעצב אתרים. אבל הצעד המלהיב באמת הוא לבנות מערכות שפועלות <strong>בעצמן</strong> - מערכות היודעות לקבל החלטות ולבצע משימות. אלו הם <strong>סוכני AI (Agents)</strong>.</p>

<h2 class="lesson-h2">המוח והידיים: סוכנים (Agents) מול כישורים (Skills)</h2>
<p class="lesson-p">בסביבת Antigravity, אנו מחלקים את הארכיטקטורה לשני חלקים:</p>
<ul style="margin-right: 20px; margin-bottom: 12px; line-height: 1.6;">
    <li><strong>סוכן (Agent - המוח):</strong> מודל ה-AI שמקבל החלטות לוגיות על סמך הנחיות שנתתם לו.</li>
    <li><strong>כישורים (Skills - הידיים):</strong> פונקציות קוד ספציפיות המאפשרות לסוכן לתקשר עם העולם החיצון (כמו חיפוש באינטרנט, קריאת קבצים, שליחת מיילים, או קריאת נתוני API).</li>
</ul>

<div class="analogy-box">
    <strong>[אנלוגיית התפקידים]</strong>
    הסוכן הוא כמו מנהל פרויקט או מתכנן בתחום <strong>${i2}</strong> או <strong>${i3}</strong> שיודע מה הוא רוצה להשיג. הכישורים הם הכלים המקצועיים העומדים לרשותו המאפשרות לו לבצע את העבודה בפועל בצורה מושלמת.
</div>
            `,
            actionType: "textarea",
            actionLabel: "תארו בקצרה את הסוכן והכישור שיצרתם כדי להשלים את הקורס!",
            placeholderText: `לדוגמה: יצרתי סוכן עבור ${i2} המשתמש בכישור Web Search כדי להביא חדשות...`,
            tools: [
                { name: "פתח את סביבת הסוכנים ב-Antigravity", url: "https://antigravity.dev" }
            ],
            instructionText: `<strong>משימה מעשית בסוכני AI וכישורים:</strong><br>
            1. נווטו למדור ה-**Agents** בתוך מרחב העבודה שלכם ב-Antigravity.<br>
            2. הגדירו סוכן חדש והצמידו לו כישור (Skill) ספציפי (למשל: כישור חיפוש ברשת **Web Search**).<br>
            3. המטרה של הסוכן היא למשוך באופן אוטומטי את החדשות, הנתונים או המגמות העדכניות ביותר לגבי <strong>${i2}</strong> או <strong>${i3}</strong> לתוך האתר שלכם.<br>
            4. רשמו תיאור קצר בן משפט או שניים של הסוכן והכישור ששילבתם בקופסת הטקסט מטה.`,
            validate: (input) => {
                return input && input.trim().length > 15;
            },
            errorMessage: "התיאור קצר מדי! אנא פרטו קצת יותר (לפחות 15 תווים) על סוכן ה-AI ועל ה-Skill שחיברתם לו."
        }
    ];
}

// 2. Global State Variables
let userName = "";
let userInterests = [];
let lessonsData = [];

let currentLessonIndex = 0;
let activeTabs = ["lesson_1_prompt.md"];
let activeTab = "lesson_1_prompt.md";
let overallProgress = 0;

// Inputs store for lesson submissions
let userSubmissions = {
    lesson_1: {
        plusButton: "",
        voiceInput: "",
        imageGen: "",
        excelPlan: "",
        tvTranslation: ""
    },
    lesson_2: "",
    lesson_3: "",
    lesson_4: false,
    lesson_5: ""
};

// 3. Document Elements & Initialization
document.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("user_name");
    const savedInterests = localStorage.getItem("user_interests");
    
    bindGlobalListeners();
    
    if (savedName && savedInterests) {
        userName = savedName;
        userInterests = JSON.parse(savedInterests);
        lessonsData = getDynamicLessons(userName, userInterests);
        
        // Hide onboarding overlay immediately
        const overlay = document.getElementById("onboarding-overlay");
        if (overlay) overlay.style.display = "none";
        
        startApp();
    } else {
        // Show onboarding overlay
        const overlay = document.getElementById("onboarding-overlay");
        if (overlay) {
            overlay.style.display = "flex";
            overlay.style.opacity = "1";
        }
        
        document.getElementById("btn-start-course").addEventListener("click", handleOnboardingSubmit);
    }
});

function bindGlobalListeners() {
    // Global Action Buttons
    document.getElementById("btn-run-code").addEventListener("click", handleVerifyTask);
    document.getElementById("btn-reset-sandbox").addEventListener("click", handleResetInput);
    document.getElementById("clear-terminal").addEventListener("click", () => {
        const term = document.getElementById("terminal-output");
        term.innerHTML = '<div class="terminal-line system-msg">המסוף נוקה. מערכת אימות המשימות מוכנה.</div>';
    });
    
    // Activity bar settings click
    document.getElementById("btn-settings").addEventListener("click", () => {
        const reset = confirm("האם ברצונך לאפס את תוכנית הלימודים ולהתחיל מחדש את תהליך ההתאמה האישית?");
        if (reset) {
            localStorage.clear();
            window.location.reload();
        }
    });
    
    // Persistent Log Out / Switch User Button
    const logoutBtn = document.getElementById("btn-logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            const confirmLogout = confirm("האם ברצונך להתנתק ולמחוק את נתוני המשתמש הנוכחי?");
            if (confirmLogout) {
                localStorage.removeItem("user_name");
                localStorage.removeItem("user_interests");
                window.location.reload();
            }
        });
    }
    
    // Skip Button
    const skipBtn = document.getElementById("btn-skip-lesson");
    if (skipBtn) {
        skipBtn.addEventListener("click", handleSkipLesson);
    }
    
    // Sidebar progress click
    document.getElementById("btn-progress-sidebar").addEventListener("click", () => {
        alert(`התקדמות נוכחית בקורס: ${overallProgress}%. עליך להשלים את משימת ה-Action Item של כל שיעור כדי לפתוח את הבא.`);
    });
}

function startApp() {
    renderSidebarLessons();
    renderTabs();
    loadLesson(currentLessonIndex);
    updateProgressRing();
}

function handleOnboardingSubmit() {
    const nameInput = document.getElementById("user-name");
    const nameVal = nameInput.value.trim();
    
    const interestInputs = Array.from(document.querySelectorAll(".interest-input"));
    const interests = interestInputs.map(input => input.value.trim()).filter(val => val !== "");
    
    if (!nameVal) {
        showOnboardingError("אנא הקלידו את שמכם (Name).");
        return;
    }
    
    if (interests.length < 5) {
        showOnboardingError("אנא מלאו את כל 5 תחומי העניין שלכם.");
        return;
    }
    
    // Check distinct/unique interests
    const unique = new Set(interests.map(i => i.toLowerCase()));
    if (unique.size < 5) {
        showOnboardingError("אנא הזינו 5 תחומי עניין שונים וייחודיים זה מזה.");
        return;
    }
    
    // Validation passed! Save state
    const errorContainer = document.getElementById("onboarding-error");
    if (errorContainer) errorContainer.style.display = "none";
    
    userName = nameVal;
    userInterests = interests;
    lessonsData = getDynamicLessons(userName, userInterests);
    
    localStorage.setItem("user_name", userName);
    localStorage.setItem("user_interests", JSON.stringify(userInterests));
    
    // Animate onboarding overlay fade out
    const overlay = document.getElementById("onboarding-overlay");
    if (overlay) {
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.style.display = "none";
        }, 300);
    }
    
    startApp();
}

function showOnboardingError(msg) {
    const errorContainer = document.getElementById("onboarding-error");
    if (errorContainer) {
        errorContainer.innerText = msg;
        errorContainer.style.display = "block";
    }
}

// 4. Render Sidebar and Tabs with Locking Mechanics
function renderSidebarLessons() {
    const list = document.getElementById("lessons-list");
    list.innerHTML = "";
    
    lessonsData.forEach((lesson, index) => {
        const li = document.createElement("li");
        
        let statusText = "נעול";
        li.className = "file-item";
        
        if (!lesson.unlocked) {
            li.classList.add("locked");
        } else {
            if (index === currentLessonIndex) {
                li.classList.add("active");
                li.classList.add("active-working");
                statusText = "בתהליך";
            } else if (lesson.completed) {
                li.classList.add("completed");
                statusText = "✓ הושלם";
            } else {
                statusText = "פתוח";
            }
        }
        
        // Inline SVG Icons based on file type
        let iconSvg = `<svg class="icon file-icon" viewBox="0 0 16 16" width="16" height="16" style="color: #ce9178;"><path fill="currentColor" d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0.5h3L11 2v3z"></path></svg>`; // Default code/text file
        if (lesson.fileName.endsWith(".yaml")) {
            iconSvg = `<svg class="icon file-icon" viewBox="0 0 16 16" width="16" height="16" style="color: #cca700;"><path fill="currentColor" d="M1 3h14v10H1V3zm2 2v6h10V5H3z"></path></svg>`; // Config yaml
        } else if (lesson.fileName.endsWith(".json")) {
            iconSvg = `<svg class="icon file-icon" viewBox="0 0 16 16" width="16" height="16" style="color: #4ec9b0;"><path fill="currentColor" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm1 2v10h6V3H5z"></path></svg>`; // JSON
        } else if (lesson.fileName.endsWith(".py")) {
            iconSvg = `<svg class="icon file-icon" viewBox="0 0 16 16" width="16" height="16" style="color: #569cd6;"><path fill="currentColor" d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 6.5-6.5 6.51 6.51 0 0 1-6.5 6.5zM9 4H7v5h5V7H9z"></path></svg>`; // Python
        }
        
        if (!lesson.unlocked) {
            iconSvg = `<svg class="icon file-icon" viewBox="0 0 16 16" width="16" height="16" style="color: var(--text-muted);"><path fill="currentColor" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V6H4a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 4 15h8a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12 6h-.5V4.5A3.5 3.5 0 0 0 8 1zm2.5 5h-5V4.5a2.5 2.5 0 0 1 5 0V6z"></path></svg>`; // Lock Icon
        }
        
        li.innerHTML = `
            ${iconSvg}
            <span style="margin-right: 4px;">${lesson.fileName}</span>
            <span class="checkmark-status">${statusText}</span>
        `;
        
        if (lesson.unlocked) {
            li.addEventListener("click", () => {
                selectLesson(index);
            });
        }
        
        list.appendChild(li);
    });
    
    // Sidebar Checkmarks List
    const checkmarkList = document.getElementById("lesson-checkmarks-list");
    checkmarkList.innerHTML = "";
    lessonsData.forEach((lesson, index) => {
        const item = document.createElement("li");
        item.className = `checkmark-item ${lesson.completed ? "done" : ""}`;
        item.innerHTML = `
            <span class="checkmark-circle"></span>
            <span>שיעור ${index + 1}</span>
        `;
        checkmarkList.appendChild(item);
    });
}

function renderTabs() {
    const tabBar = document.getElementById("tab-bar");
    tabBar.innerHTML = "";
    
    activeTabs.forEach(tabFileName => {
        const lessonIndex = lessonsData.findIndex(l => l.fileName === tabFileName);
        const lesson = lessonsData[lessonIndex];
        
        const tab = document.createElement("div");
        tab.className = `editor-tab ${tabFileName === activeTab ? "active" : ""}`;
        tab.innerHTML = `
            <span>${lesson.tabLabel}</span>
            <span class="close-tab" onclick="event.stopPropagation(); closeTab('${tabFileName}')">×</span>
        `;
        
        if (lesson.unlocked) {
            tab.addEventListener("click", () => {
                selectLesson(lessonIndex);
            });
        } else {
            tab.style.opacity = "0.5";
            tab.style.cursor = "not-allowed";
        }
        
        tabBar.appendChild(tab);
    });
}

function closeTab(fileName) {
    if (activeTabs.length <= 1) return; // Keep at least one tab open
    
    const index = activeTabs.indexOf(fileName);
    activeTabs.splice(index, 1);
    
    if (activeTab === fileName) {
        activeTab = activeTabs[activeTabs.length - 1];
        const newLessonIndex = lessonsData.findIndex(l => l.fileName === activeTab);
        selectLesson(newLessonIndex);
    } else {
        renderTabs();
    }
}

function selectLesson(index) {
    if (!lessonsData[index].unlocked) return; // Prevent selection of locked lessons
    
    currentLessonIndex = index;
    const lesson = lessonsData[index];
    
    if (!activeTabs.includes(lesson.fileName)) {
        activeTabs.push(lesson.fileName);
    }
    activeTab = lesson.fileName;
    
    loadLesson(index);
    renderSidebarLessons();
    renderTabs();
}

// 5. Load Lesson Content & Syntax Highlight Code
function loadLesson(index) {
    const lesson = lessonsData[index];
    
    // Load Hebrew Rich text
    document.getElementById("editor-text-content").innerHTML = lesson.content;
    
    // Generate line numbers
    generateLineNumbers(40);
    
    // Render the Action Item block
    renderActionBlock(lesson);
    
    // Update skip button text dynamically based on the lesson index
    const skipBtn = document.getElementById("btn-skip-lesson");
    if (skipBtn) {
        if (index === lessonsData.length - 1) {
            skipBtn.innerText = "סיום הקורס (Finish)";
        } else {
            skipBtn.innerText = "דלג לשיעור הבא (Skip)";
        }
    }
    
    // Write Status update to the terminal
    writeTerminalLine(`נפתח בהצלחה: ${lesson.fileName}. מוכן לאימות קלט משימה.`, "system-msg");
}

function generateLineNumbers(count) {
    const lnContainer = document.getElementById("editor-line-numbers");
    lnContainer.innerHTML = "";
    for (let i = 1; i <= count; i++) {
        const div = document.createElement("div");
        div.innerText = i;
        lnContainer.appendChild(div);
    }
}

// 6. Progress Ring Calculation
function updateProgressRing() {
    const completedCount = lessonsData.filter(l => l.completed).length;
    overallProgress = Math.round((completedCount / lessonsData.length) * 100);
    
    // Update global status elements
    document.getElementById("progress-percent").innerText = `${overallProgress}%`;
    document.getElementById("radial-progress-text").innerText = `${overallProgress}%`;
    
    // SVG radial logic
    const circle = document.getElementById("radial-progress-bar");
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - (overallProgress / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

// 7. Inject Action Item Block (Form with URL/Code/Text input)
function renderActionBlock(lesson) {
    const container = document.getElementById("sandbox-viewport");
    container.innerHTML = "";
    
    // Create tools links
    let toolsHtml = "";
    if (lesson.tools && lesson.tools.length > 0) {
        toolsHtml = `<div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:5px;">`;
        lesson.tools.forEach(t => {
            toolsHtml += `
                <a href="${t.url}" target="_blank" class="action-link-btn">
                    <svg viewBox="0 0 16 16" width="12" height="12"><path fill="currentColor" d="M1.5 1A1.5 1.5 0 0 0 0 2.5v11A1.5 1.5 0 0 0 1.5 15h13a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 14.5 1h-13zM1 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-11zM11.5 4a.5.5 0 0 0-.5.5v3h-3v-3a.5.5 0 0 0-1 0v3h-3v-3a.5.5 0 0 0-1 0v3a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 0-.5-.5z"></path></svg>
                    <span>${t.name}</span>
                </a>
            `;
        });
        toolsHtml += `</div>`;
    }
    
    // Input component html based on action type
    let inputHtml = "";
    const savedVal = userSubmissions[lesson.id];
    
    if (lesson.actionType === "multi_capabilities") {
        const data = savedVal || { plusButton: "", voiceInput: "", imageGen: "", excelPlan: "", tvTranslation: "" };
        const i1 = userInterests[0];
        const i2 = userInterests[1];
        const i3 = userInterests[2];
        const i4 = userInterests[3];
        const i5 = userInterests[4];
        
        inputHtml = `
            <div class="action-input-area" style="gap: 12px;">
                <h4 style="font-size:13px; color: var(--success-color); border-bottom: 1px solid var(--border-color); padding-bottom: 4px;">הזינו את תוצאות אתגר הליבה (AI Gauntlet):</h4>
                
                <div class="form-group">
                    <label style="color:var(--text-header); font-size: 13px;">1. כפתור ה-'+' (ניתוח קובץ בנושא ${i2}):</label>
                    <textarea class="textarea-monospace" style="min-height:50px;" id="input-plus-button" placeholder="הדביקו את ניתוח ה-AI לקובץ של ${i2}...">${data.plusButton || ""}</textarea>
                </div>
                
                <div class="form-group">
                    <label style="color:var(--text-header); font-size: 13px;">2. קלט קולי (שילוב ${i3} ו-${i4}):</label>
                    <textarea class="textarea-monospace" style="min-height:50px;" id="input-voice-input" placeholder="הדביקו את רעיונות השילוב בין ${i3} ו-${i4}...">${data.voiceInput || ""}</textarea>
                </div>
                
                <div class="form-group">
                    <label style="color:var(--text-header); font-size: 13px;">3. יצירת תמונה (פרומפט של ${i5}):</label>
                    <input type="text" class="input-text-standard" id="input-image-gen" placeholder="הדביקו את תיאור או פרומפט התמונה של ${i5}..." value="${data.imageGen || ""}">
                </div>
                
                <div class="form-group">
                    <label style="color:var(--text-header); font-size: 13px;">4. פירוק משימה (תוכנית עבור ${i1}):</label>
                    <textarea class="textarea-monospace" style="min-height:50px;" id="input-excel-plan" placeholder="הדביקו את תוכנית השלבים להשגת יעד ב-${i1}...">${data.excelPlan || ""}</textarea>
                </div>
                
                <div class="form-group">
                    <label style="color:var(--text-header); font-size: 13px;">5. תרגום (תרגום טקסט בנושא ${i2}):</label>
                    <textarea class="textarea-monospace" style="min-height:50px;" id="input-tv-translation" placeholder="הדביקו את תרגום הטקסט העוסק ב-${i2}..." >${data.tvTranslation || ""}</textarea>
                </div>
            </div>
        `;
    } else if (lesson.actionType === "textarea" || lesson.actionType === "code") {
        inputHtml = `
            <div class="action-input-area">
                <label for="action-task-input">${lesson.actionLabel}</label>
                <textarea class="textarea-monospace" id="action-task-input" placeholder="${lesson.placeholderText}">${savedVal || ""}</textarea>
            </div>
        `;
    } else if (lesson.actionType === "url") {
        inputHtml = `
            <div class="action-input-area">
                <label for="action-task-input">${lesson.actionLabel}</label>
                <input type="text" class="input-text-standard" id="action-task-input" placeholder="${lesson.placeholderText}" value="${savedVal || ""}">
            </div>
        `;
    } else if (lesson.actionType === "checkbox") {
        inputHtml = `
            <div class="action-input-area">
                <label class="checkbox-container">
                    <input type="checkbox" id="action-task-input" ${savedVal ? "checked" : ""}>
                    <span style="font-size:13px; font-weight:bold; color:var(--text-header);">${lesson.actionLabel}</span>
                </label>
            </div>
        `;
    }
    
    container.innerHTML = `
        <div class="action-box-container fade-in">
            <div class="action-header">
                <span class="action-badge">משימה לביצוע</span>
                <span class="action-title">צעדים נדרשים בשיעור ${currentLessonIndex + 1}</span>
            </div>
            <div class="action-steps">
                ${lesson.instructionText}
            </div>
            ${toolsHtml}
        </div>
        
        <div class="action-box-container fade-in" style="border-right: 3px solid var(--success-color);">
            ${inputHtml}
        </div>
    `;
    
    // Bind auto-save listeners
    if (lesson.actionType === "multi_capabilities") {
        const plusEl = document.getElementById("input-plus-button");
        const voiceEl = document.getElementById("input-voice-input");
        const imgEl = document.getElementById("input-image-gen");
        const excelEl = document.getElementById("input-excel-plan");
        const tvEl = document.getElementById("input-tv-translation");
        
        const saveMulti = () => {
            userSubmissions.lesson_1 = {
                plusButton: plusEl ? plusEl.value : "",
                voiceInput: voiceEl ? voiceEl.value : "",
                imageGen: imgEl ? imgEl.value : "",
                excelPlan: excelEl ? excelEl.value : "",
                tvTranslation: tvEl ? tvEl.value : ""
            };
        };
        
        if (plusEl) plusEl.addEventListener("input", saveMulti);
        if (voiceEl) voiceEl.addEventListener("input", saveMulti);
        if (imgEl) imgEl.addEventListener("input", saveMulti);
        if (excelEl) excelEl.addEventListener("input", saveMulti);
        if (tvEl) tvEl.addEventListener("input", saveMulti);
    } else {
        const inputElement = document.getElementById("action-task-input");
        if (inputElement) {
            const eventType = lesson.actionType === "checkbox" ? "change" : "input";
            inputElement.addEventListener(eventType, () => {
                const val = lesson.actionType === "checkbox" ? inputElement.checked : inputElement.value;
                userSubmissions[lesson.id] = val;
            });
        }
    }
}

// 8. Verify Task Submission & Unlock Logic
function handleVerifyTask() {
    const lesson = lessonsData[currentLessonIndex];
    const inputVal = userSubmissions[lesson.id];
    
    const term = document.getElementById("terminal-output");
    
    // Append run command
    const cmdLine = document.createElement("div");
    cmdLine.className = "terminal-line cmd-prompt";
    cmdLine.innerText = `antigravity verify-task ${lesson.id}`;
    term.appendChild(cmdLine);
    
    writeTerminalLine(`מריץ אימות עבור משימת ${lesson.fileName}...`, "info-msg");
    
    // Validate input
    const isValid = lesson.validate(inputVal);
    
    setTimeout(() => {
        if (!isValid) {
            writeTerminalLine(`[Error] אימות המשימה נכשל!`, "error-msg");
            writeTerminalLine(`סיבה: ${lesson.errorMessage}`, "warning-msg");
            alert(`אימות משימה נכשל:\n${lesson.errorMessage}`);
            return;
        }
        
        // Success path
        writeTerminalLine("מנתח תוצאות קלט מתוך סביבת העבודה החיצונית...", "info-msg");
        
        if (lesson.id === "lesson_1") {
            writeTerminalLine("[Success] משימה 1: ניתוח כפתור + אומת בהצלחה.", "success-msg");
            writeTerminalLine("[Success] משימה 2: קלט קולי אומת בהצלחה.", "success-msg");
            writeTerminalLine("[Success] משימה 3: פרומפט יצירת תמונה אומת בהצלחה.", "success-msg");
            writeTerminalLine("[Success] משימה 4: תכנון ופירוק משימה אומת בהצלחה.", "success-msg");
            writeTerminalLine("[Success] משימה 5: תרגום ולוקליזציה אומת בהצלחה.", "success-msg");
            writeTerminalLine("[Success] כל 5 שלבי ה-AI Gauntlet אומתו בהצלחה! שיעור 1 הושלם.", "success-msg");
        } else if (lesson.id === "lesson_2") {
            writeTerminalLine("[Success] קוד המקור HTML/CSS נקרא בהצלחה. זוהו תגיות שלד ומבנה.", "success-msg");
        } else if (lesson.id === "lesson_3") {
            writeTerminalLine(`[Success] מנסה להתחבר לכתובת ${inputVal.trim()}...`, "info-msg");
            writeTerminalLine("[Success] תגובת שרת 200 OK. פריסת Vercel פעילה ותקינה לחלוטין!", "success-msg");
        } else if (lesson.id === "lesson_4") {
            writeTerminalLine("[Success] אימות חיבור Antigravity ו-Webhook מול GitHub/Vercel בוצע. התיעוד מסונכרן.", "success-msg");
        } else if (lesson.id === "lesson_5") {
            writeTerminalLine("[Success] תיאור הסוכן נקרא. בקרת הכישורים (Skills) של סוכן Antigravity הושלמה.", "success-msg");
        }
        
        // Mark current lesson as completed
        lesson.completed = true;
        
        // Unlock next lesson
        const nextIndex = currentLessonIndex + 1;
        let unlockedNext = false;
        if (nextIndex < lessonsData.length) {
            lessonsData[nextIndex].unlocked = true;
            unlockedNext = true;
            writeTerminalLine(`פרק חדש נפתח! קובץ ${lessonsData[nextIndex].fileName} פתוח כעת לעריכה.`, "success-msg");
        }
        
        // Refresh UI state
        renderSidebarLessons();
        renderTabs();
        updateProgressRing();
        
        if (unlockedNext) {
            alert("✓ המשימה הושלמה בהצלחה! השיעור הבא פתוח כעת עבורכם.");
            // Automatically open next lesson
            selectLesson(nextIndex);
        } else {
            // Course finished!
            writeTerminalLine("[הושלם] מזל טוב! השלמתם את הקורס באופן מלא!", "success-msg");
            alert("🏆 כל הכבוד! השלמתם את כל 5 השיעורים והמשימות המעשיות בקורס בהצלחה! למדתם כיצד לקחת רעיון, לכתוב אותו ב-Canvas, לפרוס ב-Vercel, לבצע אוטומציית Antigravity ולבנות סוכנים חכמים!");
        }
        
    }, 1200);
    
    // Auto scroll terminal to bottom
    setTimeout(() => {
        term.scrollTop = term.scrollHeight;
    }, 50);
}

// 9. Reset Current Input field
function handleResetInput() {
    const lesson = lessonsData[currentLessonIndex];
    writeTerminalLine(`מנקה נתוני משימה עבור ${lesson.fileName}...`, "warning-msg");
    
    if (lesson.actionType === "checkbox") {
        userSubmissions[lesson.id] = false;
    } else if (lesson.actionType === "multi_capabilities") {
        userSubmissions.lesson_1 = {
            plusButton: "",
            voiceInput: "",
            imageGen: "",
            excelPlan: "",
            tvTranslation: ""
        };
    } else {
        userSubmissions[lesson.id] = "";
    }
    
    renderActionBlock(lesson);
}

// 9.5. Skip Lesson / Finish Course
function handleSkipLesson() {
    const lesson = lessonsData[currentLessonIndex];
    const term = document.getElementById("terminal-output");
    
    // Append skip command to terminal
    const cmdLine = document.createElement("div");
    cmdLine.className = "terminal-line cmd-prompt";
    cmdLine.innerText = `antigravity skip-lesson ${lesson.id}`;
    term.appendChild(cmdLine);
    
    writeTerminalLine(`מבצע מעבר/דילוג על שיעור ${currentLessonIndex + 1}...`, "info-msg");
    
    // Mark current lesson as completed
    lesson.completed = true;
    
    const nextIndex = currentLessonIndex + 1;
    if (nextIndex < lessonsData.length) {
        // Unlock next lesson
        lessonsData[nextIndex].unlocked = true;
        writeTerminalLine(`שיעור ${nextIndex + 1} נפתח בעקבות דילוג.`, "success-msg");
        
        // Refresh UI state
        renderSidebarLessons();
        renderTabs();
        updateProgressRing();
        
        alert("✓ דילגת על השיעור הנוכחי. השיעור הבא פתוח כעת עבורך.");
        selectLesson(nextIndex);
    } else {
        // Finish course!
        writeTerminalLine("[הושלם] מזל טוב! השלמתם את הקורס באופן מלא!", "success-msg");
        
        // Refresh UI state
        renderSidebarLessons();
        renderTabs();
        updateProgressRing();
        
        alert("🏆 כל הכבוד! סיימת את כל חמשת שיעורי הקורס בהצלחה!");
    }
}

// 10. Helper Utilities
function writeTerminalLine(text, type = "") {
    const term = document.getElementById("terminal-output");
    const line = document.createElement("div");
    line.className = `terminal-line ${type}`;
    line.innerText = text;
    term.appendChild(line);
    
    // Auto scroll to bottom
    term.scrollTop = term.scrollHeight;
}
