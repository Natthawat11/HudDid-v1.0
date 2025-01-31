document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("video-modal");
    const closeModal = document.querySelector(".close");
    const openModalBtn = document.getElementById("open-modal");
    const lessonVideo = document.getElementById("lesson-video"); // เปลี่ยนเป็น iframe
    const videoWrapper = document.querySelector(".video-wrapper");
    const prevBtn = document.getElementById("prev-level");
    const nextBtn = document.getElementById("next-level");
    const levelIndicator = document.getElementById("current-level");

    if (!lessonVideo || !openModalBtn || !modal) {
        console.warn("Some elements are missing in the DOM.");
        return;
    }

    // ซ่อน Modal และวิดีโอ
    modal.style.display = "none";
    videoWrapper.style.display = "none";

    const videos = [
        "https://www.youtube.com/embed/PeBP6KpwM-0?si=1KURGmypVKrTi5XU",
        "https://www.youtube.com/embed/2rRCBDzQVGk?si=FceoFQneFriqGTgq",
        "https://www.youtube.com/embed/H1B6ScA1ljA?si=knfdlJUG6gwLwarz",
        "https://www.youtube.com/uhlixh8eixY?si=XaxwUQ0pEs3kM0Gf",
        "https://www.youtube.com/mqUAlEwNfkU?si=Jhcgt4udISspsNDE",
        "https://www.youtube.com/embed/mqUAlEwNfkU?si=zYifPHYluFES6fw_",
        "https://www.youtube.com/CaFBg3j8Cyk?si=ouxIGtE23pdU3gl7"
    ];
    let currentLevel = 0;

    function updateVideo() {
        lessonVideo.src = videos[currentLevel] + "?autoplay=1&rel=0"; // อัปเดตลิงก์วิดีโอ
        levelIndicator.textContent = `Level ${currentLevel + 1}`;
    }

    // แสดง Modal และวิดีโอเมื่อกดปุ่ม
    openModalBtn.addEventListener("click", function () {
        modal.style.display = "flex";
        setTimeout(() => modal.style.opacity = "1", 50);
        videoWrapper.style.display = "flex";
        updateVideo();
    });

    function closeModalFunc() {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
            videoWrapper.style.display = "none";
            lessonVideo.src = ""; // หยุดเล่นวิดีโอเมื่อปิด Modal
        }, 300);
    }

    closeModal.addEventListener("click", closeModalFunc);

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModalFunc();
        }
    });

    prevBtn?.addEventListener("click", function () {
        if (currentLevel > 0) {
            currentLevel--;
            updateVideo();
        }
    });

    nextBtn?.addEventListener("click", function () {
        if (currentLevel < videos.length - 1) {
            currentLevel++;
            updateVideo();
        }
    });
});
