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
        japanese: "ハンサム[な]",
        hiragana: "ハンサム[な]",
        romaji: ["hansamu [na]"],
        meaning: ["đẹp trai"]
    },
    {
        japanese: "きれい[な]",
        hiragana: "きれい[な]",
        romaji: ["kirei [na]"],
        meaning: ["đẹp", "sạch"]
    },
    {
        japanese: "静か[な]",
        hiragana: "しずか[な]",
        romaji: ["shizuka [na]"],
        meaning: ["yên tĩnh"]
    },
    {
        japanese: "にぎやか[な]",
        hiragana: "にぎやか[な]",
        romaji: ["nigiyaka [na]"],
        meaning: ["náo nhiệt"]
    },
    {
        japanese: "有名[な]",
        hiragana: "ゆうめい[な]",
        romaji: ["yūmei [na]"],
        meaning: ["nổi tiếng"]
    },
    {
        japanese: "親切[な]",
        hiragana: "しんせつ[な]",
        romaji: ["shinsetsu [na]"],
        meaning: ["tốt bụng", "thân thiện"]
    },
    {
        japanese: "元気[な]",
        hiragana: "げんき[な]",
        romaji: ["genki [na]"],
        meaning: ["khỏe", "khỏe mạnh"]
    },
    {
        japanese: "暇[な]",
        hiragana: "ひま[な]",
        romaji: ["hima [na]"],
        meaning: ["rảnh rỗi"]
    },
    {
        japanese: "便利[な]",
        hiragana: "べんり[な]",
        romaji: ["benri [na]"],
        meaning: ["tiện lợi"]
    },
    {
        japanese: "すてき[な]",
        hiragana: "すてき[な]",
        romaji: ["suteki [na]"],
        meaning: ["đẹp", "hay", "tuyệt vời"]
    },
    {
        japanese: "大きい",
        hiragana: "おおきい",
        romaji: ["ōkii"],
        meaning: ["lớn", "to"]
    },
    {
        japanese: "小さい",
        hiragana: "ちいさい",
        romaji: ["chiisai"],
        meaning: ["bé", "nhỏ"]
    },
    {
        japanese: "新しい",
        hiragana: "あたらしい",
        romaji: ["atarashii"],
        meaning: ["mới"]
    },
    {
        japanese: "古い",
        hiragana: "ふるい",
        romaji: ["furui"],
        meaning: ["cũ"]
    },
    {
        japanese: "いい（よい）",
        hiragana: "いい（よい）",
        romaji: ["ii", "yoi"],
        meaning: ["tốt"]
    },
    {
        japanese: "悪い",
        hiragana: "わるい",
        romaji: ["warui"],
        meaning: ["xấu", "tệ"]
    },
    {
        japanese: "暑い、熱い",
        hiragana: "あつい",
        romaji: ["atsui"],
        meaning: ["nóng (thời tiết)", "nóng (đồ vật)"]
    },
    {
        japanese: "寒い",
        hiragana: "さむい",
        romaji: ["samui"],
        meaning: ["lạnh", "rét (thời tiết)"]
    },
    {
        japanese: "冷たい",
        hiragana: "つめたい",
        romaji: ["tsumetai"],
        meaning: ["lạnh", "buốt (khi chạm vào hoặc nếm)"]
    },
    {
        japanese: "難しい",
        hiragana: "むずかしい",
        romaji: ["muzukashii"],
        meaning: ["khó"]
    },
    {
        japanese: "易しい",
        hiragana: "やさしい",
        romaji: ["yasashii"],
        meaning: ["dễ"]
    },
    {
        japanese: "高い",
        hiragana: "たかい",
        romaji: ["takai"],
        meaning: ["đắt", "cao"]
    },
    {
        japanese: "安い",
        hiragana: "やすい",
        romaji: ["yasui"],
        meaning: ["rẻ"]
    },
    {
        japanese: "低い",
        hiragana: "ひくい",
        romaji: ["hikui"],
        meaning: ["thấp"]
    },
    {
        japanese: "おもしろい",
        hiragana: "おもしろい",
        romaji: ["omoshiroi"],
        meaning: ["thú vị", "hay"]
    },
    {
        japanese: "おいしい",
        hiragana: "おいしい",
        romaji: ["oishii"],
        meaning: ["ngon"]
    },
    {
        japanese: "忙しい",
        hiragana: "いそがしい",
        romaji: ["isogashii"],
        meaning: ["bận"]
    },
    {
        japanese: "楽しい",
        hiragana: "たのしい",
        romaji: ["tanoshii"],
        meaning: ["vui", "vui vẻ"]
    },
    {
        japanese: "白い",
        hiragana: "しろい",
        romaji: ["shiroi"],
        meaning: ["trắng"]
    },
    {
        japanese: "黒い",
        hiragana: "くろい",
        romaji: ["kuroi"],
        meaning: ["đen"]
    },
    {
        japanese: "赤い",
        hiragana: "あかい",
        romaji: ["akai"],
        meaning: ["đỏ"]
    },
    {
        japanese: "青い",
        hiragana: "あおい",
        romaji: ["aoi"],
        meaning: ["xanh da trời", "xanh lam"]
    },
    {
        japanese: "桜",
        hiragana: "さくら",
        romaji: ["sakura"],
        meaning: ["hoa anh đào", "cây anh đào"]
    },
    {
        japanese: "山",
        hiragana: "やま",
        romaji: ["yama"],
        meaning: ["núi"]
    },
    {
        japanese: "町",
        hiragana: "まち",
        romaji: ["machi"],
        meaning: ["thị trấn", "thị xã", "thành phố"]
    },
    {
        japanese: "食べ物",
        hiragana: "たべもの",
        romaji: ["tabemono"],
        meaning: ["đồ ăn", "thức ăn"]
    },
    {
        japanese: "車",
        hiragana: "くるま",
        romaji: ["kuruma"],
        meaning: ["xe ô tô"]
    },
    {
        japanese: "所",
        hiragana: "ところ",
        romaji: ["tokoro"],
        meaning: ["nơi", "chỗ"]
    },
    {
        japanese: "寮",
        hiragana: "りょう",
        romaji: ["ryō"],
        meaning: ["ký túc xá"]
    },
    {
        japanese: "勉強",
        hiragana: "べんきょう",
        romaji: ["benkyō"],
        meaning: ["học", "việc học"]
    },
    {
        japanese: "生活",
        hiragana: "せいかつ",
        romaji: ["seikatsu"],
        meaning: ["cuộc sống", "sinh hoạt"]
    },
    {
        japanese: "[お]仕事",
        hiragana: "[お]しごと",
        romaji: ["[o]shigoto"],
        meaning: ["công việc", "làm việc"]
    },
    {
        japanese: "どう",
        hiragana: "どう",
        romaji: ["dō"],
        meaning: ["thế nào", "như thế nào"]
    },
    {
        japanese: "どんな～",
        hiragana: "どんな～",
        romaji: ["donna ~"],
        meaning: ["~ như thế nào", "loại ~ nào"]
    },
    {
        japanese: "どれ",
        hiragana: "どれ",
        romaji: ["dore"],
        meaning: ["cái nào"]
    },
    {
        japanese: "とても",
        hiragana: "とても",
        romaji: ["totemo"],
        meaning: ["rất", "lắm"]
    },
    {
        japanese: "あまり",
        hiragana: "あまり",
        romaji: ["amari"],
        meaning: ["không ~ lắm (thường đi với phủ định)"]
    },
    {
        japanese: "そして",
        hiragana: "そして",
        romaji: ["soshite"],
        meaning: ["và", "thêm nữa", "sau đó"]
    },
    {
        japanese: "～が、～",
        hiragana: "～が、～",
        romaji: ["~ ga, ~"],
        meaning: ["~, nhưng ~"]
    },
    {
        japanese: "お元気ですか。",
        hiragana: "おげんきですか。",
        romaji: ["ogenki desu ka"],
        meaning: ["Anh/chị có khỏe không?"]
    },
    {
        japanese: "そうですね。",
        hiragana: "そうですね。",
        romaji: ["sō desu ne"],
        meaning: ["Thế nhỉ", "Để tôi xem", "Ừ nhỉ"]
    },
    {
        japanese: "日本の生活に慣れましたか。",
        hiragana: "にほんのせいかつになれましたか。",
        romaji: ["Nihon no seikatsu ni naremashita ka"],
        meaning: ["Anh/chị đã quen với cuộc sống ở Nhật chưa?"]
    },
    {
        japanese: "[～、]もう一杯いかがですか。",
        hiragana: "[～、]もういっぱい いかがですか。",
        romaji: ["[~,] mō ippai ikaga desu ka"],
        meaning: ["Anh/chị dùng thêm một chén [~] nữa được không ạ?"]
    },
    {
        japanese: "いいえ、けっこうです。",
        hiragana: "いいえ、けっこうです。",
        romaji: ["iie, kekkō desu"],
        meaning: ["Không, đủ rồi ạ", "Thôi, cảm ơn ạ"]
    },
    {
        japanese: "もう～です[ね]。",
        hiragana: "もう～です[ね]。",
        romaji: ["mō ~ desu [ne]"],
        meaning: ["Đã ~ rồi nhỉ", "Đã ~ rồi, đúng không ạ?"]
    },
    {
        japanese: "そろそろ失礼します。",
        hiragana: "そろそろしつれいします。",
        romaji: ["sorosoro shitsurei shimasu"],
        meaning: ["Đã đến lúc tôi phải xin phép", "Tôi xin phép về trước"]
    },
    {
        japanese: "またいらっしゃってください。",
        hiragana: "またいらっしゃってください。",
        romaji: ["mata irasshatte kudasai"],
        meaning: ["Lần sau anh/chị lại đến chơi nhé"]
    },
    {
        japanese: "富士山",
        hiragana: "ふじさん",
        romaji: ["Fujisan"],
        meaning: ["Núi Phú Sĩ (ngọn núi cao nhất Nhật Bản)"]
    },
    {
        japanese: "琵琶湖",
        hiragana: "びわこ",
        romaji: ["Biwako"],
        meaning: ["Hồ Biwa"]
    },
    {
        japanese: "シャンハイ",
        hiragana: "シャンハイ",
        romaji: ["Shanhai"],
        meaning: ["Thượng Hải (上海)"]
    },
    {
        japanese: "「七人の侍」",
        hiragana: "「しちにんのさむらい」",
        romaji: ["Shichinin no Samurai"],
        meaning: ["Bảy chàng võ sĩ Samurai (tên phim kinh điển của đạo diễn Kurosawa Akira)"]
    },
    {
        japanese: "金閣寺",
        hiragana: "きんかくじ",
        romaji: ["Kinkakuji"],
        meaning: ["Chùa Kinkaku-ji", "Chùa Vàng"]
    }
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
