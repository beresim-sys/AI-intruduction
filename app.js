// AI for Builders: From Prompt to Production (בעברית) - Core Application Logic

// 1. Data Store: Lesson Content and Initial States
const lessonsData = [
    {
        id: "lesson_1",
        fileName: "lesson_1_prompt.md",
        tabLabel: "lesson_1_prompt.md",
        title: "שיעור 1: אמנות הפרומפט (יסודות ולוגיקה)",
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

<h2 class="lesson-h2">💻 משימת ארגז החול:</h2>
<p class="lesson-p">בצד שמאל של המסך, הרכיבו פרומפט מלא באמצעות בחירת <strong>תפקיד, משימה, הקשר ופורמט</strong> עבור שוק ההון או גזעי כלבים. לאחר מכן, לחצו על <strong>Run Code</strong> וצפו בפלט ה-AI המדמה את התהליך.</p>
        `,
        codeTemplate: `# Lesson 1: Prompt Construction Test
def run_prompt_simulation(role, task, context, format):
    print(f"Sending prompt to Gemini API...")
    # System Instruction: {role}
    # User Goal: {task}
    # Background: {context}
    # Expected Output: {format}
    
    if not (role and task and context and format):
        raise ValueError("Error: Missing PROMPT components!")
    return generate_mock_llm_response()`,
        sandboxType: "prompt_builder",
        completed: false
    },
    {
        id: "lesson_2",
        fileName: "lesson_2_canvas.js",
        tabLabel: "lesson_2_canvas.js",
        title: "שיעור 2: תכנות יצירתי עם Gemini Canvas",
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

<h2 class="lesson-h2">💻 משימת ארגז החול:</h2>
<p class="lesson-p">בצד שמאל מופיע קוד ראשוני של <strong>אפליקציית התראות מחיר מניה</strong>. 
בחרו מתוך רשימת ההנחיות או הקלידו הנחיה בעצמכם (למשל: "הוסף התראה בצבע אדום" או "הוסף צליל התראה"), ולחצו על <strong>Run Code</strong>. ה-Canvas המדומה יבצע מיזוג קוד ויציג לכם את התוספת ישירות בתוך הקוד עם הדמיית Live Preview של האפליקציה!</p>
        `,
        codeTemplate: `// אפליקציית התראות שוק ההון ראשונית
let stockPrice = 142.50;
let targetPrice = 150.00;

function checkPrice(currentPrice) {
    console.log("בודק מחיר מניה: $" + currentPrice);
    if (currentPrice >= targetPrice) {
        triggerAlert();
    }
}

function triggerAlert() {
    // Canvas יעדכן את הפונקציה הזו לפי ההנחיה שלכם
    document.getElementById("alert-box").innerText = "התראה! מחיר יעד הושג!";
}`,
        sandboxType: "canvas_simulator",
        completed: false
    },
    {
        id: "lesson_3",
        fileName: "lesson_3_deploy.yaml",
        tabLabel: "lesson_3_deploy.yaml",
        title: "שיעור 3: צינור הפריסה (GitHub, Vercel ודומיינים)",
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

<h2 class="lesson-h2">💻 משימת ארגז החול:</h2>
<p class="lesson-p">בצד שמאל מופיע לוח <strong>מפת הפריסה</strong> שלכם עבור אתר <em>"טיפים לאילוף כלבים"</em>. גררו את קובצי הקוד מחלון Gemini אל תיקיית <strong>GitHub Repo</strong>, ולאחר מכן לחצו על <strong>Run Code</strong> כדי לחבר את הריפו ל-<strong>Vercel</strong>. עקבו אחר לוג הבנייה במסוף עד לקבלת הקישור החי!</p>
        `,
        codeTemplate: `# YAML configuration for pipeline deployment
pipeline:
  source: "Gemini Canvas Code Files"
  repository: "GitHub (github.com/user/dog-training-tips)"
  provider: "Vercel Cloud Hosting"
  trigger: "on-git-push"
  auto_deploy: true`,
        sandboxType: "deploy_map",
        completed: false
    },
    {
        id: "lesson_4",
        fileName: "lesson_4_antigravity.json",
        tabLabel: "lesson_4_antigravity.json",
        title: "שיעור 4: אוטומציה עם Antigravity",
        content: `
<h1 class="lesson-h1">שיעור 4: אוטומציה עם Antigravity</h1>
<p class="lesson-p">בשיעור 3 ראינו את הצינור הידני: כתיבת קוד ב-AI, העתקה, דחיפה ל-GitHub, המתנה לבנייה ב-Vercel. זה עובד, אבל זה לוקח זמן. מה אם יכולנו לבצע שינויים ישירות דרך הוראות ה-AI שלנו והאתר ישתנה <strong>בזמן אמת</strong>?</p>

<h2 class="lesson-h2">הכירו את Antigravity Auto-Sync</h2>
<p class="lesson-p">מערכת <strong>Antigravity</strong> מחברת את חלון העבודה של ה-AI ישירות לסביבת הפריסה שלכם. במקום לבצע העתק-הדבק ידני של קוד, השינויים שלכם מסונכרנים אוטומטית לענן.</p>

<div class="analogy-box">
    <strong>📈 אנלוגיית שוק ההון:</strong> ההבדל בין השיטה הידנית ל-Antigravity הוא כמו ההבדל בין <strong>התקשרות טלפונית לברוקר</strong> כדי שיקנה מניה, לבין <strong>מערכת מסחר אלקטרונית מהירה</strong> שמבצעת פקודות בשבריר שנייה על סמך נתונים חיים.
</div>

<h2 class="lesson-h2">💻 משימת ארגז החול:</h2>
<p class="lesson-p">לפניכם הדמיה של פרויקט <strong>מעקב צפייה בסדרות טלוויזיה (TV Binge Tracker)</strong>. 
הכניסו הנחיה לעדכון האפליקציה (למשל: "הצג סיכום שעות צפייה" או "הוסף דירוג כוכבים לסדרות") ולחצו על <strong>Run Code</strong>. צפו כיצד Antigravity מבצע סנכרון מהיר (Hot-Reload) לשרת ומעדכן את האתר החי מול העיניים שלכם ללא שום פעולה ידנית נוספת!</p>
        `,
        codeTemplate: `{
  "project_name": "tv-binge-watcher",
  "engine": "Antigravity-v2",
  "deployment": {
    "platform": "vercel",
    "syncMode": "auto-sync",
    "hotReload": true
  },
  "modules": [
    "tracker-core.js",
    "ui-renderer.css"
  ]
}`,
        sandboxType: "antigravity_sync",
        completed: false
    },
    {
        id: "lesson_5",
        fileName: "lesson_5_agents.py",
        tabLabel: "lesson_5_agents.py",
        title: "שיעור 5: בינה ואוטומציה (סוכנים וכישורים)",
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

<h2 class="lesson-h2">💻 משימת ארגז החול:</h2>
<p class="lesson-p">בצד שמאל מופיע לוח הגדרות של <strong>סוכן עוזר מסחר (Trading Assistant Agent)</strong>.
כדי שהוא יצליח לעקוב אחר חדשות השוק ולהחליט על רכישות, עליכם להצמיד לו את ה-Skills המתאימים. 
סמנו את תיבות הבחירה של <strong>הכישורים הנכונים</strong> (רמז: חיפוש רשת ומחירי מניות), הזינו נוסחת תנאי לוגי פשוטה (IF/THEN), ולחצו על <strong>Run Code</strong> כדי להפעיל את הסוכן ולבחון את לוג הריצה שלו במסוף!</p>
        `,
        codeTemplate: `# Antigravity Agent Configuration
class TradingAgent(AntigravityAgent):
    def __init__(self):
        super().__init__(name="Trading Assistant")
        # Skills will be dynamically injected here
        self.skills = []
        
    def evaluate_rules(self, data):
        # Evaluation loop checks inputs using web search and stock fetcher
        pass`,
        sandboxType: "agent_builder",
        completed: false
    }
];

