const counters = document.querySelectorAll('.counter');

// Function to fetch the count from Lambda
async function getPageViews() {
    try {
        const response = await fetch('https://muv4euppadnmsar4jntl2sqniy0nbjrh.lambda-url.ap-northeast-1.on.aws/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data.count;
    } catch (error) {
        console.error('Error fetching page views:', error);
        return 0;
    }
}

counters.forEach(async counter => {
    // If this is the page views counter
    if (counter.closest('.counter-container').querySelector('span').textContent === 'Page Views') {
        const pageViews = await getPageViews();
        counter.setAttribute('data-target', pageViews);
    }
    
    const target = +counter.getAttribute('data-target');
    const increment = target / 200;
    
    function updateCounter() {
        const count = +counter.innerText;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(counter);
}); 