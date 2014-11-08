function newWindowSuper(pstrURL, pnWidth, pnHeight)
{
    strOption = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=" + pnWidth + ",height=" + pnHeight;
    ;
    newWin = window.open(pstrURL, 'NewWindow', strOption);
}

function newWindowSuper2(pstrURL, pnWidth, pnHeight)
{
    strOption = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,copyhistory=no,width=" + pnWidth + ",height=" + pnHeight;
    ;
    newWin = window.open(pstrURL, 'NewWindow', strOption);
}

function newWindowSuper3(pstrURL, pnWidth, pnHeight, pnScroll, pnResize) {
    strOption = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=" + pnScroll + ",resizable=" + pnResize + ",copyhistory=no,width=" + pnWidth + ",height=" + pnHeight;
    ;
    newWin = window.open(pstrURL, 'NewWindow', strOption);
}

function newPopunder(pstrURL, pnWidth, pnHeight)
{
    strOption = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=" + pnWidth + ",height=" + pnHeight;
    newWin = window.open(pstrURL, 'NewWindow', strOption);
    newWin.blur();
    self.focus();
}

function show(object) {
    if (document.getElementById) {
        document.getElementById(object).style.visibility = 'visible';
    }
    else if (document.layers && document.layers[object]) {
        document.layers[object].visibility = 'visible';
    }
    else if (document.all) {
        document.all[object].style.visibility = 'visible';
    }
}

function hide(object) {
    if (document.getElementById) {
        document.getElementById(object).style.visibility = 'hidden';
    }
    else if (document.layers && document.layers[object]) {
        document.layers[object].visibility = 'hidden';
    }
    else if (document.all) {
        document.all[object].style.visibility = 'hidden';
    }
}


function checkData()
{
    closing = false;
    if (document.forms[0].searchLName.value == "")
    {
        alert("Please enter last name");
        return false;
    }
    if (document.forms[0].searchApproxAge.value == "")
    {
        alert("Please enter approximate age");
        return false;
    }
    if (isNaN(document.forms[0].searchApproxAge.value))
    {
        alert("Please enter a valid approximate age");
        return false;
    }
    if (document.forms[0].searchApproxAge.value < 18)
    {
        alert("Approximate age must be greater than 17");
        return false;
    }
    return true;
}


function checkPropertyData()
{
    var type = document.forms[0].searchType.value;

    if (type == "name") {
        if (document.forms[0].searchFName.value == "")
        {
            alert("Please enter first name");
            return false;
        }
        if (document.forms[0].searchLName.value == "")
        {
            alert("Please enter last name");
            return false;
        }
        if (document.forms[0].searchCity.value == "")
        {
            alert("Please enter city");
            return false;
        }
        if (document.forms[0].searchState.value == "")
        {
            alert("Please selet a state");
            return false;
        }
    }
    if (type == "address") {
        if (document.forms[0].searchHouseNumber.value == "")
        {
            alert("Please enter house number");
            return false;
        }
        if (document.forms[0].searchStreet.value == "")
        {
            alert("Please enter street");
            return false;
        }
        if (document.forms[0].searchCity.value == "")
        {
            alert("Please enter city");
            return false;
        }
        if (document.forms[0].searchState.value == "")
        {
            alert("Please selet a state");
            return false;
        }
    }

    return true;
}


function submitPLS()
{
    var url = 'http://www.ussearch.com/consumer/tsrflow/product.do?pid=3164';

    url += "&searchFName=" + document.forms[0].searchFName.value;
    url += "&searchMName=" + document.forms[0].searchMName.value;
    url += "&searchLName=" + document.forms[0].searchLName.value;
    url += "&searchCity=" + document.forms[0].searchCity.value;
    url += "&searchState=" + document.forms[0].searchState.value;
    url += "&searchApproxAge=" + document.forms[0].searchApproxAge.value;
    location.href = url;
}