// 2. Global State Variables
let currentLessonIndex = 0;
let activeTabs = ["lesson_1_prompt.md"];
let activeTab = "lesson_1_prompt.md";
let overallProgress = 0;

// User Interest selections in Lesson 1
let l1Interest = "stock"; // 'stock' or 'dog'
let l1Role = "";
let l1Task = "";
let l1Context = "";
let l1Format = "";

// Lesson 2 Simulation State
let l2SelectedPrompt = "";
let l2CustomPromptText = "";
let l2CodeUpdated = false;
let l2PreviewMsg = "ממתין להרצת עדכון...";

// Lesson 3 Simulation State
let l3DraggedFiles = [];
let l3PipelineStep = "drag_files"; // drag_files, ready_to_connect, deployed
let l3LiveUrl = "";

// Lesson 4 Simulation State
let l4PromptText = "";
let l4SyncInProgress = false;
let l4SyncCompleted = false;

// Lesson 5 Simulation State
let l5SelectedSkills = [];
let l5ThresholdPrice = "150";
let l5SentimentRule = "Bullish";
let l5AgentRan = false;

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
    document.getElementById("btn-run-code").addEventListener("click", handleRunCode);
    document.getElementById("btn-reset-sandbox").addEventListener("click", handleResetSandbox);
    document.getElementById("clear-terminal").addEventListener("click", () => {
        const term = document.getElementById("terminal-output");
        term.innerHTML = '<div class="terminal-line system-msg">המסוף נוקה. מוכן להרצת פרויקטים...</div>';
    });
    
    // Activity bar settings click
    document.getElementById("btn-settings").addEventListener("click", () => {
        alert("הגדרות סביבת עבודה: עיצוב VS Code מוגדר כברירת מחדל.");
    });
    
    // Sidebar progress click
    document.getElementById("btn-progress-sidebar").addEventListener("click", () => {
        alert(`התקדמות נוכחית בקורס: ${overallProgress}%. השלם את משימות ארגז החול בכל שיעור כדי להתקדם!`);
    });
}

