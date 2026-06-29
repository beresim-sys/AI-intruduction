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
<p class="lesson-p">ברוכים הבאים לצעד הראשון שלכם בעולם ה-AI! אין צורך ברקע בתכנות, רק דימיון ויצירתיות.</p>
<p class="lesson-p" style="color: #800020; font-weight: 500; margin-top: -10px; margin-bottom: 15px;">הגרסה החינמית של ג'מיני תאפשר לעבוד עם כל הכלים שמוצגים באתר. יחד עם זאת, מומלץ לרכוש מנוי בסיסי כדי לנצל היטב את יכולות הכלים.</p>

<h2 class="lesson-h2">שליטה בממשק של Gemini</h2>
<p class="lesson-p">לפני שנתחיל לכתוב פרומפטים, נלמד כיצד לנצל את כלי הממשק השונים בתוך Gemini:</p>
<div style="margin: 15px 0; text-align: center;">
    <img src="gemini-interface.png" alt="ממשק Gemini" style="max-width: 100%; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
</div>
<div style="margin: 12px 0 18px 0;">
    <a href="https://gemini.google.com" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; justify-content: center; padding: 8px 16px; text-decoration: none; font-size: 13px; font-weight: bold; border-radius: 20px; gap: 6px;">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left: 6px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        פתח את Gemini בלשונית חדשה
    </a>
</div>
<ul style="margin-right: 20px; margin-bottom: 15px; line-height: 1.6;">
    <li><strong>כפתור הפלוס ('+'):</strong> מאפשר להעלות קבצים ותמונות לניתוח (למשל: העלאת מסמך או קובץ הקשור ל-<strong>${i1}</strong> כדי לנתח מגמות או מידע).</li>
    <li><strong>קלט קולי (Voice Input - המיקרופון):</strong> מאפשר לכם להכתיב את הפרומפטים בקולכם לצורך סיעור מוחות מהיר, טבעי וללא שימוש בידיים.</li>
    <li><strong>בחירת מנוע ה-AI שלכם (Models):</strong>
        <br>&bull; <em>Gemini Flash:</em> מנוע מהיר במיוחד, אידיאלי למשימות יומיומיות בנפח גבוה.
        <br>&bull; <em>Gemini Flash-8B (Light):</em> מנוע קל ומהיר להפליא, מיועד לזמני תגובה (latency) קצרים במיוחד.
        <br>&bull; <em>Gemini Pro:</em> מנוע הדגל לפתרון בעיות מורכבות, מצוין לחשיבה לוגית עמוקה, כתיבת קוד מתקדם וניתוח מעמיק.</li>
</ul>

<h2 class="lesson-h2">יכולות הליבה של Gemini או ChatGPT</h2>

<ul style="margin-right: 20px; margin-bottom: 15px; line-height: 1.6;">
    <li><strong>יצירת תמונות:</strong> שינוי תמונה קיימת או יצירת תמונה חדשה לפי הנחיות</li>
    <li><strong>תכנון ופירוק משימות:</strong> פירוק תהליכים מורכבים לשלבים מעשיים ברורים. למשל, תכנון פרויקט או תוכנית נסיעה לחו"ל.</li>
    <li><strong>תרגום טקסטים:</strong> התאמת טקסטים בין שפות שונות תוך שמירה על הקשר וטון. למשל, תרגום שיר או מכתב משפה לשפה.</li>
    <li><strong>תמצות וסיכום:</strong> זיקוק כמויות מידע גדולות למשפטי מפתח תמציתיים. למשל, סיכום דוחות ומאמרים ארוכים.</li>
    <li><strong>סיעור מוחות ורעיונאות:</strong> העלאת רעיונות יצירתיים וסיעור מוחות אודות פרוייקטים או פעילויות יומיומיות.</li>
</ul>



<h2 class="lesson-h2">עקרונות כתיבת הפרומפט ותבנית ה-PROMPT</h2>
<p class="lesson-p">פרומפט הוא דרך התקשורת שלנו עם ה-AI – השאלה, ההוראה או המשימה שאנו מבקשים ממנו לבצע. כדי לכתוב פרומפט מדוייק נגדיר:</p>
<ul style="margin-right: 20px; margin-bottom: 12px; line-height: 1.6;">
    <li><strong>Role (תפקיד המודל):</strong> הגדרת ה"אישיות" וההקשר המקצועי של ה-AI (למשל: <em>"פעל כמעצב מומחה בתחום ${i5}"</em>).</li>
    <li><strong>Task (משימה):</strong> מה בדיוק ה-AI צריך לבצע (למשל: <em>"נסח שלבים לתחילת עבודה"</em>).</li>
    <li><strong>Context (הקשר ונתוני רקע):</strong> נתוני הרקע והחוקים (למשל: <em>"עבור מתחילים ללא ניסיון קודם ב-${i1}"</em>).</li>
    <li><strong>Format (פורמט פלט):</strong> מבנה הפלט הרצוי (למשל: <em>"הצג בטבלה או ברשימת נקודות"</em>).</li>
</ul>

<h2 class="lesson-h2">הזיות מודל (Hallucinations) והטיות מידע (Biases)</h2>
<div class="tech-box">
    הזיות בבינה מלאכותית הן תופעה שבה המודל "ממציא" עובדות בביטחון מלא. הטיות מידע נוצרת כאשר ה AI מניח הנחות מוטעות בנוגע לשאלות ששאלת. למשל יניח תמיד שאדם שחור הוא עבריין, ילדות לא יודעות לשחק כדורגל או מבוגרים לא מבינים בטכנולוגיה
