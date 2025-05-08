const hour = new Date().getHours();

if(hour >= 4　&& hour < 11){
    document.getElementById('greeting').textContent ="おはようございます！";
    //昼１１時〜1６時59分まで
    }else if(hour >=11 && hour <17){
    document.getElementById('greeting').textContent ="こんにちは！";
    //夜18時〜3時59分まで
    }else{
    document.getElementById('greeting').textContent ="こんばんは！";
    }

//スクロールバーの進捗を取得する関数
const getScrollPercent = () => {
    const scrolled = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const viewHeight = document.documentElement.clientHeight;
    const percentage = scrolled / (pageHeight - viewHeight) * 100;
    document.querySelector("#bar").style.width = `${percentage}%`;
};
window.addEventListener('scroll', getScrollPercent);