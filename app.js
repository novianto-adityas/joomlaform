// app.js

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Deactivate all tabs
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // Activate clicked tab and corresponding content
            tab.classList.add('active');
            const contentId = tab.dataset.tab;
            document.getElementById(contentId).classList.add('active');
        });
    });
});

// Sample performance data
const performanceData = {
    employee1: { name: "Alice", score: 87 },
    employee2: { name: "Bob", score: 92 },
    employee3: { name: "Charlie", score: 75 }
};

// Function to display performance data
function displayPerformance() {
    const container = document.getElementById('performanceData');
    for (const employee in performanceData) {
        const data = performanceData[employee];
        container.innerHTML += `<div>${data.name}: ${data.score}</div>`;
    }
}

displayPerformance();