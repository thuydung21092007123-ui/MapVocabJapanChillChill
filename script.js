// ==========================================
// HỆ THỐNG TỪ VỰNG TIẾNG NHẬT
// ==========================================
// CÁCH THÊM, SỬA, XÓA TỪ VỰNG:
// - Thêm từ mới: Thêm một object mới vào mảng `vocabulary` theo đúng cấu trúc mẫu.
//   Trong đó `meaning` là một mảng chứa các cách dịch tiếng Việt chấp nhận được.
// - Sửa từ: Chỉnh sửa trực tiếp giá trị của các trường japanese, hiragana, romaji hoặc meaning.
// - Xóa từ: Xóa dòng hoặc object tương ứng khỏi mảng.
const vocabulary = [
  {
    japanese: "慣れる",
    hiragana: "なれる",
    romaji: ["nareru"],
    meaning: ["quen với", "thích nghi", "làm quen"]
  },
];

// ==========================================
// BIẾN TRẠNG THÁI GAME
// ==========================================
let currentPosition = 0;
let score = 0;
let currentStreak = 0;
let maxStreak = 0;
let totalQuestionsAnswered = 0;
let currentDiceRoll = null;
let currentVocab = null;
let shuffledVocabList = [];
let vocabIndex = 0;

// Các phần tử DOM
const mazeGridEl = document.getElementById('maze-grid');
const currentPosEl = document.getElementById('current-pos');
const scoreEl = document.getElementById('score');
const streakEl = document.getElementById('streak');
const progressFillEl = document.getElementById('progress-fill');
const progressTextEl = document.getElementById('progress-text');

const diceBoxEl = document.getElementById('dice-box');
const diceDisplayEl = document.getElementById('dice-display');
const diceResultTextEl = document.getElementById('dice-result-text');
const btnRollEl = document.getElementById('btn-roll');

const questionBoxEl = document.getElementById('question-box');
const vocabKanjiEl = document.getElementById('vocab-kanji');
const vocabHiraganaEl = document.getElementById('vocab-hiragana');
const toggleHintEl = document.getElementById('toggle-hint');
const answerFormEl = document.getElementById('answer-form');
const inputRomajiEl = document.getElementById('input-romaji');
const inputMeaningEl = document.getElementById('input-meaning');

const feedbackBoxEl = document.getElementById('feedback-box');
const feedbackContentEl = document.getElementById('feedback-content');
const btnNextTurnEl = document.getElementById('btn-next-turn');

const victoryModalEl = document.getElementById('victory-modal');
const finalScoreEl = document.getElementById('final-score');
const finalQuestionsEl = document.getElementById('final-questions');
const finalStreakEl = document.getElementById('final-streak');
const btnRestartEl = document.getElementById('btn-restart');

// ==========================================
// HÀM KHỞI TẠO VÀ TẠO BÀN MÊ CUNG
// ==========================================
function initGame() {
    currentPosition = 0;
    score = 0;
    currentStreak = 0;
    maxStreak = 0;
    totalQuestionsAnswered = 0;
    currentDiceRoll = null;
    
    // Xáo trộn danh sách từ vựng ban đầu
    shuffleVocabulary();
    
    createMazeBoard();
    updateUI();
    
    // Đưa giao diện về trạng thái tung xúc xắc
    diceBoxEl.classList.remove('hidden');
    questionBoxEl.classList.add('hidden');
    feedbackBoxEl.classList.add('hidden');
    victoryModalEl.classList.add('hidden');
    
    btnRollEl.disabled = false;
    diceDisplayEl.textContent = '🎲';
    diceResultTextEl.textContent = 'Nhấn nút bên dưới để tung xúc xắc!';
}

// Tạo bàn mê cung ziczac từ 0 đến 100
function createMazeBoard() {
    mazeGridEl.innerHTML = '';
    
    // Tính toán thứ tự hiển thị dạng ziczac trên lưới 10 cột
    // Tổng cộng 101 ô (0 đến 100). Hàng 0: ô 100 -> 91, Hàng 1: ô 90 -> 81, v.v.
    // Hoặc sắp xếp theo chuẩn từ 100 xuống 0 để ô 0 ở góc dưới hoặc trên.
    // Để trực quan bàn chơi đi từ START (0) lên FINISH (100):
    // Ta tạo danh sách hàng (mỗi hàng 10 ô).
    let cellsArray = [];
    for (let i = 0; i <= 100; i++) {
        cellsArray.push(i);
    }

    // Chia thành các hàng 10 ô (riêng ô 100 ở hàng cuối cùng)
    // Để bàn ziczac đẹp mắt, ta dựng từ ô 0 tới 100:
    let rows = [];
    for (let i = 0; i <= 100; i += 10) {
        let row = cellsArray.slice(i, i + 10);
        rows.push(row);
    }
    // Đảo ngược tổng thể để ô 0 nằm ở dưới cùng và ô 100 nằm ở trên cùng

    rows.forEach(row => {
        row.forEach(cellNum => {
            const cell = document.createElement('div');
            cell.className = 'maze-cell';
            cell.id = `cell-${cellNum}`;
            
            if (cellNum === 0) {
                cell.classList.add('start');
                cell.innerHTML = `<span>START</span>`;
            } else if (cellNum === 100) {
                cell.classList.add('finish');
                cell.innerHTML = `<span>FINISH</span>`;
            } else {
                cell.innerHTML = `<span>${cellNum}</span>`;
            }
            
            mazeGridEl.appendChild(cell);
        });
    });
}

