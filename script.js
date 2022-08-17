const body = document.querySelector('body');
const mainLinkVari = {
    link1: document.querySelector('.link-1'),
    link2: document.querySelector('.link-2'),
    link3: document.querySelector('.link-3'),
    link4: document.querySelector('.link-4')
}
const contentSection1Vari = {
    pTagBtns: document.querySelectorAll('.slide-btns-container p'),
    pTagDot: document.querySelector('.p-dot'),
    slideImgs: document.querySelector('.slide-pictures img'),
    creatorImgs: document.querySelector('.creator-section img'),
    creatorsNames: document.querySelector('.creator-section p .creators-name'),
    creatorsDesignNames: document.querySelector('.creator-section p .creators-design-name')
}
const {
    pTagBtns,
    slideImgs,
    pTagDot,
    creatorImgs,
    creatorsNames,
    creatorsDesignNames
} = contentSection1Vari;

let pTagsSpanTags = {
    // P TAGS 
    pt1: pTagBtns[0], pt2: pTagBtns[1], 
    pt3: pTagBtns[2], pt4: pTagBtns[3], 
    pt5: pTagBtns[4], pt6: pTagBtns[5], 
    pt7: pTagBtns[6], pt8: pTagBtns[7],

    // SPAN TAGS 
    st1: pTagBtns[0].firstElementChild, 
    st2: pTagBtns[1].firstElementChild, 
    st3: pTagBtns[2].firstElementChild, 
    st4: pTagBtns[3].firstElementChild, 
    st5: pTagBtns[4].firstElementChild, 
    st6: pTagBtns[5].firstElementChild, 
    st7: pTagBtns[6].firstElementChild, 
    st8: pTagBtns[7].firstElementChild
}
let {
    // P TAGS
    pt1, pt2, pt3, pt4, 
    pt5, pt6, pt7, pt8,

    // SPAN TAGS 
    st1, st2, st3, st4, 
    st5, st6, st7, st8
} = pTagsSpanTags;

const pTagNumBtns = document.querySelector('.slide-btns-container p .p-tag-num');
const pTags = document.querySelector('.slide-btns-container p');
const pTagNumIndexSlideNums = document.querySelector('.creator-section p .p-tag-num');

function p1() {
    pt1.classList.add('p-toggle');
    pt1.firstElementChild.classList.add('dot-toggle');
    slideImgs.src = 'https://elementor.com/cdn-cgi/image/f=auto,w=847/marketing/wp-content/uploads/2021/08/Group-1087165.png';
    creatorImgs.src = 'https://elementor.com/wp-content/uploads/2021/06/Ellipse-309.png';
    creatorsNames.textContent = 'BY LEVENTE FIGNAR';
    creatorsDesignNames.textContent = 'TRELEMENTS';

    // Disabling
    pt2.classList.add('p-add');
    pt3.classList.add('p-add');
    pt4.classList.add('p-add');
    pt5.classList.add('p-add');
    pt6.classList.add('p-add');
    pt7.classList.add('p-add');
    pt8.classList.add('p-add');
    // Disabling 2
    pt2.classList.remove('p-toggle');
    pt3.classList.remove('p-toggle');
    pt4.classList.remove('p-toggle');
    pt5.classList.remove('p-toggle');
    pt6.classList.remove('p-toggle');
    pt7.classList.remove('p-toggle');
    pt8.classList.remove('p-toggle');
    // Disabling 3
    st2.classList.remove('dot-toggle');
    st3.classList.remove('dot-toggle');
    st4.classList.remove('dot-toggle');
    st5.classList.remove('dot-toggle');
    st6.classList.remove('dot-toggle');
    st7.classList.remove('dot-toggle');
    st8.classList.remove('dot-toggle');
}
pt1.addEventListener('click', () => {
    p1();
});