function submitUnlimited()
{
    var url = 'http://www.ussearch.com/consumer/tsrflow/category.do?pid=3074&cid=130205';

    url += "&searchFName=" + document.forms[0].searchFName.value;
    url += "&searchMName=" + document.forms[0].searchMName.value;
    url += "&searchLName=" + document.forms[0].searchLName.value;
    url += "&searchCity=" + document.forms[0].searchCity.value;
    url += "&searchState=" + document.forms[0].searchState.value;
    location.href = url;
}


function doNewSmartAllRecords(FName, MName, LName, City, State, age, agerange,pid, cid, searchTab, accuandID)
{
    var url = 'http://www.ussearch.com/consumer/tsrflow/category.do?pid=' + pid + '&cid=' + cid + '&searchtab=' + searchTab;

    url += "&searchFName=" + FName;
    url += "&searchMName=" + MName;
    url += "&searchLName=" + LName;
    url += "&searchCity=" + City;
    url += "&searchState=" + State;
    url += "&searchApproxAge=" + age;
    url += "&searchRangeYr=" + agerange;
    url += "&searchPerson=" + accuandID;
    url += "&vid=cfc&searchAgentNotes=PREVIEW-CFC";

    location.href = url;
}

function doAlaSmartAllRecords(FName, MName, LName, City, State, age, agerange,pid, cid, searchTab, accuandID)
{
//    var url = 'http://www.ussearch.com/consumer/ala/product.do?pid=3128&searchtab=people' + '&searchtab=' + searchTab;
    var url = 'http://www.ussearch.com/consumer/ala/category.do?cid=5101&adID=10002101&searchtab=people'

    url += "&searchFName=" + FName;
    url += "&searchMName=" + MName;
    url += "&searchLName=" + LName;
    url += "&searchCity=" + City;
    url += "&searchState=" + State;
    url += "&searchApproxAge=" + age;
    url += "&searchRangeYr=" + agerange;
    url += "&searchPerson=" + accuandID;
    url += "&vid=cfc&searchAgentNotes=PREVIEW-CFC";

    location.href = url;
}


//Pop-under window- By JavaScript Kit

//specify page to pop-under
var popunder="http://www.ussearch.com/others/ads/reunion_popup.html"

//specify popunder window features
//set 1 to enable a particular feature, 0 to disable
var winfeatures="width=750,height=330,scrollbars=0,resizable=0,toolbar=0,location=0,menubar=0,status=0,directories=0"

//Pop-under only once per browser session? (0=no, 1=yes)
//Specifying 0 will cause popunder to load every time page is loaded
var once_per_session=1

///No editing beyond here required/////

function get_cookie(Name) {
  var search = Name + "="
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search)
    if (offset != -1) { // if cookie exists
      offset += search.length
      // set index of beginning of value
      end = document.cookie.indexOf(";", offset);
      // set index of end of cookie value
      if (end == -1)
         end = document.cookie.length;
      returnvalue=unescape(document.cookie.substring(offset, end))
      }
   }
  return returnvalue;
}

function loadornot(){
    if (get_cookie('popunder')==''){
    loadpopunder()
    document.cookie="popunder=yes"
    }
 }

function loadpopunder(){
win2=window.open(popunder,"",winfeatures)
win2.blur()
window.focus()
}



function HandleOnClose() {
   if (event.clientY < 0) {
//      event.returnValue = 'Are you sure you want to leave the page?';
   javascript:newWindowSuper('http://www.ussearch.com/others/ads/reunion_popup.html',750,330)
   }
}

function displayReunionData(url) {
    if (document.getElementById("reunion_result") != null) {
        document.getElementById("reunion_result").src = "/preview/reunionservlet?" + url;
    }
}

function showLine(id) {
    folder = document.getElementById(id).style
    if (folder.display == "none")
        folder.display = ""
    else
        folder.display = "none"
}

