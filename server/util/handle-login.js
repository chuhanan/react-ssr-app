const axios = require('axios')
const router = require('express').Router()

const baseUrl = "https://cnodejs.org/api/v1"

router.post('/login', function (req, res, next) {
  axios.post(`${baseUrl}/accesstoken`, {
    accesstoken: req.body.accesstoken
  })
    .then(response => {
      if(response.status === 200 || response.data.success){
        req.session.user = {
          accessToken: req.body.accesstoken,
          loginName: response.data.loginname,
          id: response.data.id,
          avatarUrl: response.data.avatar
        }
        res.json({
          success: true,
          data: response.data
        })
      }
    })
    .catch(error => {
      if(error.response){
        res.json({
          success: false,
          data: null
        })
      } else {
        next(error)
      }
    })
})

module.exports = router
