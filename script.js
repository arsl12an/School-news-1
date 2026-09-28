// إظهار القسم الذي يختاره المستخدم

function showSection(sectionId) {

    // إخفاء جميع الأقسام
    const sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    // إظهار القسم المطلوب
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active");
    }

    // العودة إلى أعلى الصفحة
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// زر الترحيب

function welcomeMessage() {

    alert("أهلاً وسهلاً بك في موقع مدرستنا 🏫");
}