function p2() {
    pt2.classList.add('p-toggle');
    pt2.firstElementChild.classList.add('dot-toggle');
    slideImgs.src = 'https://elementor.com/cdn-cgi/image/f=auto,w=847/marketing/wp-content/uploads/2021/08/showcase-Poustka-1.png';
    creatorImgs.src = 'https://elementor.com/wp-content/uploads/2021/06/Ellipse-309-2.png';
    creatorsNames.textContent = 'BY MICHAL POUSTKA';
    creatorsDesignNames.textContent = 'POUSTKA';

    // Disabling
    pt1.classList.add('p-add');
    pt3.classList.add('p-add');
    pt4.classList.add('p-add');
    pt5.classList.add('p-add');
    pt6.classList.add('p-add');
    pt7.classList.add('p-add');
    pt8.classList.add('p-add');
    // Disabling 2
    pt1.classList.remove('p-toggle');
    pt3.classList.remove('p-toggle');
    pt4.classList.remove('p-toggle');
    pt5.classList.remove('p-toggle');
    pt6.classList.remove('p-toggle');
    pt7.classList.remove('p-toggle');
    pt8.classList.remove('p-toggle');
    // Disabling 3
    st1.classList.remove('dot-toggle');
    st3.classList.remove('dot-toggle');
    st4.classList.remove('dot-toggle');
    st5.classList.remove('dot-toggle');
    st6.classList.remove('dot-toggle');
    st7.classList.remove('dot-toggle');
    st8.classList.remove('dot-toggle');
}
pt2.addEventListener('click', () => {
    p2();
});

function p3() {
    pt3.classList.add('p-toggle');
    pt3.firstElementChild.classList.add('dot-toggle');
    slideImgs.src = 'https://elementor.com/wp-content/uploads/2021/05/Mockup-Tabs-2-1.png';
    creatorImgs.src = 'https://elementor.com/wp-content/uploads/2021/06/Pieter-Goorden.png';
    creatorsNames.textContent = 'BY PIETER GOORDEN';
    creatorsDesignNames.textContent = 'BRANDPUNT MEDIA';

    // Disabling
    pt2.classList.add('p-add');
    pt1.classList.add('p-add');
    pt4.classList.add('p-add');
    pt5.classList.add('p-add');
    pt6.classList.add('p-add');
    pt7.classList.add('p-add');
    pt8.classList.add('p-add');
    // Disabling 2
    pt2.classList.remove('p-toggle');
    pt1.classList.remove('p-toggle');
    pt4.classList.remove('p-toggle');
    pt5.classList.remove('p-toggle');
    pt6.classList.remove('p-toggle');
    pt7.classList.remove('p-toggle');
    pt8.classList.remove('p-toggle');
    // Disabling 3
    st2.classList.remove('dot-toggle');
    st1.classList.remove('dot-toggle');
    st4.classList.remove('dot-toggle');
    st5.classList.remove('dot-toggle');
    st6.classList.remove('dot-toggle');
    st7.classList.remove('dot-toggle');
    st8.classList.remove('dot-toggle');
}
pt3.addEventListener('click', () => {
    p3();
});

function p4() {
    pt4.classList.add('p-toggle');
    pt4.firstElementChild.classList.add('dot-toggle');
    slideImgs.src = 'https://elementor.com/cdn-cgi/image/f=auto,w=847/marketing/wp-content/uploads/2021/06/Mockup-Tabs-1.png';
    creatorImgs.src = 'https://elementor.com/wp-content/uploads/2021/06/TRAILBLAZE-MARKETING.png';
    creatorsNames.textContent = 'BY TRAILBLAZE MARKETING';
    creatorsDesignNames.textContent = 'CHI KITCHEN';

    // Disabling
    pt2.classList.add('p-add');
    pt3.classList.add('p-add');
    pt1.classList.add('p-add');
    pt5.classList.add('p-add');
    pt6.classList.add('p-add');
    pt7.classList.add('p-add');
    pt8.classList.add('p-add');
    // Disabling 2
    pt2.classList.remove('p-toggle');
    pt3.classList.remove('p-toggle');
    pt1.classList.remove('p-toggle');
    pt5.classList.remove('p-toggle');
    pt6.classList.remove('p-toggle');
    pt7.classList.remove('p-toggle');
    pt8.classList.remove('p-toggle');
    // Disabling 3
    st2.classList.remove('dot-toggle');
    st3.classList.remove('dot-toggle');
    st1.classList.remove('dot-toggle');
    st5.classList.remove('dot-toggle');
    st6.classList.remove('dot-toggle');
    st7.classList.remove('dot-toggle');
    st8.classList.remove('dot-toggle');
}
pt4.addEventListener('click', () => {
    p4();
});

