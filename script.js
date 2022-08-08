const gtaZst = document.querySelector('.gtaZst');
const themeSong = document.querySelector('.themeSong');
const gamePlace = document.querySelector('.gamePlace');
const gameLoadingImg = document.querySelector('.gameLoadingImg');
const gameLoadingImg2 = document.querySelector('.gameLodaingImg2');
const loadingContent = document.querySelector('.loadingContent');

let isImg2 = false;

gtaZst.addEventListener('click', ()=>{
    let progress = 0;
    const gtaZstThemes = ['z1','z2','z3','z4','z5','z6','z7','z8','z9','z10','z11','z12','z13','z14','z15','z16','z17','z18','z19','z20','z21','z22','z23','z24','z25'];
    themeSong.loop = true;
    themeSong.play();

    displaySa();
    setInterval(chooseTheme,7000);
    setInterval(loadingBarProgress,2000);

    function displaySa(){
        gamePlace.style.setProperty('display','block');
    }
    function chooseTheme(){
        let themeNum = chance.integer({min: 0, max: (gtaZstThemes.length)-1});
        console.log('theme1: '+themeNum);

        gameLoadingImg.setAttribute('src', 'zapzdjzst/'+gtaZstThemes[themeNum]+'.jpg');

        if(gameLoadingImg.style.transform == 'scale(1.2)'){
            gameLoadingImg.style.setProperty('transform','scale(1.0)');
        }else{
            gameLoadingImg.style.setProperty('transform','scale(1.2)');
            gameLoadingImg.style.setProperty('transition','15s linear');
        }

        //2
        
    }
    function loadingBarProgress(){
        let loadingNum = chance.integer({min: 0, max: 10});
        progress += loadingNum;

        if(progress < 100){
            loadingContent.style.setProperty('width',progress+'%');
        }else{
            progress = 0;
        }
    }
});