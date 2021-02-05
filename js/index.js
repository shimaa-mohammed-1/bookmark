var siteName=document.getElementById("sName");
var url=document.getElementById("sUrl");
websitesList=[];
function addWebsite()
{
    var webSite =
    {
        name:siteName.value,
        siteUrl:url.value,
    }
    websitesList.push(webSite)
    displayBookMarks()
    clear()
};
function displayBookMarks()
{
    var trs="";
    for(var i=0; i < websitesList.length ;i++)
    {
        trs+=
        `<tr class="d-flex p-3 mt-3">
            <td class="w-50"><h2>${websitesList[i].name}</h2></td> 
            <td><a class="btn btn-primary p-2" target="_blank" href="${websitesList[i].siteUrl}">VISIT</a></td>
            <td><button onclick="del(${i})"; class="btn btn-danger p-2 ">DELETE</button></td>
        </tr>` 
    }
    document.getElementById("table-display").innerHTML=(trs);
};

function clear()
{
    siteName.value=""
    url.value =""
};


function del(index)
{
    websitesList.splice(index,1);
    // localStorage.setItem( "allSites",JSON.stringify(websitesList));
    displayBookMarks();


}
