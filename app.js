// AI for Builders: From Prompt to Production (בעברית) - Core Application Logic with External Tool Action Items

// 1. Data Store: Lesson Content and Action Item Settings
const lessonsData = [
    {
        id: "lesson_1",
        fileName: "lesson_1_prompt.md",
        tabLabel: "lesson_1_prompt.md",
        title: "שיעור 1: אמנות הפרומפט (יסודות ולוגיקה)",
        unlocked: true,
        completed: false,
        content: `
<h1 class="lesson-h1">שיעור 1: אמנות הפרומפט (יסודות ולוגיקה)</h1>
<p class="lesson-p">ברוכים הבאים לצעד הראשון שלכם בעולם ה-AI! אם אתם יודעים לכתוב לולאות, תנאי IF-ELSE ומשתנים, יש לכם כבר יתרון עצום. למה? כי כתיבת פרומפט (Prompt) ל-AI היא בדיוק כמו תכנות: מדובר בלוגיקה מובנית.</p>

<div class="analogy-box">
    <strong>💡 אנלוגיית הבונה:</strong> כתיבת פרומפט מוצלח היא כמו כתיבת <strong>מאקרו באקסל (Excel Macro)</strong> או חוברת <strong>הוראות הרכבה של לגו (Lego Manual)</strong>. אם תחסיר שלב בחוברת הלגו, או אם תגדיר משתנה שגוי במאקרו - התוצאה תקרוס או שתקבל רכבת עקומה.
</div>

<h2 class="lesson-h2">תבנית ה-PROMPT: ארבעת עמודי התווך</h2>
<p class="lesson-p">כדי לקבל תוצאות מדויקות ולא "תשובות גנריות", עלינו להשתמש בארבעה מרכיבים מרכזיים:</p>
<ul style="margin-right: 20px; margin-bottom: 12px; line-height: 1.6;">
    <li><strong>Role (תפקיד):</strong> הגדרת ה"אישיות" של ה-AI (למשל: <em>"פעל כאנליסט שוק הון בכיר"</em>).</li>
    <li><strong>Task (משימה):</strong> מה בדיוק ה-AI צריך לבצע (למשל: <em>"נתח את כיוון מניית טסלה"</em>).</li>
    <li><strong>Context (הקשר):</strong> נתוני הרקע והחוקים (למשל: <em>"בהתבסס על חציית ממוצע נע 50"</em>).</li>
    <li><strong>Format (פורמט):</strong> מבנה הפלט הרצוי (למשל: <em>"הצג בטבלה עם עמודות מפתח"</em>).</li>
</ul>

<h2 class="lesson-h2">הזיות מודל (Hallucinations) והטיות מידע (Biases)</h2>
<p class="lesson-p">מערכות AI פועלות על בסיס סטטיסטיקה והסתברויות. לעיתים הן מייצרות מידע שגוי לחלוטין בביטחון מלא - זה נקרא <strong>הזיית מודל (Hallucination)</strong>.</p>

<div class="tech-box">
    <strong>🧩 אנלוגיית הלגו הפגום:</strong>
    הזיית מודל היא כמו חוברת לגו שבה אחד השלבים מורה לך לחבר קובייה כחולה ישירות לאוויר בלי שום תמיכה מתחתיה.
    <strong>הטיית מידע (Data Bias)</strong> דומה למצב שבו חברת לגו יצרה רק לבנים אדומות במשך שנים, ולכן ה-AI בטוח שלא קיימים צבעים אחרים בעולם.
</div>
        `,
        actionType: "textarea",
        actionLabel: "הדבקו כאן את תשובת ה-AI שקיבלתם כדי להשלים את שיעור 1:",
        placeholderText: "הדביקו את קוד ה-VBA שנוצר, או את סדר התזונה השבועי לכלב שלכם...",
        tools: [
            { name: "פתח את ChatGPT", url: "https://chatgpt.com" },
            { name: "פתח את Gemini", url: "https://gemini.google.com" },
            { name: "פתח את Copilot", url: "https://copilot.microsoft.com" }
        ],
        instructionText: `<strong>משימה מעשית:</strong><br>
        1. פתחו כלי AI (כגון ChatGPT או Gemini) בלשונית חדשה.<br>
        2. כתבו פרומפט מפורט המבוסס על מבנה ה-PROMPT.<br>
        3. <strong>בחרו נושא לבקשה:</strong> בקשו ממנו ליצור <strong>קוד Excel VBA</strong> למעקב ביצועי תיק מניות, או בקשו ממנו ליצור <strong>לוח תזונה וטיפול שבועי</strong> מפורט עבור כלב (כמו הכלבה 'טס').<br>
        4. העתיקו את התשובה שקיבלתם והדביקו אותה בתיבת הטקסט למטה.`,
        validate: (input) => {
            return input && input.trim().length > 15;
        },
        errorMessage: "הקלט קצר מדי! אנא ודאו שהעתקתם את התוצאה המלאה של ה-AI (לפחות 15 תווים)."
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
    <strong>👥 אנלוגיית הבונה:</strong> Gemini Canvas הוא כמו <strong>שותף לתכנות (Pair Programmer)</strong> שיושב לצידכם. במקום לשלוח לכם פלט ארוך ולבקש מכם להעתיק אותו, הוא עובד איתכם על אותו קובץ קוד, מסמן באדום קוד שנמחק ובסגנון ירוק קוד חדש שנוסף (Diff View), ממש כמו ב-Git.
</div>

<h2 class="lesson-h2">מה אפשר לבנות עם Canvas?</h2>
<p class="lesson-p">Canvas מבין את מבנה הקובץ כולו ויכול לעדכן פונקציות ספציפיות בלי לפגוע בשאר הקוד. דוגמאות לשימושים:</p>
<ul style="margin-right: 20px; margin-bottom: 12px; line-height: 1.6;">
    <li>יצירת דף נחיתה לעסק של הולכת כלבים ועדכון עיצובי ממוקד שלו.</li>
    <li>פיתוח לוח בקרה (Dashboard) למעקב אחר תיק מניות.</li>
    <li>בניית אפליקציית מעקב אחר אוספי לגו.</li>
    <li>בניית חידון המלצות טלוויזיה המבוסס על משתנים מותאמים אישית.</li>
</ul>
        `,
        actionType: "code",
        actionLabel: "הדביקו את קוד ה-HTML/CSS הסופי שלכם כאן כדי לפתוח את שיעור 3:",
        placeholderText: "<!DOCTYPE html>\n<html>\n<head>...",
        tools: [
            { name: "פתח את Gemini (ודא הפעלת Canvas)", url: "https://gemini.google.com" }
        ],
        instructionText: `<strong>משימה מעשית:</strong><br>
        1. פתחו את Gemini ועברו למצב **Canvas** (או בקשו ממנו לפתוח קובץ קוד ייעודי בתוך חלון ה-Canvas).<br>
        2. בקשו ממנו ליצור קוד HTML/CSS של דף נחיתה קטן.<br>
        3. <strong>בחרו נושא:</strong> אתר שירות הולכת כלבים, מערכת מעקב אוסף לגו, או דף חידון טלוויזיה.<br>
        4. בצעו איתו איטרציה (בקשו שינוי סגנון או הוספת כפתור ב-Canvas) והעתיקו את קוד ה-HTML/CSS הסופי לכאן.`,
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
<p class="lesson-p">כתבתם קוד מעולה עם ה-AI, הוא רץ על המחשב המקומי שלכם... אבל איך גורמים לעולם לראות אותו? איך הופכים קובץ במחשב לקישור אינטרנט חי (Live URL) שאפשר לשלוח לחברים?</p>

<h2 class="lesson-h2">חלוקת התפקידים בצינור הפריסה (Deployment Pipeline)</h2>
<div class="tech-box">
    <strong>📦 GitHub (בקרת גרסאות ומחסן קוד):</strong> מאחסן את הקוד שלכם בענן, עוקב אחר כל שינוי שביצעתם (קוממיטים) ומאפשר לכם לחזור אחורה בזמן אם משהו נשבר.
    <br><br>
    <strong>🚀 Vercel (אחסון ופריסה מהירה):</strong> שירות ענן שמתחבר ל-GitHub שלכם. ברגע שהוא מזהה שינוי בקוד, הוא בונה אותו מחדש ומפיץ אותו לשרתים בכל העולם עם דומיין ייחודי (למשל: <code>your-app.vercel.app</code>).
</div>

<div class="analogy-box">
    <strong>🚚 אנלוגיית הבונה:</strong> תחשבו על הקוד שלכם כעל <strong>חבילת לגו במפעל</strong>. GitHub הוא המחסן שבו שומרים ומקטלגים את החבילות, ו-Vercel הוא משאית ההובלה שבונה את הלגו ומביאה אותו ישירות לבית של הלקוח.
</div>
        `,
        actionType: "url",
        actionLabel: "הזינו את קישור הדומיין הפעיל שלכם מ-Vercel כאן כדי להמשיך:",
        placeholderText: "https://your-project.vercel.app",
        tools: [
            { name: "פתח את GitHub", url: "https://github.com" },
            { name: "פתח את Vercel", url: "https://vercel.com" }
        ],
        instructionText: `<strong>משימה מעשית:</strong><br>
        1. פתחו את **GitHub** וצרו Repository (מחסן) חדש וציבורי.<br>
        2. העלו את הקובץ (או הקבצים) שנוצרו בשיעור 2 לתוך המחסן החדש.<br>
        3. פתחו את **Vercel**, חברו את חשבון ה-GitHub שלכם, ובצעו פריסה (Deploy) למחסן שיצרתם.<br>
        4. העתיקו והדביקו את כתובת האתר החי (Vercel URL) שנוצר עבורכם כאן למטה.`,
        validate: (input) => {
            if (!input) return false;
            const clean = input.trim().toLowerCase();
            return (clean.startsWith("http://") || clean.startsWith("https://")) && 
                   (clean.includes(".vercel.app") || clean.includes(".com") || clean.includes(".net") || clean.includes(".dev"));
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
<p class="lesson-p">בשיעור 3 ראינו את הצינור הידני: כתיבת קוד ב-AI, העתקה, דחיפה ל-GitHub, המתנה לבנייה ב-Vercel. זה עובד, אבל זה לוקח זמן. מה אם יכולנו לבצע שינויים ישירות דרך הוראות ה-AI שלנו והאתר ישתנה <strong>בזמן אמת</strong>?</p>

<h2 class="lesson-h2">הכירו את Antigravity Auto-Sync</h2>
<p class="lesson-p">מערכת <strong>Antigravity</strong> מחברת את חלון העבודה של ה-AI ישירות לסביבת הפריסה שלכם. במקום לבצע העתק-הדבק ידני של קוד, השינויים שלכם מסונכרנים אוטומטית לענן.</p>

<div class="analogy-box">
    <strong>📈 אנלוגיית שוק ההון:</strong> ההבדל בין השיטה הידנית ל-Antigravity הוא כמו ההבדל בין <strong>התקשרות טלפונית לברוקר</strong> כדי שיקנה מניה, לבין <strong>מערכת מסחר אלקטרונית מהירה</strong> שמבצעת פקודות בשבריר שנייה על סמך נתונים חיים.
</div>
        `,
        actionType: "checkbox",
        actionLabel: "אשרו את ביצוע האינטגרציה הבאה:",
        placeholderText: "",
        tools: [
            { name: "פתח את Antigravity", url: "https://antigravity.dev" } // Simulated or live workspace
        ],
        instructionText: `<strong>משימה מעשית:</strong><br>
        1. פתחו את פאנל העבודה של **Antigravity**.<br>
        2. צרו פרויקט חדש המבוסס על תחומי עניין (למשל: **מעקב סדרות צפייה בטלוויזיה**).<br>
        3. חברו את חשבונות ה-GitHub וה-Vercel שלכם לפרויקט.<br>
        4. בצעו שינוי הנחיה ב-Antigravity (למשל, הוספת עמודת מעקב שעות) וראו כיצד השינוי מסתנכרן אוטומטית (Auto-Sync) לקישור ה-Live שלכם.<br>
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
    <li><strong>סוכן (Agent - המוח):</strong> מודל ה-AI שמקבל החלטות לוגיות על סמך הנחיות שנתתם לו (למשל: <em>"אם מניה יורדת מתחת למחיר X, החלט האם לקנות"</em>).</li>
    <li><strong>כישורים (Skills - הידיים):</strong> פונקציות קוד ספציפיות המאפשרות לסוכן לתקשר עם העולם החיצון (למשל: חיפוש בגוגל, קריאת גיליון Excel, שליחת התראה, או בדיקת שוק מניות חי).</li>
</ul>

<div class="analogy-box">
    <strong>🏗️ אנלוגיית הלגו:</strong>
    הסוכן הוא ה-<strong>Architect (המתכנן הראשי)</strong> שיודע מה הוא רוצה לבנות. הכישורים הם ה-<strong>Lego Sets (ערכות הלגו השונות)</strong> העומדות לרשותו - גלגלים, מנועים ומפרקים - המאפשרות לו להפוך את התוכנית שלו למכונית נוסעת באמת.
</div>
        `,
        actionType: "textarea",
        actionLabel: "תארו בקצרה את הסוכן והכישור שיצרתם כדי להשלים את הקורס!",
        placeholderText: "לדוגמה: יצרתי סוכן עוזר מסחר המשתמש בכישור Web Search כדי לבדוק כותרות על מניית טסלה...",
        tools: [
            { name: "פתח את סביבת הסוכנים ב-Antigravity", url: "https://antigravity.dev" }
        ],
        instructionText: `<strong>משימה מעשית:</strong><br>
        1. נווטו למדור ה-**Agents** בתוך מרחב העבודה שלכם ב-Antigravity.<br>
        2. הגדירו סוכן חדש והצמידו לו כישור (Skill) ספציפי.<br>
        3. **לדוגמה:** סוכן פיננסי המחובר לכישור **Web Search Skill** או סוכן לניהול מלאי לגו המחובר למחשבון נוסחאות אקסל.<br>
        4. רשמו תיאור קצר בן משפט או שניים של הסוכן והכישור ששילבתם בקופסת הטקסט מטה.`,
        validate: (input) => {
            return input && input.trim().length > 20;
        },
        errorMessage: "התיאור קצר מדי! אנא פרטו קצת יותר (לפחות 20 תווים) על סוכן ה-AI ועל ה-Skill שחיברתם לו."
    }
];

// 2. Global State Variables
let currentLessonIndex = 0;
let activeTabs = ["lesson_1_prompt.md"];
let activeTab = "lesson_1_prompt.md";
let overallProgress = 0;

// Inputs store for lesson submissions
let userSubmissions = {
    lesson_1: "",
    lesson_2: "",
    lesson_3: "",
    lesson_4: false,
    lesson_5: ""
};

// 3. Document Elements & Initialization
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderSidebarLessons();
    renderTabs();
    loadLesson(currentLessonIndex);
    updateProgressRing();
    
    // Global Action Buttons
    document.getElementById("btn-run-code").addEventListener("click", handleVerifyTask);
    document.getElementById("btn-reset-sandbox").addEventListener("click", handleResetInput);
    document.getElementById("clear-terminal").addEventListener("click", () => {
        const term = document.getElementById("terminal-output");
        term.innerHTML = '<div class="terminal-line system-msg">המסוף נוקה. מערכת אימות המשימות מוכנה.</div>';
    });
    
    // Activity bar settings click
    document.getElementById("btn-settings").addEventListener("click", () => {
        alert("הגדרות סביבת עבודה: עיצוב VS Code מוגדר כברירת מחדל.");
    });
    
    // Sidebar progress click
    document.getElementById("btn-progress-sidebar").addEventListener("click", () => {
        alert(`התקדמות נוכחית בקורס: ${overallProgress}%. עליך להשלים את משימת ה-Action Item של כל שיעור כדי לפתוח את הבא.`);
    });
}

// 4. Render Sidebar and Tabs with Locking Mechanics
function renderSidebarLessons() {
    const list = document.getElementById("lessons-list");
    list.innerHTML = "";
    
    lessonsData.forEach((lesson, index) => {
        const li = document.createElement("li");
        
        let statusText = "🔒 נעול";
        li.className = "file-item";
        
        if (!lesson.unlocked) {
            li.classList.add("locked");
        } else {
            if (index === currentLessonIndex) {
                li.classList.add("active");
                li.classList.add("active-working");
                statusText = "⏳ בתהליך";
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
    generateLineNumbers(35);
    
    // Render the Action Item block
    renderActionBlock(lesson);
    
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
    
    if (lesson.actionType === "textarea" || lesson.actionType === "code") {
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
    const inputElement = document.getElementById("action-task-input");
    if (inputElement) {
        const eventType = lesson.actionType === "checkbox" ? "change" : "input";
        inputElement.addEventListener(eventType, () => {
            const val = lesson.actionType === "checkbox" ? inputElement.checked : inputElement.value;
            userSubmissions[lesson.id] = val;
        });
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
            writeTerminalLine("[Success] נמצאה תגובת AI תקינה הכוללת פלט מתודי. המושג Role/Task אומת בהצלחה.", "success-msg");
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
            writeTerminalLine("🏆 מזל טוב! השלמתם את הקורס 'AI ליוצרים: מפרומפט למוצר' באופן מלא!", "success-msg");
            alert("🏆 כל הכבוד! השלמתם את כל 5 השיעורים והמשימות המעשיות בקורס בהצלחה! כעת למדתם כיצד לקחת רעיון מפרומפט תפקיד, לכתוב אותו ב-Canvas, לפרוס ב-Vercel, לבצע אוטומציית Antigravity ולבנות סוכנים חכמים!");
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
    } else {
        userSubmissions[lesson.id] = "";
    }
    
    renderActionBlock(lesson);
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
