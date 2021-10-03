const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
    const originalGetWinner = utils.getWinner
    utils.getWinner = jest.fn((p1, p2) => p1)

    const winner = thumbWar('kenji', 'tomita')
    expect(utils.getWinner.mock.calls).toEqual([
        ['kenji', 'tomita'],
        ['kenji', 'tomita']
    ])
    expect(winner).toBe('kenji')
    expect(utils.getWinner).toHaveBeenCalledTimes(2)
    expect(utils.getWinner).toHaveBeenCalledWith('kenji', 'tomita')
    expect(utils.getWinner).toHaveBeenNthCalledWith(
        1,
        'kenji',
        'tomita'
    )

    // cleanup
    utils.getWinner = originalGetWinner
})