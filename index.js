/*

    UTILITY : MOD

    basic modal component 
    calculate window position
    apply modal styles
    close component & return

*/

// selector [ app ] : app container
let app = document.querySelector('#app');
// selector [ mod ] : modal container
let mod = document.querySelector('#mod');
// variable [ val ] : scroll value
let val; 

// function [ calcWindowPosition ] : calculate scroll position
function calcWindowPosition() {

    // assign value with scroll position
    val = window.scrollY;

    // test scroll position
    console.log(val + 'px');

}

// function [ modProps ] : modal properties
function modProps() {

    // init [ calcWindowPosition ] function
    calcWindowPosition();

    // validate [ mod ] properties
    if (mod.style.display == 'none') {
        
        // assign display of grid
        mod.style.display = 'grid';

        // mod.style.gridColumn = 'span 6';
        // mod.style.gridRow = 'span 2';
        
        // position [ mod ] value from top 
        mod.style.top = val + 'px';

        // mod position props
        mod.style.position = 'absolute';
        mod.style.left = '0';
        mod.style.height = '100%';
        mod.style.maxHeight = '100%';
        mod.style.maxWidth = '100%';
        mod.style.width = '100%';
        mod.style.background = 'rgba(0,0,0,0.5)';
        mod.style.zIndex = '1000';

        // assign app to overflow hidden
        app.style.overflow = 'hidden';
        
        // test
        console.log('modal styles applied');
        
    }
    else {

        // default mod props
        mod.style.display = 'none';
        app.style.overflow = 'auto';

    }
}

// selector [ exit ] : exit button
let exit = document.querySelector('#exit');

// event [ exit ] : exit modal
exit.addEventListener('click', ()=>{

    // validate mod props
    if (mod.style.display != 'none' || mod.style.display != null) {

        // remove modal
        mod.style.display = 'none';

        // test
        console.log('[ exit ] : mod closed');
    }
    // validate app overflow
    if (app.style.overflow != 'scroll') {

        // reset app overflow
        app.style.overflow = 'scroll';

        // test
        console.log('[ exit ] : app overflow = scroll');
    }
    else {

        // default modal props
        modal.style.display = 'grid';

        // test
        console.log('[ mod ] : position grid');

    }
});

/*

    UTILITY : PRE

    basic slideshow component
    next & prev control
    loop through panels
    open modal component


*/

// logic [ pre ] : preview index
let preIndex = 1;

// init [ preRun ] function
preRun(preIndex);

// function [ preCtrl ] : panel control
function preCtrl(n) {

    // init [ preRun ] function
    preRun(preIndex += n);

}

// function [ preRun ] : preview run
function preRun(n) {

    // selector [ panel ] : preview panel
    let panel = document.getElementsByClassName('panel');

    // selector [ spn ] : span element
    let spn = document.querySelector('.panel .spn');

    // variable [ i ] : for loop
    let i;

    // validate panel length
    if (n > panel.length) {

        // set preview index
        preIndex = 1;

        // test
        console.log('panel item');

    }

    // validate min panel length
    if (n < 1) {

        // assign panel length to preview index
        preIndex = panel.length;

    }

    // assign [ panel ] to display none
    for (i = 0; i < panel.length; i++) {
        
        // remove panel
        panel[i].style.display = 'none';
    
    }

    // assign panel display to flex
    panel[ preIndex - 1 ].style.display = 'flex';

}

// init [ docFrag ] function
docFrag();

// function [ docFrag ] : document fragment
function docFrag() {

    // variable [ frg ] : fragment
    let frg = document.createDocumentFragment();

    for (let i = 0; i <= 1; i++) {
        
        // create button element
        let opn = document.createElement('button');

        // assign value
        opn.value = 'button' + i;

        frg.appendChild(opn);
    }

    // test
    console.log('[ frg ] : running');
}



// media query listener
mql = (mq)=> {

    if (mq.matches) {

        app.style.background = 'black';

        // test
        console.log('MQL : desktop');
    }
    else {
        app.style.background = 'purple';

        // test
        console.log('MQL : mobile');
    }

}
// media query selector
let mq = window.matchMedia('(min-width: 700px)');

// call listener function at run time
mql(mq);

// attach listener function on state change
mq.addListener(mql);






















// // assign [ opn ] button to [ spn]
// for (i = 0; i <= 1; i++) {

//     // create button element
//     let opn = document.createElement('button');

//     // assign [ opn ] props
//     opn.innerHTML = 'more';
//     opn.style.padding = 'var(--sm)';

//     // append [ opn ] to [ spn ]
//     spn.appendChild(opn);

//     // event [ opn ] : open modal
//     opn.addEventListener('click', ()=>{

//         // init [ modProps ] function
//         modProps();

//     });

//     // test
//     console.log('[ opn ] button appended to [ spn ]');
// }





























// // array [ title ] : content title
// let title = [

//     // title template
//     { temp: 'content'},
//     { temp: 'content'},
//     { temp: 'content'}

// ];






// assign [ opn ] attributes
        // opn.setAttribute('type', type);
        // opn.setAttribute('value', type);
        // opn.setAttribute('name', type);

// // function [ btnProps ] : button properties
// function btnProps() {
    
    

//     // selector [ opn ] : open button
//     let opn = document.createElement('button');
    
    
    
//     // append [ opn ] to [ spn ] element
//     spn.appendChild(opn);

    

//     // test
//     console.log('[ btnProps] loaded');
// }





// // event : asgard modal object
// asgard.addEventListener('click', ()=>{
//     // assign modal view & props
//     modalprops();
    
//     let desc = 
//             'A structured, responsive & customizable template ' +
//             'system. Developed to assist with quick implementation & visualization.';
    
//     if (proj_name.innerHTML !== 'Asgard') {
//         proj_name.innerHTML = 'Asgard';
//         proj_tag.innerHTML = 'Responsive Templating System';
//     }
//     if (proj_desc.innerHTML !== desc.value) {
//         proj_desc.innerHTML = desc;
//     }
//     else {
//         proj_name.innerHTML = '';
//         proj_tag.innerHTML = '';
//         proj_desc.innerHTML = '';
//     }
// });


// // application selector
// let body = document.querySelector('#body');
// let app = document.querySelector('#main');

// // modal item selectors
// let proj_name = document.querySelector('#proj_name');
// let proj_tag = document.querySelector('#proj_tag');
// let proj_desc = document.querySelector('#proj_desc');
// // project btn selectors
// let asgard = document.querySelector('#asgard');

// loop through title
// for (i = 0; i < title.length; i++) {

//     let tit = document.querySelector('#tit');
//     // tit.innerHTML = title[i];

//     // test
//     console.log(title[i]);
    

// }  
