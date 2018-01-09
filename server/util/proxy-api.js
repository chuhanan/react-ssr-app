const axios = require('axios')
const baseUrl = "https://cnodejs.org/api/v1"

module.exports = function(req, res, next){
  const path = req.path
  const user = req.session.user || {}
  const needAccountToken = req.query.needaccesstoken
  if(needAccountToken && !user.accessToken){
    res.status(401).send({
      success: false,
      msg: "用户未登录"
    })
  }

  const query = Object.assign({}, req.query, {
    accesstoken: needAccountToken && req.method === "GET" ? user.accesstoken : ""
  })
  if(query.needAccountToken) delete needAccountToken
  axios(`${baseUrl}${path}`, {
    method: req.method,
    params: query,
    data: Object.assign({}, req.body, {
      accessToken: needAccountToken && req.method === "POST" ? user.accessToken : ""
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(response => {
    if(response.status === 200){
      res.send({
        data: response.data
      })
    }else{
      res.status(response.status).send(response.data)
    }
  }).catch(error => {
    if(error.response){
      res.status(500).send(error.response.data)
    }else{
      res.status(500).send(error)
    }
  })
}
