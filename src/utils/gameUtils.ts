export function calculateWinner(spaces: string[]): string | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
            return spaces[a];
        }
    }
    return null;
}

export function getHistory(): string[] {
    const localHistory = localStorage.getItem('history');
    return localHistory ? JSON.parse(localHistory) : [''];
}

export function saveHistory(history: string[]): void {
    localStorage.setItem('history', JSON.stringify(history));
}
