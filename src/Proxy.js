// 프록시 서버를 만들 수 있는 기능 가져오기
const {createProxyMiddleware} = require('http-proxy-middleware');

// 프록시 서버 : 클라이언트와 서버 사이에서 클라이언트 주소를 서버 주소에 맞게 바꿔주는 역할
// 프록시 서버 만들기
// app -> 현재 어플리케이션(현재 진행하고 있는 프로젝트)
module.exports = function(app){
    app.use(
        // v1 -> endpoint(주소값(origin)의 마지막)
        createProxyMiddleware('/v1',{
            target:"https://openapi.naver.com",
            changeOrigin :true
        // '/v1'으로 끝나는 url로 요청이 들어오면 "https://openapi.naver.com"의 주소로
        // 요청을 보내는 것처럼 하는 것을 허용한다
        })
    )
}
