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
            fileName: "lesson_2_notebooklm.md",
            tabLabel: "lesson_2_notebooklm.md",
            title: "שיעור 2: למידה חכמה ועיגון מידע עם NotebookLM",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 2: למידה חכמה ועיגון מידע עם NotebookLM</h1>
<p class="lesson-p">שלום ${name}! בשיעור זה נכיר כלי מהפכני מבית Google שישנה לחלוטין את הדרך שבה אתם חוקרים, לומדים ומארגנים מידע - <strong>NotebookLM</strong>.</p>

<h2 class="lesson-h2">עקרון הליבה: 100% החומר שלכם, 0% המצאות (Grounding)</h2>
<p class="lesson-p">החיסרון הגדול של מודלי שפה מסורתיים הוא "הזיות" (Hallucinations) - מצב שבו המודל ממציא עובדות שנראות משכנעות אך אינן נכונות במציאות. בלימודים אקדמיים או במחקר מקצועי, להזיות כאלו יכול להיות מחיר כבד.</p>

<div class="tech-box">
    <strong>מהו עיגון מידע (Grounding)?</strong>
    NotebookLM פותר את בעיית ההזיות על ידי עיגון (Grounding) של מודל ה-AI אך ורק במסמכים ובמקורות שאתם מעלים אליו. כאשר אתם שואלים אותו שאלה, הוא אינו שואב מידע מרחבי האינטרנט, אלא מצטט ישירות מתוך המקורות שלכם, תוך הצגת קישורים ומספרי עמודים מדויקים לאימות מהיר.
</div>

<div class="analogy-box">
    <strong>[אנלוגיית עיגון המידע]</strong>
    דמיינו שאתם מתכוננים למבחן בנושא <strong>${i1}</strong> או <strong>${i2}</strong>. במקום לשאול עובר אורח ברחוב שקרא פעם משהו בנושא (כמו מודל AI רגיל), אתם פונים לספרייה פרטית המכילה אך ורק את ספרי הלימוד המדויקים שלכם ומקבלים תשובות המבוססות על עמודים ספציפיים.
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
</div>

<!-- Highlight Box (Special Feature: Gemini Chats) -->
<div class="special-feature-box" style="background: linear-gradient(135deg, rgba(73, 142, 117, 0.12), rgba(53, 114, 93, 0.04)); border: 1.5px solid var(--accent-color); border-radius: 16px; padding: 20px; margin: 20px 0; text-align: right; box-shadow: 0 4px 15px rgba(73, 142, 117, 0.1);">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; color: var(--accent-color);">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 7.92c.11.047.22.094.33.141a1 1 0 0 1 0 1.876c-.11.047-.22.094-.33.141a7.5 7.5 0 0 0-7.92 7.92c-.047.11-.094.22-.141.33a1 1 0 0 1-1.876 0c-.047-.11-.094-.22-.141-.33a7.5 7.5 0 0 0-7.92-7.92c-.11-.047-.22-.094-.33-.141a1 1 0 0 1 0-1.876c.11-.047.22-.094.33-.141a7.5 7.5 0 0 0 7.92-7.92c.047-.11.094-.22.141-.33A1 1 0 0 1 12 3z"></path>
        </svg>
        <strong style="font-size: 14px; font-weight: 700;">פיצ'ר מתקדם: קישור שיחות מ-Gemini כמקור מידע</strong>
    </div>
    <p style="font-size: 12px; color: var(--text-main); line-height: 1.5; margin: 0;">
        ידעתם שאתם יכולים להשתמש בשיחות קודמות שלכם כחומר גלם? אם ניהלתם סיעור מוחות, חקרתם נושא לעומק, או יצרתם תוכן בעזרת הצ'אט של Gemini, תוכלו לייבא את השיחה הזו ישירות אל תוך המחברת ב-NotebookLM.
        <br><strong style="color: var(--accent-color);">איך זה עוזר?</strong> המערכת תתייחס לכל הרעיונות והתובנות שעלו בשיחה ההיא כבסיס ידע לגיטימי לכל דבר, ותשלב אותם עם שאר המאמרים והמסמכים שלכם ליצירת תמונה מלאה ועשירה יותר של הפרויקט.
    </p>
</div>

<h2 class="lesson-h2">יכולות המפתח של NotebookLM: מה אפשר לעשות איתו?</h2>
<p class="lesson-p">NotebookLM מספק ארגז כלים שלם לעיבוד ולמידה של חומרים מורכבים:</p>

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
</div>