function expandit(personid) {
    //folder=ns6?curobj.nextSibling.nextSibling.style:document.all[curobj.sourceIndex+1].style
    folder = document.getElementById(personid).style
    if (folder.display == "none") {
        folder.display = "";
        document.getElementById(personid.substr(0, personid.indexOf("layer")) + "icon" + personid.substr(personid.indexOf("layer") + 5)).src = "http://images.ussearch.com/images/teaser/L2/minus_open.gif";
    } else {
        folder.display = "none";
        document.getElementById(personid.substr(0, personid.indexOf("layer")) + "icon" + personid.substr(personid.indexOf("layer") + 5)).src = "http://images.ussearch.com/images/teaser/L2/plus_closed.gif";
    }

    document.getElementById(personid.substr(0, personid.indexOf("layer")) + "img" + personid.substr(personid.indexOf("layer") + 5)).src = "/preview/summary/search?personid=" + personid.substr(personid.indexOf("layer") + 5);

}


function displayContent(personid) {
    document.write("<font  size=2 face=Arial><br>jfnsadnfk")
    document.write("<br>jfnsadnfk")
    document.write("<br>jfnsadnfk")
    document.write("<br>jfnsadnfk")
    document.write("<br>jfnsadnfk</font>")
}

function displayRightBox() {
    document.write('<table border=0 cellpadding=0 cellspacing=0>');
    document.write('<tr>');
    document.write('<td  rowpsan=3><img src="http://images.ussearch.com/images/teaser/L2/arrowhead.gif"></td>');
    document.write('<td  widtht=1 rowpsan=3>');
    document.write('<table border=0 cellspacing=0 cellpadding=0 height=100%>');
    document.write('<tr>');
    document.write('<td  bgcolor=77819A width=1 height=50%><img src="http://images.ussearch.com/images/teaser/flow2/gry_pxl.gif"></td>');
    document.write('</tr>');
    document.write('<tr>');
    document.write('<td height=54 width=1 background="http://images.ussearch.com/images/teaser/L2/whmybgarw.gif"></td>');
    document.write('</tr>');
    document.write('<tr>');
    document.write('<td  bgcolor=77819A width=1  height=50%><img src="http://images.ussearch.com/images/teaser/flow2/gry_pxl.gif"></td>');
    document.write('</tr>');
    document.write('</table>');
    document.write('</td>');
    document.write('<td height=100% background="http://images.ussearch.com/images/teaser/L2/whmybg.gif">');
    document.write('<table border=0 cellspacing=0 cellpadding=0 height=100%>');
    document.write('<tr>');
    document.write('<td bgcolor=77819A height=1><img src="http://images.ussearch.com/images/teaser/flow2/gry_pxl.gif"></td>');
    document.write('</tr>');
    document.write('<tr>');
    document.write('<td>');
    document.write('<table border=0 cellpadding=4 cellspacing=0 height=100%>');
    document.write('<tr>');
    document.write('<td>');
    document.write('<font face=arial size=2 color=000000><b>');
    document.write('Do these addresses<br>look familiar?</b></font>');
    document.write('<br><font face=arial size=1 color=000000>');
    document.write('<br>Use this preliminary<br>address history to make<br>sure you have the right<br>person.<br>');
    document.write('</font>');
    document.write('</td>');
    document.write('</tr>');
    document.write('</table>');
    document.write('</td>');
    document.write('</tr>');
    document.write('<tr>');
    document.write('<td bgcolor=77819A height=1><img src="http://images.ussearch.com/images/teaser/flow2/gry_pxl.gif"></td>');
    document.write('</tr>');
    document.write('</table></td>');
    document.write('<td bgcolor=77819A width=1 rowpsan=3><img src="http://images.ussearch.com/images/teaser/flow2/gry_pxl.gif"></td>');
    document.write('</tr>');
    document.write('</table>');
}