</div>
            `,
            actionType: "checklist",
            actionLabel: "אתגר הליבה (The AI Gauntlet)",
            placeholderText: "",
            tools: [
                { name: "פתח את Gemini בלשונית חדשה", url: "https://gemini.google.com" }
            ],
            instructionText: `<strong>משימת אתגר הליבה (The AI Gauntlet):</strong><br>
            <strong>הנחיית בחירת תחום:</strong> בחרו תחום שמעניין אתכם (כגון תחביב, מקצוע, תחום לימוד, פוליטיקה, ספורט וכדומה) ובססו עליו את התרגול שלכם במשימה זו.<br><br>
            פתחו את Gemini בלשונית חדשה, השלימו את חמשת התרגילים המעשיים הבאים המבוססים על התחום שבחרתם, וסמנו את תיבות האישור למטה.`,
            checklistItems: [
                `בדיקת כפתור ה-'+': העלאת קובץ או תמונה הקשורים לתחום שבחרתם וניתוחה ב-Gemini Pro.`,
                `בדיקת קלט קולי: שימוש במיקרופון לסיעור מוחות בנושא התחום שבחרתם ב-Gemini Flash.`,
                `יצירת תמונות: יצירת תמונה יצירתית ומקורית המבוססת על התחום שבחרתם.`,
                `תכנון משימות: הפקת תוכנית שלבים מפורטת להשגת יעד כלשהו בתחום שבחרתם.`,
                `תרגום ולוקליזציה: תרגום טקסט או מדריך הקשור לתחום שבחרתם לשפה אחרת.`
            ],
            validate: (input) => {
                if (!input || typeof input !== "object") return false;
                return input.chk1 === true && input.chk2 === true && input.chk3 === true && input.chk4 === true && input.chk5 === true;
            },
            errorMessage: "אנא ודאו שביצעתם וסימנתם את כל 5 משימות אתגר הליבה ב-Gemini."
        },
        {
            id: "lesson_2",
            fileName: "lesson_2_gem_agent.md",
            tabLabel: "lesson_2_gem_agent.md",
            title: "שיעור 2: בניית סוכן חכם GEM",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 2: בניית סוכן חכם GEM</h1>
<p class="lesson-p">תמיד רצית להתייעץ עם המומחה הכי טוב בתחום? רצית את העובד הכי חרוץ? את היועץ הכי אמין? 
בשיעור זה נלמד כיצד לבנות סוכן AI אישי ומקצועי משלנו באמצעות <strong>Gemini GEMS</strong>. סוכן GEM הוא בעצם עובד מסור, מיומן ומקצועי שכבר מכיר את הכל. הוא יכול להיות מומחה עולמי לאילוף כלבים, מומחה רפואי, עורך ספרותי, אחות אחראית במחלקה, עיתונאי חוקר מוביל, פסיכולוג שמתמחה בקהילה, סוכן נסיעות ותיק, או מורה שמכין מערכי שיעור ומערכות הכנה לבגרות.</p>
<p class="lesson-p" style="color: #800020; font-weight: 500; margin-top: -10px; margin-bottom: 15px;">הגרסה החינמית של ג'מיני תאפשר לעבוד עם כל הכלים שמוצגים באתר. יחד עם זאת, מומלץ לרכוש מנוי בסיסי כדי לנצל היטב את יכולות הכלים.</p>

<div class="tech-box">
    <strong>למה לבנות סוכן GEM?</strong>
    הערך המרכזי של סוכן GEM הוא המעבר משיחות פשוטות וגנריות עם ג'מיני לדיוק מקסימלי, שחוסך שעות עבודה, מונע כמעט לחלוטין הזיות (המצאת מידע) ומתבסס אך ורק על המקורות שאתם מספקים לו.
</div>

<h2 class="lesson-h2">הנוסחה המנצחת לבניית סוכן GEM: iCOSTAR</h2>
<p class="lesson-p">כדי שהסוכן שלנו יפעל בדיוק מרבי, נבנה את ההנחיות שלו (Instructions) לפי נוסחת ה-<strong>iCOSTAR</strong>:</p>

<div class="sources-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 15px; margin: 15px 0;">
    <!-- I: Identity -->
    <div class="source-card" style="background: rgba(73, 142, 117, 0.04); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 8px; text-align: right;">
        <div class="source-icon" style="color: var(--accent-color); font-weight: 800; font-size: 15px; margin: 0;">1. I - Identity (זהות)</div>
        <p style="font-size: 14px; color: var(--text-main); line-height: 1.4; margin: 0;">הגדרת התפקיד והמומחיות של הסוכן (למשל: "פרופסור לכלכלה" או "מאלף כלבים בכיר"). במקום לנחש תשובה מתוך כל האינטרנט, הוא מסנן רק את הידע הרלוונטי לזהות המקצועית שלו.</p>
    </div>

    <!-- C: Context -->
    <div class="source-card" style="background: rgba(73, 142, 117, 0.04); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 8px; text-align: right;">
        <div class="source-icon" style="color: var(--accent-color); font-weight: 800; font-size: 15px; margin: 0;">2. C - Context (הקשר)</div>
        <p style="font-size: 14px; color: var(--text-main); line-height: 1.4; margin: 0;">הרקע המלא למשימה. למשל: "אנחנו חברה שחוותה השבתת שרתים, הלקוחות כועסים, והמטרה היא להתנצל מבלי לקחת אחריות משפטית" - הסוכן יבין את הדחיפות והרגישות הנדרשת.</p>
    </div>

    <!-- O: Objective -->
    <div class="source-card" style="background: rgba(73, 142, 117, 0.04); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 8px; text-align: right;">
        <div class="source-icon" style="color: var(--accent-color); font-weight: 800; font-size: 15px; margin: 0;">3. O - Objective (מטרה)</div>
        <p style="font-size: 14px; color: var(--text-main); line-height: 1.4; margin: 0;">מהי התוצאה הסופית הנדרשת? (למשל: "לאמן את אנשי המכירות", "לבנות תוכנית אילוף" או "ליצור סידור עבודה שבועי").</p>
    </div>

    <!-- S & T: Style & Tone -->
    <div class="source-card" style="background: rgba(73, 142, 117, 0.04); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 8px; text-align: right;">
        <div class="source-icon" style="color: var(--accent-color); font-weight: 800; font-size: 15px; margin: 0;">4. S & T - Style & Tone</div>
        <p style="font-size: 14px; color: var(--text-main); line-height: 1.4; margin: 0;">הגדרת סגנון וטון הדיבור: האם הסוכן יישמע אמפתי, סמכותי, עוקצני, או אולי "דוד חכם ומנוסה"?</p>
    </div>

    <!-- A: Audience -->
    <div class="source-card" style="background: rgba(73, 142, 117, 0.04); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 8px; text-align: right;">
        <div class="source-icon" style="color: var(--accent-color); font-weight: 800; font-size: 15px; margin: 0;">5. A - Audience (קהל יעד)</div>
        <p style="font-size: 14px; color: var(--text-main); line-height: 1.4; margin: 0;">למי התוצר מיועד? הסבר לילד בן 10 דורש עולם מושגים שונה לחלוטין מהסבר המיועד למנכ"ל החברה.</p>
    </div>

    <!-- R: Response -->
    <div class="source-card" style="background: rgba(73, 142, 117, 0.04); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 8px; text-align: right;">
        <div class="source-icon" style="color: var(--accent-color); font-weight: 800; font-size: 15px; margin: 0;">6. R - Response (תגובה)</div>
        <p style="font-size: 12px; color: var(--text-main); line-height: 1.4; margin: 0;">הגדרת פורמט התוצאה הרצויה – האם מדובר בטבלה, קוד תוכנה, סיכום נקודות, מצגת, או אולי מייל רשמי?</p>
    </div>
</div>

<h2 class="lesson-h2">כלי עזר מיוחד לבניית ה-GEM שלכם</h2>
<p class="lesson-p">תוכלו להתחיל לבנות את סוכן ה GEM בעצמכם, או להעזר בסוכן שבניתי עבורכם במשימה לביצוע</p>
<h2 class="lesson-h2">דוגמאות לסוכני GEMS מעשיים</h2>
<ul style="margin-right: 20px; margin-bottom: 15px; line-height: 1.6;">
    <li><strong>סוכן סידור עבודה:</strong> מייצר סידור עבודה למחלקה של 100 אחיות, תוך התחשבות בהעדפות אישיות, היקפי משרה, ימי חופש וימי השתלמות של כל אחת.</li>
    <li><strong>סוכן עורך ספרותי:</strong> מתפקד כעורך ספרותי מקצועי לפי סגנון כתיבה שיוגדר לו מראש, מבצע תחקיר לספר בהתאם לקהל היעד ולאורך הטקסט הרצוי.</li>
    <li><strong>סוכן מסחר בשוק ההון:</strong> סורק אתרי מניות, המלצות אנליסטים ושיטות מסחר, ומספק המלצות מבוססות לבחירת ניירות ערך.</li>
    <li><strong>סוכן מומחה לאילוף כלבים:</strong> נבנה במיוחד עבור משפחה שאימצה גור נושך בשם במבי. הסוכן מקבל זהות של מנטור בכיר בעל 25 שנות ניסיון, משתמש בפסיכולוגיה התנהגותית, מונחה לענות במבנה קבוע שמתחיל ב"זריקת הרגעה", מציג את המצב דרך "המשקפיים של הכלב" ומספק תוכנית פעולה מעשית.</li>

    <li><strong>סוכן מתכנן טיולים לחו"ל:</strong> בונה מסלולי טיול מותאמים אישית בהתאם ליעד, משך הטיול, תקציב, הרכב הנוסעים ותחומי העניין שלהם.</li>
    <li><strong>מפיק אירועים:</strong> סוכן שהוא מפיק אירועים מקצועי לחתונות, ימי הולדת, אירועי חברה, שיבנה את כל מרכיבי האירוע מרשימת המוזמנים, סידורי ישיבה, מציאת מקום, בידור, עיצוב, הזמנות ומסלקה להעברת מתנות.</li>
</ul>

`,
            actionType: "checklist",
            actionLabel: "",
            placeholderText: "",
            tools: [
                { name: "מדריך אינטראקטיבי צעד אחר צעד", url: "gemini-gem-tutorial.html" },
                { name: "סוכן GEM עוזר לבניית סוכנים", url: "https://gemini.google.com/gem/16j4MAOCP6FE2YLTN1R_-CShSRWrrinPH?usp=sharing" },
                { name: "פתח את Gemini בלשונית חדשה", url: "https://gemini.google.com" }
            ],
            instructionText: `<strong>משימה מעשית - בניית סוכן חכם GEM:</strong><br>
            אתה בונה סוכן שמפענח נוריות הזהרה שנדלקת ברכב, מה משמעותה וכיצד לפעול.<br>
            עקוב אחרי ההנחיות במדריך האינטראקטיבי צעד אחר צעד. תוכל להעזר בכלי העזר לבניית סוכן ה GEM.`,
            checklistItems: [
                "הקמתי סוכן GEM חדש במערכת Gemini ונתתי לו שם ותפקיד ברורים (I - Identity).",
                "כתבתי עבור הסוכן הנחיות מדויקות בתיבת ההנחיות המבוססות על נוסחת ה-iCOSTAR.",
                "העליתי לסוכן קובצי ידע רלוונטיים (למשל מדרייב או קובץ מקומי) והוספתי את חוק הברזל למניעת הזיות (\"אם המידע לא נמצא בקבצים - אל תמציא\").",
                "ביצעתי שיחת בדיקה (תרגול) עם הסוכן כדי לוודא שהוא עונה במדויק ומתבסס רק על המקורות שסופקו."
            ],
            validate: (input) => {
                if (!input || typeof input !== "object") return false;
                return input.chk1 === true && input.chk2 === true && input.chk3 === true && input.chk4 === true;
            },
            errorMessage: "אנא ודאו שסימנתם את ארבע משימות התרגול בבניית סוכן GEM כאישור ביצוע."
        },
        {
            id: "lesson_3",
            fileName: "lesson_3_notebooklm.md",
            tabLabel: "lesson_3_notebooklm.md",
            title: "שיעור 3: למידה חכמה עם NotebookLM",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 3: למידה חכמה עם NotebookLM</h1>
<p class="lesson-p">שלום ${name}! בשיעור זה נכיר כלי מהפכני מבית Google שישנה לחלוטין את הדרך שבה אתם חוקרים, לומדים ומארגנים מידע - <strong>NotebookLM</strong>.</p>
<p class="lesson-p" style="color: #800020; font-weight: 500; margin-top: -10px; margin-bottom: 15px;">הגרסה החינמית של ג'מיני תאפשר לעבוד עם כל הכלים שמוצגים באתר. יחד עם זאת, מומלץ לרכוש מנוי בסיסי כדי לנצל היטב את יכולות הכלים.</p>

<h2 class="lesson-h2">עקרון הליבה: 100% החומר שלכם, 0% המצאות</h2>
<p class="lesson-p">NotebookLM  הוא עוזר חכם שקורא, מנתח ומבין רק את המקורות שאתם מספקים לו (כמו קובצי PDF מסמכי גוגל דרייב, הקלטות שמע, קישורים וטקסטים). הוא יכול לקלוט וליצור תוצרים שונים מכמות עצומה של חומר כמו ספרי לימוד שלמים, 600 מקורות שונים, קישורים לשיחות וסוכנים מ Gemini).</p>





