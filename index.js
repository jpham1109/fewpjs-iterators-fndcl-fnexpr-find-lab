
const superbowlWin = (array) => { 
    const record = array.find((record) => record.result === 'W')
    return !!record ? record.year : undefined
}