// 4. Render Sidebar and Tabs
function renderSidebarLessons() {
    const list = document.getElementById("lessons-list");
    list.innerHTML = "";
    
    lessonsData.forEach((lesson, index) => {
        const li = document.createElement("li");
        li.className = `file-item ${index === currentLessonIndex ? "active" : ""} ${lesson.completed ? "completed" : ""}`;
        
        let statusText = "טרם התחיל";
        if (lesson.completed) {
            statusText = "✓ הושלם";
        } else if (index === currentLessonIndex) {
            statusText = "⏳ בתהליך";
            li.classList.add("active-working");
        }
        
        // Inline SVG Icons for file types
        let iconSvg = `<svg class="icon file-icon" viewBox="0 0 16 16" width="16" height="16" style="color: #ce9178;"><path fill="currentColor" d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0.5h3L11 2v3z"></path></svg>`; // Default code/text file
        if (lesson.fileName.endsWith(".yaml")) {
            iconSvg = `<svg class="icon file-icon" viewBox="0 0 16 16" width="16" height="16" style="color: #cca700;"><path fill="currentColor" d="M1 3h14v10H1V3zm2 2v6h10V5H3z"></path></svg>`; // Config yaml
        } else if (lesson.fileName.endsWith(".json")) {
            iconSvg = `<svg class="icon file-icon" viewBox="0 0 16 16" width="16" height="16" style="color: #4ec9b0;"><path fill="currentColor" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm1 2v10h6V3H5z"></path></svg>`; // JSON
        } else if (lesson.fileName.endsWith(".py")) {
            iconSvg = `<svg class="icon file-icon" viewBox="0 0 16 16" width="16" height="16" style="color: #569cd6;"><path fill="currentColor" d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 6.5-6.5 6.51 6.51 0 0 1-6.5 6.5zM9 4H7v5h5V7H9z"></path></svg>`; // Python
        }
        
        li.innerHTML = `
            ${iconSvg}
            <span style="margin-right: 4px;">${lesson.fileName}</span>
            <span class="checkmark-status">${statusText}</span>
        `;
        
        li.addEventListener("click", () => {
            selectLesson(index);
        });
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
        tab.addEventListener("click", () => {
            selectLesson(lessonIndex);
        });
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
    
    // Load Line Numbers & Code Editor Template representation
    generateLineNumbers(30); // Generate basic editor lines
    
    // Setup the sandbox viewport based on lesson
    renderSandbox(lesson.sandboxType);
    
    // Clear old logs or notify switch
    writeTerminalLine(`נפתח קובץ ${lesson.fileName} בהצלחה. סביבת הפיתוח מוכנה.`, "system-msg");
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

// 7. Inject Custom Sandbox UI
function renderSandbox(type) {
    const container = document.getElementById("sandbox-viewport");
    container.innerHTML = "";
    
    const previewTab = document.getElementById("tab-preview-mode");
    previewTab.style.display = "none";
    
    if (type === "prompt_builder") {
        container.innerHTML = `
            <div class="sandbox-card fade-in">
                <h4>🎯 הגדרות פרויקט ונושא עניין</h4>
                <div class="form-group">
                    <label>נושא התרגול:</label>
                    <select class="form-control" id="l1-interest-select" onchange="switchL1Interest(this.value)">
                        <option value="stock" ${l1Interest === "stock" ? "selected" : ""}>📈 שוק ההון (מניית טסלה - TSLA)</option>
                        <option value="dog" ${l1Interest === "dog" ? "selected" : ""}>🐶 עולם הכלבים (גזעי כלבים ומאפייניהם)</option>
                    </select>
                </div>
            </div>
            
            <div class="sandbox-card fade-in">
                <h4>✍️ בונה הפרומפט (PROMPT Framework)</h4>
                
                <div class="form-group">
                    <label>1. Role (תפקיד המודל):</label>
                    <select class="form-control" id="l1-role">
                        <option value="">-- בחר תפקיד --</option>
                        ${l1Interest === "stock" ? `
                            <option value="אנליסט שוק הון בכיר המתמחה במגזר הרכב החשמלי">אנליסט שוק הון בכיר (טסלה)</option>
                            <option value="סוחר יום אגרסיבי שמחפש רווח מהיר">סוחר יום אגרסיבי</option>
                        ` : `
                            <option value="מומחה לכלבנות ומאלף כלבים בעל 20 שנות ניסיון">מאלף כלבים מומחה</option>
                            <option value="וטרינר מוסמך ושופט בתערוכות גזע">וטרינר שופט גזעים</option>
                        `}
                    </select>
                </div>

                <div class="form-group">
                    <label>2. Task (משימה לביצוע):</label>
                    <select class="form-control" id="l1-task">
                        <option value="">-- בחר משימה --</option>
                        ${l1Interest === "stock" ? `
                            <option value="ניתוח מגמת מניה וחישוב פוטנציאל סיכון/סיכוי">ניתוח מגמת מניה וסיכונים</option>
                            <option value="כתיבת המלצת קנייה/מכירה מיידית">המלצת קנייה/מכירה מיידית</option>
                        ` : `
                            <option value="סיווג גזעי כלבים לקטגוריות אנרגיה והתאמה למשפחה">סיווג גזעים לפי אנרגיה ומשפחה</option>
                            <option value="יצירת תוכנית אימון ראשונית לגזע נבחר">תוכנית אימון לגזע נבחר</option>
                        `}
                    </select>
                </div>

                <div class="form-group">
                    <label>3. Context (הקשר ונתוני רקע):</label>
                    <select class="form-control" id="l1-context">
                        <option value="">-- בחר הקשר --</option>
                        ${l1Interest === "stock" ? `
                            <option value="מניית TSLA חצתה את ממוצע נע 50 כלפי מעלה בנפח מסחר גבוה">TSLA חצתה ממוצע נע 50 מעלה</option>
                            <option value="דו'ח רווח רבעוני גרוע של החברה פורסם אתמול בערב">דוח רבעוני גרוע פורסם</option>
                        ` : `
                            <option value="הגזעים הנבדקים: גולדן רטריבר, פומרניאן, בוקסר, ורוטווילר">גזעים: גולדן, פומרניאן, בוקסר, רוטווילר</option>
                            <option value="הכלב מיועד למשפחה עם ילדים קטנים שגרה בדירה קטנה בעיר">דירה קטנה וילדים קטנים</option>
                        `}
                    </select>
                </div>

                <div class="form-group">
                    <label>4. Format (פורמט פלט רצוי):</label>
                    <select class="form-control" id="l1-format">
                        <option value="">-- בחר פורמט --</option>
                        <option value="טבלת Markdown מפורטת עם שלוש עמודות: מדד, ערך, המלצה">טבלת Markdown מפורטת</option>
                        <option value="רשימה ממוספרת של 3 נקודות קצרות וברורות">רשימת נקודות קצרה (3 נק')</option>
                    </select>
                </div>
            </div>

            <div class="sandbox-card fade-in">
                <h4>🔍 הפרומפט הנוצר בזמן אמת:</h4>
                <div class="prompt-template-builder" id="l1-live-prompt">
                    <span class="text-muted">הרכיבו את חלקי הפרומפט למעלה כדי לראות אותו נבנה כאן...</span>
                </div>
            </div>
        `;
        
        // Setup change listeners to render live preview prompt
        const updateLivePrompt = () => {
            const r = document.getElementById("l1-role").value;
            const t = document.getElementById("l1-task").value;
            const c = document.getElementById("l1-context").value;
            const f = document.getElementById("l1-format").value;
            
            l1Role = r; l1Task = t; l1Context = c; l1Format = f;
            
            const liveDiv = document.getElementById("l1-live-prompt");
            if (!r && !t && !c && !f) {
                liveDiv.innerHTML = '<span class="text-muted">הרכיבו את חלקי הפרומפט למעלה כדי לראות אותו נבנה כאן...</span>';
            } else {
                liveDiv.innerHTML = `
                    ${r ? `<span class="prompt-token token-role">תפקיד: ${r}</span>` : ""}
                    ${t ? `<span class="prompt-token token-task">משימה: ${t}</span>` : ""}
                    ${c ? `<span class="prompt-token token-context">הקשר: ${c}</span>` : ""}
                    ${f ? `<span class="prompt-token token-format">פורמט: ${f}</span>` : ""}
                `;
            }
        };
        
        document.getElementById("l1-role").addEventListener("change", updateLivePrompt);
        document.getElementById("l1-task").addEventListener("change", updateLivePrompt);
        document.getElementById("l1-context").addEventListener("change", updateLivePrompt);
        document.getElementById("l1-format").addEventListener("change", updateLivePrompt);
        
    } else if (type === "canvas_simulator") {
        container.innerHTML = `
            <div class="sandbox-card fade-in">
                <h4>💻 עורך הקוד של Gemini Canvas</h4>
                <p style="font-size:12px; color: var(--text-muted);">כאן יוצג קוד הפרודקשן של אפליקציית התראות המניות שלכם:</p>
                <div class="code-editor-simulator" id="l2-canvas-code-view">
                    ${lessonsData[1].codeTemplate.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
                </div>
            </div>

            <div class="sandbox-card fade-in">
                <h4>💬 הנחיות לעדכון (Prompts to Canvas)</h4>
                <div class="form-group">
                    <label>בחרו בקשה לעדכון קוד:</label>
                    <select class="form-control" id="l2-preset-prompts" onchange="handleL2PromptSelect(this.value)">
                        <option value="">-- בחר בקשה מהירה --</option>
                        <option value="style-alert">הוסף צבע רקע אדום להתרעה כשהיא מופעלת</option>
                        <option value="email-function">הוסף פונקציה מדומה לשליחת אימייל כשיש התראה</option>
                        <option value="custom">הקלד הנחיה מותאמת אישית...</option>
                    </select>
                </div>
                <div class="form-group" id="l2-custom-group" style="display:none;">
                    <label>הקלידו את השינוי המבוקש בעברית:</label>
                    <input type="text" class="form-control" id="l2-custom-input" placeholder="למשל: שנה את הודעת ההתראה לטקסט מותאם אישית...">
                </div>
            </div>

            <div class="sandbox-card fade-in">
                <h4>📱 תצוגה מקדימה חיה (Live Preview)</h4>
                <div class="live-preview-window" id="l2-live-preview">
                    <div class="preview-title">Stock price Alert Widget</div>
                    <div style="display:flex; justify-content:space-between; margin-bottom: 8px;">
                        <span>מניה: <strong>TSLA</strong></span>
                        <span>מחיר נוכחי: <strong id="l2-live-price">$142.50</strong></span>
                    </div>
                    <div id="l2-alert-container" style="padding: 10px; border-radius: 4px; text-align: center; border: 1px solid #ddd; background-color: #f5f5f5;">
                        אין התראות פעילות
                    </div>
                    <button class="btn btn-secondary" style="width: 100%; margin-top: 10px; font-size:11px;" onclick="simulateL2AlertCheck()">בדוק והפעל התראה (ערוך קוד קודם!)</button>
                </div>
            </div>
        `;
    } else if (type === "deploy_map") {
        container.innerHTML = `
            <div class="sandbox-card fade-in">
                <h4>📂 קובצי קוד מקור (Gemini Canvas Output)</h4>
                <div class="draggable-items" id="l3-source-files">
                    <div class="drag-block" draggable="true" id="l3-file-html">index.html (HTML)</div>
                    <div class="drag-block" draggable="true" id="l3-file-css">styles.css (CSS)</div>
                    <div class="drag-block" draggable="true" id="l3-file-js">script.js (Logic)</div>
                </div>
                <p style="font-size:11px; color: var(--text-muted); text-align: center;">גררו את שלושת הקבצים לתיבת ה-GitHub Repo כדי להכין אותם לפריסה!</p>
            </div>

            <div class="pipeline-container fade-in">
                <div class="pipeline-nodes">
                    <!-- GitHub Node -->
                    <div class="pipeline-node" id="node-github">
                        <div class="node-title">📁 GitHub Repository</div>
                        <div style="font-size: 10px; color: var(--text-muted); margin-bottom: 5px;">כאן נשמרים הקבצים:</div>
                        <div class="github-files-container" style="display:flex; flex-direction:column; gap:4px; font-size:11px; width:100%; align-items:center;" id="l3-github-files">
                            <span class="text-muted" style="font-style:italic;">התיקייה ריקה</span>
                        </div>
                    </div>
                    
                    <!-- Connection Line Visual -->
                    <div style="display:flex; align-items:center; justify-content:center; color: var(--text-muted);">
                        <svg viewBox="0 0 16 16" width="24" height="24"><path fill="currentColor" d="M11.5 8l-5-5v10l5-5z"></path></svg>
                    </div>

                    <!-- Vercel Node -->
                    <div class="pipeline-node" id="node-vercel">
                        <div class="node-title">🚀 Vercel Cloud Server</div>
                        <div style="font-size: 10px; color: var(--text-muted); margin-bottom: 5px;">שרת האירוח הציבורי:</div>
                        <div id="vercel-status-display" style="font-size:11px; font-weight:bold; color: var(--text-muted);">
                            ממתין לקוד...
                        </div>
                        <div id="l3-link-container" style="margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `;
        
        setupL3DragAndDrop();
    } else if (type === "antigravity_sync") {
        container.innerHTML = `
            <div class="sandbox-card fade-in">
                <h4>🔧 קובץ הגדרות: antigravity.config.json</h4>
                <div class="lesson-code-block" style="margin: 0; padding: 8px;">
<span class="keyword">{</span>
  <span class="var">"project"</span>: <span class="string">"tv-binge-tracker"</span>,
  <span class="var">"syncMode"</span>: <span class="string">"antigravity-live-connect"</span>,
  <span class="var">"autoDeploy"</span>: <span class="num">true</span>,
  <span class="var">"features"</span>: {
     <span class="var">"trackerEnabled"</span>: <span class="num">true</span>,
     <span class="var">"hoursCounter"</span>: <span class="num" id="l4-hours-counter-cfg">false</span>
  }
<span class="keyword">}</span>
                </div>
            </div>

            <div class="sandbox-card fade-in">
                <h4>⚡ פאנל הנחיית שינוי (Auto-Sync)</h4>
                <div class="form-group">
                    <label>מה ברצונך לעדכן כעת באפליקציית ה-TV Tracker?</label>
                    <select class="form-control" id="l4-sync-action-select" onchange="handleL4Select(this.value)">
                        <option value="">-- בחר שינוי --</option>
                        <option value="hours">הוסף מודול שעות וחשב זמן צפייה מצטבר</option>
                        <option value="ratings">הוסף מנגנון דירוג כוכבים (1-5) לסדרות</option>
                    </select>
                </div>
            </div>

            <div class="sandbox-card fade-in">
                <h4>📱 תצוגה מקדימה של האפליקציה החיה</h4>
                <div class="sync-live-preview">
                    <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 4px; margin-bottom: 8px; font-weight: bold; color: var(--text-header); font-size:13px;">
                        📺 TV Binge-Watching Tracker
                    </div>
                    <ul style="list-style: none; font-size: 12px; display: flex; flex-direction: column; gap: 6px;" id="l4-tv-list">
                        <li style="display:flex; justify-content:space-between; background:#252526; padding:4px 8px; border-radius:3px;">
                            <span>Breaking Bad</span>
                            <span id="l4-show-1-details" style="color:var(--text-muted);">עונה 5 (הושלם)</span>
                        </li>
                        <li style="display:flex; justify-content:space-between; background:#252526; padding:4px 8px; border-radius:3px;">
                            <span>Succession</span>
                            <span id="l4-show-2-details" style="color:var(--text-muted);">עונה 4 (הושלם)</span>
                        </li>
                    </ul>
                    <div id="l4-preview-added-module" style="margin-top: 10px; border-top: 1px dashed var(--success-color); padding-top: 8px; display:none;">
                        <!-- Injected live module -->
                    </div>
                </div>
            </div>
        `;
    } else if (type === "agent_builder") {
        container.innerHTML = `
            <div class="sandbox-card fade-in">
                <h4>🧠 סוכן עוזר מסחר (Trading Assistant Agent)</h4>
                <p style="font-size:12px; color:var(--text-muted);">על מנת שהסוכן יפעל, עליו להשתמש בכישורים הנכונים. בחר את הסט הדרוש:</p>
                
                <div class="form-group">
                    <label>בחר כישורים (Skills) להרכבה:</label>
                    <div class="skills-deck" id="l5-skills-container">
                        <div class="skill-chip" onclick="toggleL5Skill('web_search', this)">🔍 חיפוש רשת (Web Search)</div>
                        <div class="skill-chip" onclick="toggleL5Skill('excel_math', this)">📊 מחשבון אקסל (Excel Math)</div>
                        <div class="skill-chip" onclick="toggleL5Skill('stock_fetcher', this)">📈 מחיר מניה חי (Stock Ticker)</div>
                        <div class="skill-chip" onclick="toggleL5Skill('dog_breeds', this)">🐶 מזהה גזעי כלבים (Canine ID)</div>
                    </div>
                </div>
            </div>

            <div class="sandbox-card fade-in agent-logic-card">
                <h4>⚙️ לוגיקת החלטות של הסוכן (Agent Logic)</h4>
                <div class="form-group">
                    <label>הגדר מחיר מניית TSLA מקסימלי לקנייה ($):</label>
                    <input type="number" class="form-control" id="l5-price-threshold" value="150" onchange="l5ThresholdPrice = this.value">
                </div>
                <div class="form-group">
                    <label>סנטימנט נדרש מחדשות הרשת:</label>
                    <select class="form-control" id="l5-sentiment-select" onchange="l5SentimentRule = this.value">
                        <option value="Bullish">Bullish (חיובי ואופטימי)</option>
                        <option value="Bearish">Bearish (שלילי ופסימי)</option>
                    </select>
                </div>
                <div class="lesson-code-block" style="margin: 0; padding: 8px; font-size:11px;">
                    <span class="keyword">IF</span> StockPrice &lt; <span class="num" id="l5-live-val-price">150</span> <span class="keyword">AND</span> Sentiment == <span class="string" id="l5-live-val-sentiment">"Bullish"</span> <span class="keyword">THEN</span> TriggerAction(<span class="string">"BUY"</span>)
                </div>
            </div>
        `;
        
        // Sync values to code block
        const priceInput = document.getElementById("l5-price-threshold");
        const sentSelect = document.getElementById("l5-sentiment-select");
        const priceLabel = document.getElementById("l5-live-val-price");
        const sentLabel = document.getElementById("l5-live-val-sentiment");
        
        priceInput.addEventListener("input", () => { priceLabel.innerText = priceInput.value; });
        sentSelect.addEventListener("change", () => { sentLabel.innerText = `"${sentSelect.value}"`; });
    }
}

// 8. Interactive Events Handlers
function switchL1Interest(val) {
    l1Interest = val;
    renderSandbox("prompt_builder");
    writeTerminalLine(`החלפת נושא עניין ל-${val === "stock" ? "שוק ההון" : "עולם הכלבים"}. אנא הגדר את חלקי הפרומפט מחדש.`, "info-msg");
}

function handleL2PromptSelect(val) {
    l2SelectedPrompt = val;
    const customGroup = document.getElementById("l2-custom-group");
    
    if (val === "custom") {
        customGroup.style.display = "block";
    } else {
        customGroup.style.display = "none";
    }
}

function simulateL2AlertCheck() {
    if (!l2CodeUpdated) {
        writeTerminalLine("[Error] הקוד עדיין לא שונה! עליך לבחור בקשה לעדכון וללחוץ על Run Code תחילה.", "error-msg");
        alert("נא לעדכן את הקוד בעזרת ה-Canvas תחילה (לבחור בקשה וללחוץ Run Code)");
        return;
    }
    
    writeTerminalLine("מריץ בדיקת התרעות שוק...", "cmd-prompt");
    writeTerminalLine("stockPrice = 154.20 (חצה את מחיר היעד 150)", "info-msg");
    
    const alertBox = document.getElementById("l2-alert-container");
    
    if (l2SelectedPrompt === "style-alert") {
        alertBox.innerText = "🚨 התראה! מחיר יעד הושג: $154.20!";
        alertBox.style.backgroundColor = "#ffcccc";
        alertBox.style.color = "#cc0000";
        alertBox.style.borderColor = "#cc0000";
        alertBox.style.fontWeight = "bold";
        writeTerminalLine("הפעלת התראה בוצעה בהצלחה! צבע הרקע שונה לאדום בהתאם לקוד המעודכן.", "success-msg");
    } else if (l2SelectedPrompt === "email-function") {
        alertBox.innerText = "✉️ התראה! מייל נשלח ומחיר יעד הושג!";
        alertBox.style.backgroundColor = "#e1f5fe";
        alertBox.style.color = "#0288d1";
        alertBox.style.borderColor = "#0288d1";
        writeTerminalLine("התראה הופעלה! פונקציית המייל המדומה sendAlertEmail() נקראה בהצלחה.", "success-msg");
    } else {
        // Custom prompt success
        alertBox.innerText = "✨ התראה מותאמת אישית הופעלה!";
        alertBox.style.backgroundColor = "#e8f5e9";
        alertBox.style.color = "#2e7d32";
        writeTerminalLine("בוצע עדכון וריצה של קוד מותאם אישית.", "success-msg");
    }
}

// Drag and drop for Lesson 3
function setupL3DragAndDrop() {
    setTimeout(() => {
        const draggables = document.querySelectorAll(".drag-block");
        const githubBox = document.getElementById("node-github");
        const listContainer = document.getElementById("l3-github-files");
        
        draggables.forEach(draggable => {
            draggable.addEventListener("dragstart", () => {
                draggable.classList.add("dragging");
            });
            draggable.addEventListener("dragend", () => {
                draggable.classList.remove("dragging");
            });
        });
        
        githubBox.addEventListener("dragover", e => {
            e.preventDefault();
            githubBox.classList.add("active-drop");
        });
        
        githubBox.addEventListener("dragleave", () => {
            githubBox.classList.remove("active-drop");
        });
        
        githubBox.addEventListener("drop", e => {
            e.preventDefault();
            githubBox.classList.remove("active-drop");
            const draggingFile = document.querySelector(".dragging");
            if (draggingFile) {
                const fileName = draggingFile.innerText;
                if (!l3DraggedFiles.includes(fileName)) {
                    l3DraggedFiles.push(fileName);
                    
                    if (l3DraggedFiles.length === 1) {
                        listContainer.innerHTML = "";
                    }
                    
                    const span = document.createElement("span");
                    span.style.color = "var(--success-color)";
                    span.innerText = `📄 ${fileName}`;
                    listContainer.appendChild(span);
                    
                    draggingFile.style.display = "none";
                    writeTerminalLine(`הקובץ ${fileName} הועתק בהצלחה ל-GitHub repository המקומי.`, "info-msg");
                    
                    if (l3DraggedFiles.length === 3) {
                        githubBox.classList.add("success-drop");
                        writeTerminalLine(`כל הקבצים נטענו לריפו. מוכן לפריסה! לחץ על Run Code.`, "success-msg");
                    }
                }
            }
        });
    }, 100);
}

function handleL4Select(val) {
    l4PromptText = val;
}

function toggleL5Skill(skillName, chip) {
    if (l5SelectedSkills.includes(skillName)) {
        l5SelectedSkills = l5SelectedSkills.filter(s => s !== skillName);
        chip.classList.remove("selected");
    } else {
        l5SelectedSkills.push(skillName);
        chip.classList.add("selected");
    }
}

// 9. Run Code Simulation Logic (Main Engine)
function handleRunCode() {
    const term = document.getElementById("terminal-output");
    const activeLesson = lessonsData[currentLessonIndex];
    
    // Create new command prompt entry
    const cmdLine = document.createElement("div");
    cmdLine.className = "terminal-line cmd-prompt";
    cmdLine.innerText = `antigravity run ${activeLesson.fileName}`;
    term.appendChild(cmdLine);
    
    if (activeLesson.id === "lesson_1") {
        runLesson1Simulation();
    } else if (activeLesson.id === "lesson_2") {
        runLesson2Simulation();
    } else if (activeLesson.id === "lesson_3") {
        runLesson3Simulation();
    } else if (activeLesson.id === "lesson_4") {
        runLesson4Simulation();
    } else if (activeLesson.id === "lesson_5") {
        runLesson5Simulation();
    }
    
    // Auto scroll terminal to bottom
    setTimeout(() => {
        term.scrollTop = term.scrollHeight;
    }, 50);
}

// --- LESSON RUNNERS ---

function runLesson1Simulation() {
    if (!l1Role || !l1Task || !l1Context || !l1Format) {
        writeTerminalLine("[Error] כשל בהרצה: פרומפט חלקי או לא מוגדר! מנוע ה-AI חסר משתנים.", "error-msg");
        writeTerminalLine("⚠️ הזיית מודל מדומיינת (הלגו קרס!): ה-AI לא קיבל הקשר ופורמט, ולכן יצר נתוני שקר גנריים על חלליות במקום שוק הון / כלבים.", "warning-msg");
        alert("אנא מלאו את כל 4 עמודי התווך של הפרומפט כדי שהלוגיקה תהיה מושלמת!");
        return;
    }
    
    writeTerminalLine("שולח בקשה למנוע Gemini API...", "info-msg");
    writeTerminalLine("מנתח פרמטרים: Role, Task, Context, Format", "info-msg");
    
    setTimeout(() => {
        writeTerminalLine("התקבלה תשובה תקינה מה-AI! הנתונים מפורמטים בהתאם לבקשתכם:", "success-msg");
        
        if (l1Interest === "stock") {
            writeTerminalLine("--------------------------------------------------", "system-msg");
            writeTerminalLine("סיווג: שוק ההון | ניתוח מניית TSLA", "info-msg");
            writeTerminalLine("[AI Output]: המניה חצתה את ממוצע נע 50 מעלה, מה שמסמן מומנטום שוורי (Bullish). מחיר יעד מומלץ: $165. סטופ-לוס מומלץ: $138.", "success-msg");
            writeTerminalLine("--------------------------------------------------", "system-msg");
        } else {
            writeTerminalLine("--------------------------------------------------", "system-msg");
            writeTerminalLine("סיווג: עולם הכלבים | סיווג גזעים", "info-msg");
            writeTerminalLine("[AI Output]: גולדן רטריבר (אנרגיה בינונית, מתאים למשפחה), פומרניאן (אנרגיה נמוכה, מתאים לדירה), בוקסר (אנרגיה גבוהה, דורש אימון).", "success-msg");
            writeTerminalLine("--------------------------------------------------", "system-msg");
        }
        
        lessonsData[0].completed = true;
        renderSidebarLessons();
        updateProgressRing();
        writeTerminalLine("שיעור 1 הושלם בהצלחה! התקדמות הקורס עודכנה.", "success-msg");
    }, 1200);
}

function runLesson2Simulation() {
    if (!l2SelectedPrompt) {
        writeTerminalLine("[Error] כשל בהרצה: עליך לבחור או להקליד הנחיה לעדכון הקוד ב-Canvas.", "error-msg");
        alert("נא לבחור הנחיה לשינוי הקוד.");
        return;
    }
    
    writeTerminalLine("Gemini Canvas מעבד את ההנחיה ומעדכן את script.js...", "info-msg");
    
    setTimeout(() => {
        l2CodeUpdated = true;
        const codeView = document.getElementById("l2-canvas-code-view");
        
        if (l2SelectedPrompt === "style-alert") {
            codeView.innerHTML = `// אפליקציית התראות שוק ההון ראשונית
let stockPrice = 142.50;
let targetPrice = 150.00;

function checkPrice(currentPrice) {
    console.log("בודק מחיר מניה: $" + currentPrice);
    if (currentPrice >= targetPrice) {
        triggerAlert();
    }
}

function triggerAlert() {
<span class="diff-added">    // קוד שנוסף על ידי Canvas:</span>
<span class="diff-added">    let box = document.getElementById("l2-alert-container");</span>
<span class="diff-added">    box.style.backgroundColor = "red";</span>
<span class="diff-added">    box.style.color = "white";</span>
    document.getElementById("alert-box").innerText = "התראה! מחיר יעד הושג!";
}`;
            writeTerminalLine("הקוד עודכן ב-Canvas בהצלחה! שורות עיצוב נוספו לפונקציית triggerAlert().", "success-msg");
        } else if (l2SelectedPrompt === "email-function") {
            codeView.innerHTML = `// אפליקציית התראות שוק ההון ראשונית
let stockPrice = 142.50;
let targetPrice = 150.00;

<span class="diff-added">function sendAlertEmail() {</span>
<span class="diff-added">    console.log("מייל מדומה נשלח בהצלחה לכתובת המשתמש!");</span>
<span class="diff-added">}</span>

function checkPrice(currentPrice) {
    console.log("בודק מחיר מניה: $" + currentPrice);
    if (currentPrice >= targetPrice) {
        triggerAlert();
<span class="diff-added">        sendAlertEmail();</span>
    }
}

function triggerAlert() {
    document.getElementById("alert-box").innerText = "התראה! מחיר יעד הושג!";
}`;
            writeTerminalLine("הקוד עודכן ב-Canvas בהצלחה! פונקציית sendAlertEmail נוספה ונקראת בזמן התראה.", "success-msg");
        } else {
            // Custom prompt code update simulation
            codeView.innerHTML = `// אפליקציית התראות שוק ההון ראשונית
<span class="diff-added">// שינוי קוד מותאם אישית בוצע בהצלחה בהתאם לבקשת המשתמש!</span>
let stockPrice = 142.50;
let targetPrice = 150.00;
// ... קוד מעודכן מופיע כאן ...`;
            writeTerminalLine("הקוד עודכן בצורה מותאמת אישית על ידי מנוע Canvas.", "success-msg");
        }
        
        lessonsData[1].completed = true;
        renderSidebarLessons();
        updateProgressRing();
        writeTerminalLine("שיעור 2 הושלם! כעת תוכלו ללחוץ על כפתור הבדיקה ב-Preview כדי לבחון את הקוד החי.", "success-msg");
    }, 1500);
}

function runLesson3Simulation() {
    if (l3DraggedFiles.length < 3) {
        writeTerminalLine("[Error] כשל בהרצה: ה-GitHub Repo ריק! עליך לגרור את שלושת הקבצים לתיקיית GitHub.", "error-msg");
        alert("אנא גררו את index.html, styles.css ו-script.js אל תיבת ה-GitHub.");
        return;
    }
    
    writeTerminalLine("יוצר Git Commit...", "cmd-prompt");
    writeTerminalLine("דוחף קוד לענף הראשי: git push origin main...", "cmd-prompt");
    writeTerminalLine("Vercel מזהה שינוי (Trigger) ומתחיל בבנייה...", "info-msg");
    writeTerminalLine("מתקין חבילות פיתוח (npm install)...", "info-msg");
    writeTerminalLine("מריץ קומפילציה ואופטימיזציית משאבים (npm run build)...", "info-msg");
    
    setTimeout(() => {
        writeTerminalLine("הבנייה עברה בהצלחה! פריסה הושלמה.", "success-msg");
        
        const statusDisp = document.getElementById("vercel-status-display");
        statusDisp.innerText = "🟢 Deployed (Live)";
        statusDisp.style.color = "var(--success-color)";
        
        const linkContainer = document.getElementById("l3-link-container");
        linkContainer.innerHTML = `
            <a href="#" class="btn btn-primary" style="font-size:11px; padding: 4px 8px;" onclick="openL3MockSite(); return false;">
                פתח אתר חי: dog-training.vercel.app
            </a>
        `;
        
        lessonsData[2].completed = true;
        renderSidebarLessons();
        updateProgressRing();
        writeTerminalLine("שיעור 3 הושלם בהצלחה! לחצו על הקישור לפתיחת האתר שפרסתם.", "success-msg");
    }, 2000);
}

function openL3MockSite() {
    alert(`🌐 פתחת את האתר שפרסת!
---------------------------------------------
כותרת האתר: טיפים לאילוף כלבים (Dog Training Tips)
תיאור: אתר המציע מדריכים מהירים לאילוף גורי כלבים, שנכתב ב-AI ונפרס באמצעות Vercel!
סטטוס שרת: פעיל ותקין 100%`);
}

function runLesson4Simulation() {
    if (!l4PromptText) {
        writeTerminalLine("[Error] כשל בהרצה: עליך לבחור הנחיית סנכרון ל-TV Tracker.", "error-msg");
        alert("נא לבחור פעולה לביצוע.");
        return;
    }
    
    writeTerminalLine("[Antigravity Auto-Sync] מזהה שינוי בקובצי הפיתוח המקומיים...", "info-msg");
    writeTerminalLine("[Antigravity] דוחס ומסנכרן שינויי קוד לענן בזמן אמת ללא צורך ב-Git commit ידני...", "info-msg");
    
    setTimeout(() => {
        const tvList = document.getElementById("l4-tv-list");
        const hoursCfg = document.getElementById("l4-hours-counter-cfg");
        const newModule = document.getElementById("l4-preview-added-module");
        
        if (l4PromptText === "hours") {
            hoursCfg.innerText = "true";
            newModule.style.display = "block";
            newModule.innerHTML = `
                <div style="background:rgba(78, 201, 176, 0.1); border: 1px solid var(--success-color); padding: 6px; border-radius:3px; font-size:11px;">
                    📊 <strong>מודול שעות מותקן:</strong> סה'כ שעות צפייה מצטברות: <strong>84 שעות</strong>
                </div>
            `;
            writeTerminalLine("[Antigravity] פרויקט tv-binge-tracker סונכרן ל-Vercel תוך 480ms. Hot-Reload פעיל!", "success-msg");
        } else if (l4PromptText === "ratings") {
            const listItems = tvList.querySelectorAll("li");
            listItems[0].innerHTML = `<span>Breaking Bad</span> <span style="color:var(--warning-color);">⭐⭐⭐⭐⭐ (5/5)</span>`;
            listItems[1].innerHTML = `<span>Succession</span> <span style="color:var(--warning-color);">⭐⭐⭐⭐⭐ (5/5)</span>`;
            writeTerminalLine("[Antigravity] פרויקט tv-binge-tracker סונכרן ל-Vercel תוך 510ms. הדירוגים מעודכנים באתר!", "success-msg");
        }
        
        lessonsData[3].completed = true;
        renderSidebarLessons();
        updateProgressRing();
        writeTerminalLine("שיעור 4 הושלם בהצלחה! ראיתם כמה מהר Antigravity מבטל את הצורך בפקודות Git/Vercel ידניות.", "success-msg");
    }, 1800);
}

function runLesson5Simulation() {
    writeTerminalLine("מאתחל סוכן AI: Trading Assistant Agent...", "info-msg");
    
    // Check if required skills are selected: web_search and stock_fetcher
    const hasSearch = l5SelectedSkills.includes("web_search");
    const hasTicker = l5SelectedSkills.includes("stock_fetcher");
    
    setTimeout(() => {
        writeTerminalLine(`כישורים מחוברים לסוכן: [${l5SelectedSkills.join(", ")}]`, "info-msg");
        
        if (!hasSearch || !hasTicker) {
            writeTerminalLine("[Error] כשל בהרצת סוכן: חסרים כישורים חיוניים!", "error-msg");
            writeTerminalLine("⚠️ הסוכן צריך את 'מחירי מניות חי' (Stock Ticker) בשביל לדעת את המחיר, ואת 'חישוב/חיפוש רשת' בשביל לנתח חדשות.", "warning-msg");
            
            if (l5SelectedSkills.includes("dog_breeds")) {
                writeTerminalLine("🤖 הזיית סוכן: הסוכן ניסה להשתמש בכישור 'מזהה גזעי כלבים' על מניית טסלה והחזיר: 'TSLA נראה כמו גזע מסוג פודל שחור'", "warning-msg");
            }
            alert("הסוכן צריך לפחות את כישורי 'חיפוש רשת' ו-'מחיר מניה חי' כדי לקבל החלטת מסחר פיננסית תקינה!");
            return;
        }
        
        writeTerminalLine("מפעיל לולאת לוגיקה: בדיקת תנאי קנייה...", "info-msg");
        writeTerminalLine(`קריאה לכישור stock_fetcher: מחיר מניית TSLA הנוכחי הוא $142.50`, "info-msg");
        writeTerminalLine(`קריאה לכישור web_search: מבצע שאילתת סנטימנט חדשותי...`, "info-msg");
        
        setTimeout(() => {
            writeTerminalLine(`תוצאת סנטימנט מרשת האינטרנט: ${l5SentimentRule}`, "info-msg");
            
            // Evaluate logic condition
            const priceVal = parseFloat(l5ThresholdPrice);
            const isPriceOk = 142.50 < priceVal;
            
            writeTerminalLine(`הערכת תנאי 1: האם מחיר נוכחי ($142.50) נמוך מסף הקנייה ($${priceVal})? -> ${isPriceOk ? "כן (TRUE)" : "לא (FALSE)"}`, "info-msg");
            writeTerminalLine(`הערכת תנאי 2: האם סנטימנט החדשות תואם לכלל "${l5SentimentRule}"? -> כן (TRUE)`, "info-msg");
            
            if (isPriceOk) {
                writeTerminalLine("🎉 תנאי הלוגיקה התקיימו! הסוכן הפעיל אירוע קנייה (BUY ORDER executed).", "success-msg");
                writeTerminalLine("הסוכן רכש 10 יחידות של מניית TSLA בשער $142.50 בהצלחה.", "success-msg");
            } else {
                writeTerminalLine("🛑 תנאי המחיר לא התקיים (המחיר גבוה מסף הקנייה שלך). הסוכן החליט לא לקנות (HOLD).", "warning-msg");
            }
            
            lessonsData[4].completed = true;
            renderSidebarLessons();
            updateProgressRing();
            writeTerminalLine("שיעור 5 הושלם בהצלחה! סיימתם את קורס AI ליוצרים!", "success-msg");
            
            // Course Complete celebration
            if (overallProgress === 100) {
                setTimeout(() => {
                    alert("🏆 כל הכבוד! השלמתם את כל 5 השיעורים בקורס 'AI ליוצרים: מפרומפט למוצר' בהצלחה! כעת יש לכם את היסודות להבנת פרומפטים, פיתוח מבוסס AI, פריסה מהירה וסוכני אוטומציה.");
                }, 500);
            }
        }, 1000);
        
    }, 1000);
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

function handleResetSandbox() {
    const activeLesson = lessonsData[currentLessonIndex];
    writeTerminalLine(`איפוס נתוני שלב עבור ${activeLesson.fileName}...`, "warning-msg");
    
    if (activeLesson.id === "lesson_1") {
        l1Role = ""; l1Task = ""; l1Context = ""; l1Format = "";
        renderSandbox("prompt_builder");
    } else if (activeLesson.id === "lesson_2") {
        l2SelectedPrompt = ""; l2CodeUpdated = false;
        renderSandbox("canvas_simulator");
    } else if (activeLesson.id === "lesson_3") {
        l3DraggedFiles = [];
        l3PipelineStep = "drag_files";
        renderSandbox("deploy_map");
    } else if (activeLesson.id === "lesson_4") {
        l4PromptText = "";
        renderSandbox("antigravity_sync");
    } else if (activeLesson.id === "lesson_5") {
        l5SelectedSkills = [];
        renderSandbox("agent_builder");
    }
}
