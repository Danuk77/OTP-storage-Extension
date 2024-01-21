// Add a context menu (right click option) that allows the user to right click on an image
 browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
        title: "Add to OTP storage",
        contexts: ["image"],
        id: "make-selection"
    })
 })

browser.contextMenus.onClicked.addListener((info, tab) => {
if (info.menuItemId === "make-selection") {
    // Check if the user clicked on an image typed qr code
    if(info.mediaType === "image"){
        if(info.srcUrl){
            console.log(info.srcUrl)
        }
    }
}
});