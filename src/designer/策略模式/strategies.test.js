import {calculateBonus} from './strategies'


test('计算工资', () => {
    expect(calculateBonus('s', 2000)).toBe(8000)
})