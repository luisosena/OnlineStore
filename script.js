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
});
