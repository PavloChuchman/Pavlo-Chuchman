class Clicker {
    constructor() {
        this.clickCount = 0;
        this.clickCountDisplay = document.getElementById('clickCount');
        this.dot = document.getElementById('dot');
        this.bottomBlock = document.getElementById('bottom-block');
        this.startScreen = document.getElementById('start-screen');
        this.gameScreen = document.getElementById('game-screen');
        this.topBlock = document.getElementById('top-block'); 
        this.startButton = document.getElementById('start-button');
        this.startButton.addEventListener('click', () => this.startGame());
        this.startScreen = document.getElementById('start-screen');
        this.levelDisplay = document.getElementById('levelDisplay');
        this.progressFill = document.getElementById('progressFill');

        this.levels = [
            { level: 1, pointsNeeded: 30 },
            { level: 2, pointsNeeded: 60 },
            { level: 3, pointsNeeded: 150 },
            { level: 4, pointsNeeded: 250 },
            { level: 5, pointsNeeded: 500 }
        ];

        this.currentLevel = 1;
        this.setLevelDisplay();

        this.dot.addEventListener('click', () => this.handleDotClick());
        this.showDot();
    }

    handleDotClick() {
        if (this.dot.style.display !== 'none') {
            this.clickCount += 2; // За клік на точку додаємо 2 очка
            this.updateClickCount();
            this.checkLevel();
            this.hideDot();
            this.showDot();
        }
    }

    updateClickCount() {
        this.clickCountDisplay.textContent = this.clickCount;
    }

    setLevel(level) {
        this.currentLevel = level;
        this.setLevelDisplay();
    }

    setLevelDisplay() {
        const currentLevelInfo = this.levels.find(level => level.level === this.currentLevel);
        if (currentLevelInfo) {
            this.levelDisplay.textContent = `Рівень ${currentLevelInfo.level}: ${this.clickCount} / ${currentLevelInfo.pointsNeeded} очок`;
            this.progressFill.style.width = `${(this.clickCount / currentLevelInfo.pointsNeeded) * 100}%`;
        } else {
            this.levelDisplay.textContent = `Рівень ${this.currentLevel}`;
        }
    }

    checkLevel() {
        const currentLevelInfo = this.levels.find(level => level.level === this.currentLevel);
        if (currentLevelInfo && this.clickCount >= currentLevelInfo.pointsNeeded) {
            this.setLevel(this.currentLevel + 1);
            this.progressFill.style.width = '0%'; // Скидаємо прогрес-бар до початку
        }
    }

    showDot() {
        const gameAreaWidth = this.bottomBlock.clientWidth - this.dot.clientWidth;
        const gameAreaHeight = this.bottomBlock.clientHeight - this.dot.clientHeight;
    
        const randomX = Math.random() * gameAreaWidth;
        const randomY = Math.random() * gameAreaHeight;
    
        this.dot.style.left = randomX + 'px';
        this.dot.style.top = randomY + 'px';
    
        this.dot.style.display = 'block';
    }
    

    hideDot() {
        this.dot.style.display = 'none';
    }

    
    startGame() {
        // Приховуємо екран початку гри та показуємо елементи гри
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
        this.showGameElements();
    }

    hideGameElements() {
        this.topBlock.style.display = 'none';
        this.bottomBlock.style.display = 'none';
        this.dot.style.display = 'none';
    }

    showGameElements() {
        this.topBlock.style.display = 'block';
        this.bottomBlock.style.display = 'block';
        this.showDot();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const clicker = new Clicker();
});