function p5() {
    pt5.classList.add('p-toggle');
    pt5.firstElementChild.classList.add('dot-toggle');
    slideImgs.src = 'https://elementor.com/cdn-cgi/image/f=auto,w=847/marketing/wp-content/uploads/2021/05/Group-4185-1-2.png';
    creatorImgs.src = 'https://elementor.com/wp-content/uploads/2021/06/The-Design-Space.png';
    creatorsNames.textContent = 'BY THE DESIGN SPACE';
    creatorsDesignNames.textContent = 'ON DUSK MARKETS';

    // Disabling
    pt2.classList.add('p-add');
    pt3.classList.add('p-add');
    pt4.classList.add('p-add');
    pt1.classList.add('p-add');
    pt6.classList.add('p-add');
    pt7.classList.add('p-add');
    pt8.classList.add('p-add');
    // Disabling 2
    pt2.classList.remove('p-toggle');
    pt3.classList.remove('p-toggle');
    pt4.classList.remove('p-toggle');
    pt1.classList.remove('p-toggle');
    pt6.classList.remove('p-toggle');
    pt7.classList.remove('p-toggle');
    pt8.classList.remove('p-toggle');
    // Disabling 3
    st2.classList.remove('dot-toggle');
    st3.classList.remove('dot-toggle');
    st4.classList.remove('dot-toggle');
    st1.classList.remove('dot-toggle');
    st6.classList.remove('dot-toggle');
    st7.classList.remove('dot-toggle');
    st8.classList.remove('dot-toggle');
}
pt5.addEventListener('click', () => {
    p5();
});

function p6() {
    pt6.classList.add('p-toggle');
    pt6.firstElementChild.classList.add('dot-toggle');
    slideImgs.src = 'https://elementor.com/wp-content/uploads/2021/05/Group-1087146.png';
    creatorImgs.src = 'https://elementor.com/wp-content/uploads/2021/06/Design-and-Development-Mind.png';
    creatorsNames.textContent = 'BY DESIGN AND DEVELOPMENT MIND';
    creatorsDesignNames.textContent = 'ACCESS PARTNERS';

    // Disabling
    pt2.classList.add('p-add');
    pt3.classList.add('p-add');
    pt4.classList.add('p-add');
    pt5.classList.add('p-add');
    pt1.classList.add('p-add');
    pt7.classList.add('p-add');
    pt8.classList.add('p-add');
    // Disabling 2
    pt2.classList.remove('p-toggle');
    pt3.classList.remove('p-toggle');
    pt4.classList.remove('p-toggle');
    pt5.classList.remove('p-toggle');
    pt1.classList.remove('p-toggle');
    pt7.classList.remove('p-toggle');
    pt8.classList.remove('p-toggle');
    // Disabling 3
    st2.classList.remove('dot-toggle');
    st3.classList.remove('dot-toggle');
    st4.classList.remove('dot-toggle');
    st5.classList.remove('dot-toggle');
    st1.classList.remove('dot-toggle');
    st7.classList.remove('dot-toggle');
    st8.classList.remove('dot-toggle');
}
pt6.addEventListener('click', () => {
    p6();
});

function p7() {
    pt7.classList.add('p-toggle');
    pt7.firstElementChild.classList.add('dot-toggle');
    slideImgs.src = 'https://elementor.com/cdn-cgi/image/f=auto,w=847/marketing/wp-content/uploads/2021/06/Group-1087521.png';
    creatorImgs.src = 'https://elementor.com/wp-content/uploads/2021/06/Maurizio-Leo.png';
    creatorsNames.textContent = 'BY MAURIZIO LEO';
    creatorsDesignNames.textContent = 'THE PERFECT LOAF';

    // Disabling
    pt2.classList.add('p-add');
    pt3.classList.add('p-add');
    pt4.classList.add('p-add');
    pt5.classList.add('p-add');
    pt6.classList.add('p-add');
    pt1.classList.add('p-add');
    pt8.classList.add('p-add');
    // Disabling 2
    pt2.classList.remove('p-toggle');
    pt3.classList.remove('p-toggle');
    pt4.classList.remove('p-toggle');
    pt5.classList.remove('p-toggle');
    pt6.classList.remove('p-toggle');
    pt1.classList.remove('p-toggle');
    pt8.classList.remove('p-toggle');
    // Disabling 3
    st2.classList.remove('dot-toggle');
    st3.classList.remove('dot-toggle');
    st4.classList.remove('dot-toggle');
    st5.classList.remove('dot-toggle');
    st6.classList.remove('dot-toggle');
    st1.classList.remove('dot-toggle');
    st8.classList.remove('dot-toggle');
}
pt7.addEventListener('click', () => {
    p7();
});

