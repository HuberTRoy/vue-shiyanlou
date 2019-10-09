
export default {
    debounce (fn, delay) {
        // 一段时间内重复触发多次函数时进入计时，
        // 如果delay时间内没有重复触发则进行响应，
        // 否则重新进行计时。
        let timeout
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
            timeout = setTimeout(fn, delay)
        }
    },
    throttle (fn, delay) {
        // 触发事件时开始计时，
        // 计时器时间内如果有多次事件均不受理，
        // 执行完第一次触发的事件后继续重新受理其他的事件。
        let task = false
        return () => {
            if (!task) {
                task = true
                setTimeout(() => { 
                    fn()
                    task = false
                }, delay)
            }
        }
    }
}