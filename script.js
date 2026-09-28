// فتح وإغلاق قائمة الهاتف

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("show");
}


// الانتقال بين أقسام الموقع

function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {

        section.classList.remove("active");

    });


    const selectedSection =
        document.getElementById(sectionId);


    if (selectedSection) {

        selectedSection.classList.add("active");

    }


    // إغلاق القائمة في الهاتف

    document
        .getElementById("navMenu")
        .classList.remove("show");


    // العودة إلى أعلى الصفحة

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });
}


// رسالة الترحيب

function welcomeMessage() {

    alert(
        "أهلاً وسهلاً بك في موقع مدرستنا 🏫"
    );
}


// زر اقرأ المزيد

function showMessage(messageId) {

    const message =
        document.getElementById(messageId);

    message.classList.toggle("show");
}


// الأخبار

function readNews(newsId) {

    const news =
        document.getElementById(newsId);

    news.classList.toggle("show");
}


// معلومات المدرسين

function teacherInfo(teacherId) {

    const teacher =
        document.getElementById(teacherId);

    teacher.classList.toggle("show");
}


// نموذج الاتصال

function sendMessage() {

    const name =
        document.getElementById("visitorName").value;

    const message =
        document.getElementById("visitorMessage").value;

    const result =
        document.getElementById("contactResult");


    if (name.trim() === "" ||
        message.trim() === "") {

        result.textContent =
            "⚠️ يرجى كتابة الاسم والرسالة أولاً.";

        return;
    }


    result.textContent =
        "✅ تم استلام رسالتك! شكراً لك " + name + " ❤️";


    document.getElementById("visitorName").value = "";

    document.getElementById("visitorMessage").value = "";
}