function p8() {
    pt8.classList.add('p-toggle');
    pt8.firstElementChild.classList.add('dot-toggle');
    slideImgs.src = 'https://elementor.com/cdn-cgi/image/f=auto,w=847/marketing/wp-content/uploads/2021/06/Group-1087521-1.png';
    creatorImgs.src = 'https://elementor.com/wp-content/uploads/2021/06/The-Observatory.png';
    creatorsNames.textContent = 'BY THE OBSERVATORY';
    creatorsDesignNames.textContent = 'THE LITTLE PSYCHOLOGY CO.';

    // Disabling
    pt2.classList.add('p-add');
    pt3.classList.add('p-add');
    pt4.classList.add('p-add');
    pt5.classList.add('p-add');
    pt6.classList.add('p-add');
    pt7.classList.add('p-add');
    pt1.classList.add('p-add');
    // Disabling 2
    pt2.classList.remove('p-toggle');
    pt3.classList.remove('p-toggle');
    pt4.classList.remove('p-toggle');
    pt5.classList.remove('p-toggle');
    pt6.classList.remove('p-toggle');
    pt7.classList.remove('p-toggle');
    pt1.classList.remove('p-toggle');
    // Disabling 3
    st2.classList.remove('dot-toggle');
    st3.classList.remove('dot-toggle');
    st4.classList.remove('dot-toggle');
    st5.classList.remove('dot-toggle');
    st6.classList.remove('dot-toggle');
    st7.classList.remove('dot-toggle');
    st1.classList.remove('dot-toggle');
}
pt8.addEventListener('click', () => {
    p8();
});

function cancelBodyOverflow() {
    if (body.offsetWidth <= 700) {
        body.style.overflowY = 'hidden';
    }
}

function nonCancelBodyOverflow() {
    if (body.offsetWidth <= 700) {
        body.style.overflowY = 'scroll';
    }
}

// pTagBtns,
// slideImgs,
// pTagDot,
// creatorImgs,
// creatorsNames,
// creatorsDesignNames

