/**
 * Advanced LingoEnglish - Lesson Engine
 */

class LessonEngine {
    constructor() {
        this.params = new URLSearchParams(window.location.search);
        this.lessonId = this.params.get('id');
        this.lesson = this.findLesson(this.lessonId);

        this.currentIndex = 0;
        this.correctCount = 0;
        this.lives = lingo.userData.hearts;
        this.selectedAnswer = null;
        this.arrangeAnswer = [];
        this.recognition = null;
        this.isRecording = false;

        if (!this.lesson) {
            window.location.href = 'dashboard.html';
            return;
        }

        this.init();
        this.initSpeechRecognition();
    }

    findLesson(id) {
        for (const unit of LINGO_CONTENT) {
            const lesson = unit.lessons.find(l => l.id === id);
            if (lesson) return lesson;
        }
        return null;
    }

    initSpeechRecognition() {
        const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (Speech) {
            this.recognition = new Speech();
            this.recognition.continuous = false;
            this.recognition.lang = 'en-US';
            this.recognition.interimResults = false;

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript.toLowerCase();
                this.handleSpeechResult(transcript);
            };

            this.recognition.onend = () => {
                this.isRecording = false;
                const micBtn = document.getElementById('mic-btn');
                if (micBtn) micBtn.classList.remove('active');
            };

            this.recognition.onerror = () => {
                this.isRecording = false;
                const micBtn = document.getElementById('mic-btn');
                if (micBtn) micBtn.classList.remove('active');
                alert('Microphone error. Please ensure you have given permission.');
            };
        }
    }

    init() {
        if (this.lives <= 0) {
            alert('You are out of hearts! Refill them in the shop or wait for auto-recovery.');
            window.location.href = 'dashboard.html';
            return;
        }

        this.renderQuestion();
        document.getElementById('check-btn').addEventListener('click', () => this.checkAnswer());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('lives').textContent = this.lives;
    }

    renderQuestion() {
        const question = this.lesson.questions[this.currentIndex];
        const container = document.getElementById('question-container');
        const checkBtn = document.getElementById('check-btn');

        container.innerHTML = '';
        checkBtn.disabled = true;
        this.selectedAnswer = null;
        this.arrangeAnswer = [];

        const progress = (this.currentIndex / this.lesson.questions.length) * 100;
        document.getElementById('lesson-progress').style.width = `${progress}%`;

        const title = document.createElement('h2');
        title.className = 'question-title';
        title.textContent = question.question;
        container.appendChild(title);

        if (question.type === 'multiple-choice' || question.type === 'fill-blank') {
            this.renderMultipleChoice(question, container);
        } else if (question.type === 'arrange') {
            this.renderArrange(question, container);
        } else if (question.type === 'speaking') {
            this.renderSpeaking(question, container);
        }

        if (question.audio && question.type !== 'speaking') {
            setTimeout(() => this.speak(question.audio), 500);
        }
    }

    renderMultipleChoice(question, container) {
        const grid = document.createElement('div');
        grid.className = 'options-grid';
        question.options.forEach(option => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.textContent = option;
            card.onclick = () => {
                document.querySelectorAll('.option-card').forEach(el => el.classList.remove('selected'));
                card.classList.add('selected');
                this.selectedAnswer = option;
                document.getElementById('check-btn').disabled = false;
            };
            grid.appendChild(card);
        });
        container.appendChild(grid);
    }

    renderArrange(question, container) {
        const zone = document.createElement('div');
        zone.className = 'arrange-zone';
        const chipsContainer = document.createElement('div');
        chipsContainer.className = 'word-chips';

        question.words.forEach((word, index) => {
            const chip = document.createElement('div');
            chip.className = 'word-chip';
            chip.textContent = word;
            chip.onclick = () => {
                if (chip.classList.contains('used')) return;
                chip.classList.add('used');
                this.arrangeAnswer.push(word);
                const zoneChip = document.createElement('div');
                zoneChip.className = 'word-chip';
                zoneChip.textContent = word;
                zoneChip.onclick = () => {
                    zoneChip.remove();
                    chip.classList.remove('used');
                    this.arrangeAnswer = this.arrangeAnswer.filter(w => w !== word);
                    checkBtn.disabled = this.arrangeAnswer.length === 0;
                };
                zone.appendChild(zoneChip);
                document.getElementById('check-btn').disabled = false;
            };
            chipsContainer.appendChild(chip);
        });
        container.appendChild(zone);
        container.appendChild(chipsContainer);
    }

    renderSpeaking(question, container) {
        const display = document.createElement('div');
        display.style.cssText = 'font-size: 2rem; font-weight: 700; color: #1cb0f6; margin-bottom: 20px;';
        display.textContent = `"${question.display}"`;
        container.appendChild(display);

        const instr = document.createElement('p');
        instr.style.color = 'var(--text-light)';
        instr.textContent = question.instruction;
        container.appendChild(instr);

        const micDiv = document.createElement('div');
        micDiv.className = 'mic-container';

        const micBtn = document.createElement('button');
        micBtn.id = 'mic-btn';
        micBtn.className = 'mic-btn';
        micBtn.innerHTML = '🎤';
        micBtn.onclick = () => this.toggleRecording();
        micDiv.appendChild(micBtn);

        const status = document.createElement('div');
        status.id = 'speech-status';
        status.style.fontWeight = '600';
        micDiv.appendChild(status);

        container.appendChild(micDiv);
    }

    toggleRecording() {
        if (!this.recognition) {
            alert('Speech recognition is not supported in this browser.');
            return;
        }

        const micBtn = document.getElementById('mic-btn');
        const status = document.getElementById('speech-status');

        if (this.isRecording) {
            this.recognition.stop();
        } else {
            this.isRecording = true;
            micBtn.classList.add('active');
            status.textContent = 'Listening...';
            this.recognition.start();
        }
    }

    handleSpeechResult(transcript) {
        const question = this.lesson.questions[this.currentIndex];
        const status = document.getElementById('speech-status');

        status.textContent = `You said: "${transcript}"`;
        this.selectedAnswer = transcript;

        // Auto check if it matches closely enough
        if (transcript.includes(question.answer.toLowerCase())) {
            document.getElementById('check-btn').disabled = false;
        } else {
            document.getElementById('check-btn').disabled = false;
        }
    }

    checkAnswer() {
        const question = this.lesson.questions[this.currentIndex];
        let isCorrect = false;

        if (question.type === 'multiple-choice' || question.type === 'fill-blank') {
            isCorrect = (this.selectedAnswer === question.answer);
        } else if (question.type === 'arrange') {
            isCorrect = (this.arrangeAnswer.join(' ') === question.answer);
        } else if (question.type === 'speaking') {
            // Simplified match: check if the core answer exists in the transcript
            isCorrect = this.selectedAnswer.replace(/[.,?!]/g, "").includes(question.answer.toLowerCase());
        }

        this.showFeedback(isCorrect, question.answer);
    }

    showFeedback(isCorrect, correctAnswer) {
        const bar = document.getElementById('feedback-bar');
        const title = document.getElementById('feedback-title');
        const subtext = document.getElementById('feedback-subtext');
        const icon = document.getElementById('feedback-icon');

        bar.className = `feedback-bar show ${isCorrect ? 'correct' : 'incorrect'}`;

        if (isCorrect) {
            this.correctCount++;
            title.textContent = 'Correct!';
            subtext.textContent = 'Awesome job!';
            icon.textContent = '✔';
            lingo.playSound('correct');
        } else {
            this.lives--;

            // Persist loss
            if (lingo.userData.hearts === 5) {
                lingo.userData.lastHeartRefill = Date.now();
            }
            lingo.userData.hearts = Math.max(0, lingo.userData.hearts - 1);
            lingo.saveUserData();

            document.getElementById('lives').textContent = this.lives;
            title.textContent = 'Check Correction';
            subtext.textContent = `Expected: "${correctAnswer}"`;
            icon.textContent = '✖';
            lingo.playSound('incorrect');

            if (this.lives <= 0) {
                this.showFailureScreen();
            }
        }
    }

    showFailureScreen() {
        // Stop current interactions
        document.getElementById('check-btn').classList.add('hidden');
        document.getElementById('feedback-bar').classList.remove('show');

        // Create a custom Modal-like failure screen
        const container = document.getElementById('question-container');
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 0;">
                <div style="font-size: 5rem; margin-bottom: 20px;">💔</div>
                <h2 style="color: var(--danger-color); margin-bottom: 10px;">Out of Hearts!</h2>
                <p style="color: var(--text-light); margin-bottom: 30px;">
                    You've made a few mistakes. Take some time to review or refill your hearts to continue.
                </p>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <button class="btn btn-primary" id="refill-btn">
                        REFILL HEARTS (❤️ 50)
                    </button>
                    <button class="btn btn-outline" onclick="window.location.href='dashboard.html'">
                        EXIT TO DASHBOARD
                    </button>
                </div>
            </div>
        `;

        document.getElementById('refill-btn').onclick = () => {
            if (lingo.userData.gems >= 50) {
                lingo.userData.gems -= 50;
                lingo.userData.hearts = 5;
                lingo.saveUserData();
                lingo.showToast('Hearts refilled! ❤️');
                location.reload(); // Restart lesson with full hearts
            } else {
                lingo.showToast('Not enough gems! 💰');
            }
        };
    }

    nextQuestion() {
        document.getElementById('feedback-bar').classList.remove('show');
        this.currentIndex++;
        if (this.currentIndex < this.lesson.questions.length) {
            this.renderQuestion();
        } else {
            this.finishLesson();
        }
    }

    finishLesson() {
        lingo.completeLesson(this.lesson.id, this.lesson.xp);

        // Trigger Confetti
        this.launchConfetti();

        const container = document.getElementById('question-container');
        container.innerHTML = `
            <div style="text-align: center; padding: 50px 0;">
                <h1 style="font-size: 4rem;">🏆</h1>
                <h2>Lesson Complete!</h2>
                <div style="display: flex; justify-content: center; gap: 20px; margin: 30px 0;">
                    <div class="card" style="flex: 1;">
                        <div style="color: var(--text-light);">XP EARNED</div>
                        <div style="font-size: 1.5rem; font-weight: 800; color: #58cc02;">+${this.lesson.xp}</div>
                    </div>
                    <div class="card" style="flex: 1;">
                        <div style="color: var(--text-light);">ACCURACY</div>
                        <div style="font-size: 1.5rem; font-weight: 800; color: #1cb0f6;">${Math.round((this.correctCount / this.lesson.questions.length) * 100)}%</div>
                    </div>
                </div>
                <button class="btn btn-primary btn-full" onclick="window.location.href='dashboard.html'">CONTINUE</button>
            </div>
        `;
        document.getElementById('check-btn').classList.add('hidden');
        document.getElementById('lesson-progress').style.width = '100%';
    }

    launchConfetti() {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#58cc02', '#1cb0f6', '#ffc800', '#ff4b4b']
            });
        }
    }

    speak(text) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 1.0;
            window.speechSynthesis.speak(utterance);
        }
    }
}

const engine = new LessonEngine();
