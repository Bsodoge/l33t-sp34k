let buttonToggle = document.getElementById('toggle');
let isToggled = false;
buttonToggle.addEventListener('click', () => browser.tabs.query({active:true,currentWindow:true},toggleExtension));

function toggleExtension(tabs){
    if(isToggled){
        buttonToggle.innerText = "Activate";
    } else{
        buttonToggle.innerText = "Deactivate";
    }
    browser.tabs.sendMessage(tabs[0].id, isToggled);
}