const imgArr = [
    // IMG 1
    'https://elementor.com/cdn-cgi/image/f=auto,w=847/marketing/wp-content/uploads/2021/08/Group-1087165.png',
    // IMG 2
    'https://elementor.com/cdn-cgi/image/f=auto,w=847/marketing/wp-content/uploads/2021/08/showcase-Poustka-1.png',
    // IMG 3
    'https://elementor.com/wp-content/uploads/2021/05/Mockup-Tabs-2-1.png',
    // IMG 4
    'https://elementor.com/cdn-cgi/image/f=auto,w=847/marketing/wp-content/uploads/2021/06/Mockup-Tabs-1.png',
    // IMG 5
    'https://elementor.com/cdn-cgi/image/f=auto,w=847/marketing/wp-content/uploads/2021/05/Group-4185-1-2.png',
    // IMG 6
    'https://elementor.com/wp-content/uploads/2021/05/Group-1087146.png',
    // IMG 7
    'https://elementor.com/cdn-cgi/image/f=auto,w=847/marketing/wp-content/uploads/2021/06/Group-1087521.png',
    // IMG 8
    'https://elementor.com/cdn-cgi/image/f=auto,w=847/marketing/wp-content/uploads/2021/06/Group-1087521-1.png'
];
const spanArr = [
    st1, st2, st3, st4, 
    st5, st6, st7, st8 
];
const creatorImgArr = [
    // Creator 1:
    'https://elementor.com/wp-content/uploads/2021/06/Ellipse-309.png',
    // Creator 2:
    'https://elementor.com/wp-content/uploads/2021/06/Ellipse-309-2.png',
    // Creator 3:
    'https://elementor.com/wp-content/uploads/2021/06/Pieter-Goorden.png',
    // Creator 4:
    'https://elementor.com/wp-content/uploads/2021/06/TRAILBLAZE-MARKETING.png',
    // Creator 5:
    'https://elementor.com/wp-content/uploads/2021/06/The-Design-Space.png',
    // Creator 6:
    'https://elementor.com/wp-content/uploads/2021/06/Design-and-Development-Mind.png',
    // Creator 7:
    'https://elementor.com/wp-content/uploads/2021/06/Maurizio-Leo.png',
    // Creator 8:
    'https://elementor.com/wp-content/uploads/2021/06/The-Observatory.png'

]
const creatorsNam = [
    // Creator 1:
    'BY LEVENTE FIGNAR',
    // Creator 2:
    'BY MICHAL POUSTKA',
    // Creator 3:
    'BY PIETER GOORDEN',
    // Creator 4:
    'BY TRAILBLAZE MARKETING',
    // Creator 5:
    'BY THE DESIGN SPACE',
    // Creator 6:
    'BY DESIGN AND DEVELOPMENT MIND',
    // Creator 7:
    'BY MAURIZIO LEO',
    // Creator 8:
    'BY THE OBSERVATORY'
];
const creatorsDesignsNam = [
    // Creator 1:
    'TRELEMENTS',
    // Creator 2:
    'POUSTKA',
    // Creator 3:
    'BRANDPUNT MEDIA',
    // Creator 4:
    'CHI KITCHEN',
    // Creator 5:
    'ON DUSK MARKETS',
    // Creator 6:
    'ACCESS PARTNERS',
    // Creator 7:
    'THE PERFECT LOAF',
    // Creator 8:
    'THE LITTLE PSYCHOLOGY CO.'
];
let slideIndex = 0;
let slideIndex2 = 0;

const pObjects = [
    pt1, pt2, pt3, pt4, 
    pt5, pt6, pt7, pt8,
]

pt1.classList.add('p-toggle');
st1.classList.add('dot-toggle');
pTagNumIndexSlideNums.textContent = 1;

// for (let i = 0; i < creatorsDesignsNam.length; i++) {
//     pTagBtns[i].lastElementChild.textContent = i+1;
// }

function goThroughSlide() {
    slideIndex++;
    slideImgs.src = imgArr[slideIndex];
    creatorImgs.src = creatorImgArr[slideIndex];
    // creatorsNames.innerHTML = `${creatorsNam[slideIndex]} | <span style="color: #c75e88">Slide:</span>`;
    // creatorsDesignNames.textContent = creatorsDesignsNam[slideIndex];
    pTagNumIndexSlideNums.textContent = parseInt(slideIndex+1);
    pTagBtns[slideIndex].classList.add('p-toggle');
    pTagBtns[slideIndex].firstElementChild.classList.add('dot-toggle');

    if (slideIndex >= pObjects.length-1) {
        slideIndex = -1;
    }
}

