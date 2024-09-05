document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formni yuborishning oldini olish

    // Form elementlarini olish
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Xatolik xabarlarini tozalash
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    // Login ma'lumotlarini tekshirish
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
        return;
    }

    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        return;
    }

    // Xato login ma'lumotlari uchun misol
    // Bu yerda serverga so‘rov yuborishingiz mumkin
    if (username === 'Shaxriyor' && password === 'Hello') {
        // Agar login to‘g‘ri bo‘lsa, boshqa sahifaga o‘tish
        document.getElementById('successMessage').textContent = 'Login successful! Redirecting...';
        setTimeout(() => {
            window.location.href = 'pages/indexs.html';
        }, 1000); // 1 soniya kutib o‘tish
    } else {
        document.getElementById('usernameError').textContent = 'Invalid username or password';
    }
    if (username === 'Abdulaziz' && password === 'Hello') {
        // Agar login to‘g‘ri bo‘lsa, boshqa sahifaga o‘tish
        document.getElementById('successMessage').textContent = 'Login successful! Redirecting...';
        setTimeout(() => {
            window.location.href = 'pages/indexs.html';
        }, 1000); // 1 soniya kutib o‘tish
    } else {
        document.getElementById('usernameError').textContent = 'Invalid username or password';
    }
    if (username === 'Suhrobjon' && password === 'Hello') {
        // Agar login to‘g‘ri bo‘lsa, boshqa sahifaga o‘tish
        document.getElementById('successMessage').textContent = 'Login successful! Redirecting...';
        setTimeout(() => {
            window.location.href = 'pages/indexs.html';
        }, 1000); // 1 soniya kutib o‘tish
    } else {
        document.getElementById('usernameError').textContent = 'Invalid username or password';
    }
    if (username === 'Muxriddin' && password === 'Hello') {
        // Agar login to‘g‘ri bo‘lsa, boshqa sahifaga o‘tish
        document.getElementById('successMessage').textContent = 'Login successful! Redirecting...';
        setTimeout(() => {
            window.location.href = 'pages/indexs.html';
        }, 1000); // 1 soniya kutib o‘tish
    } else {
        document.getElementById('usernameError').textContent = 'Invalid username or password';
    }
});