// Xáo trộn danh sách từ vựng
function shuffleVocabulary() {
    shuffledVocabList = [...vocabulary];
    for (let i = shuffledVocabList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledVocabList[i], shuffledVocabList[j]] = [shuffledVocabList[j], shuffledVocabList[i]];
    }
    vocabIndex = 0;
}

// Lấy từ vựng tiếp theo (hết danh sách sẽ tự xáo trộn lại)
function getNextVocabulary() {
    if (vocabIndex >= shuffledVocabList.length) {
        shuffleVocabulary();
    }
    const vocab = shuffledVocabList[vocabIndex];
    vocabIndex++;
    return vocab;
}

// ==========================================
// CẬP NHẬT GIAO DIỆN VÀ VỊ TRÍ QUÂN CỜ
// ==========================================
function updateUI() {
    currentPosEl.textContent = `${currentPosition} / 100`;
    scoreEl.textContent = score;
    streakEl.textContent = `${currentStreak} 🔥`;
    
    const progressPercent = currentPosition; // vì max là 100
    progressFillEl.style.width = `${progressPercent}%`;
    progressTextEl.textContent = `${progressPercent}%`;

    // Cập nhật vị trí quân cờ trên bàn mê cung
    document.querySelectorAll('.maze-cell').forEach(cell => {
        cell.classList.remove('current-player');
        const token = cell.querySelector('.player-token');
        if (token) token.remove();
    });

    const activeCell = document.getElementById(`cell-${currentPosition}`);
    if (activeCell) {
        activeCell.classList.add('current-player');
        const token = document.createElement('div');
        token.className = 'player-token';
        token.textContent = '🐱'; // Biểu tượng quân cờ dễ thương
        activeCell.appendChild(token);
    }
}

// ==========================================
// LOGIC TUNG XÚC XẮC
// ==========================================
btnRollEl.addEventListener('click', () => {
    // Tung xúc xắc ngẫu nhiên từ 1 đến 6
    currentDiceRoll = Math.floor(Math.random() * 6) + 1;
    
    // Hiển thị xúc xắc
    const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    diceDisplayEl.textContent = diceFaces[currentDiceRoll - 1];
    diceResultTextEl.textContent = `Bạn tung được: ${currentDiceRoll} điểm! Hãy trả lời câu hỏi bên dưới.`;
    
    btnRollEl.disabled = true;

    // Lấy câu hỏi từ vựng và hiển thị form
    currentVocab = getNextVocabulary();
    vocabKanjiEl.textContent = currentVocab.japanese;
    vocabHiraganaEl.textContent = currentVocab.hiragana;
    
    // Reset form nhập liệu
    inputRomajiEl.value = '';
    inputMeaningEl.value = '';
    toggleHintEl.checked = false;
    vocabHiraganaEl.classList.add('hidden');

    // Chuyển hiển thị sang bảng câu hỏi
    diceBoxEl.classList.add('hidden');
    questionBoxEl.classList.remove('hidden');
    inputRomajiEl.focus();
});

// Bật/tắt gợi ý Hiragana
toggleHintEl.addEventListener('change', (e) => {
    if (e.target.checked) {
        vocabHiraganaEl.classList.remove('hidden');
    } else {
        vocabHiraganaEl.classList.add('hidden');
    }
});

