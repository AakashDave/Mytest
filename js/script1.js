// getting today's date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

// navbae
let alertsDropdown=document.getElementById("alertsDropdown");
let alertDetails=document.getElementById("alertDetails");
alertDetails.style.display="none";
alertsDropdown.addEventListener("click",()=>{
  if (alertDetails.style.display=="none") {
    alertDetails.style.display="";
    messageAlertDetails.style.display="none";

  }
  else{
    alertDetails.style.display="none";
  }
})

let messagesDropdown=document.getElementById("messagesDropdown");
let messageAlertDetails=document.getElementById("messageAlertDetails");
messageAlertDetails.style.display="none";

messagesDropdown.addEventListener("click",()=>{
  if (messageAlertDetails.style.display=="none") {
    messageAlertDetails.style.display="";
    alertDetails.style.display="none";

  }
  else{
    messageAlertDetails.style.display="none";
  }
})
function openNav() {
        if (document.getElementById("mySidenav").style.width === "63px" || document.getElementById("mySidenav").style.width==="") {
          document.getElementById("mySidenav").style.width = "250px";
        }
        else{
          if (window.screen.width<=767) {
            document.getElementById("mySidenav").style.width = "";
          }
          else{
            document.getElementById("mySidenav").style.width = "63px";
          }
        }
}

let adminSettingBox=document.getElementById("adminSettingBox");
adminSettingBox.style.display="none";
let dropbtnMyfunction=document.getElementById("dropbtnMyfunction");
dropbtnMyfunction.addEventListener("click",()=>{
  if (adminSettingBox.style.display==="none") {
      adminSettingBox.style.display="";
  } else {
    adminSettingBox.style.display="none";
  }
})



// show and hide chat list
let showAndhide=document.getElementById("showAndhide");
let phaseForChatList=document.getElementById("phaseForChatList");
showAndhide.addEventListener("click",()=>{
    if (chatAndCallList.style.display=="block") {
        chatAndCallList.style.display="none";
        phaseForChatList.innerText="Show";
    }
    else{
        chatAndCallList.style.display="block"
        phaseForChatList.innerText="Hide";

    }
})
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
const additional=document.querySelectorAll(".additional");
const starredMsg=document.getElementById('starredMsg')
// console.log(box);