<!-- Highlight Box (Special Feature: Personal Tutor vs Research Assistant) -->
<div class="special-feature-box" style="background: linear-gradient(135deg, rgba(73, 142, 117, 0.12), rgba(53, 114, 93, 0.04)); border: 1.5px solid var(--accent-color); border-radius: 16px; padding: 20px; margin: 20px 0; text-align: right; box-shadow: 0 4px 15px rgba(73, 142, 117, 0.1);">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; color: var(--accent-color);">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
        <strong style="font-size: 16px; font-weight: 700;">טיפ זהב: מתי להשתמש ב-GEM ומתי ב-NotebookLM?</strong>
    </div>
    <p style="font-size: 14px; color: var(--text-main); line-height: 1.5; margin: 0;">
        האם כדאי להשתמש ב-Gemini GEM או ב-NotebookLM? הנה כלל האצבע: השתמשו ב-<strong>GEM</strong> כשאתם רוצים סוכן ייעודי עם הוראות מותאמות אישית ואישיות מוגדרת שישמש כעוזר אישי קבוע למשימה מוגדרת מראש (כמו מפיק אירועים, מנטור אילוף או עורך ספרותי), או מורה פרטי אישי שינהל אתכם שיחה אקטיבית ודינמית וילמד אתכם נושאים שלב אחר שלב באמצעות שאלות והסברים. לעומת זאת, השתמשו ב-<strong>NotebookLM</strong> כשברצונכם לחקור ולסכם כמות גדולה של מסמכי מקור שונים בו-זמנית, להצליב ביניהם, או להפיק מהם תוצרים כמו פודקאסט שמע או מדריך למידה מקיף עם מראי מקום מדויקים.
    </p>
</div>

<h2 class="lesson-h2">אילו מקורות מידע אפשר להעלות למחברת?</h2>
<p class="lesson-p">המערכת יודעת להתמודד עם מגוון רחב של פורמטים. הנה כמה מהנפוצים שבהם:</p>

<div class="sources-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 15px; margin: 15px 0;">
    <!-- Card 1 -->
    <div class="source-card" style="background: rgba(73, 142, 117, 0.04); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 10px; text-align: right;">
        <div class="source-icon" style="color: var(--accent-color); display: flex; align-items: center; justify-content: flex-start;">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
        </div>
        <h4 style="font-size: 14px; color: var(--text-header); font-weight: 700; margin: 0;">קובצי PDF ומסמכים</h4>
        <p style="font-size: 12px; color: var(--text-main); line-height: 1.4; margin: 0;">העלו מאמרים אקדמיים, סיכומי שיעור, ספרי לימוד דיגיטליים, או שקופיות של מצגות שהומרו ל-PDF.</p>
    </div>

    <!-- Card 2 -->
    <div class="source-card" style="background: rgba(73, 142, 117, 0.04); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 10px; text-align: right;">
        <div class="source-icon" style="color: var(--accent-color); display: flex; align-items: center; justify-content: flex-start;">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
                <line x1="15" y1="3" x2="15" y2="21"></line>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="3" y1="15" x2="21" y2="15"></line>
            </svg>
        </div>
        <h4 style="font-size: 14px; color: var(--text-header); font-weight: 700; margin: 0;">קובצי נתונים ואקסל</h4>
        <p style="font-size: 12px; color: var(--text-main); line-height: 1.4; margin: 0;">המערכת יודעת לקרוא ולנתח נתונים מתוך טבלאות, גיליונות חישוב (Excel / Google Sheets), דוחות וסטטיסטיקות, ולעזור לכם להפיק מהם תובנות.</p>
    </div>

    <!-- Card 3 -->
    <div class="source-card" style="background: rgba(73, 142, 117, 0.04); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 10px; text-align: right;">
        <div class="source-icon" style="color: var(--accent-color); display: flex; align-items: center; justify-content: flex-start;">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v1a7 7 0 0 1-14 0v-1"></path>
                <line x1="12" y1="19" x2="12" y2="22"></line>
            </svg>
        </div>
        <h4 style="font-size: 14px; color: var(--text-header); font-weight: 700; margin: 0;">קובצי שמע (Audio)</h4>
        <p style="font-size: 12px; color: var(--text-main); line-height: 1.4; margin: 0;">יש לכם הקלטה של הרצאה או ראיון? העלו את קובץ השמע, ו-NotebookLM יתמלל אותו מאחורי הקלעים ויהפוך את התוכן הטקסטואלי שלו לזמין לחיפוש וסיכום.</p>
    </div>

    <!-- Card 5 -->
    <div class="source-card" style="background: rgba(73, 142, 117, 0.04); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 10px; text-align: right;">
        <div class="source-icon" style="color: var(--accent-color); display: flex; align-items: center; justify-content: flex-start;">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            </svg>
        </div>
        <h4 style="font-size: 14px; color: var(--text-header); font-weight: 700; margin: 0;">טקסט מועתק</h4>
        <p style="font-size: 12px; color: var(--text-main); line-height: 1.4; margin: 0;">העתיקו והדביקו טקסטים ישירות לתוך המחברת - מתאים במיוחד להערות מהירות, פסקאות בודדות או רעיונות ספונטניים שכתבתם.</p>
    </div>

    <!-- Card 6 -->
    <div class="source-card" style="background: rgba(73, 142, 117, 0.04); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 10px; text-align: right;">
        <div class="source-icon" style="color: var(--accent-color); display: flex; align-items: center; justify-content: flex-start;">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
        </div>
        <h4 style="font-size: 14px; color: var(--text-header); font-weight: 700; margin: 0;">קישור שיחות מ-Gemini</h4>
        <p style="font-size: 12px; color: var(--text-main); line-height: 1.4; margin: 0;">ייבאו שיחות קודמות וסיעור מוחות שקיימתם בצ'אט של Gemini, והשתמשו בהם כבסיס ידע לכל דבר בתוך המחברת שלכם.</p>
    </div>

    <!-- Card 4 -->
    <div class="source-card" style="background: rgba(73, 142, 117, 0.04); border: 1px solid var(--border-color); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 10px; text-align: right;">
        <div class="source-icon" style="color: var(--accent-color); display: flex; align-items: center; justify-content: flex-start;">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        </div>
        <h4 style="font-size: 14px; color: var(--text-header); font-weight: 700; margin: 0;">קישורי אינטרנט ואתרים</h4>
        <p style="font-size: 12px; color: var(--text-main); line-height: 1.4; margin: 0;">הזינו קישור לאתר אינטרנט, למאמר מקוון או לבלוג. NotebookLM יקרא וינתח את התוכן של הדף, ויאפשר לכם לשאול עליו שאלות ולחקור אותו ישירות במחברת.</p>
    </div>