function displayL2Icon(ii, accuantID) {
    document.write("<table border=0 cellspacing=0 cellpadding=0>");
    document.write("<tr>");
    iconName = "'" + ii + "icon" + accuantID + "'";
    layerName = "'" + ii + "layer" + accuantID + "'";

    document.write('<td rowspan=2><img id=' + iconName + ' src="http://images.ussearch.com/images/teaser/L2/plus_closed.gif" alt="Open list" onclick="expandit(' + layerName + ')"></td>');
    document.write("<td><font size=1>Address</font></td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td><font size=1>History</font></td>");
    document.write("</tr>");
    document.write("</table>");
}

function displayL2Image(ii, accuantID) {
    imageName = "'" + ii + "img" + accuantID + "'";
    document.write('<img id=' + imageName + ' src="http://images.ussearch.com/images/clear_pill.gif" border=0>');

    if (ii == 0) {
        expandit(ii + "layer" + accuantID);
    }
}

function displayAgeCityState(age, city, state) {
    document.write('<td width=59 align=center valign=top>' + age + '</td>');
    document.write('<td width=141 align=center valign=top>' + city + '</td>');
    document.write('<td width=141 align=center valign=top>' + state + '&nbsp;</td>');
}

function displayAlaAgeCityState(age, city, state) {
    document.write('<td width=59 align=center valign=top class="ala_teaser_age">' + age + '</td>');
//    document.write('<td width=141 align=center valign=top>' + 'phone' + '</td>');
    document.write('<td valign=top align=center><img src="http://images.ussearch.com/images/teaser/campaigns/grn_check.gif"></td>');
//    document.write('<td width=141 align=center valign=top img src="http://images.ussearch.com/images/creditReport/images/flg_check.gif" border=0></td>');
//    document.write('<td width=141 align=center valign=top>' + 'address' + '</td>');
    document.write('<td valign=top align=center><img src="http://images.ussearch.com/images/teaser/campaigns/grn_check.gif"></td>');
    document.write('<td width=141 align=center valign=top class="ala_teaser_citystate">' + city + ', ' + state + '&nbsp;</td>');
}

function displayDisplayName(count, url, fname, mname, lname, ii, accId, L2display, relatives) {
    var bgColor = "#eff7fe";
    if (count % 2 == 0) {
        bgColor = "#ffffff";
    }
    document.write('<tr bgcolor=' + bgColor + ' height=20>');
    document.write('<td width=15 valign=top align=center>' + count + '</td>');
    document.write('<td width=121 valign=top>');
    document.write('<a href="' + url + '" onClick="showPopup()">' + fname + ' ' + mname + ' ' + lname + '</a><br>');

    displayRelatives(relatives);
    document.write('<br>');

    if (L2display == 'on') {
        displayL2Icon(ii, accId);
    }
    document.write('</td>');
}

function displayAlaDisplayName(count, url, fname, mname, lname, ii, accId, L2display, relatives) {
    var bgColor = "#eff7fe";
    if (count % 2 == 0) {
        bgColor = "#ffffff";
    }
    document.write('<tr bgcolor=' + bgColor + ' height=20>');
    document.write('<td width=15 valign=top align=center>' + count + '</td>');
    document.write('<td width=121 valign=top>');
    document.write('<a class="ala_teaser_name" href="' + url + '" onClick="showPopup()">' + fname + ' ' + mname + ' ' + lname + '</a><br>');

    displayRelatives(relatives);
    document.write('<br>');

    if (L2display == 'on') {
        displayL2Icon(ii, accId);
    }
    document.write('</td>');
}

function displayRelatives(reatives) {
    document.write("<font size=1>" + reatives + "</font>");
}

function displayUnclaimedName(count, url, fname, mname, lname, ii, accId, L2display) {
    var bgColor = "#eff7fe";
    if (count % 2 == 0) {
        bgColor = "#ffffff";
    }
    document.write('<tr bgcolor=' + bgColor + '>');
    document.write('<td width=10 align=center valign=top><font size=2 face=Arial>' + count + '</font></td>');

    document.write('<td width=150 align=left valign=top>');
    document.write('<a href="' + url + '" onClick="showPopup()"><font size=2 face=Arial>' + fname + ' ' + mname + ' ' + lname + '</font></a>');
    if (L2display == 'on') {
        displayL2Icon(ii, accId);
    }
    document.write('</td>');

}

