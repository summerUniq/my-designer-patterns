// 奖⾦计算，绩效为 S 的⼈年 终奖有 4 倍⼯资，绩效为 A 的⼈年终奖有 3 倍⼯资，⽽绩效为 B 的⼈年终
// 奖是 2 倍⼯资

// 使用对象管理策略
const strategies = {
    "s": function (salary) {
        return 4 * salary
    },
    "A": function (salary) {
        return 3 * salary
    },
    "B": function (salary) {
        return 2 * salary
    }
}

// 使用函数处理策略的使用
var calculateBonus = function (level, salary) {
    return strategies[level](salary)
}

// test
console.log( calculateBonus( 'S', 20000 ) );// 输出:80000
console.log( calculateBonus( 'A', 10000 ) );// 输出:30000