unread.addEventListener('click',()=>{           //if click on unread box
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
    else if (unread.checked===false && starredMsg.checked===true) {
        for (let i = 0; i < box.length; i++) {
            box[i].style.display="";  
        }  
        for (let i = 0; i < box.length; i++) {
            const li = box[i].getElementsByTagName('ul');
            const additional=li[2];
            const starredMsgs=additional.querySelectorAll('.checkBoxStarred');
            if(starredMsgs[0].checked!=true){
                box[i].style.display="none";
            }
        }
    }
    else if (unread.checked===false && starredMsg.checked===false) {
        for (let i = 0; i < box.length; i++) {
            box[i].style.display="";  
        }  
    }
})
// starred Msg

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
    else if (starredMsg.checked===false && unread.checked===true) {
        for (let i = 0; i < box.length; i++) {
            box[i].style.display="";  
        }  
        for (let i = 0; i < box.length; i++) {
            const li = box[i].getElementsByTagName('ul');
            const additional=li[2];
            const unreadMsg=additional.querySelectorAll('.unreadCount');
            if (unreadMsg.length!=1) {
               box[i].style.display="none";
            }
        }
    }
    else if (unread.checked===false && starredMsg.checked===false) {
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
// showing number onclick on show number
let showNumberText=document.getElementById('showNumberText');
let callerNumber=document.querySelector('.callerNumber');
const showNumber=()=>{
        callerNumber.style.display="block";
        showNumberText.style.display="none";
}
const hideNumber=()=>{
    callerNumber.style.display="none";
    showNumberText.style.display="block";
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
const DateChooseBox=document.getElementById('DateChooseBox');
DateChooseBox.style.display="none"
const openReminder=()=>{
    if (DateChooseBox.style.display==="none") {
        DateChooseBox.style.display="";
    }
    else{
        DateChooseBox.style.display="none";
    }
    if (addNoteBox.style.display==="") {
        addNoteBox.style.display="none";
    }
    if (searchMsgsBox.style.display==="") {
        searchMsgsBox.style.display="none";
    }
    if (mediaBox.style.display==="") {
        mediaBox.style.display="none";
    }

    if( tagBox.style.display===""){
        tagBox.style.display="none";
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

// open the attach onclick options on desktop
let attachOptions=document.querySelector(".attachOptions");
attachOptions.style.display="none";

const openAttachOptions=()=>{
    if (attachOptions.style.display==="none") {
        attachOptions.style.display="";
        
    }
    else if (attachOptions.style.display==="") {
        attachOptions.style.display="none";
    }
}

// open gallery for choosing file
const openAttachImageBox=document.getElementById('openAttachImageBox');
// const openGallery=document.getElementById('openGallery');
openAttachImageBox.style.display="none";
let openGallery=()=>{
    if (openAttachImageBox.style.display==="none") {
        openAttachImageBox.style.display="flex";
    } else {
openAttachImageBox.style.display="none";
    }
    if (cloudBox.style.display==="flex") {
        cloudBox.style.display="none";     
    }
}

// opepn file box when click on file
const openAttachFileBox=document.getElementById('openAttachFileBox');
// const openGallery=document.getElementById('openGallery');
openAttachFileBox.style.display="none";
let openFileBox=()=>{
    if (openAttachFileBox.style.display==="none") {
        openAttachFileBox.style.display="flex";
    } else {
        openAttachFileBox.style.display="none";
    }
    if (cloudBox.style.display==="flex") {
        cloudBox.style.display="none";     
    }
}
// open cloud box
let cloudBox=document.getElementById('cloudBox');
cloudBox.style.display="none"
const openCloudBox=()=>{
    if (cloudBox.style.display==="none") {
        cloudBox.style.display="flex"     
    }
    else{
        cloudBox.style.display="none"
    }
    if (openAttachImageBox.style.display==="flex") {
        openAttachImageBox.style.display="none";
     
    }
}
const closeCloudBox=()=>{
cloudBox.style.display="none";

}

// search in message box
const searchMsgsBox=document.getElementById('searchMsgsBox');
searchMsgsBox.style.display="none";
const openMsgsSearch=()=>{
    if (searchMsgsBox.style.display==="none") {
        searchMsgsBox.style.display="";
    } else {
        searchMsgsBox.style.display="none";
    }
    if (addNoteBox.style.display==="") {
        addNoteBox.style.display="none";
    }
    if (mediaBox.style.display==="") {
        mediaBox.style.display="none";
    }
    if (DateChooseBox.style.display==="block") {
        DateChooseBox.style.display="none";
    }
    if( tagBox.style.display===""){
        tagBox.style.display="none";
    }
     
}
const searchingMessages=()=>{
     const msgFilter=document.getElementById('searchHereMsg').value;
     console.log(msgFilter);
      const messages=document.getElementById('messages');
      const msgbox=document.querySelectorAll('.msgBox');
      let rght=document.querySelectorAll('.right');
      let lft=document.querySelectorAll('.left');
      msgbox.forEach(element => {
        const searchMsg=element.getElementsByTagName('p');
          if (searchMsg[0].innerHTML.toUpperCase().indexOf(msgFilter.toUpperCase())>-1) {
               element.style.background="#bdbdbd";
               element.style.boxShadow ="11px 13px 18px -8px rgba(0,0,0,0.75)";
               element.style.display="";
          }
          else{
            element.style.display="none"
          }
       });
       if (msgFilter==="") {
           for (let a = 0; a < rght.length; a++) {
              rght[a].style.background= "#BCF0FF";
              rght[a].style.boxShadow= "none";
           }
           for (let b = 0; b < lft.length; b++) {
              lft[b].style.background= "#FFFFFF";
              lft[b].style.boxShadow= "none";
           }
       }
}
// open cloud box
const mediaBox=document.getElementById('mediaBox');
mediaBox.style.display="none";
const openMediaBox=()=>{
    if (mediaBox.style.display==="none") {
        mediaBox.style.display="";
    } else {
        mediaBox.style.display="none";
    }
    if (searchMsgsBox.style.display==="") {
        searchMsgsBox.style.display="none";
    }
    if (DateChooseBox.style.display==="block") {
        DateChooseBox.style.display="none";
    }
    if( tagBox.style.display===""){
        tagBox.style.display="none";
    }
    if (addNoteBox.style.display==="") {
        addNoteBox.style.display="none";
    }
}

const tagIcon=document.getElementById("tagIcon");
const tagBox=document.getElementById('tagBox');
tagBox.style.display="none";
tagIcon.addEventListener('click',()=>{
    if (tagBox.style.display==="none") {
        tagBox.style.display="";
    } else {
        tagBox.style.display="none";
    }
    if (searchMsgsBox.style.display==="") {
        searchMsgsBox.style.display="none";
    }
    if (mediaBox.style.display==="") {
        mediaBox.style.display="none";
    }
    if (DateChooseBox.style.display==="block") {
        DateChooseBox.style.display="none";
    }
    if (addNoteBox.style.display==="") {
        addNoteBox.style.display="none";
    }
})
/* hiding background when pop up is open */
$(function(){
    $("#voiceCall").click(function(){
        $(".fullscreen-container").fadeTo(200, 1);
    });
    $("#voiceCallMob").click(function(){
        $(".fullscreen-container").fadeTo(200, 1);
    });
    $("#but2").click(function() {
        $(".fullscreen-container").fadeOut(200);
      });
    $("#but1").click(function() {
        $(".fullscreen-container").fadeOut(200);
      });
})

const but1=document.getElementById('but1');
but1.addEventListener('click',()=>{
    VoiceCall();
})

// create a tag in tagBox
const createTags=document.getElementById('createTags');
let showErrorTag=document.getElementById('showErrorTag');
showErrorTag.style.display="none";
const tags=document.getElementById('tags');
let tagsInMob=document.getElementById('tagsInMob');

function createElementNode(funlabelName) {
         let node=document.createElement('li');
         const a=document.createElement('a');
         const span=document.createElement('span');
         const input=document.createElement('input');
         node.appendChild(a);
         node.appendChild(input);
         a.appendChild(span);
         span.classList.add('iconify');
         span.style.color='#8A45E6';
         span.setAttribute('data-icon','bi:tags');
         span.setAttribute('data-width','15.16');
         span.setAttribute('data-height','17.5');
         a.append(funlabelName);
         input.setAttribute('type','checkbox');
         input.setAttribute('class','tagCheck');
         input.setAttribute('name','tagCheck');
         return node;
}
function CreateElementTag(){
    const labelName=document.getElementById("labelName").value;
    if(labelName!=="") {
         let myNode=createElementNode(labelName);
         let myNode2=createElementNode(labelName);
         tagsInMob.appendChild(myNode2);
         tags.appendChild(myNode);
         // console.log(tags);
     } else {
         showErrorTag.style.display="";
         setTimeout(() => {
             showErrorTag.style.display="none";
         }, 5000);
         
     }
}
createTags.addEventListener('click',CreateElementTag);

// tagCheck is cheked or not
const chatTagsDisplayBox=document.getElementById("chatTagsDisplayBox");
const chatTagDisplayBoxMob=document.getElementById("chatTagDisplayBoxMob");
const applyTagInBox=document.getElementById("applyTagInBox");
const manageButton=document.getElementById("manageButton");
const tagEditionBox=document.getElementById("tagEditionBox");
tagEditionBox.style.display="none";
let tagName=document.querySelectorAll(".tagName");


// open edit box when click on label
function openElementEditBox(liElement) {
    if (tagEditionBox.style.display==="none") {
        tagEditionBox.style.display="";
        let editTagName=document.getElementById("editTagName");
        let editButtonTag=document.getElementById("editButtonTag");
        let applyTagEdit=document.getElementById("applyTagEdit");
        const removeLabel=document.getElementById('removeLabel');
        removeLabel.addEventListener('click',()=>{
            editTagName.value="";
        })
        editTagName.value=liElement.innerHTML;
        editButtonTag.addEventListener('click',()=>{
            editTagName.disabled=false;
            applyTagEdit.addEventListener("click",()=>{
                liElement.innerHTML=editTagName.value;
                tagEditionBox.style.display="none";
            })
            
        })
        const cancleTagEditionBox=document.getElementById("cancleTagEditionBox");
        cancleTagEditionBox.addEventListener("click",()=>{
            tagEditionBox.style.display="none";
        })
        
    }
    else{
    tagEditionBox.style.display="none"
    }
    
}

function tagApplyinng(myTagsCheck){
    let arr1;
    arr1=[];
    myTagsCheck.forEach(element=>{
        if (element.checked===true) {
            const liForTag=document.createElement('li');
            const aForTag=document.createElement('a');
            const iForTag=document.createElement('i');
            const nameForTag=document.createElement('span');
            const crossForTag=document.createElement('span');
            const iForCancle=document.createElement('i');
            liForTag.appendChild(aForTag);
            liForTag.classList.add('myTagList');
            aForTag.setAttribute('type','button');
            aForTag.classList.add('followupButton');
            aForTag.appendChild(iForTag);
            iForTag.classList.add('fas','fa-tag');
            aForTag.appendChild(nameForTag);
            nameForTag.innerText=element.previousElementSibling.innerText;
            nameForTag.classList.add("tagName");
            aForTag.appendChild(crossForTag);
            crossForTag.classList.add('cancleEdit');
            crossForTag.appendChild(iForCancle);
            iForCancle.classList.add('fas','fa-times');
        //    element.checked=false;
           arr1.push(liForTag);
        }
    })
    return arr1;
}
function tagApplyinngMob(myTagsCheck1){
    let arr2;
    arr2=[];
    myTagsCheck1.forEach(element=>{
        if (element.checked==true) {
            const liForTag=document.createElement('li');
            const aForTag=document.createElement('a');
            const iForTag=document.createElement('i');
            const nameForTag=document.createElement('span');
            const crossForTag=document.createElement('span');
            const iForCancle=document.createElement('i');
            liForTag.appendChild(aForTag);
            liForTag.classList.add('myTagList');
            aForTag.setAttribute('type','button');
            aForTag.classList.add('followupButton');
            aForTag.appendChild(iForTag);
            iForTag.classList.add('fas','fa-tag');
            aForTag.appendChild(nameForTag);
            nameForTag.innerText=element.previousElementSibling.innerText;
            nameForTag.classList.add("tagName");
            aForTag.appendChild(crossForTag);
            crossForTag.classList.add('cancleEdit');
            crossForTag.appendChild(iForCancle);
            iForCancle.classList.add('fas','fa-times');
           element.checked=false;
           arr2.push(liForTag);
        }
    })
    return arr2;
}
// apply tag box
applyTagInBox.addEventListener("click",()=>{
    let tagCheck=document.querySelectorAll(".tagCheck");
    let liFor1=tagApplyinng(tagCheck);
    let liFor2=tagApplyinngMob(tagCheck);
    console.log(liFor2);
     liFor1.forEach(element=>{
         chatTagsDisplayBox.appendChild(element);
     })
     liFor2.forEach(element1=>{
         chatTagDisplayBoxMob.appendChild(element1);
     })
    const cancleEdit=document.querySelectorAll(".cancleEdit");
    cancleEdit.forEach(element=>{
        element.addEventListener("click",()=>{
          console.log(element.parentElement.parentElement.remove());
        })
    })
    // editing the tags open box
    myTagList=document.querySelectorAll(".tagName");
    
    myTagList.forEach(myElement=>{
        console.log(myElement);
        myElement.addEventListener('click',()=>{
            openElementEditBox(myElement);
        })
    })
    myTagList='';
})
let btnForApplyInMob=document.getElementById("btnForApplyInMob");
btnForApplyInMob.addEventListener("click",()=>{
    let tagCheck=document.querySelectorAll(".tagCheck");
    let liFor3=tagApplyinng(tagCheck);
    let liFor4=tagApplyinngMob(tagCheck);
    liFor3.forEach(element=>{
        chatTagsDisplayBox.appendChild(element);
    })
    liFor4.forEach(element1=>{
        chatTagDisplayBoxMob.appendChild(element1);
    })
    const cancleEdit=document.querySelectorAll(".cancleEdit");
    cancleEdit.forEach(element=>{
        element.addEventListener("click",()=>{
          console.log(element.parentElement.parentElement.remove());
        })
    })
    // editing the tags open box
    myTagList=document.querySelectorAll(".tagName");
    
    myTagList.forEach(myElement=>{
        console.log(myElement);
        myElement.addEventListener('click',()=>{
            openElementEditBox(myElement);
        })
    })
    myTagList='';
})


// finding the length of the character in add notes box
const addNoteBox=document.getElementById("addNoteBox");
addNoteBox.style.display="none";
let addNotes=()=>{
    if (addNoteBox.style.display==="none") {
        addNoteBox.style.display="";  
    }
    else{
        addNoteBox.style.display="none";
    }
    if (searchMsgsBox.style.display==="") {
        searchMsgsBox.style.display="none";
    }
    if (mediaBox.style.display==="") {
        mediaBox.style.display="none";
    }
    if (DateChooseBox.style.display==="block") {
        DateChooseBox.style.display="none";
    }
    if( tagBox.style.display===""){
        tagBox.style.display="none";
    }
}

let lengthOfChar=()=>{
    const writingNote=document.getElementById('writingNote').value;
    const numOfChar=document.getElementById('numOfChar');
           numOfChar.innerHTML=writingNote.length;
}

// goto creation of label or tag 
const createTagButton=document.getElementById('createTagButton');
const createLabelBox=document.getElementById('createLabelBox');
const BackIntag=document.getElementById('BackIntag');
const TagCreationBoxPart1=document.querySelector('.TagCreationBoxPart1');
createLabelBox.style.display="none";
createTagButton.addEventListener('click',()=>{
    if (createLabelBox.style.display==="none") {
        createLabelBox.style.display="";
        TagCreationBoxPart1.style.display="none";
    }

})
BackIntag.addEventListener("click",()=>{
    if (createLabelBox.style.display==="") {
        createLabelBox.style.display="none";
        TagCreationBoxPart1.style.display="";
        
    }
   
})

// open msg box
let firstDisplay=document.querySelector(".firstDisplay");
let backToCallListbtn=document.querySelector("#backToCallList");
document.querySelectorAll(".nameMessenger").forEach(element=>{
    element.addEventListener("click",()=>{
        if(screen.width<=767){
            chatAndCallList.style.display="none";
            mainPart.style.display="flex";
        }
        else{
            chatAndCallList.style.display="block";
            mainPart.style.display="flex";
        }  
        firstDisplay.style.display="none";
    })
})
backToCallListbtn.addEventListener("click",()=>{
    
    if (screen.width<=767) {
        chatAndCallList.style.display="block";
        mainPart.style.display="none";
    }
    mainPart.style.display="none";
    firstDisplay.style.display="flex";
})

// open camera when click on camera
let cameraBox=document.getElementById("cameraBox");
cameraBox.style.display="none"
let openCamera=()=>{
    let localStream;
    cameraBox.style.display="";
    let camera_button = document.querySelector("#start-camera");
    let video = document.querySelector("#video");
    let click_button = document.querySelector("#click-photo");
    let canvas = document.querySelector("#canvas");
    let CanclePhoto = document.querySelector("#CanclePhoto");
    let DoNotSavePhoto = document.querySelector("#DoNotSavePhoto");
    let clickPhoto=async()=>{
        let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
        localStream=stream
    }
    clickPhoto();

click_button.addEventListener('click', function() {
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   	let image_data_url = canvas.toDataURL('image/jpeg');

   	// data url of the image
   	console.log(image_data_url);
});
 function cancleClick(){
    video.pause();
    video.src = "<h1>Empty</h1>";
    localStream.getTracks()[0].stop();
    cameraBox.style.display="none";
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}
CanclePhoto.addEventListener("click",()=>{
   cancleClick();
})
DoNotSavePhoto.addEventListener("click",()=>{
   cancleClick();
})
}
/****************************************************************************** */
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
let openSideBar=document.getElementById('openSideBar');
let logoOfWeb=document.getElementById('logoOfWeb');
let mobIcons=document.getElementById('mobIcons');


searchInMob.style.display="none";
const openSearchBox=()=>{
if (searchInMob.style.display==="none") {
    MobOptionBox.style.display="none";
    searchInMob.style.display="block";
    openSideBar.style.display="none";
    logoOfWeb.style.display="none";
    mobIcons.style.display="none";
}
}
const backToNav=()=>{
    searchInMob.style.display="none";
    openSideBar.style.display="";
    logoOfWeb.style.display="";
    mobIcons.style.display="";
}

const MobSettingBox=document.getElementById("MobSettingBox");
const openMobSetting=document.getElementById("openMobSetting");
MobSettingBox.style.display="none"
openMobSetting.addEventListener('click',()=>{
    if (MobSettingBox.style.display==="none") {
        MobSettingBox.style.display=""
    }
    else{
        MobSettingBox.style.display="none"

    }
})

// searching in mobile
const searchCharInMob=()=>{
   
    const filter=document.getElementById('inputSearchMob').value.toUpperCase();
    const messageBox=document.getElementById('messageBox');
    const allCalls=document.getElementById('allCalls');
    const callsBox=allCalls.querySelectorAll(".callsBox");
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
    for (let i = 0; i < callsBox.length; i++) {
        const li=callsBox[i].querySelectorAll('.callerListName');
        const li1=callsBox[i].querySelectorAll('.callerListNumber');
        console.log(li1[0].innerHTML);
            if (li || li1) {
                const textValue = li[0].innerHTML||li[0].innerText||li[0].textContent;
                const textValue1=li1[0].innerHTML||li1[0].innerText||li1[0].textContent;
                if (textValue.toUpperCase().indexOf(filter)>-1 || textValue1.toUpperCase().indexOf(filter)>-1) {
                    callsBox[i].style.display=""
                }
                else{
                    callsBox[i].style.display="none";
                }
            }
        }
        if(filter==''){
            callsBox.style.display='';
        }
}

// whenever click on msgbox then open dashboard for msg in mobile
const boxForMob=document.querySelectorAll(".box");
const mainPart=document.querySelector(".mainPart");
const chatAndCallList=document.querySelector(".chatAndCallList");

   
const backToCallList=()=>{
    chatAndCallList.style.width="";
    chatAndCallList.style.height="";
    if (screen.width<=767) {
        mainPart.style.display="none"
    }

}
const fullscreenContainer2=document.querySelector(".fullscreen-container2");
const tagCreationMob=document.getElementById("tagCreationMob");
const cancleTheTagInMob=document.getElementById("cancleTheTagInMob");
fullscreenContainer2.style.display="none";
tagCreationMob.addEventListener("click",()=>{
    if (fullscreenContainer2.style.display==="none") {
        fullscreenContainer2.style.display=""; 
    }
})
cancleTheTagInMob.addEventListener("click",()=>{
    if (fullscreenContainer2.style.display==="") {
        fullscreenContainer2.style.display="none";
    }
})

/* open create tag box when click on create tag */
let createTagInMobBtn=document.getElementById("createTagInMobBtn");
let tagsOptionForMobHead=document.querySelector(".tagsOptionForMobHead");
let tagsListInMob=document.querySelector(".tagsListInMob");
let btnForApplyInMob1=document.querySelector(".btnForApplyInMob");
let createLabelBoxMob=document.querySelector(".createLabelBoxMob");
let cancleIncreateLabelBox=document.getElementById("cancleIncreateLabelBox");
createLabelBoxMob.style.display="none";
createTagInMobBtn.addEventListener("click",()=>{
    tagsOptionForMobHead.style.display="none";
    tagsListInMob.style.display="none";
    btnForApplyInMob1.style.display="none";
    createLabelBoxMob.style.display="";
    
})
cancleIncreateLabelBox.addEventListener("click",()=>{
    tagsOptionForMobHead.style.display="";
    tagsListInMob.style.display="";
    btnForApplyInMob1.style.display="";
    createLabelBoxMob.style.display="none";
})



// // refresh the page only if you're crossing into a context
// // that isn't already set
$(document).ready(function(){
    //Set flag refresh to true
    var refresh = true;
    //If the window width is between wanted limit set flag to false. This is needed for the resize*.
    if ($(window).width() < 768) {
      refresh = false;
    }
    $(window).resize( function(){
    /* When resize hits limits check if flag is true, then refresh.
    Flag is set to false from above*, after refresh.
    Time is needed for the page to load and set the flag to false.
    Otherwise flag is not updated and constant refresh keeps happening while resizing. */
    if ($(window).width() < 768 ) {
      if (refresh == true) location.reload();
    } else {
        refresh = true;
    }
  });
});


/* tag creation in mob */
let createTagMob=document.getElementById("createTagMob");
let showErrorMob=document.getElementById("showErrorMob");
let popUpCreatedMsg=document.getElementById("popUpCreatedMsg");
createTagMob.addEventListener("click",()=>{
let inputLabelMob=document.getElementById("inputLabelMob").value;

    if (inputLabelMob==='') {
        showErrorMob.style.display='block';
        setTimeout(() => {
            showErrorMob.style.display="none";
        }, 2000);
    }
    else{
        popUpCreatedMsg.style.display="block";
        setTimeout(() => {
        popUpCreatedMsg.style.display="none";
        }, 2000);
        let myNode3=createElementNode(inputLabelMob);
         let myNode4=createElementNode(inputLabelMob);
         tagsInMob.appendChild(myNode3);
         tags.appendChild(myNode4);
    }
})


// open and create tag list
let openTagListBoxMob=document.getElementById("openTagListBoxMob");
let MobTagListBox=document.querySelector(".MobTagListBox");
MobTagListBox.style.display='none';
openTagListBoxMob.addEventListener("click",()=>{
    if (MobTagListBox.style.display==='none') {
        MobTagListBox.style.display='';   
    }
    else{
MobTagListBox.style.display='none';

    }
})

// attachfile with mobile attach button
const attachFileMob=document.getElementById('attachFileMob');
const attachOptionsMob=document.querySelector('.attachOptionsMob');
attachOptionsMob.style.display="none";
attachFileMob.addEventListener("click",()=>{
    if (attachOptionsMob.style.display==="none") {
        attachOptionsMob.style.display="flex";
    } else {
        attachOptionsMob.style.display="none";
        openAttachImageBox.style.display="none";
        cloudBox.style.display="none"
        openAttachFileBox.style.display="none";
    }
})


// add notes mob
let addNotestagMob=document.getElementById("addNotestagMob");
addNotestagMob.addEventListener("click",addNotes);

// add remainder box in mobile
let openReminderMob=document.getElementById("openReminderMob");
openReminderMob.addEventListener("click",openReminder)