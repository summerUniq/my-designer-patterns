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
export const calculateBonus = function (level, salary) {
    return strategies[level](salary)
}

// 手机号input的校验 非空 长度 格式

const telephoneS = {
    isNonEmpty: function (value, errMsg) {
        if(value === ''){
            return errMsg
        }
    },
    minLenth: function (value, max, errMsg) {
        if(value.length < max){
            return errMsg
        }
    },
    isMobile: function (value, errMsg) {
        if(!/^1[3|5|8][0-9]{9}$/.test(value)){
            return errMsg
        }
    }
}

// 提交form的时候需要校验
// 声明类用来做校验
var Validator = function() {
    this.cache = []
}
// 在原型上添加两个方法 add 和start
Validator.prototype.add = function (dom, rule, errormsg) {
    const ruleArr = rule.split(":") // [strategie, max]  => [value, max, errMsg]
    const value = dom.value;
    // 函数参数处理
    const strategie = ruleArr.shift()
    ruleArr.unshift(value).push(errMsg)
    this.cache.push(function () {
        return strategies[strategie].apply(dom, ruleArr)
    })
}

Validator.prototype.start = function () {
    const err = this.cache.map((v)=> v())
    if(err) {
        return err
    }
}

var validataFunc = function(){
    var validator = new Validator(); // 创建⼀个 validator 对象
    /***************添加⼀些校验规则****************/
    validator.add( registerForm.userName, 'isNonEmpty', '⽤户名不能为空' ); 
    validator.add( registerForm.password, 'minLength:6', '密码⻓度不能少于 6位');
    validator.add( registerForm.phoneNumber, 'isMobile', '⼿机号码格式不正确' );
    var errorMsg = validator.start(); // 获得校验结果
    return errorMsg; // 返回校验结果
    }


    var registerForm = document.getElementById( 'registerForm' );
    registerForm.onsubmit = function(){
    var errorMsg = validataFunc(); // 如果 errorMsg 有确切的返回值，说明未通过校验
    if ( errorMsg ){
    alert ( errorMsg );
    return false; // 阻⽌表单提交
     }
    };