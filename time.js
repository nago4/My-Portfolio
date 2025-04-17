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