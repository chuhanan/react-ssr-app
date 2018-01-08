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

  const query = Object.assign({}, req.query)
  if(query.needAccountToken) delete needAccountToken
  axios.get(`${baseUrl}${path}`, {
    method: req.method,
    params: query,
    data: Object.assign({}, req.body, {
      accessToken: user.accessToken
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(response => {
    console.log(response)
    if(response.status === 200){
      res.send({
        data: response.data
      })
    }else{
      res.status(response.status).send(response.data)
    }
  }).catch(error => {
    console.log(error)
    if(error.response){
      res.status(500).send(error.response.data)
    }else{
      res.status(500).send(error)
    }
  })
}
