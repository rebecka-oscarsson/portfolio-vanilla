const plant = document.querySelector("object").addEventListener("load", getLinks);
let links = [];


function getLinks() {
    const svgCode = document.querySelector("object").contentDocument;
    links = Array.from(svgCode.querySelectorAll("a"));
    for (let index = 0; index < links.length; index++) {
        links[index].addEventListener("click", (e) => {
            // Get a handle to the iframe element
            let iframe = document.querySelector("iframe");
            var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            // Check if loading is complete
            if (iframeDoc.readyState == 'complete') {
                //iframe.contentWindow.alert("Hello");
                iframe.contentWindow.onload = function () {
                    //alert("I am loaded");
                    showIframe();
                }
            }
        })
    }
}

const iframeWrapper = document.querySelector("main");
const nav = document.querySelector("nav");
const close = document.querySelector(".main__link-back");

function showIframe() {
    //här behöver jag kolla när sidan laddat
    iframeWrapper.classList.add("showing");
}

close.addEventListener("click", hideIframe);

function hideIframe() {
    iframeWrapper.classList.remove("showing");
}