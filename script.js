// For loop for multiple videos 

let i = 0;
let ytArr = [
    // ["Img File Name"]
    ["How To Make Website Using HTML CSS _ Crete Full Website Step by Step Tutorial(1080P_HD).png"]
    ["How to Set up Tailwind CSS Project for Beginners from Scratch(720P_HD).png"]
    ["HTML CSS JavaScript Tutorial for Beginners _ Build Admin Dashboard From Scratch(720P_HD).png"]
    ["Learn HTML5 and CSS3 For Beginners - Crash Course - YouTube.png"]
    ["Learn JavaScript - Full Course for Beginners(720P_HD).png"]
    ["Learn Tailwind CSS – Course for Beginners(720P_HD).png"]
    ["React JS - React Tutorial for Beginners(720P_HD).png"]
    ["Responsive admin dashboard using HTML _ CSS(720P_HD).png"]
    ["TODO LIST USING JAVASCRIPT(1080P_HD).png"]
]

let len = ytArr.length;
let text = "";

for (; i < len; i++) {
    text += `
    <div class="video">
        <img src="/Files/`+ ytArr[i][1] + `" class="thumbnail" alt="">
        <div class="content">
            <img src="/Logos/free-code-camp-logo.png" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">`+ ytArr[i][0] + `</h4>
                <p class="channel-name">FreeCodeCamp</p>
            </div>
        </div>
    </div>
    `
}

document.getElementById("ytVideo").innerHTML = text;