function indexSlideFunction() {
    slideIndex2++;
    if (slideIndex2 == 0) {
        pt2.classList.remove('p-toggle');
        pt1.classList.add('p-toggle');
        pt3.classList.remove('p-toggle');
        pt4.classList.remove('p-toggle');
        pt5.classList.remove('p-toggle');
        pt6.classList.remove('p-toggle');
        pt7.classList.remove('p-toggle');
        pt8.classList.remove('p-toggle');

        st2.classList.remove('dot-toggle');
        st1.classList.add('dot-toggle');
        st3.classList.remove('dot-toggle');
        st4.classList.remove('dot-toggle');
        st5.classList.remove('dot-toggle');
        st6.classList.remove('dot-toggle');
        st7.classList.remove('dot-toggle');
        st8.classList.remove('dot-toggle');
    }
    
    if (slideIndex2 == 1) {
        pt2.classList.add('p-toggle');
        pt1.classList.remove('p-toggle');
        pt3.classList.remove('p-toggle');
        pt4.classList.remove('p-toggle');
        pt5.classList.remove('p-toggle');
        pt6.classList.remove('p-toggle');
        pt7.classList.remove('p-toggle');
        pt8.classList.remove('p-toggle');

        st1.classList.remove('dot-toggle');
        st2.classList.add('dot-toggle');
        st3.classList.remove('dot-toggle');
        st4.classList.remove('dot-toggle');
        st5.classList.remove('dot-toggle');
        st6.classList.remove('dot-toggle');
        st7.classList.remove('dot-toggle');
        st8.classList.remove('dot-toggle');
    }
    
    if (slideIndex2 == 2) {
        pt2.classList.remove('p-toggle');
        pt1.classList.remove('p-toggle');
        pt3.classList.add('p-toggle');
        pt4.classList.remove('p-toggle');
        pt5.classList.remove('p-toggle');
        pt6.classList.remove('p-toggle');
        pt7.classList.remove('p-toggle');
        pt8.classList.remove('p-toggle');

        st1.classList.remove('dot-toggle');
        st2.classList.remove('dot-toggle');
        st3.classList.add('dot-toggle');
        st4.classList.remove('dot-toggle');
        st5.classList.remove('dot-toggle');
        st6.classList.remove('dot-toggle');
        st7.classList.remove('dot-toggle');
        st8.classList.remove('dot-toggle');
    }
    
    if (slideIndex2 == 3) {
        pt2.classList.remove('p-toggle');
        pt1.classList.remove('p-toggle');
        pt3.classList.remove('p-toggle');
        pt4.classList.add('p-toggle');
        pt5.classList.remove('p-toggle');
        pt6.classList.remove('p-toggle');
        pt7.classList.remove('p-toggle');
        pt8.classList.remove('p-toggle');

        st1.classList.remove('dot-toggle');
        st2.classList.remove('dot-toggle');
        st3.classList.remove('dot-toggle');
        st4.classList.add('dot-toggle');
        st5.classList.remove('dot-toggle');
        st6.classList.remove('dot-toggle');
        st7.classList.remove('dot-toggle');
        st8.classList.remove('dot-toggle');
    }
    
    if (slideIndex2 == 4) {
        pt2.classList.remove('p-toggle');
        pt1.classList.remove('p-toggle');
        pt3.classList.remove('p-toggle');
        pt4.classList.remove('p-toggle');
        pt5.classList.add('p-toggle');
        pt6.classList.remove('p-toggle');
        pt7.classList.remove('p-toggle');
        pt8.classList.remove('p-toggle');

        st1.classList.remove('dot-toggle');
        st2.classList.remove('dot-toggle');
        st3.classList.remove('dot-toggle');
        st4.classList.remove('dot-toggle');
        st5.classList.add('dot-toggle');
        st6.classList.remove('dot-toggle');
        st7.classList.remove('dot-toggle');
        st8.classList.remove('dot-toggle');
    }
    
    if (slideIndex2 == 5) {
        pt2.classList.remove('p-toggle');
        pt1.classList.remove('p-toggle');
        pt3.classList.remove('p-toggle');
        pt4.classList.remove('p-toggle');
        pt5.classList.remove('p-toggle');
        pt6.classList.add('p-toggle');
        pt7.classList.remove('p-toggle');
        pt8.classList.remove('p-toggle');

        st1.classList.remove('dot-toggle');
        st2.classList.remove('dot-toggle');
        st3.classList.remove('dot-toggle');
        st4.classList.remove('dot-toggle');
        st5.classList.remove('dot-toggle');
        st6.classList.add('dot-toggle');
        st7.classList.remove('dot-toggle');
        st8.classList.remove('dot-toggle');
    }
    
    if (slideIndex2 == 6) {
        pt2.classList.remove('p-toggle');
        pt1.classList.remove('p-toggle');
        pt3.classList.remove('p-toggle');
        pt4.classList.remove('p-toggle');
        pt5.classList.remove('p-toggle');
        pt6.classList.remove('p-toggle');
        pt7.classList.add('p-toggle');
        pt8.classList.remove('p-toggle');

        st1.classList.remove('dot-toggle');
        st2.classList.remove('dot-toggle');
        st3.classList.remove('dot-toggle');
        st4.classList.remove('dot-toggle');
        st5.classList.remove('dot-toggle');
        st6.classList.remove('dot-toggle');
        st7.classList.add('dot-toggle');
        st8.classList.remove('dot-toggle');
    }
    
    if (slideIndex2 == 7) {
        pt2.classList.remove('p-toggle');
        pt1.classList.remove('p-toggle');
        pt3.classList.remove('p-toggle');
        pt4.classList.remove('p-toggle');
        pt5.classList.remove('p-toggle');
        pt6.classList.remove('p-toggle');
        pt7.classList.remove('p-toggle');
        pt8.classList.add('p-toggle');

        st1.classList.remove('dot-toggle');
        st2.classList.remove('dot-toggle');
        st3.classList.remove('dot-toggle');
        st4.classList.remove('dot-toggle');
        st5.classList.remove('dot-toggle');
        st6.classList.remove('dot-toggle');
        st7.classList.remove('dot-toggle');
        st8.classList.add('dot-toggle');
    }

    if (slideIndex2 >= pObjects.length) {
        slideIndex2 = 0;
        pt2.classList.remove('p-toggle');
        pt1.classList.add('p-toggle');
        pt3.classList.remove('p-toggle');
        pt4.classList.remove('p-toggle');
        pt5.classList.remove('p-toggle');
        pt6.classList.remove('p-toggle');
        pt7.classList.remove('p-toggle');
        pt8.classList.remove('p-toggle');

        st1.classList.add('dot-toggle');
        st2.classList.remove('dot-toggle');
        st3.classList.remove('dot-toggle');
        st4.classList.remove('dot-toggle');
        st5.classList.remove('dot-toggle');
        st6.classList.remove('dot-toggle');
        st7.classList.remove('dot-toggle');
        st8.classList.remove('dot-toggle');
    }
}

