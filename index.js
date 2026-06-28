let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){      // if leadsFromLocalStorage is empty its false else its true if anything is stored
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click",function(){
    
    /* Active tab and current windows makes sure only that url is copied which tab is open*/
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify( myLeads ) )
        render(myLeads)
    })        

})

function render(leads){
    let listItems = ""  // Created this to make our code work fast and it don't crash or lagg

    for(let i = 0; i< leads.length; i++){
       // listItems += "<li><a target='_blank' href=' " + myLeads[i] + "  '>" +  myLeads[i] + "</a></li>"  // replaced ulEl.innerHTML by listItems for the same purpose storing all url here
       listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `       
    }
    ulEl.innerHTML = listItems    // now pasting all url to ulEl 
}

deleteBtn.addEventListener("dblclick",function(){
    console.log("Double click")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click",function(){   
    
    myLeads.push(inputEl.value)
    inputEl.value = ""          // so after saving 1 url the input field is empty automatically
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})