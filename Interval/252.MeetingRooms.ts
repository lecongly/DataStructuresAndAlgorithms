//T=O(nlogn), S = O(n)
const canAttendMeetings = (intervals: number[][]) => {
    const starts = []
    const ends = []

    for (let i = 0; i < intervals.length; i++) {
        const subArray = intervals[i]
        starts.push(subArray[0])
        ends.push(subArray[1])
    }
    starts.sort((a, b) => a - b)
    ends.sort((a, b) => a - b)

    for (let i = 0; i < starts.length; i++) {
        if (starts[i + 1] < ends[i]) return false
    }
    return true
}