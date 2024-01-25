import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import axios from 'axios'
// axios 이용해서 네이버 검색 api를 이용해서 뉴스 데이터 가져와보기

// env 변수 가져오기
const Client_id = process.env.REACT_APP_CLIENT_ID;
const Client_secret = process.env.REACT_APP_CLIENT_SECRET;
function App() {
  useEffect(function(){
    axios({
      url:'v1/search/news.json',
      params:{query:'자장'},
      headers :{
        'X-Naver-Client-Id' :Client_id,
        'X-Naver-Client-Secret':Client_secret
      }
    })
    .then((result)=>{
      console.log(result)
    })
  },[])

  return (
    <div className="App">
    </div>
  );
}

export default App;