function displayUnclaimedAddrs(addrs) {
    document.write('<td width=79 align=center valign=top>');
    document.write('<font size=2 face=Arial>' + addrs + '</font>');
    document.write('</td>');
}

function displayUnclaimedAmount(amount) {
    document.write('<td width=85 align=center valign=top>');
    document.write('<font size=2 face=Arial color=green><b>' + amount + '</b></font>');
    document.write('</td>');
    //document.write('</tr>');
}

function displayL2Result(ii, accId, L2display) {
    if (L2display == 'on') {
        document.write('<tr id=' + ii + 'layer' + accId + ' style=display:none bgcolor=#ffffff>');
        document.write('    <td width=15 valign=top align=center></td>');
        document.write('    <td colspan=5 valign=top>');
        document.write('    <table border=0 cellspacing=0 cellpadding=0>');
        document.write('        <tr>');
        document.write('            <td valign=top><img src="http://images.ussearch.com/images/teaser/L2/dot_closed.gif"></td>');
        document.write('            <td><img src="http://images.ussearch.com/images/clear_pill.gif" width="6" height="1"></td>');
        document.write('            <td><img src="http://images.ussearch.com/images/clear_pill.gif" width="6" height="1"></td>');
        document.write('            <td width=232>');
        displayL2Image(ii, accId);
        document.write('            </td>');
        document.write('            <td>');
        displayRightBox();
        document.write('            </td>');
        document.write('        </tr>');
        document.write('    </table>');
        document.write('    </td>');
        document.write('</tr>');
    }
}

function displayPremiumUrls(params, accId, partialDob, ecncryptedDob) {

    document.write('<td width=169 align=left valign=middle valign=top>&nbsp;&nbsp;');
    document.write('<a href="http://www.ussearch.com/consumer/tsrflow/product.do?adID=10002101&pid=3164&searchtab=people&' + params + '&searchPerson=' + accId + '" onClick="showPopup()">Advanced Locator</a><br>&nbsp;&nbsp;');
    if (ecncryptedDob.length > 0) {
        document.write('<a href="http://www.ussearch.com/consumer/tsrflow/product.do?adID=10002101&pid=3073&searchtab=criminal' + params + '&searchPerson=' + accId  + '&searchDOB=' + partialDob + '&searchPreviewDOB=' + ecncryptedDob + '" onClick="showPopup()">');
    }
    else {
        document.write('<a href="http://www.ussearch.com/consumer/tsrflow/product.do?adID=10002101&pid=3073&searchtab=criminal' + params + '&searchPerson=' + accId + '&searchDOB=" onClick="showPopup()">');
    }
    document.write('Instant Criminal Search</a><br>&nbsp;&nbsp;');
    document.write('<a href="http://www.ussearch.com/consumer/tsrflow/product.do?adID=10002101&pid=3166&searchtab=background' + params + '&searchPerson=' + accId + '" onClick="showPopup()">Background Check</a><br>&nbsp;&nbsp;');
    document.write('</td>');
    document.write('</tr>');
}


