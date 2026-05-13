  

       
        const slidesContainer = document.getElementById('slides-container');
        const dotsContainer = document.getElementById('dots-container');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const playPauseBtn = document.getElementById('play-pause-btn');
        const speedSlowBtn = document.getElementById('speed-slow');
        const speedNormalBtn = document.getElementById('speed-normal');
        const speedFastBtn = document.getElementById('speed-fast');
        const currentSlideSpan = document.getElementById('current-slide');
        const totalSlidesSpan = document.getElementById('total-slides');
       
        // Slideshow settings
        let currentSlideIndex = 0;
        let slideInterval;
        let slideSpeed = 3000;
        let isPlaying = true;

        // Create slideshow
        function initSlideshow() {
            console.log("Starting slideshow...");

            // Clear container
            slidesContainer.innerHTML = '';
            dotsContainer.innerHTML = '';
            errorMessage.style.display = 'none';

            // Filter out empty URLs
            const validImages = images.filter(img => img.url && img.url.trim() !== '');

           

            // Set total slides
            totalSlidesSpan.textContent = validImages.length;

            // Create each slide
            validImages.forEach((image, index) => {
                // Create slide
                const slide = document.createElement('div');
                slide.className = 'slide';
                slide.innerHTML = `
                    <img src="${image.url}" alt="${image.caption}" class="slide-image"> 
                    <div class="slide-caption">
                        <h3>${image.caption}</h3>
                        <p>${image.description}</p>
                    </div>
                `;
                slidesContainer.appendChild(slide);

                // Test if image loads
                const testImg = new Image();
                testImg.onload = () => {
                    console.log(`✅ Image loaded: ${image.url}`);
                };
                
                testImg.src = image.url;

                // Create dot
                const dot = document.createElement('div');
                dot.className = 'dot';
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            });

            // Start automatic slideshow
            startSlideshow();
        }

        // Show error message
        function showError(message) {
            errorText.innerHTML = message;
            errorMessage.style.display = 'block';
        }

        // Start automatic slideshow
        function startSlideshow() {
            clearInterval(slideInterval);
            if (isPlaying && images.length > 0) {
                slideInterval = setInterval(nextSlide, slideSpeed);
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
                playPauseBtn.classList.remove('pause');
            }
        }

        // Go to specific slide
        function goToSlide(index) {
            currentSlideIndex = index;
            updateSlidePosition();
            updateActiveDot();
            updateSlideCounter();
            resetInterval();
        }

        // Next slide
        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % images.length;
            updateSlidePosition();
            updateActiveDot();
            updateSlideCounter();
        }

        // Previous slide
        function prevSlide() {
            currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length;
            updateSlidePosition();
            updateActiveDot();
            updateSlideCounter();
            resetInterval();
        }

        // Move slides container
        function updateSlidePosition() {
            slidesContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
        }

        // Update active dot
        function updateActiveDot() {
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                if (index === currentSlideIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Update counter
        function updateSlideCounter() {
            currentSlideSpan.textContent = currentSlideIndex + 1;
        }

        // Reset timer
        function resetInterval() {
            if (isPlaying && images.length > 0) {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, slideSpeed);
            }
        }

        // Play/Pause
        function togglePlayPause() {
            isPlaying = !isPlaying;
            if (isPlaying) {
                startSlideshow();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
                playPauseBtn.classList.remove('pause');
            } else {
                clearInterval(slideInterval);
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i> Play';
                playPauseBtn.classList.add('pause');
            }
        }

        // Change speed
        function changeSpeed(speed, buttonElement) {
            slideSpeed = speed;

            // Remove active from all buttons
            [speedSlowBtn, speedNormalBtn, speedFastBtn].forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active to clicked button
            buttonElement.classList.add('active');

            // Restart slideshow
            if (isPlaying) {
                startSlideshow();
            }
        }

        // Event listeners
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
        playPauseBtn.addEventListener('click', togglePlayPause);

        speedSlowBtn.addEventListener('click', () => changeSpeed(5000, speedSlowBtn));
        speedNormalBtn.addEventListener('click', () => changeSpeed(3000, speedNormalBtn));
        speedFastBtn.addEventListener('click', () => changeSpeed(1000, speedFastBtn));

        // Start slideshow when page loads
        window.addEventListener('load', initSlideshow);

        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            else if (e.key === 'ArrowRight') nextSlide();
            else if (e.key === ' ') {
                e.preventDefault();
                togglePlayPause();
            }
        });