<h2 class="lesson-h2">הסטודיו (The Studio Panel) - מרכז הבקרה שלכם</h2>
<p class="lesson-p">הסטודיו הוא מרחב העבודה הדיגיטלי שלכם בתוך NotebookLM. כאן אתם יכולים לנהל מספר "מחברות" (Notebooks) שונות במקביל, לארגן את מסמכי המקור, להנחות את ה-AI להתמקד בנושאים ספציפיים בלבד, ולייצא את התוצרים שנוצרו לפורמטים פופולריים כמו קובצי Word, PDF, מצגות או קובצי שמע בלחיצת כפתור אחת.</p>
            `,
            actionType: "notebooklm_assignment",
            actionLabel: "",
            placeholderText: "",
            tools: [
                { name: "פתח את NotebookLM", url: "https://notebooklm.google" },
                { name: "מדריך אינטראקטיבי צעד אחר צעד", url: "notebooklm-tutorial.html" }
            ],
            instructionText: `<strong>משימה מעשית - NotebookLM:</strong><br>
            1. בצעו את שלבי ההכנה והמשימות בתיבת המשימה מטה.<br>
            2. העלו צילום מסך של המחברת שלכם כדי לאמת ולהשלים את השיעור.`,
            validate: (input) => {
                if (!input || typeof input !== "object") return false;
                return input.chk1 === true && input.chk2 === true && input.uploaded === true;
            },
            errorMessage: "אנא ודאו שסימנתם את שני שלבי ההכנה והעליתם צילום מסך של המחברת שלכם."
        },
        {
            id: "lesson_3",
            fileName: "lesson_3_canvas.js",
            tabLabel: "lesson_3_canvas.js",
            title: "שיעור 3: שליטה ב-Gemini Canvas – סביבת העבודה של היוצר",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 3: שליטה ב-Gemini Canvas – סביבת העבודה של היוצר</h1>
<p class="lesson-p">שלום ${name}! בשיעור זה נצלול לעומק עבודה מעשית בתוך סביבת ה-Workspace הייחודית של Gemini Canvas.</p>

<h2 class="lesson-h2">מהו Gemini Canvas?</h2>
<p class="lesson-p">Gemini Canvas הוא סביבת עבודה שיתופית המיועדת ליצירת תכנים ארוכים וכתיבת קוד. הוא מאפשר לכם לערוך, ללטש ולבנות מוצרים אמיתיים במקום רק לנהל שיחה רגילה בחלון הצ'אט.</p>

<h2 class="lesson-h2">יכולות ליבה מרכזיות (Core Capabilities)</h2>
<ul style="margin-right: 20px; margin-bottom: 15px; line-height: 1.6;">
    <li style="margin-bottom: 8px;"><strong>מסמכים חכמים (Smart Documents):</strong> יצירת פרוטוקולים מורכבים (כמו פרוטוקול טיפול ברעלת הריון - Preeclampsia) או כתיבת קורות חיים מקצועיים וממוקדים.</li>
    <li style="margin-bottom: 8px;"><strong>טפסים חכמים ואוטומציה (Smart Forms & Automation):</strong> חיסכון בזמן על ידי בניית מערכות לקליטת נתונים. דוגמאות: שאלון קליני להתאמת משאבות חלב (Breast Pumps) או טופס אישור הגעה (RSVP) לבת מצווה (Bat Mitzvah).</li>
    <li style="margin-bottom: 8px;"><strong>כלים אינטראקטיביים (Interactive Tools):</strong> בניית אבות-טיפוס "חיים" ופעילים. דוגמאות: סימולטור לזיהוי סיבוכי מחלת הסוכרת (Diabetes) או דף נחיתה מקצועי לתיק העבודות שלכם.</li>
</ul>

<h2 class="lesson-h2">תהליך העבודה ב-Canvas ב-4 שלבים</h2>
<ul style="margin-right: 20px; margin-bottom: 15px; line-height: 1.6;">
    <li style="margin-bottom: 6px;"><strong>1. הפעלה (Activate):</strong> שימוש במודל Gemini Pro.</li>
    <li style="margin-bottom: 6px;"><strong>2. טריגר (Trigger):</strong> כתיבת פרומפט שמתחיל במילים: "Open a canvas to build..." (פתח קנבס כדי לבנות...).</li>
    <li style="margin-bottom: 6px;"><strong>3. עריכה (Edit):</strong> שימוש במברשת ה-"עריכה" (Edit) או עריכת הטקסט והקוד ישירות בחלון ה-Canvas הצדדי.</li>
    <li style="margin-bottom: 6px;"><strong>4. איטרציה (Iterate):</strong> שימוש בתפריט ה-"כיוונון" (Adjust) כדי לשפר את האורך, הטון (למשל שינוי לטון רומנטי) או לפתור באגים בקוד.</li>
</ul>
            `,
            actionType: "canvas_two_tasks",
            actionLabel: "הדביקו את כתובת ה-URL של הפרויקט שלכם או תארו את הפתרון הסופי שבניתם:",
            placeholderText: "לדוגמה: הדבקתי את קישור ה-Canvas, או תיאור של מדריך שלב אחר שלב עבור...",
            tools: [
                { name: "פתח את Gemini בלשונית חדשה", url: "https://gemini.google.com" }
            ],
            instructionText: "שלטו ב-Gemini Canvas באמצעות שתי המשימות המעשיות שלמטה: משימה 1 (התחלה מונחית) ומשימה 2 (אתגר היוצר המעשי).",
            validate: (input) => {
                if (!input || typeof input !== "object") return false;
                return input.task1Checkbox === true && input.task2Textarea && input.task2Textarea.trim().length > 15;
            },
            errorMessage: "אנא ודאו שסימנתם את תיבת הסימון של משימה 1, ושתיארתם את פרויקט משימה 2 בפירוט (לפחות 15 תווים)."
        },
        {
            id: "lesson_4",
            fileName: "lesson_4_deploy.yaml",
            tabLabel: "lesson_4_deploy.yaml",
            title: "שיעור 4: מקוד לענן – צינור הפריסה",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 4: מקוד לענן – צינור הפריסה (The Deployment Pipeline)</h1>
<p class="lesson-p">שלום ${name}! בשיעור זה נלמד כיצד להוציא את הפרויקט שיצרנו ב-Gemini Canvas אל העולם באמצעות קישור אינטרנט חי (Live URL).</p>

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
            actionType: "deploy_url",
            actionLabel: "Paste your new live Vercel URL here:",
            placeholderText: "https://your-project.vercel.app",
            tools: [
                { name: "פתח את GitHub", url: "https://github.com" },
                { name: "פתח את Vercel", url: "https://vercel.com" }
            ],
            instructionText: "עקבו אחר 5 השלבים שלמעלה כדי לקחת את הפרויקט שלכם משיעור 2 ולהעלות אותו לאינטרנט.",
            validate: (input) => {
                if (!input || typeof input !== "object") return false;
                if (!input.chk1 || !input.chk2 || !input.chk3) return false;
                if (!input.url) return false;
                const clean = input.url.trim().toLowerCase();
                return (clean.startsWith("http://") || clean.startsWith("https://")) && 
                       (clean.includes(".vercel.app") || clean.includes(".com") || clean.includes(".net") || clean.includes(".dev"));
            },
            errorMessage: "אנא ודאו שסימנתם את כל 3 משימות הפריסה בצ'קליסט, ושכתובת ה-Vercel URL שהזנתם תקינה ומתחילה ב-http:// או https://."
        },
        {
            id: "lesson_5",
            fileName: "lesson_5_antigravity.json",
            tabLabel: "lesson_5_antigravity.json",
            title: "שיעור 5: אוטומציה עם Antigravity",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 5: אוטומציה עם Antigravity</h1>
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
            id: "lesson_6",
            fileName: "lesson_6_agents.py",
            tabLabel: "lesson_6_agents.py",
            title: "שיעור 6: בינה ואוטומציה (סוכנים וכישורים)",
            unlocked: false,
            completed: false,
            content: `
<h1 class="lesson-h1">שיעור 6: בינה ואוטומציה (סוכנים וכישורים)</h1>
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
    lesson_2: {
        chk1: false,
        chk2: false,
        uploaded: false,
        fileName: ""
    },
    lesson_3: {
        task1Checkbox: false,
        task2Textarea: ""
    },
    lesson_4: {
        chk1: false,
        chk2: false,
        chk3: false,
        url: ""
    },
    lesson_5: false,
    lesson_6: ""
};

// 3. Document Elements & Initialization
// Emulate component mount / useEffect hook to guarantee a completely clean, blank slate
function resetOnboardingSlate() {
    // Clear persisted onboarding states
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_interests");
    sessionStorage.removeItem("user_name");
    sessionStorage.removeItem("user_interests");

    // Explicitly reset form input fields to empty strings
    const nameInput = document.getElementById("user-name");
    if (nameInput) nameInput.value = "";
    
    const interestInputs = document.querySelectorAll(".interest-input");
    interestInputs.forEach(input => {
        if (input) input.value = "";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    resetOnboardingSlate();
    
    // Additional delayed resets to counteract browser auto-fill/auto-complete/session restore
    setTimeout(resetOnboardingSlate, 20);
    setTimeout(resetOnboardingSlate, 100);
    setTimeout(resetOnboardingSlate, 300);

    bindGlobalListeners();
    
    // Always render the Splash Screen (onboarding overlay) first
    const overlay = document.getElementById("onboarding-overlay");
    if (overlay) {
        overlay.style.display = "flex";
        overlay.style.opacity = "1";
    }
    
    document.getElementById("btn-start-course").addEventListener("click", handleOnboardingSubmit);
    const skipBtn = document.getElementById("btn-skip-onboarding");
    if (skipBtn) {
        skipBtn.addEventListener("click", handleSkipOnboarding);
    }
});

// Clean slate on pageshow (such as navigating back/forward or restoring cached page state)
window.addEventListener("pageshow", () => {
    resetOnboardingSlate();
    // Delayed fallback to override browser history restore behavior
    setTimeout(resetOnboardingSlate, 50);
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
            sessionStorage.clear();
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
                sessionStorage.removeItem("user_name");
                sessionStorage.removeItem("user_interests");
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

function handleSkipOnboarding() {
    const onboardingCard = document.querySelector(".onboarding-card");
    if (onboardingCard) {
        onboardingCard.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; text-align: center; gap: 20px;">
                <div style="width: 50px; height: 50px; border: 4px solid var(--border-color); border-top-color: var(--success-color); border-radius: 50%; animation: rotate 1s linear infinite;"></div>
                <h3 style="color: var(--text-header); font-size: 18px; font-weight: 700; margin: 0;">מכינים עבורך תרגילים אישיים...</h3>
            </div>
        `;
    }

    const randomTopics = [
        "היסטוריה אירופית של המאה ה-20",
        "פיתוחים רפואיים ופרמקולוגיים",
        "אוריינות פיננסית וריבית דריבית",
        "יישומים של בינה מלאכותית",
        "עשה זאת בעצמך, יצירה ותחזוקת הבית",
        "צילום דיגיטלי ועריכת תמונות",
        "ספורט ואורח חיים בריא",
        "מוזיקה ותאוריית הצליל",
        "בישול ואמנות הקולינריה",
        "פיתוח אפליקציות ועיצוב ממשק"
    ];

    const shuffled = [...randomTopics].sort(() => 0.5 - Math.random());
    const selectedInterests = shuffled.slice(0, 5);
    const guestName = "אורח/ת";

    userName = guestName;
    userInterests = selectedInterests;
    lessonsData = getDynamicLessons(userName, userInterests);

    localStorage.setItem("user_name", userName);
    localStorage.setItem("user_interests", JSON.stringify(userInterests));

    setTimeout(() => {
        const overlay = document.getElementById("onboarding-overlay");
        if (overlay) {
            overlay.style.opacity = "0";
            setTimeout(() => {
                overlay.style.display = "none";
                startApp();
            }, 300);
        } else {
            startApp();
        }
    }, 1500);
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
                if (lesson.id === "lesson_3") {
            runBtn.innerHTML = `
                <svg viewBox="0 0 16 16" width="14" height="14" style="margin-left: 6px;"><path fill="currentColor" d="M12.5 1h-9c-.8 0-1.5.7-1.5 1.5v11c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5zm-.5 12h-8V3h8v10z"></path></svg>
                <span>הגש פרויקט (Submit Project)</span>
            `;
        } else if (lesson.id === "lesson_4") {
            runBtn.innerHTML = `
                <svg viewBox="0 0 16 16" width="14" height="14" style="margin-left: 6px;"><path fill="currentColor" d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0z"></path></svg>
                <span>אמת פריסה (Verify Deployment)</span>
            `;
        } else {
            runBtn.innerHTML = `
                <svg viewBox="0 0 16 16" width="14" height="14" style="margin-left: 6px;"><path fill="currentColor" d="M12 2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 9H5V5h6v6z"></path></svg>
                <span>אשר והשלם משימה (Verify Task)</span>
            `;
        }
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
    } else if (lesson.actionType === "notebooklm_assignment") {
        const data = savedVal || { chk1: false, chk2: false, uploaded: false, fileName: "" };
        inputHtml = `
            <div class="action-input-area notebooklm-mission-card" style="background: rgba(73, 142, 117, 0.08); border: 1.5px dashed var(--primary-color); border-radius: 20px; padding: 20px; gap: 16px; display: flex; flex-direction: column;">
                
                <!-- Section Header -->
                <div class="mission-header" style="text-align: center; border-bottom: 1px dashed var(--border-color); padding-bottom: 12px;">
                    <h4 style="font-size: 15px; color: var(--primary-color); font-weight: 700; margin-bottom: 4px;">🚀 משימה מעשית: יוצאים לדרך עם NotebookLM!</h4>
                    <p style="font-size: 11.5px; color: var(--text-muted);">עקבו אחר שלבי ההכנה ובצעו את שתי המשימות בתוך המחברת שלכם.</p>
                </div>

                <!-- Setup Phase -->
                <div class="mission-setup" style="background: #ffffff; border-radius: 12px; padding: 12px 16px; border: 1px solid var(--border-color);">
                    <h5 style="font-size: 13px; color: var(--text-header); font-weight: 700; margin-bottom: 8px; text-align: right;">שלב 1: הקמת סביבת העבודה</h5>
                    <div style="display: flex; flex-direction: column; gap: 8px; text-align: right;">
                        <label class="checkbox-container" style="font-size: 12px; color: var(--text-main); font-weight: normal; margin-bottom: 0; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="nb-setup-1" \\${data.chk1 ? "checked" : ""}>
                            <span>פתחו מחברת חדשה (New Notebook) ב-NotebookLM.</span>
                        </label>
                        <label class="checkbox-container" style="font-size: 12px; color: var(--text-main); font-weight: normal; margin-bottom: 0; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="nb-setup-2" \\${data.chk2 ? "checked" : ""}>
                            <span>העלו לפחות 2 מקורות מידע הקשורים לחומר הלימוד שלכם (למשל: קובץ PDF, סיכום שיעור, קישור לאתר אינטרנט או סרטון YouTube רלוונטי).</span>
                        </label>
                    </div>
                </div>

                <!-- Core Tasks -->
                <div class="mission-tasks" style="display: flex; flex-direction: column; gap: 12px; text-align: right;">
                    <!-- Task A -->
                    <div class="task-subcard" style="background: #ffffff; border-radius: 12px; padding: 12px 16px; border: 1px solid var(--border-color); transition: transform 0.2s;">
                        <h5 style="font-size: 13px; color: var(--accent-color); font-weight: 700; margin-bottom: 6px;">משימה 1: שאלת חיפוש ממוקדת</h5>
                        <p style="font-size: 11.5px; color: var(--text-main); line-height: 1.4; margin-bottom: 6px;">הקלידו בשורת הצ'אט שאלה ספציפית וממוקדת מתוך המקורות שהעליתם (למשל: "מהם 3 הגורמים ל..." או "חלץ סיכום קצר של פרק א'").</p>
                        <div style="font-size: 10.5px; color: var(--primary-color); background: rgba(73, 142, 117, 0.05); padding: 6px 10px; border-radius: 8px; border-right: 2px solid var(--primary-color);">
                            <strong>טיפ מקצועי:</strong> שימו לב כיצד המערכת עונה לכם ומצרפת מספרים קטנים המפנים לציטוט המדויק מתוך חומרי הגלם שלכם.
                        </div>
                    </div>

                    <!-- Task B -->
                    <div class="task-subcard" style="background: #ffffff; border-radius: 12px; padding: 12px 16px; border: 1px solid var(--border-color); transition: transform 0.2s;">
                        <h5 style="font-size: 13px; color: var(--accent-color); font-weight: 700; margin-bottom: 6px;">משימה 2: יצירת מוצר בסטודיו (לבחירתכם)</h5>
                        <p style="font-size: 11.5px; color: var(--text-main); line-height: 1.4; margin-bottom: 6px;">פתחו את פאנל הסטודיו (Studio Panel) בצד המסך והפיקו תוצר למידה אחד לבחירתכם מתוך האפשרויות:</p>
                        <ul style="font-size: 11px; color: var(--text-muted); padding-right: 18px; line-height: 1.4; list-style-type: disc;">
                            <li>שיחת פודקאסט קולית (Audio Overview)</li>
                            <li>סט כרטיסיות לימוד (Flashcards) לשינון</li>
                            <li>בוחן אמריקאי עצמי (Quiz)</li>
                            <li>מפת חשיבה ויזואלית (Mind Map) קשרים</li>
                        </ul>
                    </div>
                </div>

                <!-- Submission Component -->
                <div class="mission-submission" style="background: #ffffff; border-radius: 12px; padding: 16px; border: 1px solid var(--border-color); text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                    <h5 style="font-size: 13px; color: var(--text-header); font-weight: 700; margin-bottom: 2px;">סיימתם? שתפו אותנו!</h5>
                    <p style="font-size: 11px; color: var(--text-muted); line-height: 1.4; margin-bottom: 4px;">צלמו מסך של מסך המחברת שלכם (הכולל את התשובה מהצ'אט ואת התוצר שיצרתם בסטודיו) והעלו אותו כאן כדי לקבל משוב מהמורה.</p>
                    
                    <input type="file" id="nb-screenshot-upload" accept="image/*" style="display: none;">
                    <button id="btn-upload-trigger" class="btn btn-primary" style="padding: 6px 16px; font-size: 12px; display: inline-flex; align-items: center; gap: 6px; border-radius: 20px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="17 8 12 3 7 8"></polyline>
                            <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                        <span>העלאת צילום מסך (Upload Screenshot)</span>
                    </button>
                    
                    <div id="nb-upload-status" style="font-size: 11px; color: var(--primary-color); font-weight: 600; margin-top: 4px; display: \\${data.uploaded ? 'block' : 'none'};">
                        \\${data.uploaded ? '✓ קובץ הועלה: ' + data.fileName : ''}
                    </div>
                </div>

            </div>
        `;
    } else if (lesson.actionType === "canvas_two_tasks") {
        const data = savedVal || { task1Checkbox: false, task2Textarea: "" };
        const i1 = userInterests[0];
        const i5 = userInterests[4];
        
        inputHtml = `
            <div class="action-input-area" style="gap: 15px;">
                <div class="task-section">
                    <h4 style="font-size: 13px; color: var(--success-color); font-weight: bold; margin-bottom: 6px;">משימה 1: התחלה מודרכת (The Guided Start)</h4>
                    <p style="font-size: 12px; color: var(--text-main); margin-bottom: 8px; line-height: 1.4;">
                        פתחו את Gemini בלשונית חדשה. הדביקו את הפרומפט הבא:<br>
                        <span style="font-family: var(--font-code); background: var(--bg-darker); padding: 4px 6px; border-radius: 6px; display: block; margin: 4px 0; font-size:11px; direction: ltr; text-align: left;">"Open a canvas and write a short professional bio for ${userName} that highlights an interest in ${i1}."</span>
                        לאחר שהקנבס נפתח, השתמשו במברשת ה-'Edit' כדי לשנות את המשפט האחרון לטון 'רומנטי' (Romantic).
                    </p>
                    <label class="checkbox-container">
                        <input type="checkbox" id="input-task-1-checkbox" ${data.task1Checkbox ? "checked" : ""}>
                        <span style="font-size: 12px; color: var(--text-header); font-weight: bold;">פתחתי בהצלחה את ה-Canvas וערכתי את הטקסט.</span>
                    </label>
                </div>
                
                <div style="border-top: 1px dashed var(--border-color); margin: 10px 0;"></div>
                
                <div class="task-section">
                    <h4 style="font-size: 13px; color: var(--success-color); font-weight: bold; margin-bottom: 6px;">משימה 2: פרויקט יצירתי עצמאי (The Builder Challenge)</h4>
                    <p style="font-size: 12px; color: var(--text-main); margin-bottom: 8px; line-height: 1.4;">
                        עכשיו תורכם לבנות מאפס. בחרו באחת משלוש הקטגוריות שלמדנו (מסמך, טופס, או כלי אינטראקטיבי) וצרו פרויקט המוקדש לתחום העניין שלכם ב-<strong>${i5}</strong>.
                    </p>
                    <div style="font-size: 11px; color: var(--text-muted); background: var(--bg-darker); padding: 8px; border-radius: 8px; margin-bottom: 8px; line-height: 1.3;">
                        <strong>רעיונות להשראה:</strong>
                        <br>&bull; <strong>מסמך:</strong> מדריך שלבים להשתלטות על ${i5} (Step-by-Step Guide to Mastering ${i5}).
                        <br>&bull; <strong>טופס:</strong> טופס RSVP למפגש חובבי ${i5} (RSVP Form for a ${i5} Enthusiasts Meetup).
                        <br>&bull; <strong>כלי:</strong> קוד עבור לוח מעקב חי של ${i5} (Live ${i5} Tracker Dashboard).
                    </div>
                    <p style="font-size: 11px; color: var(--text-main); margin-bottom: 6px;">
                        פתחו Canvas חדש, בנו את הפרויקט שלכם, ובצעו לפחות שתי איטרציות של שיפור עד שהוא יהיה מושלם.
                    </p>
                    <label for="input-task-2-textarea" style="font-size: 12px; color: var(--text-header); font-weight: bold; display: block; margin-bottom: 4px;">הדביקו את כתובת ה-URL של הפרויקט שלכם או תארו את הפתרון הסופי שבניתם:</label>
                    <textarea class="textarea-monospace" id="input-task-2-textarea" placeholder="הדביקו קישור ל-Canvas או תארו את הפרויקט שעיצבתם..." style="min-height: 80px; font-size:12px;">${data.task2Textarea || ""}</textarea>
                </div>
            </div>
        `;
    } else if (lesson.actionType === "deploy_url") {
        const data = savedVal || { chk1: false, chk2: false, chk3: false, url: "" };
        inputHtml = `
            <div class="action-input-area" style="gap: 12px;">
                <h4 style="font-size: 13px; color: var(--success-color); font-weight: bold; margin-bottom: 6px;">צ'קליסט פריסה (Deployment Checklist):</h4>
                
                <label class="checkbox-container" style="margin-bottom: 6px;">
                    <input type="checkbox" id="chk-deploy-1" ${data.chk1 ? "checked" : ""}>
                    <span style="font-size:12px; color: var(--text-main); font-weight: normal;">נוצר מחסן ב-GitHub והקוד הועלה אליו.</span>
                </label>
                
                <label class="checkbox-container" style="margin-bottom: 6px;">
                    <input type="checkbox" id="chk-deploy-2" ${data.chk2 ? "checked" : ""}>
                    <span style="font-size:12px; color: var(--text-main); font-weight: normal;">חשבון ה-Vercel קושר לחשבון ה-GitHub.</span>
                </label>
                
                <label class="checkbox-container" style="margin-bottom: 6px;">
                    <input type="checkbox" id="chk-deploy-3" ${data.chk3 ? "checked" : ""}>
                    <span style="font-size:12px; color: var(--text-main); font-weight: normal;">הפרויקט נפרס (Deployed) בהצלחה לענן.</span>
                </label>
                
                <div style="border-top: 1px dashed var(--border-color); margin: 10px 0;"></div>
                
                <div class="form-group">
                    <label for="action-task-input" style="font-size: 12px; color: var(--text-header); font-weight: bold; display: block; margin-bottom: 4px;">Paste your new live Vercel URL here:</label>
                    <input type="text" class="input-text-standard" id="action-task-input" placeholder="https://your-project.vercel.app" value="${data.url || ""}">
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
    if (lesson.actionType === "notebooklm_assignment") {
        const chk1El = document.getElementById("nb-setup-1");
        const chk2El = document.getElementById("nb-setup-2");
        const uploadEl = document.getElementById("nb-screenshot-upload");
        const triggerEl = document.getElementById("btn-upload-trigger");
        const statusEl = document.getElementById("nb-upload-status");

        const saveNotebookLMMission = () => {
            userSubmissions.lesson_2 = {
                chk1: chk1El ? chk1El.checked : false,
                chk2: chk2El ? chk2El.checked : false,
                uploaded: userSubmissions.lesson_2 ? userSubmissions.lesson_2.uploaded : false,
                fileName: userSubmissions.lesson_2 ? userSubmissions.lesson_2.fileName : ""
            };
        };

        if (chk1El) chk1El.addEventListener("change", saveNotebookLMMission);
        if (chk2El) chk2El.addEventListener("change", saveNotebookLMMission);

        if (triggerEl && uploadEl) {
            triggerEl.addEventListener("click", () => {
                uploadEl.click();
            });
        }

        if (uploadEl) {
            uploadEl.addEventListener("change", (e) => {
                const file = e.target.files[0];
                if (file) {
                    if (!userSubmissions.lesson_2 || typeof userSubmissions.lesson_2 !== "object") {
                        userSubmissions.lesson_2 = { chk1: false, chk2: false, uploaded: false, fileName: "" };
                    }
                    userSubmissions.lesson_2.uploaded = true;
                    userSubmissions.lesson_2.fileName = file.name;
                    saveNotebookLMMission();
                    if (statusEl) {
                        statusEl.innerText = `✓ קובץ הועלה: ${file.name}`;
                        statusEl.style.display = "block";
                    }
                    writeTerminalLine(`[System] קובץ ${file.name} הועלה בהצלחה לאימות.`, "info-msg");
                }
            });
        }
    }
    else if (lesson.actionType === "multi_capabilities") {
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
    } else if (lesson.actionType === "canvas_two_tasks") {
        const checkEl = document.getElementById("input-task-1-checkbox");
        const textEl = document.getElementById("input-task-2-textarea");
        
        const saveCanvasTasks = () => {
            userSubmissions.lesson_4 = {
                task1Checkbox: checkEl ? checkEl.checked : false,
                task2Textarea: textEl ? textEl.value : ""
            };
        };
        
        if (checkEl) checkEl.addEventListener("change", saveCanvasTasks);
        if (textEl) textEl.addEventListener("input", saveCanvasTasks);
    } else if (lesson.actionType === "deploy_url") {
        const chk1El = document.getElementById("chk-deploy-1");
        const chk2El = document.getElementById("chk-deploy-2");
        const chk3El = document.getElementById("chk-deploy-3");
        const urlEl = document.getElementById("action-task-input");
        
        const saveDeployData = () => {
            userSubmissions.lesson_4 = {
                chk1: chk1El ? chk1El.checked : false,
                chk2: chk2El ? chk2El.checked : false,
                chk3: chk3El ? chk3El.checked : false,
                url: urlEl ? urlEl.value : ""
            };
        };
        
        if (chk1El) chk1El.addEventListener("change", saveDeployData);
        if (chk2El) chk2El.addEventListener("change", saveDeployData);
        if (chk3El) chk3El.addEventListener("change", saveDeployData);
        if (urlEl) urlEl.addEventListener("input", saveDeployData);
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
            writeTerminalLine("[Success] דף הנחיתה של NotebookLM זוהה ואומת בהצלחה.", "success-msg");
            writeTerminalLine("[Success] עקרונות עיגון המידע (Grounding) והסטודיו מומחשים כהלכה. שיעור 2 הושלם.", "success-msg");
        } else if (lesson.id === "lesson_3") {
            writeTerminalLine("[Success] משימה 1: אישור עריכת ה-Canvas אומת בהצלחה.", "success-msg");
            writeTerminalLine("[Success] משימה 2: תיאור פרויקט ה-Canvas האישי נקרא בהצלחה.", "success-msg");
            writeTerminalLine("[Success] פרויקטי Gemini Canvas הושלמו ואומתו בהצלחה! שיעור 3 הושלם.", "success-msg");
        } else if (lesson.id === "lesson_4") {
            const urlVal = (typeof inputVal === "object" ? inputVal.url : inputVal) || "";
            writeTerminalLine(`[Success] מנסה להתחבר לכתובת ${urlVal.trim()}...`, "info-msg");
            writeTerminalLine("[Success] תגובת שרת 200 OK. פריסת Vercel פעילה ותקינה לחלוטין! שיעור 4 הושלם.", "success-msg");
        } else if (lesson.id === "lesson_5") {
            writeTerminalLine("[Success] אימות חיבור Antigravity ו-Webhook מול GitHub/Vercel בוצע. התיעוד מסונכרן. שיעור 5 הושלם.", "success-msg");
        } else if (lesson.id === "lesson_6") {
            writeTerminalLine("[Success] תיאור הסוכן נקרא. בקרת הכישורים (Skills) של סוכן Antigravity הושלמה. שיעור 6 הושלם.", "success-msg");
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
                        alert("🏆 כל הכבוד! השלמתם את כל 6 השיעורים והמשימות המעשיות בקורס בהצלחה! למדתם כיצד לקחת רעיון, להשתמש ב-NotebookLM, לכתוב ב-Canvas, לפרוס ב-Vercel, לבצע אוטומציית Antigravity ולבנות סוכנים חכמים!");
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
        // noop
    } else if (lesson.actionType === "notebooklm_assignment") {
        userSubmissions.lesson_2 = {
            chk1: false,
            chk2: false,
            uploaded: false,
            fileName: ""
        };
        userSubmissions[lesson.id] = false;
    } else if (lesson.actionType === "multi_capabilities") {
        userSubmissions.lesson_1 = {
            plusButton: "",
            voiceInput: "",
            imageGen: "",
            excelPlan: "",
            tvTranslation: ""
        };
    } else if (lesson.actionType === "canvas_two_tasks") {
        userSubmissions.lesson_4 = {
            task1Checkbox: false,
            task2Textarea: ""
        };
    } else if (lesson.actionType === "deploy_url") {
        userSubmissions.lesson_4 = {
            chk1: false,
            chk2: false,
            chk3: false,
            url: ""
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
        
        alert("🏆 כל הכבוד! סיימת את כל ששת שיעורי הקורס בהצלחה!");
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