function displayAlaUrls(params, accId, partialDob, ecncryptedDob) {

    document.write('<td width=169 align=center valign=top>&nbsp;&nbsp;');
    document.write('<a class="bold_green" href="http://www.ussearch.com/consumer/ala/category.do?cid=5101&adID=10002101&&searchtab=people&' + params + '&searchPerson=' + accId + '" onClick="showPopup()">View Details</a><br>&nbsp;&nbsp;');
    if (ecncryptedDob.length > 0) {
        document.write('<a href="http://www.ussearch.com/consumer/tsrflow/product.do?adID=10002101&pid=3073&searchtab=criminal' + params + '&searchPerson=' + accId  + '&searchDOB=' + partialDob + '&searchPreviewDOB=' + ecncryptedDob + '" onClick="showPopup()">');
    }
    else {
        document.write('<a href="http://www.ussearch.com/consumer/tsrflow/product.do?adID=10002101&pid=3073&searchtab=criminal' + params + '&searchPerson=' + accId + '&searchDOB=" onClick="showPopup()">');
    }
//    document.write('Instant Criminal Search</a><br>&nbsp;&nbsp;');
//    document.write('<a href="http://www.ussearch.com/consumer/tsrflow/product.do?adID=10002101&pid=3166&searchtab=background' + params + '&searchPerson=' + accId + '" onClick="showPopup()">Background Check</a><br>&nbsp;&nbsp;');
    document.write('</td>');
    document.write('</tr>');
}



////////////////////////////////// start pop under //////////////////////////////////
//var popunder = new Array()
//popunder[0] = "http://www.ussearch.com/popup_thankyou.html"
//
//var one_time = 1
//function get_cookie(Name) {
//    var search = Name + "="
//    var returnvalue = "";
//
//    if (document.cookie.length > 0) {
//        offset = document.cookie.indexOf(search)
//        if (offset != -1) { // if the cookie exists
//            offset += search.length
//            end = document.cookie.indexOf(";", offset);
//            // set the index of beginning value
//
//            if (end == -1) // set the index of the end of cookie value
//                end = document.cookie.length;
//
//            returnvalue = unescape(document.cookie.substring(offset, end))
//        }
//    }
//
//    return returnvalue;
//}

//function loadornot() {
//    if (get_cookie('popunder_teaser') == '') {
//        load_pop_power()
//
//        // set cookie expiration date to far far away!
//        var expiration_date = new Date("January 1, 3000");
//        document.cookie = "popunder_teaser=yes; expires=" + expiration_date.toGMTString()
//    }
//}

//function load_pop_power() {
//    // lowermybill popunder (same as real estate)
//    win2 = window.open("http://www.ussearch.com/consumer/popunder_on_exit.jsp", "popunder_teaser", 'scrollbars=no, resizable=no, toolbar=no, menubar=no, status=no, location=no, left=85, top=20, height=330, width=740')
//    win2.blur()
//    window.focus()
//}
////////////////////////////////// end pop under //////////////////////////////////

var request;

var reunionURL = '';
var seachParam = '';

