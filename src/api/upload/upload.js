import axios from 'axios'
import { apiUrl, qiniu, upload, imgUrl } from '@/api/base.js'

export default {
    get_upload_name: function (args) {
        // args
        // user_id: 需要传入user_id
        // folder: 上传到的目录, 默认 courses

        // courses/uid1146797-20190920-1568960683910
        // 名字试了试无所谓,这样生成应该是保证唯一。
        let id = args.user_id
        let folder = args.folder ? args.folder : 'courses'
        let date = new Date()
        let today = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}`
        let time = date.getTime()

        return `${folder}/uid${id}-${today}-${time}`
    },
    get_upload_key (args) {
        // args:
        // bucket: 'simplecloud' 似乎是固定的
        // key: 'aa' 上传后回显的文件名,唯一即可。

        return axios.post(`${apiUrl}v2/services/qiniu/token/`, args)
    },

    get_upload_domain (args) {
        // 这个是直接向七牛进行的请求。
        return axios.get(`${qiniu}v2/query`, {params: args})
    },

    upload (args) {
        return axios.post(`${upload}`, args, { 'content-type': 'application/x-www-form-urlencoded' })
    },
    async upload_file (args) {
        // args
        // file 上传的文件信息
        // user_id 用户id
        // folder 上传的目录
        let upload_name = this.get_upload_name({
            user_id: args.user_id,
            folder: args.folder
        })

        // 第一步向服务器请求上传所需的token, key其实是上传的文件名。
        let keys = await this.get_upload_key({
            bucket: 'simplecloud',
            key: upload_name
        })

        // 第二步向七牛申请可用上传域名。
        // let upload_domains = 
        await this.get_upload_domain({
            ak: keys.data.token.split(':')[0],
            bucket: 'simplecloud'
        })
        // 这里获取的上传域名有很多个，有主域名与备用域名，这里就只用主域名了，
        // 配置在 config/index.js 中做代理。

        // upload_domains = upload_domains.data.up.acc.main[0]

        // 第三部配置form数据
        let form = new FormData()
        form.append('file', args.file)
        form.append('token', keys.data.token)
        form.append('key', upload_name)
        form.append('fname', 'old.jpg')

        let res = await this.upload(form)

        let new_avatar_url = `${imgUrl}${res.data.key}`

        return new_avatar_url
    }
}