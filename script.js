// مصفوفة البيانات التي تحتوي على جميع تطبيقاتك وروابطها
const myApps = [
    {
        name: "Brawl QR Gift",
        version: "Latest",
        icon: "🎁",
        url: "https://drive.google.com/file/d/1EIQjL91ZROenF41BgXinqTqQ9RlPdVwu/view"
    },
    {
        name: "Download Tube",
        version: "v0.5 (Minecraft)",
        icon: "🎮",
        url: "https://drive.google.com/file/d/1QzZ6akAWG_aXi-k2ZIopNH-Des77Y9b5/view"
    },
    {
        name: "Download Tube",
        version: "v0.3 (Ramadan)",
        icon: "🌙",
        url: "https://drive.google.com/file/d/1Z--2pgN9K4SZ345feKPwU5ag-wi_OTUB/view"
    },
    {
        name: "Switch Style Launcher",
        version: "v1.0",
        icon: "🕹️",
        url: "https://drive.google.com/file/d/19a4fXk_MCC8fk-yNnXh44lk3g68WGuVG/view"
    },
    {
        name: "Video Downloader",
        version: "v0.1",
        icon: "📥",
        url: "https://drive.google.com/file/d/1aKcKFEIr4aSIqVa7PJk58goZGmVmdd7M/view"
    },
    {
        name: "App Project",
        version: "Release (1)",
        icon: "📦",
        url: "https://drive.google.com/file/d/14p4tO9S1w0mB7oLT-iy30Fwkow-2HuXl/view"
    }
];

// تحديد العناصر من صفحة HTML
const container = document.getElementById('apps');
const searchInput = document.getElementById('search');

/**
 * وظيفة لعرض التطبيقات في الصفحة
 * @param {string} filter - النص المراد البحث عنه
 */
function loadApps(filter = "") {
    // مسح المحتوى الحالي لتجنب التكرار
    container.innerHTML = "";

    // تصفية التطبيقات بناءً على الاسم أو الإصدار
    const filtered = myApps.filter(app => 
        app.name.toLowerCase().includes(filter.toLowerCase()) || 
        app.version.toLowerCase().includes(filter.toLowerCase())
    );

    // إنشاء كروت التطبيقات وإضافتها للواجهة
    filtered.forEach(app => {
        const card = `
            <div class="app-card">
                <div class="app-icon">${app.icon}</div>
                <span class="version">${app.version}</span>
                <h3>${app.name}</h3>
                <a href="${app.url}" target="_blank" class="download-btn">تحميل APK</a>
            </div>
        `;
        container.innerHTML += card;
    });

    // رسالة في حال لم يتم العثور على نتائج
    if (filtered.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: #888;'>عذراً، لم يتم العثور على التطبيق المطلوب.</p>";
    }
}

// مراقبة ما يكتبه المستخدم في شريط البحث
searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value;
    loadApps(searchTerm);
});

// تشغيل الوظيفة لأول مرة عند فتح الصفحة لعرض كل التطبيقات
loadApps();

console.log("Qais Store JS loaded successfully with " + myApps.length + " apps.");