function ReunionSearch(obj) {
    var text1 = '';
    var href1 = '';
		var text2 = '';
    var href2 = '';
		var text3 = '';
    var href3 = '';
    var reunionTextLink = '';
    var adID = '';

    adID = get_cookie('adID');

//        alert(adID);
//        adID = '619100D460';
        
    if (adID == '6196003314' ||
        adID == '6196004071' ||
        adID == '6196004080' ||
        adID == '619600A188' ||
        adID == '619600D460' ||
        adID == '619200D460' ||
        adID == '619200D473' ||
        adID == '619200D752' ||
        adID == '619200D753' ||
        adID == '619200D754') {

//        href1 += "http://clk.atdmt.com/RUC/go/ssrchreu0070000098ruc/direct;rucreu00001260;ct.1/01?action=peopleSearch_wp_resultcount&city=&mname="
//        href1 += "&wel_age=" + obj.document.forms[0].searchApproxAge.value + "&peopleSearchFrom=wp";
//        href1 += "&wel_fname=" + obj.document.forms[0].searchFName.value;
//        href1 += "&wel_lname=" + obj.document.forms[0].searchLName.value;
//        href1 += "&state=&x=0&y=0&affiliateid=131";

//        text1 += 'View Profiles and Photos' + '<br>' + 'for "' + obj.document.forms[0].searchFName.value + ' ' + obj.document.forms[0].searchLName.value + '"' ;


        href2 += "http://clk.atdmt.com/RUC/go/ssrchreu0070000098ruc/direct;rucreu00001259;ct.1/01?action=peopleSearch_wp_resultcount&city=&mname="
        href2 += "&wel_age=" + obj.document.forms[0].searchApproxAge.value + "&peopleSearchFrom=wp";
        href2 += "&wel_fname=" + obj.document.forms[0].searchFName.value;
        href2 += "&wel_lname=" + obj.document.forms[0].searchLName.value;
        href2 += "&state=&x=0&y=0&affiliateid=131";

        text2 += 'View Photos' + '<br>' + 'for "' + obj.document.forms[0].searchFName.value + ' ' + obj.document.forms[0].searchLName.value + '"' ;


        href3 += "http://clk.atdmt.com/RUC/go/ssrchreu0070000098ruc/direct;rucreu00001258;ct.1/01?action=peopleSearch_wp_resultcount&city=&mname="
        href3 += "&wel_age=" + obj.document.forms[0].searchApproxAge.value + "&peopleSearchFrom=wp";
        href3 += "&wel_fname=" + obj.document.forms[0].searchFName.value;
        href3 += "&wel_lname=" + obj.document.forms[0].searchLName.value;
        href3 += "&state=&x=0&y=0&affiliateid=131";

        text3 += 'View Email Results' + '<br>' + 'for "' + obj.document.forms[0].searchFName.value + ' ' + obj.document.forms[0].searchLName.value + '"' ;


				var resultsElement = document.getElementById("ReunionResult");
				
				var ranNumber= Math.floor(Math.random()*2);
				var randomTextLink=new Array(2)
//     		    randomTextLink[0] = '<a target="reunion" href="' + href1 + '"><u>' + text1 + '</u>';
				randomTextLink[0] = '<a target="reunion" href="' + href2 + '"><u>' + text2 + '</u>';
				randomTextLink[1] = '<a target="reunion" href="' + href3 + '"><u>' + text3 + '</u>';
        
				resultsElement.innerHTML = randomTextLink[ranNumber];																 
				
    }
}

function old_ReunionSearch(obj) {
    seachParam = 'searchFName=' + obj.document.forms[0].searchFName.value;
    seachParam += '&searchMName=' + obj.document.forms[0].searchMName.value;
    seachParam += '&searchLName=' + obj.document.forms[0].searchLName.value;
    seachParam += '&searchCity=' + obj.document.forms[0].searchCity.value;
    seachParam += '&searchState=' + obj.document.forms[0].searchState.value;
    seachParam += '&searchApproxAge=' + obj.document.forms[0].searchApproxAge.value;
    reunionURL = '/preview/reunionservlet?' + seachParam;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", reunionURL, true);
    request.onreadystatechange = ReunionCallback;
    request.send(null);
}

function ReunionCallback() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            ParseReunionXML();
        }
    }
}

