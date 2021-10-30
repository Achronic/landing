// Clickable CV button to display info

// Getting the button and elements

const cvButton = document.getElementById('cv');
const toggleInfo = document.getElementById('cvInfo')

// Hiding info

toggleInfo.style.display = "none"

// Showing info

cvButton.addEventListener('click', (event) => {
	toggleInfo.style.display = "block"
})