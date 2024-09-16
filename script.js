// Tambahkan event listener pada setiap link
document.querySelectorAll('#myList li a').forEach((link) => {
  link.addEventListener('click', () => {
    // Tambahkan efek menari pada link yang diklik
    link.classList.add('animate');
    setTimeout(() => {
      link.classList.remove('animate');
    }, 500);
  });
});