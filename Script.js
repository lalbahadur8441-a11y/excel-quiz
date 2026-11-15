const questions = [
    {
        question: "1. MS Excel में Formula किस चिन्ह से शुरू होता है?",
        options: ["+", "=", "#", "@"],
        answer: "="
    },
    {
        question: "2. SUM Function का उपयोग किसलिए होता है?",
        options: ["औसत", "गिनती", "जोड़", "सबसे बड़ी संख्या"],
        answer: "जोड़"
    },
    {
        question: "3. Excel में Rows किस दिशा में होती हैं?",
        options: ["Vertical", "Horizontal", "Diagonal", "Circular"],
        answer: "Horizontal"
    },
    {
        question: "4. Excel में Columns को किससे पहचाना जाता है?",
        options: ["Numbers", "Letters", "Colors", "Symbols"],
        answer: "Letters"
    },
    {
        question: "5. Cell किससे बनता है?",
        options: ["दो Rows", "दो Columns", "Row और Column", "दो Sheets"],
        answer: "Row और Column"
    }
];

function startTest() {
    const name = document.getElementById("studentName").value.trim();

    if (name === "") {
        alert("कृपया अपना नाम लिखें!");
        return;
    }

    let html = "";

    questions.forEach((q, index) => {
        html += `<div class="question">
            <h3>${q.question}</h3>`;

        q.options.forEach(option => {
            html += `
                <label>
                    <input type="radio" name="q${index}" value="${option}">
                    ${option}
                </label>`;
        });

        html += `</div>`;
    });

    html += `<button onclick="checkResult()">Submit Test</button>`;

    document.getElementById("quizArea").innerHTML = html;
}

function checkResult() {
    let score = 0;
    let wrong = 0;

    questions.forEach((q, index) => {
        const selected = document.querySelector(
            `input[name="q${index}"]:checked`
        );

        const inputs = document.querySelectorAll(
            `input[name="q${index}"]`
        );

        inputs.forEach(input => {
            const label = input.parentElement;

            if (input.value === q.answer) {
                label.classList.add("correct");
            }

            if (selected && input === selected &&
                input.value !== q.answer) {
                label.classList.add("wrong");
            }

            input.disabled = true;
        });

        if (selected && selected.value === q.answer) {
            score++;
        } else {
            wrong++;
        }
    });

    let percentage = (score / questions.length) * 100;

    document.getElementById("result").innerHTML = `
        <h2>Final Result</h2>
        <p>Total Questions: ${questions.length}</p>
        <p>Correct Answers: ${score}</p>
        <p>Wrong Answers: ${wrong}</p>
        <p>Percentage: ${percentage}%</p>
        <h3>Score: ${score}/${questions.length}</h3>
    `;
}]\
]