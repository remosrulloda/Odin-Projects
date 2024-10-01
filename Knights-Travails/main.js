// main.js
function knightMoves(start, target) {

    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    // Keeps track of visited squares
    const visited = new Set();

    const queue = [[start, [start]]];

    while (queue.length > 0) {
        const [currentPos, path] = queue.shift();
        const [x, y] = currentPos;

        // If we reached the targer, return the path
        if (x === target[0] && y === target[1]) {
            return path;
        }

        // Generate all possible knight moves from the current position
        for (const [dx, dy] of moves) {
            const nexPos = [x + dx, y + dy];
            const [nextX, nextY] = nexPos;

            // Check if within the boundaries
            if (nextX >= 0 && nextX < 8 && nextY >= 0 && nextY < 8) {
                const posString = nexPos.toString();

                // Add if not visited
                if (!visited.has(posString)) {
                    visited.add(posString);
                    queue.push([nexPos, [...path, nexPos]]);
                }
            }
        }
    }
    return null;
}

console.log(knightMoves([0, 0], [3, 3]));