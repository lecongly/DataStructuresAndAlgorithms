function minMovesToSeat(seats: number[], students: number[]): number {
    seats.sort((a, b) => b - a);
    students.sort((a, b) => b - a);
    let res = 0;
    for (let i = 0; i < seats.length; i++) {
        res += Math.abs(students[i] - seats[i])
    }
    return res
};