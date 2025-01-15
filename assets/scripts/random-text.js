let list_words = [
    "Store",
    "SocialNetwork",
    "BusinessIntelligence",
    "FaceRecognition",
    "RealStateSaas",
    "EducationPlatform",
    "MobileApp",
    "AWSInfrastructure",
];

function writingEffect(element) {
    let windex = 0;
    let index = 0;
    let speedWriting = 100;
    let speedDeleting = 50;
    let delayNextWord = 3000;
    let el = document.querySelector(element);
    el.innerHTML = '';

    function wEffect() {
        let text = list_words[windex];
        if (index < text.length) {
            el.innerHTML += text.charAt(index);
            index++;
            speedWriting = 140 - Math.random() * 100;
            setTimeout(wEffect, speedWriting);
        } else {
            setTimeout(eraseEffect, delayNextWord);
        }
    }

    function eraseEffect() {
        if (index > 0) {
            el.innerHTML = el.innerHTML.substring(0, el.innerHTML.length - 1);
            index--;
            setTimeout(eraseEffect, speedDeleting);
        } else {
            goToNextWord();
        }
    }

    function goToNextWord() {
        index = 0;
        windex++;
        if (windex >= list_words.length) {
            windex = 0;
        }
        wEffect();
    }

    wEffect();
}

writingEffect('#writing-function');