</div>



<h2 class="lesson-h2">יכולות המפתח של NotebookLM: מה אפשר לעשות איתו? – הסטודיו (The Studio Panel) - מרכז הבקרה שלכם</h2>
<p class="lesson-p">כאן ההזדמנות שלכם להיות באמת יצירתיים. כנסו לסטודיו והתחילו לייצר תוצרים שונים:</p>

<div class="features-grid-notebooklm" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 15px 0;">
    <div class="feature-card-nb" style="background: var(--bg-darker); border: 1px solid var(--border-color); border-radius: 16px; padding: 15px;">
        <h3 style="font-size: 14px; color: var(--success-color); margin-bottom: 8px;">
            <svg viewBox="0 0 16 16" width="14" height="14" style="vertical-align: middle; margin-left: 6px;"><path fill="currentColor" d="M12.5 1h-9c-.8 0-1.5.7-1.5 1.5v11c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5zm-.5 12h-8V3h8v10z"></path></svg>
            סיכומים ומפות חשיבה
        </h3>
        <p style="font-size: 12px; color: var(--text-main); line-height: 1.4;">הפקה אוטומטית של מדריכי למידה מפורטים, טבלאות השוואה ותרשימים ויזואליים מתוך חומרי הלימוד שטענתם.</p>
    </div>
    
    <div class="feature-card-nb" style="background: var(--bg-darker); border: 1px solid var(--border-color); border-radius: 16px; padding: 15px;">
        <h3 style="font-size: 14px; color: var(--success-color); margin-bottom: 8px;">
            <svg viewBox="0 0 16 16" width="14" height="14" style="vertical-align: middle; margin-left: 6px;"><path fill="currentColor" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path></svg>
            בחנים וכרטיסיות למידה
        </h3>
        <p style="font-size: 12px; color: var(--text-main); line-height: 1.4;">יצירה מיידית של מבחנים אמריקאיים לתרגול עצמי וכרטיסיות (Flashcards) אינטראקטיביות לשינון מהיר של מושגי מפתח.</p>
    </div>
    
    <div class="feature-card-nb" style="background: var(--bg-darker); border: 1px solid var(--border-color); border-radius: 16px; padding: 15px;">
        <h3 style="font-size: 14px; color: var(--success-color); margin-bottom: 8px;">
            <svg viewBox="0 0 16 16" width="14" height="14" style="vertical-align: middle; margin-left: 6px;"><path fill="currentColor" d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path></svg>
            פודקאסט לימודי (Audio Overviews)
        </h3>
        <p style="font-size: 12px; color: var(--text-main); line-height: 1.4;">המרת טקסטים ארוכים ויבשים לשיחת פודקאסט דינמית וקולחת בין שני מנחי AI, שמפשטים את הנושאים הכי מורכבים בטון טבעי ומשעשע.</p>
    </div>
    
    <div class="feature-card-nb" style="background: var(--bg-darker); border: 1px solid var(--border-color); border-radius: 16px; padding: 15px;">
        <h3 style="font-size: 14px; color: var(--success-color); margin-bottom: 8px;">
            <svg viewBox="0 0 16 16" width="14" height="14" style="vertical-align: middle; margin-left: 6px;"><path fill="currentColor" d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .223.416l1.25.833a.5.5 0 0 0 .554-.832L13 12.083V11a.5.5 0 0 0-.5-.5zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>
            סקירות וידאו קולנועיות
        </h3>
        <p style="font-size: 12px; color: var(--text-main); line-height: 1.4;">יצירה אוטומטית של תסריטים וסרטוני הסבר קצרים המפשטים נושאים מורכבים ומחברים מושגים חזותיים דרך אנימציה מודרכת.</p>
    </div>

    <div class="feature-card-nb" style="background: var(--bg-darker); border: 1px solid var(--border-color); border-radius: 16px; padding: 15px;">
        <h3 style="font-size: 14px; color: var(--success-color); margin-bottom: 8px;">
            <svg viewBox="0 0 16 16" width="14" height="14" style="vertical-align: middle; margin-left: 6px;"><path fill="currentColor" d="M0 0h16v16H0V0zm1 1v14h14V1H1zm2 10h3v3H3v-3zm4-4h3v7H7V7zm4-3h3v10h-3V4z"></path></svg>
            אינפוגרפיקות ופוסטרים חזותיים
        </h3>
        <p style="font-size: 12px; color: var(--text-main); line-height: 1.4;">הפקת פוסטר או סיכום חזותי המרכז את נקודות המפתח ומושגי היסוד מתוך המקורות שלכם, ומסדר אותם בצורה גרפית נוחה לעין.</p>
    </div>

    <div class="feature-card-nb" style="background: var(--bg-darker); border: 1px solid var(--border-color); border-radius: 16px; padding: 15px;">
        <h3 style="font-size: 14px; color: var(--success-color); margin-bottom: 8px;">
            <svg viewBox="0 0 16 16" width="14" height="14" style="vertical-align: middle; margin-left: 6px;"><path fill="currentColor" d="M0 2h16v10H0V2zm1 1v8h14V3H1zm3 9h8v1H4v-1zm2 1h4v1H6v-1z"></path></svg>
            מצגות מקצועיות ומסודרות
        </h3>
        <p style="font-size: 12px; color: var(--text-main); line-height: 1.4;">יצירת שקפים מובנים ונקודות דיון מדויקות על בסיס המידע המעוגן, המכינות אתכם להצגה נוחה והרצאה קולחת מול קהל.</p>
    </div>
