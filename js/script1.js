// getting today's date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

// seraching chat person
document.getElementById('searchButton').addEventListener('click',()=>{
    const filter=document.getElementById('searchChatPerson').value.toUpperCase();
    const messageBox=document.getElementById('messageBox');
    const box=messageBox.querySelectorAll('.box');
    for (let i = 0; i < box.length; i++) {
        const li=box[i].querySelectorAll('.nameMessenger');
        for (let j = 0; j < li.length; j++) {
            if (li) {
                const textValue = li[j].innerHTML||li[j].innerText||li[j].textContent;
                if (textValue.toUpperCase().indexOf(filter)>-1) {
                    box[i].style.display=""
                }
                else{
                    box[i].style.display="none";
                }
            }
        }
    }
    if(filter==''){
        box.style.display='flex';
    }
})
// read and unread message
const unread=document.getElementById('unread');
const messageBox=document.getElementById('messageBox');
const box=messageBox.querySelectorAll('.box');
// console.log(box);
unread.addEventListener('click',()=>{
    if (unread.checked===true) {
        for (let i = 0; i < box.length; i++) {
            const li = box[i].getElementsByTagName('ul');
            const additional=li[2];
            const unreadMsg=additional.querySelectorAll('.unreadCount');
            if (unreadMsg.length!=1) {
               box[i].style.display="none";
            }
        }
    }
    
    else{
        for (let i = 0; i < box.length; i++) {
               box[i].style.display="";
        }
    }
})
// starred Msg
const additional=document.querySelectorAll(".additional");
const starredMsg=document.getElementById('starredMsg');
starredMsg.addEventListener('click',()=>{
    if (starredMsg.checked===true) {
        for (let i = 0; i < box.length; i++) {
            const li = box[i].getElementsByTagName('ul');
            const additional=li[2];
            const starredMsgs=additional.querySelectorAll('.checkBoxStarred');
            if(starredMsgs[0].checked!=true){
                box[i].style.display="none";
            }
        }
    }
    else{
            for (let i = 0; i < box.length; i++) {
                box[i].style.display="";
            }
        }
        
})
// searching in call list using name and number
const allCalls=document.getElementById('allCalls');
const callsBox=allCalls.querySelectorAll(".callsBox");
const searchCallHistory=()=>{
    const filter1=document.getElementById('searchCallHistory').value.toUpperCase();
    for (let i = 0; i < callsBox.length; i++) {
        const li=callsBox[i].querySelectorAll('.callerListName');
        const li1=callsBox[i].querySelectorAll('.callerListNumber');
        console.log(li1[0].innerHTML);
            if (li || li1) {
                const textValue = li[0].innerHTML||li[0].innerText||li[0].textContent;
                const textValue1=li1[0].innerHTML||li1[0].innerText||li1[0].textContent;
                if (textValue.toUpperCase().indexOf(filter1)>-1 || textValue1.toUpperCase().indexOf(filter1)>-1) {
                    callsBox[i].style.display=""
                }
                else{
                    callsBox[i].style.display="none";
                }
            }
        }
        if(filter1==''){
            callsBox.style.display='';
        }
    }
    

 
// for calling options
const allCall=document.getElementById("allCalls");
const outgoingType=document.querySelector(".outgoingType");
const incomingType=document.querySelector(".incomingType");
const missedType=document.querySelector(".missedType");
const AttemptedType=document.querySelector(".AttemptedType");

const openAllTab=()=>{
    incomingType.style.display="block";
    outgoingType.style.display="block";
    missedType.style.display="block";
    AttemptedType.style.display="block";
}
const openMissTab=()=>{
    incomingType.style.display="none";
    outgoingType.style.display="none";
    missedType.style.display="block";
    AttemptedType.style.display="none";
}
const openreceivedTab=()=>{
    
    incomingType.style.display="none";
    AttemptedType.style.display="block";
    outgoingType.style.display="none";
    missedType.style.display="none";
}
const openOutgoingTab=()=>{
    incomingType.style.display="none";
    outgoingType.style.display="block";
    AttemptedType.style.display="none";
    missedType.style.display="none";
}

// showing todays date in reminderBox
const showToday=document.getElementById('showToday');
showToday.innerHTML=`${today}`;

// disable future date
$(function() {
    var currentYear = (new Date).getFullYear();
    var currentMonth = (new Date).getMonth();
    var currentDay = (new Date).getDate();
  
    $("#fromdate").datepicker({
      minDate: new Date((2000 - 1), 12, 1),
      dateFormat: 'dd/mm/yy',
      maxDate: new Date(currentYear, currentMonth, currentDay),
    });
  });

