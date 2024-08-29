function showCourseDetails() {
    document.getElementById('courseDetails').style.display = 'block';
    window.location.hash = 'courseDetails'; // Scroll to course details
}

function enroll() {
    alert('Enrolled in the course!');
}

document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedOption = document.querySelector('input[name="q1"]:checked');
    const result = document.getElementById('quiz-result');
    if (selectedOption) {
        result.textContent = selectedOption.value === 'Paris' ? 'Correct!' : 'Incorrect.';
    } else {
        result.textContent = 'Please select an answer.';
    }
});

document.getElementById('course-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Simulate adding course
    alert('Course added');
});
