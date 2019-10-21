
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
    },
    img_lazyload (args) {
        // 图片懒加载
        // args:
        //  callback: 默认。
        //  options: 观察的选项。
        //  selector: 选择器，默认img。
        function loadimg (img) {
            if (!img.dataset.src) {
                return
            }
            img.src = img.dataset.src
        }
        function default_callback (entries, self) {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadimg(entry.target)
                self.unobserve(entry.target)
            }
            })
        }

        let callback = args.callback ? args.callback : default_callback
        let options = args.options ? args.options : {}
        let selector = args.selector ? args.selector : 'img'

        let observer = new IntersectionObserver(callback, options)

        let queries = Array.from(document.querySelectorAll(selector))
        queries.forEach((item) => { observer.observe(item) })
    }
}