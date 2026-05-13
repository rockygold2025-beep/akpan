// Typing animation
document.addEventListener("DOMContentLoaded", function () {
    let title = document.getElementById("hero-headline");
    if (title) {
        let spans = title.querySelectorAll("span");
        let words = [];
        spans.forEach(span => { words.push(span.innerHTML); span.innerHTML = ''; });
        let wordindex = 0, letterindex = 0;
        function typeletter() {
            if (wordindex < words.length) {
                if (letterindex < words[wordindex].length) {
                    spans[wordindex].innerHTML += words[wordindex][letterindex];
                    letterindex++;
                    setTimeout(typeletter, 100);
                } else {
                    letterindex = 0;
                    wordindex++;
                    setTimeout(typeletter, 100);
                }
            }
        }
        typeletter();
    }

    // Reveal on scroll
    const revealElements = document.querySelectorAll(".reveal-up");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("active"); });
    }, { threshold: 0.15 });
    revealElements.forEach(el => observer.observe(el));

    // Slider
    const slidesData = [
        {
            url: "../Image/messishake.png", topic: "Football",
            firstt: "Agence France-Presse-04 june 2023",
            secondt: "LIONEL MESSI LEAVING LIGUE 1 TEAM <br> PARIS SAINT-GERMAIN,CLUB CONFIRMS",
            thirdt: "The Europe Finals Top Scorer is the individual award for the player <br> that gained the highest points in the EurLeaugue Finals", textColor: "white"
        },
        {
            url: "../Image/basketsaverrr.jpg",
            topic: "Basketball",
            firstt: "Agence France-Presse-21 may 2023",
            secondt: "EUROLEAGUE TOP SCORER CLAIMS INDIVIDUAL <br> HONOUR AFTER RECORD PERFORMANCE",
            thirdt: "The EuroLeague Finals Top Scorer award is presented to the player who <br> records the highest totalpoints during the EuroLeague Finals",
            textColor: "white"
        },
        {
            url: "../Image/icehockeyimage.png",
            topic: "Ice Hockey",
            firstt: "Agence France-Presse-15 june 2023",
            secondt: "CONNOR McDAVID WINS STANLEY CUP FINALS MVP <br> AS TEAM LIFTS NHL TITLE,LEAGUE CONFIRMS",
            thirdt: "The stanley Cup Finals Most Valuable Player award,officially known as the conn Smythe Trophy,is presented to the player judged most valuable during the Nationl Hockey League playoffs",
            textColor: "white"
        },
        {
            url: "../Image/ok.png",
            topic: "Table tennis", firstt: "Agence France-Presse-28 june 2023",
            secondt: "WORLD TABLE TENNIS CHAMPIONSHIP FINAL <br> MVP HONOURED AFTER DOMINANT DISPLAY",
            thirdt: "At the world Table Tennis Championship,the most valuable player distinction is awarded to the athlete delivering the most exceptional performance in the final match", textColor: "white"
        },
    ];
    const slider = document.getElementById("slider-container");
    const dotsBox = document.getElementById("slider-dots");
    if (slider && dotsBox) {
        let index = 0;
        let timer;
        slidesData.forEach((s, i) => {
            const slide = document.createElement("div");
            slide.className = "slide";
            slide.innerHTML = `<div class="run">
            <img src="${s.url}" class="slide-img"></div><h4 class="slide-topic" style="color:${s.textColor};">${s.topic}</h4><p class="slide-date" style="color:${s.textColor};">${s.firstt}</p><h1 class="slide-headline" style="color:${s.textColor};">${s.secondt}</h1><p class="slide-description" style="color:${s.textColor};">${s.thirdt}</p>`;
            slider.appendChild(slide);

            const dot = document.createElement("div");
            dot.className = "dot";
            if (i === 0) dot.classList.add("active");
            dot.onclick = () => { goTo(i); restart(); };
            dotsBox.appendChild(dot);
        });
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");
        function goTo(i) {
            slides[index].classList.remove("active");
            dots[index].classList.remove("active");
            index = i;
            slides[index].classList.add("active");
            dots[index].classList.add("active");
        }
        function next() { goTo((index + 1) % slides.length); }
        function start() { timer = setInterval(next, 4000); }
        function restart() { clearInterval(timer); start(); }
        start();
    }

    // Back to top
    window.onscroll = function () {
        const btn = document.getElementById("backToTop");
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
            btn.style.display = "block";
        else btn.style.display = "none";
    };
    document.getElementById("backToTop").onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.nav-bar');
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // Theme toggle
    const toggleSwitch = document.getElementById('darkmode-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') { body.classList.add('dark-mode'); toggleSwitch.checked = true; }
    else { toggleSwitch.checked = false; }
    toggleSwitch.addEventListener('change', function () {
        if (this.checked) { body.classList.add('dark-mode'); localStorage.setItem('theme', 'dark'); }
        else { body.classList.remove('dark-mode'); localStorage.setItem('theme', 'light'); }
    });

    // Search overlay
    const searchBtn = document.querySelector('.search-button');
    const overlay = document.getElementById('search-overlay');
    const closeSearch = document.querySelector('.close-search');
    const searchInput = document.getElementById('overlay-search-input');
    searchBtn.addEventListener('click', () => { overlay.classList.add('active'); setTimeout(() => searchInput.focus(), 100); });
    function closeOverlay() { overlay.classList.remove('active'); searchInput.value = ''; }
    closeSearch.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.classList.contains('active')) closeOverlay(); });
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) { window.open(`https://www.google.com/search?q=site:yoursite.com+${encodeURIComponent(query)}`, '_blank'); closeOverlay(); }
        }
    });

    // ---------- Auth overlay with avatar circle (works for both signup & login) ----------
    const signupBtn = document.getElementById('signupBtn');
    const authOverlay = document.getElementById('auth-overlay');
    const closeAuth = document.querySelector('.close-auth');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const showLogin = document.getElementById('show-login');
    const showSignup = document.getElementById('show-signup');

    // Check if user is already logged in from localStorage
    const storedName = localStorage.getItem('sportNewsUser');
    if (storedName) {
        setLoggedInUser(storedName);
    }

    function setLoggedInUser(name) {
        // Replace the signup button with a circle avatar
        const avatar = document.createElement('span');
        avatar.className = 'user-avatar';
        avatar.id = 'userAvatar';
        avatar.title = `Logged in as ${name}`;
        avatar.textContent = name.charAt(0).toUpperCase();
        avatar.addEventListener('click', logout);
        signupBtn.replaceWith(avatar);
    }

    function logout() {
        localStorage.removeItem('sportNewsUser');
        // Reload to show the original signup button again
        location.reload();
    }

    signupBtn.addEventListener('click', () => {
        authOverlay.classList.add('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    closeAuth.addEventListener('click', () => {
        authOverlay.classList.remove('active');
    });

    authOverlay.addEventListener('click', (e) => {
        if (e.target === authOverlay) {
            authOverlay.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && authOverlay.classList.contains('active')) {
            authOverlay.classList.remove('active');
        }
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    });

    // Sign up form submission
    document.getElementById('signup-form-fields').addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('signup-name');
        const name = nameInput.value.trim();
        if (name) {
            localStorage.setItem('sportNewsUser', name);
            setLoggedInUser(name);
        }
        authOverlay.classList.remove('active');
        // Clear form fields
        nameInput.value = '';
        document.getElementById('signup-email').value = '';
        document.getElementById('signup-password').value = '';
        document.getElementById('terms').checked = false;
    });

    // Login form submission (with cool in‑form success message)
    document.getElementById('login-form-fields').addEventListener('submit', (e) => {
        e.preventDefault();
        const loginName = document.getElementById('login-name').value.trim();
        if (loginName) {
            // Show a nice success message inside the form
            const successDiv = document.getElementById('login-success-msg');
            successDiv.textContent = 'Login successful!';
            successDiv.style.display = 'block';

            // Store name and replace button
            localStorage.setItem('sportNewsUser', loginName);
            setLoggedInUser(loginName);

            // After 1.5 seconds, close overlay and clear fields
            setTimeout(() => {
                authOverlay.classList.remove('active');
                // Reset the success message and form fields
                successDiv.style.display = 'none';
                document.getElementById('login-name').value = '';
                document.getElementById('login-email').value = '';
                document.getElementById('login-password').value = '';
            }, 1500);
        }
    });
});