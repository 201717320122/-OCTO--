export default class Request {
  config = {
    baseUrl: '',
    header: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success () {
    },
    fail () {
    },
    complete () {
    }
  }

  static posUrl (url) { /* 判断url是否为绝对路径 */
    return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
  }

  interceptor = {
    request (f) {
      if (f) {
        Request.requestBeforeFun = f
      }
    },
    response (f) {
	   console.log("你先执行吗");	   
      if (f) {
        Request.requestComFun = f
      }
    }
  }

  static requestBeforeFun (config) {
    return config
  }

  static requestComFun (response) {
	  
	   console.log("kkjk")
     return response
  }

  setConfig (f) {
    this.config = f(this.config)
  }

  request (options = {}) {
    options.baseUrl = options.baseUrl || this.config.baseUrl
    options.dataType = options.dataType || this.config.dataType
    options.url = Request.posUrl(options.url) ? options.url : (options.baseUrl + options.url)
    options.data = options.data || {}
    options.header = options.header || this.config.header
    options.method = options.method || this.config.method
    return new Promise((resolve, reject) => {
      let next = true
      let _config = null
      options.complete = (response) => {
		 
		   console.log("complete");
		   console.log(response);
		   
        let statusCode = response.statusCode
        response.config = _config
		
		
        response = Request.requestComFun(response);
		
		 // console.log(response);
		
		
	
        if (statusCode === 200) { // 成功
		console.log(response)
          resolve(response)
        } else {
			console.log("shiban")
          reject(response)
        }
      }
      let cancel = (t = 'handle cancel') => {
        let err = {
          errMsg: t,
          config: afC
        }
        reject(err)
        next = false
      }
      let afC = { ...this.config, ...options }
      _config = { ...afC, ...Request.requestBeforeFun(afC, cancel) }
      if (!next) return
      uni.request(_config)
    })
  }

  get (url, data, options = {}) {
    options.url = url
    options.data = data
    options.method = 'GET'
    return this.request(options)
  }

  post (url, data, options = {}) {
    options.url = url
    options.data = data
    options.method = 'POST'
    return this.request(options)
  }
}