// ==========================================
// KIỂM TRA ĐÁP ÁN VÀ XỬ LÝ DI CHUYỂN
// ==========================================
answerFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (currentDiceRoll === null) return;

    totalQuestionsAnswered++;

    const userRomaji = inputRomajiEl.value;
    const userMeaning = inputMeaningEl.value;

    const isRomajiCorrect = checkRomaji(userRomaji, currentVocab.romaji);
    const isMeaningCorrect = checkMeaning(userMeaning, currentVocab.meaning);

    let moveSteps = 0;
    let resultDescription = '';
    let oldPosition = currentPosition;

    const N = currentDiceRoll;
    const halfN = Math.floor(N / 2);

    if (isRomajiCorrect && isMeaningCorrect) {
        moveSteps = N;
        currentStreak++;
        score += 10;
        resultDescription = `<p class="text-correct">✨ Đúng cả Romaji và Nghĩa tiếng Việt!</p>` +
                            `<p>Tiến thẳng <strong>${N}</strong> ô.</p>`;
    } else if (isRomajiCorrect && !isMeaningCorrect) {
        moveSteps = halfN;
        currentStreak = 0;
        score += 3;
        resultDescription = `<p class="text-correct">✔ Romaji chính xác!</p>` +
                            `<p class="text-incorrect">✖ Nghĩa tiếng Việt chưa đúng (Đáp án đúng: ${currentVocab.meaning.join(', ')}).</p>` +
                            `<p>Tiến <strong>${halfN}</strong> ô (Math.floor(${N}/2)).</p>`;
    } else if (!isRomajiCorrect && isMeaningCorrect) {
        moveSteps = halfN;
        currentStreak = 0;
        score += 3;
        resultDescription = `<p class="text-incorrect">✖ Romaji chưa chính xác (Đáp án đúng: ${currentVocab.romaji.join(', ')}).</p>` +
                            `<p class="text-correct">✔ Nghĩa tiếng Việt chính xác!</p>` +
                            `<p>Tiến <strong>${halfN}</strong> ô (Math.floor(${N}/2)).</p>`;
    } else {
        moveSteps = -N;
        currentStreak = 0;
        resultDescription = `<p class="text-incorrect">✖ Sai cả hai đáp án!</p>` +
                            `<p>Đáp án chuẩn: <strong>${currentVocab.romaji.join(', ')}</strong> — <strong>${currentVocab.meaning.join(', ')}</strong></p>` +
                            `<p>Lùi <strong>${N}</strong> ô.</p>`;
    }

    if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
    }

    // Cập nhật vị trí mới với điều kiện biên (0 đến 100)
    let newPosition = currentPosition + moveSteps;
    if (newPosition < 0) newPosition = 0;
    if (newPosition > 100) newPosition = 100;

    currentPosition = newPosition;

    resultDescription += `<p>Quá trình: Ô ${oldPosition} ➔ Ô ${currentPosition}</p>`;

    // Hiển thị phản hồi
    feedbackContentEl.innerHTML = resultDescription;
    questionBoxEl.classList.add('hidden');
    feedbackBoxEl.classList.remove('hidden');

    updateUI();
});

// Chuẩn hóa và kiểm tra Romaji
function checkRomaji(userinput, correctRomajiArray) {
    const cleanedInput = userinput.trim().toLowerCase();
    return correctRomajiArray.some(ans => ans.toLowerCase() === cleanedInput);
}

// Chuẩn hóa và kiểm tra nghĩa tiếng Việt
function checkMeaning(userinput, correctMeaningArray) {
    // Chuẩn hóa khoảng trắng: bỏ khoảng trắng thừa đầu cuối và chuẩn hóa khoảng trắng giữa các từ
    const cleanedInput = userinput.trim().toLowerCase().replace(/\s+/g, ' ');
    return correctMeaningArray.some(ans => {
        const cleanedAns = ans.trim().toLowerCase().replace(/\s+/g, ' ');
        return cleanedAns === cleanedInput;
    });
}

// ==========================================
// CHUYỂN LƯỢT HOẶC KẾT THÚC GAME
// ==========================================
btnNextTurnEl.addEventListener('click', () => {
    feedbackBoxEl.classList.add('hidden');

    // Kiểm tra điều kiện chiến thắng (đạt ô 100)
    if (currentPosition === 100) {
        finalScoreEl.textContent = score;
        finalQuestionsEl.textContent = totalQuestionsAnswered;
        finalStreakEl.textContent = `${maxStreak} 🔥`;
        victoryModalEl.classList.remove('hidden');
        return;
    }

    // Chuẩn bị cho lượt tiếp theo
    currentDiceRoll = null;
    diceBoxEl.classList.remove('hidden');
    btnRollEl.disabled = false;
    diceDisplayEl.textContent = '🎲';
    diceResultTextEl.textContent = 'Nhấn nút bên dưới để tung xúc xắc!';
});

// Nút chơi lại khi chiến thắng
btnRestartEl.addEventListener('click', () => {
    initGame();
});

// Chạy khởi tạo khi tải trang
window.addEventListener('DOMContentLoaded', () => {
    initGame();
});