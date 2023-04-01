let buttonToggle = document.getElementById('toggle');
let checkBox = document.getElementById('checkbox');
let isToggled = false;
let settings = {
    isToggled : isToggled,
    isIntermediate: checkBox.checked
};
buttonToggle.addEventListener('click', () => browser.tabs.query({active:true,currentWindow:true},toggleExtension));
checkBox.addEventListener('click', () => {
    setSettings();
    browser.tabs.query({active:true,currentWindow:true},sendMessage);
});
const changeButtonText = () => {
    if(!isToggled){
        buttonToggle.innerText = "Activate";
    } else{
        buttonToggle.innerText = "Deactivate";
    }
}
const setSettings = () => {
    settings = {
        isToggled : isToggled,
        isIntermediate: checkBox.checked
    }
    browser.storage.local.set(settings);
}
const onOpen = () => {
    browser.storage.local.get(settings).then((storageSettings) => {
        checkBox.checked = storageSettings.isIntermediate;
        isToggled = storageSettings.isToggled;
        changeButtonText();
        settings = storageSettings;
    });
    browser.tabs.query({active:true,currentWindow:true},sendMessage)
}
const sendMessage = (tabs) => {
    browser.tabs.sendMessage(tabs[0].id, settings);
}
const toggleExtension =(tabs) => {
    isToggled = !isToggled;
    changeButtonText();
    setSettings();
    sendMessage(tabs);
}
onOpen();