function ParseReunionXML() {
    try {
        var xmlDoc = request.responseXML;
        var output = '<table cellspacing=0 cellpadding=0 bgcolor="#F2F5FA">';
        var results = xmlDoc.getElementsByTagName("ns0:Person");
        if (results.length > 0) {
            output += '<tr>';
            output += '<td colspan="4" bgcolor="#F2F5FA"><b class="toto">Additional Results from <u>Reunion.com</u></b></td>';
            output += '</tr>';
        }

        for (var i = 0; i < results.length; i++) {
            var result = results[i];
            var approxage = result.getElementsByTagName('age')[0].firstChild.nodeValue;
            var lastName = result.getElementsByTagName('lastName')[0].firstChild.nodeValue;
            var firstName = result.getElementsByTagName('firstName')[0].firstChild.nodeValue;
            var linkURL = result.getElementsByTagName('linkURL')[0].firstChild.nodeValue;
           
            var userNum = "";

            if (linkURL.indexOf('id=') != -1) {
                //not the right way of doing it. but no other way to get the id
                userNum = linkURL.substring(linkURL.indexOf('&id=') + 4);
                //alert(linkURL);
                //userNum = linkURL.substring(linkURL.indexOf('&id='));
            }

            var state = result.getElementsByTagName('state')[0].firstChild.nodeValue;

            output += '<tr>';
            output += '   <td>\n';
            output += '       <b class=toto1><font color=blue>' + (i + 1) + '. </font></b><a target="reunion" href="/preview/partner/redirect?bid=3&id=' + userNum + '" class="bluelink">\n';
            output += '       <b class=toto1><u>' + PCase(firstName) + ' ' + PCase(lastName) + ', ' + approxage + '</u></b></a>';
            output += '   </td>\n';

            output += '   <td width="30">\n';
            output += '       <a target="reunion" href="/preview/partner/redirect?bid=3&id=' + userNum + '" class="bluelink"><b class=toto1><u>' + state + '</u></b></a>';
            output += '   </td>';

            output += '   <td width="21"><a target="reunion" href="/preview/partner/redirect?bid=3&id=' + userNum + '" class="bluelink">';
            output += '       <img width="21" border="0" src="http://images.ussearch.com/images/reunion/emailicon.gif"></a>';
            output += '   </td>';

            output += '   <td width="40">';
            output += '       <a target="reunion" href="/preview/partner/redirect?bid=3&id=' + userNum + '" class="bluelink"><b class=toto1><u>Email</u>';
            output += '   </b></a>';
            output += '   </td>';
            output += '<tr>';
        }


        if (results.length > 0) {
            var GETDATA = getData();
            var searchApproxAge = GETDATA['searchApproxAge'];
            if (searchApproxAge == '') {
                searchApproxAge = '0';
            }
            output += '<tr>';
            output += '   <td class=toto1>';
            output += '<a class="bluelink" href="/preview/partner/redirect?bid=4&city=' + GETDATA['searchCity'] + '&mname=' + GETDATA['searchMName'] + '&wel_fname=' + GETDATA['searchFName'] + '&wel_lname=' + GETDATA['searchLName'] + '&state=' + GETDATA['searchState'] + '&wel_age=' + searchApproxAge + '" target="_blank">';
            output += '<b class=toto1><u>More Results</u></b></a>';
            output += '   </td>';
            output += '<tr>';

        }
        output += '</table>';
        var resultsElement = document.getElementById("ReunionResult");
        resultsElement.innerHTML = output;

    } catch(exception) {
        var resultsElement = document.getElementById("ReunionResult");
        resultsElement.innerHTML = "&nbsp;";
    }
}

function getData() {
    var GETDATA = new Array();
    if (seachParam)
    {
        var sNVPairs = seachParam.split("&");

        for (var i = 0; i < sNVPairs.length; i++)
        {
            var sNV = sNVPairs[i].split("=");
            var sName = sNV[0];
            var sValue = sNV[1];
            GETDATA[sName] = unescape(sValue);
        }
    }
    return GETDATA;
}


function PCase(STRING) {
    var strReturn_Value = "";
    var iTemp = STRING.length;
    if (iTemp == 0) {
        return"";
    }
    var UcaseNext = false;
    strReturn_Value += STRING.charAt(0).toUpperCase();
    for (var iCounter = 1; iCounter < iTemp; iCounter++) {
        if (UcaseNext == true) {
            strReturn_Value += STRING.charAt(iCounter).toUpperCase();
        }
        else {
            strReturn_Value += STRING.charAt(iCounter).toLowerCase();
        }
        var iChar = STRING.charCodeAt(iCounter);
        if (iChar == 32 || iChar == 45 || iChar == 46) {
            UcaseNext = true;
        }
        else {
            UcaseNext = false
        }
        if (iChar == 99 || iChar == 67) {
            if (STRING.charCodeAt(iCounter - 1) == 77 || STRING.charCodeAt(iCounter - 1) == 109) {
                UcaseNext = true;
            }
        }
      }
    return strReturn_Value;
}