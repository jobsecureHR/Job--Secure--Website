function showTab(tabName) {
    // Hide all tab content
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all buttons
    const allButtons = document.querySelectorAll('.tab-button');
    allButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab
    const selectedTab = document.getElementById(tabName);
    selectedTab.classList.add('active');

    // Highlight the active button
    const activeButton = Array.from(allButtons).find(button => button.innerText.toLowerCase() === tabName);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Set default tab (About Us)
document.addEventListener("DOMContentLoaded", () => {
    showTab('about');
});