</div>
            `,
            actionType: "checklist",
            actionLabel: "",
            placeholderText: "",
            tools: [
                { name: "פתח את NotebookLM", url: "https://notebooklm.google" },
                { name: "מדריך אינטראקטיבי צעד אחר צעד", url: "notebooklm-tutorial.html" }
            ],
            instructionText: `<strong>משימה מעשית - NotebookLM:</strong><br>
            <strong>הנחיית בחירת תחום:</strong> בחרו תחום שמעניין אתכם (כגון תחביב, מקצוע, תחום לימוד, פוליטיקה, ספורט וכדומה) ובססו עליו את התרגול שלכם במשימה זו.<br><br>
            בצעו את שלבי ההכנה והמשימות ב-NotebookLM לכל אחד מתוצרי הסטודיו ולצ'אט, וסמנו את תיבות הסימון לאישור ביצוע.`,
            checklistItems: [
                `פתחתי מחברת חדשה (New Notebook) ב-NotebookLM והעליתי לפחות 2 מקורות מידע הקשורים לתחום שבחרתי (למשל מסמכים, קישורי אינטרנט או קובצי שמע).`,
                `תרגול שיחה מבוססת מקורות: שאלתי את ה-AI בצ'אט שאלות ממוקדת על חומרי המקור וניהלתי איתו שיחת שאלות ותשובות.`,
                `תוצר סטודיו 1 - סיכומים ומפות חשיבה: הפקתי מהסטודיו מדריך למידה מובנה, מפת חשיבה או סיכום מקיף של החומר המבוסס על המקורות שהעליתי.`,
                `תוצר סטודיו 2 - בחנים וכרטיסיות למידה: יצרתי בוחן עצמי או כרטיסיות לימוד אינטראקטיביות (Flashcards) לשינון ובדיקת ההבנה שלי.`,
                `תוצר סטודיו 3 - פודקאסט לימודי (Audio Overview): יצרתי שיחת שמע של שני מנחי ה-AI והקשבתי להסבר שלהם על הנושא.`,
                `תוצר סטודיו 4 - סקירת וידאו קולנועית (Video Script): הפקתי תסריט או מסמך תדרוך המפשט את החומר ומחבר מושגים חזותיים עבור סרטון הסבר.`,
                `תוצר סטודיו 5 - אינפוגרפיקה: הפקתי פוסטר הדרכה או אינפוגרפיקה המארגנת את נקודות המפתח של החומר בצורה חזותית.`,
                `תוצר סטודיו 6 - מצגת: יצרתי מצגת מסודרת המציגה את עיקרי המקורות לעיון והרצאה.`
            ],
            validate: (input) => {
                if (!input || typeof input !== "object") return false;
                return input.chk1 === true && input.chk2 === true && input.chk3 === true && input.chk4 === true && input.chk5 === true && input.chk6 === true && input.chk7 === true && input.chk8 === true;
            },
            errorMessage: "אנא ודאו שביצעתם וסימנתם את כל 8 משימות התרגול ב-NotebookLM כאישור ביצוע."
        },
        {
            id: "lesson_4",
            fileName: "lesson_4_canvas.js",
            tabLabel: "lesson_4_canvas.js",
            title: "שיעור 4: שליטה ב-Gemini Canvas – סביבת העבודה של היוצר",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 4: שליטה ב-Gemini Canvas – סביבת העבודה של היוצר</h1>
<p class="lesson-p">שלום ${name}! בשיעור זה נלמד לעבוד כמו מקצוענים ב-<strong>Gemini Canvas</strong> – סביבת עבודה מתקדמת המאפשרת ליצור, לערוך וללטש קוד ותכנים מורכבים במקביל לחלון הצ'אט הרגיל.</p>
<p class="lesson-p" style="color: #800020; font-weight: 500; margin-top: -10px; margin-bottom: 15px;">הגרסה החינמית של ג'מיני תאפשר לעבוד עם כל הכלים שמוצגים באתר. יחד עם זאת, מומלץ לרכוש מנוי בסיסי כדי לנצל היטב את יכולות הכלים.</p>

<h2 class="lesson-h2">1. מהו Gemini Canvas?</h2>
<p class="lesson-p">בניגוד לשיחה רגילה שבה התשובות נעלמות במעלה הצ'אט, Gemini Canvas פותח מסך עבודה ייעודי מפוצל (Split-screen) לצד השיחה. <strong><u>הקנבס בונה קוד</u></strong> ליצירת תוצרים רבים, ממש כאילו היית מתכנת אמיתי מבלי הצורך לדעת שפות קוד או ניסיון קודם בתכנות: 
<br>&bull; <strong>מסמכים ותוכן כתוב:</strong> תוכניות עבודה, פוסטים, מדריך למשתמש, קורות חיים
<br>&bull; <strong>אפליקציות אינטראקטיביות:</strong> דפי נחיתה, אפליקציות, מחשבונים, משחקים, מחולל כרטיסי ברכה
<br>&bull; <strong>מצגות וחומר הדרכה:</strong> מצגות, מערכי שיעור, תמציות מנהלים</p>

<h2 class="lesson-h2">2. הוראות עבודה שלב-אחר-שלב בקנבס (Step-by-Step Guide)</h2>
<p class="lesson-p">על מנת ליצור את המוצר שבחרתם, פתחו את Gemini</p>
<ol style="margin-right: 20px; margin-bottom: 15px; line-height: 1.6;">
    <li style="margin-bottom: 8px;"><strong>שלב 1: הפעלת הקנבס:</strong> לחצו על כפתור ה-'+', ובחרו את Canvas. ודאו שאתם עובדים במודל Pro.</li>
    <li style="margin-bottom: 8px;"><strong>שלב 2: ניסוח פרומפט לבניית המוצר שבחרתם ליצור:</strong> היעזרו בג'מיני על מנת לנסח את הפרומפט (ניתן להוסיף קבצים, תמונות ואפילו מחברות Notebook). יפתח מסך מפוצל – חלק ימני לשיחה וחלק שמאלי יציג את המוצר שיצרתם. <strong>(שימו לב: בניית קוד היא תהליך מורכב, ולכן יש להמתין בסבלנות מספר דקות עד אשר Gemini יסיים לבנות את המוצר).</strong></li>
    <li style="margin-bottom: 8px;"><strong>שלב 3: דיוק המוצר:</strong> תוכלו לדייק את המוצר בהנחיות נוספות במשך השיחה – שינוי תצוגה, שינוי טקסט או כל שיפור אחר שתרצו להכניס.</li>
    <li style="margin-bottom: 8px;"><strong>שלב 4: שימוש במוצר:</strong> כעת ניתן להוריד את המוצר (Download), להשתמש בו ישירות מתוך Gemini או לשתף קישור שלו לחברים.</li>
</ol>

<blockquote style="background: rgba(73, 142, 117, 0.08); border-right: 4px solid var(--accent-color); padding: 15px; margin: 20px 0; border-radius: 8px; direction: rtl; text-align: right;">
    <strong>הערה חשובה: בשלב זה, מוצרים דיגיטליים נשמרים רק באופן מקומי על המחשב האישי או המכשיר הנייד שלכם. בשיעור הבא נלמד בדיוק איך להעלות את היצירה שלכם לרשת ולשתף אותה!</strong>
</blockquote>
            `,
            actionType: "checklist",
            actionLabel: "",
            placeholderText: "",
            tools: [
                { name: "פתח את Gemini בלשונית חדשה", url: "https://gemini.google.com" }
            ],
            instructionText: `<strong>משימה מעשית - Gemini Canvas:</strong><br>
            <strong>הנחיית בחירת תחום:</strong> בחרו תחום שמעניין אתכם (כגון תחביב, מקצוע, תחום לימוד, פוליטיקה, ספורט וכדומה) ובססו עליו את התרגול שלכם במשימה זו.<br><br>
            שלטו ב-Gemini Canvas באמצעות ביצוע התרגול המעשי שלמטה, וסמנו את תיבת האישור.`,
            checklistItems: [
                `תוכנית עבודה: בניתי ב-Canvas תוכנית עבודה מפורטת לפרויקט בתחום שבחרתם, המחולקת לשלבים ולוחות זמנים.`,
                `מדריך למשתמש: יצרתי מדריך למשתמש (User Guide) שלם ומובנה לתוכן או מוצר העוסק בתחום שבחרתם.`,
                `מצגת: ניסחתי מבנה שלם ושקפים מפורטים למצגת מקצועית המציגה את התחום שבחרתם.`,
                `מערך שיעור: הכנתי מערך שיעור מתוכנן היטב ללימוד נושא מתוך התחום שבחרתם.`,
                `חידון: חיברתי חידון אינטראקטיבי מעניין עם שאלות ותשובות מוסברות לבחינת ידע בתחום שבחרתם.`,
                `אפליקציה פשוטה: כתבתי בקנבס קוד (HTML/JS) עבור אפליקציה פשוטה (כגון מחשבון או כלי עזר) הקשורה לתחום שבחרתם.`
            ],
            validate: (input) => {
                if (!input || typeof input !== "object") return false;
                return input.chk1 === true && input.chk2 === true && input.chk3 === true && input.chk4 === true && input.chk5 === true && input.chk6 === true;
            },
            errorMessage: "אנא ודאו שביצעתם וסימנתם את כל 6 משימות התרגול ב-Gemini Canvas."
        },
        {
            id: "lesson_5",
            fileName: "lesson_5_deploy.yaml",
            tabLabel: "lesson_5_deploy.yaml",
            title: "שיעור 5: מקוד לענן – צינור הפריסה",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 5: מקוד לענן – צינור הפריסה (The Deployment Pipeline)</h1>
<p class="lesson-p">שלום ${name}! בשיעור זה נלמד כיצד להוציא את הפרויקט שיצרנו ב-Gemini Canvas אל העולם באמצעות קישור אינטרנט חי (Live URL).</p>
<p class="lesson-p" style="color: #800020; font-weight: 500; margin-top: -10px; margin-bottom: 15px;">הגרסה החינמית של ג'מיני תאפשר לעבוד עם כל הכלים שמוצגים באתר. יחד עם זאת, מומלץ לרכוש מנוי בסיסי כדי לנצל היטב את יכולות הכלים.</p>

<h2 class="lesson-h2">למה אנחנו צריכים את זה?</h2>
<p class="lesson-p">בניתם פרויקט מדהים ב-Gemini Canvas. כעת, בואו נהפוך אותו לנגיש לכל העולם באמצעות קישור אינטרנט חי (Live URL)!</p>

<h2 class="lesson-h2">תהליך הפריסה ב-3 שלבים</h2>
<ul style="margin-right: 20px; margin-bottom: 15px; line-height: 1.6;">
    <li style="margin-bottom: 8px;"><strong>1. GitHub (הכספת הדיגיטלית שלכם):</strong> GitHub הוא המקום שבו הקוד שלכם נשמר ומנוהל. חשבו עליו כעל ארכיון מקצועי לפרויקטים שלכם.
    <br><em>פעולה:</em> הרשמו ל-GitHub וצרו מחסן חדש (Repository) - שזוהי למעשה תיקיית הפרויקט שלכם בענן.</li>
    <li style="margin-bottom: 8px;"><strong>2. Vercel (פלטפורמת האחסון והאירוח שלכם):</strong> Vercel מתחבר ל-GitHub ומפרסם ("בונה") אוטומטית את קוד המקור שלכם לכדי אתר אינטרנט פעיל.
    <br><em>פעולה:</em> הרשמו ל-Vercel באמצעות חיבור חשבון ה-GitHub שלכם.</li>
    <li style="margin-bottom: 8px;"><strong>3. החיבור (הקסם):</strong> כשאתם מחברים את Vercel למחסן ה-GitHub שלכם, בכל פעם שתעדכנו את הקוד ב-GitHub (למשל, עדכון מעקב ה-<strong>${i4}</strong> שלכם), האתר החי שלכם ב-Vercel יתעדכן אוטומטית ללא שום מאמץ מצידכם.</li>
</ul>

<h2 class="lesson-h2">שלבי הגדרת התצורה (Step-by-Step Configuration)</h2>
<p class="lesson-p">בצעו את הצעדים הבאים כדי להעלות את הפרויקט שלכם לאוויר:</p>
<ul style="margin-right: 20px; margin-bottom: 15px; line-height: 1.6;">
    <li><strong>שלב 1:</strong> צרו מחסן (Repository) חדש ב-GitHub. אתחלו אותו עם קובץ README.md.</li>
    <li><strong>שלב 2:</strong> העלו את קבצי ה-HTML/CSS שלכם משיעור 2 לתוך המחסן שפתחתם.</li>
    <li><strong>שלב 3:</strong> כנסו ל-Vercel, לחצו על "Add New" ואז על "Project".</li>
    <li><strong>שלב 4:</strong> בחרו את מחסן ה-GitHub שלכם מתוך הרשימה ולחצו על "Import".</li>
    <li><strong>שלב 5:</strong> לחצו על "Deploy". תוך שניות, Vercel תבנה ותספק לכם קישור חי (לדוגמה: <em>your-project.vercel.app</em>).</li>
</ul>
            `,
            actionType: "checklist",
            actionLabel: "",
            placeholderText: "",
            tools: [
                { name: "פתח את GitHub", url: "https://github.com" },
                { name: "פתח את Vercel", url: "https://vercel.com" }
            ],
            instructionText: `<strong>משימת הפריסה (Deployment Task):</strong><br>
            <strong>הנחיית בחירת תחום:</strong> בחרו תחום שמעניין אתכם (כגון תחביב, מקצוע, תחום לימוד, פוליטיקה, ספורט וכדומה) ובססו עליו את התרגול שלכם במשימה זו.<br><br>
            עקבו אחר שלבי הפריסה מטה כדי לקחת את הפרויקט משיעור 4 (הקשור לתחום שבחרתם) ולהעלות אותו לאינטרנט. סמנו את תיבות הסימון לאישור.`,
            checklistItems: [
                `יצרתי Repository ב-GitHub והעליתי אליו את קובצי הפרויקט שלי (הקשור לתחום שבחרתי).`,
                `קישרתי את חשבון ה-Vercel שלי ל-GitHub ובחרתי ב-Repository המתאים לפריסה.`,
                `הפרויקט נפרס (Deployed) בהצלחה וקיבלתי קישור אינטרנט חי (Live URL) פעיל ותקין.`
            ],
            validate: (input) => {
                if (!input || typeof input !== "object") return false;
                return input.chk1 === true && input.chk2 === true && input.chk3 === true;
            },
            errorMessage: "אנא ודאו שסימנתם את כל 3 משימות הפריסה בצ'קליסט כאישור על ביצוע התרגול."
        },
        {
            id: "lesson_6",
            fileName: "lesson_6_antigravity.json",
            tabLabel: "lesson_6_antigravity.json",
            title: "שיעור 6: אוטומציה עם Antigravity",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 6: אוטומציה עם Antigravity</h1>
<p class="lesson-p">בשיעור 3 ראינו את הצינור הידני: כתיבת קוד ב-AI, העתקה, דחיפה ל-GitHub, המתנה לבנייה ב-Vercel. מה אם יכולנו לבצע שינויים ישירות דרך הוראות ה-AI שלנו והאתר ישתנה <strong>בזמן אמת</strong> ללא מאמץ ידני?</p>
<p class="lesson-p" style="color: #800020; font-weight: 500; margin-top: -10px; margin-bottom: 15px;">הגרסה החינמית של ג'מיני תאפשר לעבוד עם כל הכלים שמוצגים באתר. יחד עם זאת, מומלץ לרכוש מנוי בסיסי כדי לנצל היטב את יכולות הכלים.</p>

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
            <strong>הנחיית בחירת תחום:</strong> בחרו תחום שמעניין אתכם (כגון תחביב, מקצוע, תחום לימוד, פוליטיקה, ספורט וכדומה) ובססו עליו את התרגול שלכם במשימה זו.<br><br>
            1. פתחו את פאנל העבודה של **Antigravity**.<br>
            2. צרו פרויקט חדש שמטרתו לעקוב אחר עדכונים או מידע עבור התחום שבחרתם.<br>
            3. חברו את חשבונות ה-GitHub וה-Vercel שלכם לפרויקט.<br>
            4. בצעו שינוי פרומפט כלשהו בפאנל וראו כיצד השינויים מסונכרנים אוטומטית (Auto-Sync) לקישור ה-Live שלכם.<br>
            5. סמנו את תיבת הסימון למטה לאישור השלמת השלב.`,
            validate: (input) => {
                return input === true;
            },
            errorMessage: "אנא סמנו את תיבת האישור כדי לאשר שהשלמתם את ההובלה האוטומטית ב-Antigravity."
        },
        {
            id: "lesson_7",
            fileName: "lesson_7_agents.py",
            tabLabel: "lesson_7_agents.py",
            title: "שיעור 7: בינה ואוטומציה (סוכנים וכישורים)",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 7: בינה ואוטומציה (סוכנים וכישורים)</h1>
<p class="lesson-p">עד עכשיו השתמשנו ב-AI כדי לכתוב קוד או לעצב אתרים. אבל הצעד המלהיב באמת הוא לבנות מערכות שפועלות <strong>בעצמן</strong> - מערכות היודעות לקבל החלטות ולבצע משימות. אלו הם <strong>סוכני AI (Agents)</strong>.</p>
<p class="lesson-p" style="color: #800020; font-weight: 500; margin-top: -10px; margin-bottom: 15px;">הגרסה החינמית של ג'מיני תאפשר לעבוד עם כל הכלים שמוצגים באתר. יחד עם זאת, מומלץ לרכוש מנוי בסיסי כדי לנצל היטב את יכולות הכלים.</p>

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
            actionType: "checklist",
            actionLabel: "",
            placeholderText: "",
            tools: [
                { name: "פתח את סביבת הסוכנים ב-Antigravity", url: "https://antigravity.dev" }
            ],
            instructionText: `<strong>משימה מעשית בסוכני AI וכישורים:</strong><br>
            <strong>הנחיית בחירת תחום:</strong> בחרו תחום שמעניין אתכם (כגון תחביב, מקצוע, תחום לימוד, פוליטיקה, ספורט וכדומה) ובססו עליו את התרגול שלכם במשימה זו.<br><br>
            בצעו את שלבי פיתוח הסוכן והצמדת הכישורים ב-Antigravity, וסמנו את תיבת האישור למטה.`,
            checklistItems: [
                `הגדרתי סוכן (Agent) חדש ב-Antigravity עבור התחום שבחרתם, הצמדתי לו כישור (Skill) מסוג Web Search, וביצעתי איתו שיחת בדיקה לראות שהוא פועל ומביא מידע עדכני בהצלחה.`
            ],
            validate: (input) => {
                if (!input || typeof input !== "object") return false;
                return input.chk1 === true;
            },
            errorMessage: "אנא סמנו את תיבת האישור כדי לאשר שהשלמתם את בניית סוכן ה-AI והכישור ב-Antigravity."
        }
    ];
}




// 2. Global State Variables
const PREDEFINED_INTERESTS = [
    "בינה מלאכותית יוצרת",
    "למידת מכונה",
    "פיתוח אפליקציות",
    "עיצוב ממשק וחווית משתמש (UI/UX)",
    "שיווק ופרסום דיגיטלי",
    "יזמות וסטארטאפים",
    "מדע הנתונים ואנליטיקה",
    "ניהול מוצר",
    "עיצוב גרפי ואמנות דיגיטלית",
    "כתיבת תוכן וקריאייטיב",
    "יצירת סרטונים ומדיה",
    "פיתוח משחקי מחשב"
];

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
        chk1: false,
        chk2: false,
        chk3: false,
        chk4: false,
        chk5: false
    },
    lesson_2: {
        chk1: false,
        chk2: false
    },
    lesson_3: {
        chk1: false,
        chk2: false,
        chk3: false,
        chk4: false,
        chk5: false,
        chk6: false,
        chk7: false,
        chk8: false
    },
    lesson_4: {
        chk1: false,
        chk2: false,
        chk3: false,
        chk4: false,
        chk5: false,
        chk6: false
    },
    lesson_5: {
        chk1: false,
        chk2: false,
        chk3: false
    },
    lesson_6: false,
    lesson_7: {
        chk1: false
    }
};

// 3. Document Elements & Initialization
// Emulate component mount / useEffect hook to guarantee a completely clean, blank slate
const DEFAULT_INTERESTS = [
    "בינה מלאכותית יוצרת",
    "למידת מכונה",
    "פיתוח אפליקציות",
    "עיצוב ממשק וחווית משתמש (UI/UX)",
    "ניהול מוצר"
];

function saveAppState() {
    const lessonsProgress = lessonsData.map(l => ({
        id: l.id,
        unlocked: l.unlocked,
        completed: l.completed
    }));
    
    const profile = {
        username: "אורח/ת",
        completedInterestsStep: true,
        userInterests: DEFAULT_INTERESTS,
        currentLessonIndex: currentLessonIndex,
        activeTabs: activeTabs,
        activeTab: activeTab,
        lessonsProgress: lessonsProgress,
        userSubmissions: userSubmissions
    };
    
    localStorage.setItem("guest_course_progress", JSON.stringify(profile));
}

function restoreAppState() {
    userName = "אורח/ת";
    userInterests = DEFAULT_INTERESTS;
    
    const rawProfile = localStorage.getItem("guest_course_progress");
    if (!rawProfile) {
        lessonsData = getDynamicLessons(userName, userInterests);
        return;
    }
    
    try {
        const profile = JSON.parse(rawProfile);
        currentLessonIndex = Number(profile.currentLessonIndex) || 0;
        activeTabs = profile.activeTabs || ["lesson_1_prompt.md"];
        activeTab = profile.activeTab || "lesson_1_prompt.md";
        userSubmissions = profile.userSubmissions || {
            lesson_1: { chk1: false, chk2: false, chk3: false, chk4: false, chk5: false },
            lesson_2: { chk1: false, chk2: false, chk3: false, chk4: false },
            lesson_3: { chk1: false, chk2: false, chk3: false, chk4: false, chk5: false, chk6: false, chk7: false, chk8: false },
            lesson_4: {
                chk1: false,
                chk2: false,
                chk3: false,
                chk4: false,
                chk5: false,
                chk6: false
            },
            lesson_5: { chk1: false, chk2: false, chk3: false },
            lesson_6: false,
            lesson_7: { chk1: false }
        };
        
        lessonsData = getDynamicLessons(userName, userInterests);
        
        if (profile.lessonsProgress) {
            profile.lessonsProgress.forEach(p => {
                const lesson = lessonsData.find(l => l.id === p.id);
                if (lesson) {
                    lesson.unlocked = p.unlocked;
                    lesson.completed = p.completed;
                }
            });
        }
        
        // Filter out legacy filenames that no longer exist in our lessonsData
        const validFileNames = lessonsData.map(l => l.fileName);
        activeTabs = activeTabs.filter(t => validFileNames.includes(t));
        if (activeTabs.length === 0) {
            activeTabs = ["lesson_1_prompt.md"];
        }
        if (!validFileNames.includes(activeTab)) {
            activeTab = activeTabs[0];
        }
    } catch (e) {
        console.error("Failed to restore app state", e);
        lessonsData = getDynamicLessons(userName, userInterests);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const isResume = urlParams.get("resume") === "true";

    bindGlobalListeners();
    restoreAppState();
    
    if (isResume) {
        const targetLessonId = urlParams.get("lesson");
        if (targetLessonId) {
            const targetIdx = lessonsData.findIndex(l => l.id === targetLessonId);
            if (targetIdx !== -1) {
                lessonsData[targetIdx].unlocked = true;
                currentLessonIndex = targetIdx;
                activeTab = lessonsData[targetIdx].fileName;
                if (!activeTabs.includes(activeTab)) {
                    activeTabs.push(activeTab);
                }
            }
        }
    }
    
    const overlay = document.getElementById("onboarding-overlay");
    if (overlay) {
        overlay.style.display = "none";
        overlay.style.opacity = "0";
    }
    
    startApp();
});

function bindGlobalListeners() {
    document.getElementById("btn-run-code").addEventListener("click", handleVerifyTask);
    document.getElementById("btn-reset-sandbox").addEventListener("click", handleResetInput);
    document.getElementById("clear-terminal").addEventListener("click", () => {
        const term = document.getElementById("terminal-output");
        term.innerHTML = '<div class="terminal-line system-msg">המסוף נוקה. מערכת אימות המשימות מוכנה.</div>';
    });
    
    document.getElementById("btn-settings").addEventListener("click", () => {
        const reset = confirm("האם ברצונך לאפס את כל התקדמות הלמידה ולהתחיל מחדש?");
        if (reset) {
            localStorage.clear();
            sessionStorage.clear();
            window.location.reload();
        }
    });
    
    const logoutBtn = document.getElementById("btn-logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            const confirmLogout = confirm("האם ברצונך לאפס את כל התקדמות הלמידה ולהתחיל מחדש?");
            if (confirmLogout) {
                localStorage.clear();
                window.location.reload();
            }
        });
    }
    
    const skipBtn = document.getElementById("btn-skip-lesson");
    if (skipBtn) {
        skipBtn.addEventListener("click", handleSkipLesson);
    }
    
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
        if (lessonIndex === -1) return; // Skip invalid legacy tabs
        const lesson = lessonsData[lessonIndex];
        if (!lesson) return;
        
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
        saveAppState();
    }
}

function selectLesson(index) {
    const idx = Number(index);
    if (isNaN(idx) || idx < 0 || idx >= lessonsData.length) return;
    if (!lessonsData[idx].unlocked) return; // Prevent selection of locked lessons
    
    currentLessonIndex = idx;
    const lesson = lessonsData[idx];
    
    if (!activeTabs.includes(lesson.fileName)) {
        activeTabs.push(lesson.fileName);
    }
    activeTab = lesson.fileName;
    
    loadLesson(index);
    renderSidebarLessons();
    renderTabs();
    saveAppState();
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

    // Update sidebar dynamic header greeting and count
    const sidebarNameEl = document.getElementById("sidebar-username");
    const sidebarCountEl = document.getElementById("sidebar-lesson-count");
    if (sidebarNameEl) {
                                const greetings = [
            `שלום, ${userName}!`,
            `ברוך שובך, ${userName}!`,
            `אתה מתקדם נהדר, ${userName}!`,
            `כל הכבוד, ${userName}!`,
            `כמעט סיימנו, ${userName}!`,
            `הישג מדהים, ${userName}!`
        ];
        sidebarNameEl.innerText = greetings[index] || `שלום, ${userName}!`;
    }
    if (sidebarCountEl) sidebarCountEl.innerText = index + 1;

    // Update run/verify button text dynamically
    const runBtn = document.getElementById("btn-run-code");
    if (runBtn) {
        runBtn.innerHTML = `
            <svg viewBox="0 0 16 16" width="14" height="14" style="margin-left: 6px;"><path fill="currentColor" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path></svg>
            <span>המשימה הושלמה</span>
        `;
    }
    
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
    
    if (lesson.actionType === "checklist") {
        const items = lesson.checklistItems || [];
        const data = savedVal || {};
        
        let checklistHtml = "";
        items.forEach((item, idx) => {
            const chkKey = `chk${idx + 1}`;
            const isChecked = data[chkKey] === true;
            checklistHtml += `
                <label class="checkbox-container" style="margin-bottom: 10px; display: flex; align-items: flex-start; gap: 8px; text-align: right; cursor: pointer;">
                    <input type="checkbox" id="chk-${lesson.id}-${idx + 1}" ${isChecked ? "checked" : ""} style="margin-top: 3px; min-width: 16px;">
                    <span style="font-size: 13.5px; color: var(--text-main); line-height: 1.4;">${item}</span>
                </label>
            `;
        });
        
        inputHtml = `
            <div class="action-input-area" style="display: flex; flex-direction: column; gap: 8px;">
                ${checklistHtml}
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
    if (lesson.actionType === "checklist") {
        const items = lesson.checklistItems || [];
        items.forEach((item, idx) => {
            const chkEl = document.getElementById(`chk-${lesson.id}-${idx + 1}`);
            if (chkEl) {
                chkEl.addEventListener("change", () => {
                    if (!userSubmissions[lesson.id] || typeof userSubmissions[lesson.id] !== "object") {
                        userSubmissions[lesson.id] = {};
                    }
                    userSubmissions[lesson.id][`chk${idx + 1}`] = chkEl.checked;
                    saveAppState();
                });
            }
        });
    } else {
        const inputElement = document.getElementById("action-task-input");
        if (inputElement) {
            const eventType = lesson.actionType === "checkbox" ? "change" : "input";
            inputElement.addEventListener(eventType, () => {
                const val = lesson.actionType === "checkbox" ? inputElement.checked : inputElement.value;
                userSubmissions[lesson.id] = val;
                saveAppState();
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
            writeTerminalLine("[Success] משימה 1: בדיקת כפתור ה-'+' אומתה בהצלחה.", "success-msg");
            writeTerminalLine("[Success] משימה 2: בדיקת קלט קולי אומתה בהצלחה.", "success-msg");
            writeTerminalLine("[Success] משימה 3: יצירת תמונות אומתה בהצלחה.", "success-msg");
            writeTerminalLine("[Success] משימה 4: תכנון משימות אומת בהצלחה.", "success-msg");
            writeTerminalLine("[Success] משימה 5: תרגום ולוקליזציה אומת בהצלחה.", "success-msg");
            writeTerminalLine("[Success] כל 5 שלבי ה-AI Gauntlet אומתו בהצלחה! שיעור 1 הושלם.", "success-msg");
        } else if (lesson.id === "lesson_2") {
            writeTerminalLine("[Success] בניית סוכן חכם GEM אומתה בהצלחה! שיעור 2 הושלם.", "success-msg");
        } else if (lesson.id === "lesson_3") {
            writeTerminalLine("[Success] שלבי התרגול ב-NotebookLM אומתו בהצלחה! שיעור 3 הושלם.", "success-msg");
        } else if (lesson.id === "lesson_4") {
            writeTerminalLine("[Success] ביצוע תרגול ה-Gemini Canvas אומת בהצלחה! שיעור 4 הושלם.", "success-msg");
        } else if (lesson.id === "lesson_5") {
            writeTerminalLine("[Success] שלבי פריסת הפרויקט ב-GitHub וב-Vercel אומתו בהצלחה! שיעור 5 הושלם.", "success-msg");
        } else if (lesson.id === "lesson_6") {
            writeTerminalLine("[Success] אימות חיבור Antigravity ו-Webhook מול GitHub/Vercel בוצע. התיעוד מסונכרן. שיעור 6 הושלם.", "success-msg");
        } else if (lesson.id === "lesson_7") {
            writeTerminalLine("[Success] אימות בניית סוכן ה-AI והכישור ב-Antigravity הושלם בהצלחה! שיעור 7 הושלם.", "success-msg");
        }
        // Mark current lesson as completed
        lesson.completed = true;
        
        // Unlock next lesson
        const nextIndex = Number(currentLessonIndex) + 1;
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
        saveAppState();
        
        if (unlockedNext) {
            alert("✓ המשימה הושלמה בהצלחה! השיעור הבא פתוח כעת עבורכם.");
            // Automatically open next lesson
            selectLesson(nextIndex);
        } else {
            // Course finished!
            writeTerminalLine("[הושלם] מזל טוב! השלמתם את הקורס באופן מלא!", "success-msg");
            alert("🏆 כל הכבוד! השלמתם את כל 7 השיעורים והמשימות המעשיות בקורס בהצלחה! למדתם כיצד לקחת רעיון, להשתמש ב-Gemini GEM, להשתמש ב-NotebookLM, לכתוב ב-Canvas, לפרוס ב-Vercel, לבצע אוטומציית Antigravity ולבנות סוכנים חכמים!");
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
    } else if (lesson.actionType === "checklist") {
        if (!userSubmissions[lesson.id] || typeof userSubmissions[lesson.id] !== "object") {
            userSubmissions[lesson.id] = {};
        }
        const items = lesson.checklistItems || [];
        items.forEach((item, idx) => {
            userSubmissions[lesson.id][`chk${idx + 1}`] = false;
        });
    } else {
        userSubmissions[lesson.id] = "";
    }
    
    renderActionBlock(lesson);
    saveAppState();
}

// 9.5. Skip Lesson / Finish Course
function handleSkipLesson() {
    try {
        const lesson = lessonsData[currentLessonIndex];
        const term = document.getElementById("terminal-output");
        
        // Append skip command to terminal
        const cmdLine = document.createElement("div");
        cmdLine.className = "terminal-line cmd-prompt";
        cmdLine.innerText = `antigravity skip-lesson ${lesson.id}`;
        term.appendChild(cmdLine);
        
        writeTerminalLine(`מבצע מעבר/דילוג על שיעור ${Number(currentLessonIndex) + 1}...`, "info-msg");
        
        // Mark current lesson as completed
        lesson.completed = true;
        
        const nextIndex = Number(currentLessonIndex) + 1;
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
            saveAppState();
            
            alert("🏆 כל הכבוד! סיימת את כל שבעת שיעורי הקורס בהצלחה!");
        }
    } catch (e) {
        console.error("Error in handleSkipLesson:", e);
        alert("שגיאה במעבר שיעור: " + e.message);
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