let speed = 3000;
setInterval(() => {
    goThroughSlide();
    indexSlideFunction();
}, speed);

const contentSection7 = document.querySelector('.content-section-7');
const numRate1 = document.querySelector('.num-rate-1');
const numRate2 = document.querySelector('.num-rate-2');
const numRate3 = document.querySelector('.num-rate-3');
const numRate4 = document.querySelector('.num-rate-4');
let n1Speed = 500;
let n2Speed = 30;
let n3Speed = 10;
let n4Speed = 10;
let i1Num = 0;
let i2Num = 0;
let i3Num = 0;
let i4Num = 0;
let delay = 2000;


function numberIncreaseSystem1() {
    if (window.scrollY > 5550) {
        contentSection7.style.transform = 'translateY(0)';
        contentSection7.style.opacity = '100%';
        i1Num++;
        numRate1.textContent = i1Num;
        if (i1Num == 10) {
            clearInterval(num1Interval);
        }
    }
}
let num1Interval = setInterval(numberIncreaseSystem1, n1Speed);

function numberIncreaseSystem2() {
    if (window.scrollY > 5550) {
        contentSection7.style.transform = 'translateY(0)';
        contentSection7.style.opacity = '100%';
        i2Num++;
        numRate2.textContent = i2Num;
        if (i2Num == 140) {
            clearInterval(num2Interval);
        }
    }
}
let num2Interval = setInterval(numberIncreaseSystem2, n2Speed);

function numberIncreaseSystem3() {
    if (window.scrollY > 5550) {
        contentSection7.style.transform = 'translateY(0)';
        contentSection7.style.opacity = '100%';
        i3Num++;
        numRate3.textContent = i3Num;
        if (i3Num == 400) {
            clearInterval(num3Interval);
        }
    }
}
let num3Interval = setInterval(numberIncreaseSystem3, n3Speed);

function numberIncreaseSystem4() {
    if (window.scrollY > 5300) {
        contentSection7.style.transform = 'translateY(0)';
        contentSection7.style.opacity = '100%';
        i4Num++;
        numRate4.textContent = i4Num;
        if (i4Num == 330) {
            clearInterval(num4Interval);
        }
    }
}
let num4Interval = setInterval(numberIncreaseSystem4, n4Speed);

setInterval(() => {
    num1Interval;
    num2Interval;
    num3Interval;
    num4Interval;
}, delay);

const cs9Imgs = document.querySelectorAll('.cs9-sub-section img');
function contentSection9ScrollAnimation() {
    if (window.scrollY > 6935) {
        for (let i = 0; i < cs9Imgs.length; i++) {
            const element = cs9Imgs[i];
            element.style.transform = 'translateY(0)';
            element.style.opacity = '100%';
        }
    }
}
setInterval(contentSection9ScrollAnimation, 1000);