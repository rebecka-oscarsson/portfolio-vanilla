const plant = document.querySelector("object").addEventListener("load", getLinks);
let links = [];

function getLinks() {
    const svgCode = document.querySelector("object").contentDocument;
    links = Array.from(svgCode.querySelectorAll("a"));
    for (let index = 0; index < links.length; index++) {
        links[index].addEventListener("click", showIframe);
        // (e) => {
            // nav.classList.add("hidden");
            // Get a handle to the iframe element
            // let iframe = document.querySelector("iframe");
            // var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            // Check if loading is complete
            // if (iframeDoc.readyState == 'complete') {
                //iframe.contentWindow.alert("Hello");
                // iframe.contentWindow.onload = function () {
                    //alert("I am loaded");
                    // showIframe();
                // }
    //         }
    //     })
    }
}

const iframeWrapper = document.querySelector("main");
const nav = document.querySelector("nav");
const close = document.querySelector(".main__link-back");

// let subpage = document.querySelector(".subpage__body"); 
// if(subpage){alert(subpage);showIframe()}

function showIframe() {
    if(iframeWrapper)
    {iframeWrapper.classList.add("showing");}
}

if(close){
close.addEventListener("click", hideIframe);}

function hideIframe() {
    
    const iframe = document.querySelector("iframe");
    iframe.src="";
    // const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    // console.log(iframeDoc);
    // iframeDoc.querySelector(".subpage__body").classList.add("hidden");
    iframeWrapper.classList.remove("showing");
}