//   gives option between chat and call
let chatButton=document.getElementById('chatButton');
let callButton=document.getElementById('callButton');
let chatList=document.getElementById('chatList');
let callList=document.getElementById('callList');
let listMethod=document.getElementById('listMethod');
let hiddenHrMob=document.getElementById('hiddenHrMob');
let hideDateMob=document.getElementById('hideDateMob');
let viewPrevCallMob=document.getElementById('viewPrevCallMob');
let mobAllbtn=document.getElementById('mobAllbtn');
chatButton.addEventListener('click',()=>{
    chatList.style.display="block";
    callList.style.display="none";
})
callButton.addEventListener('click',()=>{
    chatList.style.display="none";
    callList.style.display="block";
    listMethod.style.display="flex";
    hiddenHrMob.style.display="block";
    viewPrevCallMob.style.display="block";
    hideDateMob.style.display="flex";
})
mobAllbtn.addEventListener('click',()=>{
    chatList.style.display="block";
    callList.style.display="block";
    allCalls.style.display="block";
    listMethod.style.display="none";
    hiddenHrMob.style.display="none";
    viewPrevCallMob.style.display="none";
    hideDateMob.style.display="none";

})
// open reminder box when click on reminder icon
const openReminderBox=document.getElementById('openReminderBox');
const openReminder=()=>{
    if (openReminderBox.style.display==="none") {
        openReminderBox.style.display="block";
    }
    else{
        openReminderBox.style.display="none";

    }
}
// voice call
const callingBox=document.getElementById('callingBox');

callingBox.style.display="none";
const VoiceCall=()=>{
    if (callingBox.style.display==="none") {
        callingBox.style.display="flex";
    }
}
// voice call end
const callSettingBox=document.getElementById('callSettingBox');

const callEnd=()=>{
    if (callingBox.style.display==="flex") {
        callingBox.style.display="none";
        callSettingBox.style.display="none";

    }
}

// setting call box
callSettingBox.style.display="none";
const openSettingBox=()=>{
    if (callSettingBox.style.display==="none") {
        callSettingBox.style.display="flex";
    } else {
        callSettingBox.style.display="none";
    }
}
// const closeSettingTab=()=>{
//     if (callSettingBox.style.display=="flex") {
//         callSettingBox.style.display="none";
//     }
// }

// collapsing
const rplyAndAns=document.getElementById('rplyAndAns');
const sendingMsgBox=document.getElementById('sendingMsgBox');
const hide=document.getElementById('hideIcon');
const show=document.getElementById('showIcon');
show.style.display="none";
//rplyAndAns.style.display="block";
const collapse=()=>{
    if (rplyAndAns.style.display=="block") {
        rplyAndAns.style.display="none";
        sendingMsgBox.style.marginTop='25px';
        hide.style.display="none";
        show.style.display="block";
    }
    else{
        rplyAndAns.style.display="block";
        show.style.display="none";
        hide.style.display="block";
    }
}
// change the suggestions
const listSuggestions=document.getElementById('listSuggestions');
const QAsuggestions=document.getElementById('QAsuggestions');
listSuggestions.style.display="block";
QAsuggestions.style.display="none";
const gotoQA=()=>{
    if(listSuggestions.style.display=="block"){
        listSuggestions.style.display="none";
        QAsuggestions.style.display="flex";
    }
}
const gotoSuggest=()=>{
    if(listSuggestions.style.display=="none"){
        listSuggestions.style.display="block";
        QAsuggestions.style.display="none";
    }
}

/* for mobile or tablet mode */

//mobile popup on navbar
let MobOptionBox=document.getElementById('MobOptionBox');
MobOptionBox.style.display="none";
const openMobPopUp=()=>{
    if (MobOptionBox.style.display==="none") {
        MobOptionBox.style.display="block";
    }
    else{
        MobOptionBox.style.display="none";
    }
}

// open search box
let searchInMob=document.getElementById('searchInMob');
let hamburger=document.getElementById('hamburger');
let logoOfWeb=document.getElementById('logoOfWeb');
let mobIcons=document.getElementById('mobIcons');
searchInMob.style.display="none";
const openSearchBox=()=>{
if (searchInMob.style.display==="none") {
    searchInMob.style.display="block";
    hamburger.style.display="none";
    logoOfWeb.style.display="none";
    mobIcons.style.display="none";
}
}
const backToNav=()=>{
    searchInMob.style.display="none";
    hamburger.style.display="";
    logoOfWeb.style.display="";
    mobIcons.style.display="";
}

