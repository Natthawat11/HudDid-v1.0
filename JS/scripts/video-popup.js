// scripts/video-popup.js

// ดึงองค์ประกอบที่จำเป็น
const images = document.querySelectorAll('.content img');
const videoPopup = document.getElementById('video-popup');
const popupVideo = document.getElementById('popup-video');
const closeVideo = document.getElementById('close-video');

// เพิ่มเหตุการณ์เมื่อคลิกที่รูป
images.forEach(image => {
  image.addEventListener('click', () => {
    const videoSrc = image.getAttribute('data-video'); // ดึง URL วิดีโอจาก data-video
    popupVideo.src = videoSrc;
    videoPopup.style.display = 'flex'; // แสดง Pop-up
    popupVideo.play(); // เล่นวิดีโอ
  });
});

// ปิดวิดีโอเมื่อกดปุ่มปิด
closeVideo.addEventListener('click', () => {
  videoPopup.style.display = 'none'; // ซ่อน Pop-up
  popupVideo.pause(); // หยุดวิดีโอ
  popupVideo.src = ''; // ล้าง URL วิดีโอ
});

// ปิดวิดีโอเมื่อคลิกที่พื้นที่นอกวิดีโอ
videoPopup.addEventListener('click', (e) => {
  if (e.target === videoPopup) {
    videoPopup.style.display = 'none';
    popupVideo.pause();
    popupVideo.src = '';
  }
});
