export const groupBy = (items: any[], key: string) => {
    return items.reduce((result, currentValue) => {
        ;(result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue)
        return result
    }, {})
}
