var tabButton=document.querySelectorAll(".tabcontainer .buttoncontainer button");
var tabPanels=document.querySelectorAll(".tabcontainer .tabpanel");

function showPanel(panelindex,colorcode)
{
    tabButton.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";

    });
    tabButton[panelindex].style.backgroundColor=colorcode;
    tabButton[panelindex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";

    });
    tabPanels[panelindex].style.display="block";
    tabPanels[panelindex].style.backgroundColor=colorcode;
}
showPanel(0,'rgba(0,0,0,0.3)');