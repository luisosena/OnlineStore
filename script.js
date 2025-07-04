// Simple carousel logic (can be enhanced)
document.addEventListener('DOMContentLoaded', () => {
	// Future carousel enhancements can go here
	const navbar = document.querySelector('.navbar');

	window.addEventListener('scroll', () => {
		if (window.scrollY > 50) {
			navbar.classList.add('scrolled');
		} else {
			navbar.classList.remove('scrolled');
		}
	});

	const scrollerInner = document.querySelector('.scroller-inner');
	if (scrollerInner) {
		const featuredItems = document.querySelectorAll('.featured-item');
		const numOriginalItems = featuredItems.length / 2;
		let currentIndex = 0;
		let itemWidth = 0;
		let gap = 0;

		function calculateDimensions() {
			if (featuredItems.length > 0) {
				itemWidth = featuredItems[0].offsetWidth;
				gap = parseInt(window.getComputedStyle(scrollerInner).gap);
			}
		}

		calculateDimensions();
		window.addEventListener('resize', calculateDimensions);

		scrollerInner.addEventListener('transitionend', () => {
			if (currentIndex >= numOriginalItems) {
				scrollerInner.style.transition = 'none';
				currentIndex = 0;
				scrollerInner.style.transform = 'translateX(0px)';
			}
		});

		setInterval(() => {
			if (scrollerInner.style.transition === 'none') {
				scrollerInner.offsetHeight;
				scrollerInner.style.transition = 'transform 0.5s ease-in-out';
			}
			
			currentIndex++;
			const scrollAmount = (itemWidth + gap) * currentIndex;
			scrollerInner.style.transform = `translateX(-${scrollAmount}px)`;
		}, 2000);
	}
});
