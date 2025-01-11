const counters = document.querySelectorAll('.counter');

// Function to fetch and update the count from Lambda
async function getPageViews() {
    try {
        console.log('Fetching page views...');
        const apiUrl = 'https://r0pw6ae2p9.execute-api.ap-northeast-1.amazonaws.com';
        console.log('API URL:', apiUrl);
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'increment'
            })
        });
        
        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('Data:', data);
        
        const counterElement = document.getElementById('counter');
        if (counterElement) {
            counterElement.innerText = data.count;
        } else {
            console.error('Counter element not found in the DOM');
        }
    }
    catch (error) {
        console.error('Error fetching page views:', error);
        return 0;
    }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', getPageViews);

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
