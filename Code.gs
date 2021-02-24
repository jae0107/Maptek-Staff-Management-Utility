function doGet(e) {
  if (e.parameters.v == "chart") {
    return chart();
    
  } else if (e.parameters.v == "add") {
    return Add();
    
  } else if (e.parameters.v == "list") {
    return list();
    
  } else if(e.parameters.v == "report"){
    return report();
    
  } else if(e.parameters.v=="edit"){
     return edit();    
     
  } else if(e.parameters.v == "chart_viewer"){
     return chart_viewer();    
     
  } else if(e.parameters.v == "list_viewer"){
     return list_viewer();    
     
  } else if(e.parameters.v == "profile"){
     return profile();    
     
  } else {
    return HtmlService.createTemplateFromFile("home").evaluate();
  }
}

function Add() {
  var tmp = HtmlService.createTemplateFromFile("Add");
  return tmp.evaluate();
}

function chart() {
  var tmp = HtmlService.createTemplateFromFile("chart");
  return tmp.evaluate();
}

function chart_viewer(){
   var tmp = HtmlService.createTemplateFromFile("chart_viewer");
   return tmp.evaluate();
}

function list_viewer(){
   var tmp = HtmlService.createTemplateFromFile("list_viewer");
   return tmp.evaluate();
}

function list() {
  var tmp = HtmlService.createTemplateFromFile("list");
  return tmp.evaluate();
}

function report(){
  var tmp = HtmlService.createTemplateFromFile("report");
  return tmp.evaluate();
}

function edit(){
   var tmp = HtmlService.createTemplateFromFile("edit");
   return tmp.evaluate();
}

function profile(){
   var tmp = HtmlService.createTemplateFromFile("profile");
   return tmp.evaluate();
}

function callData() {
  const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const textData = ws.getRange(2, 1, ws.getLastRow(), 12).getDisplayValues();

  // 0: name, 1: title, 2: reports to, 3: approx staff count, 4: Location, 5: gender, 6: contact info, 7: Email, 8: Authority, 9: team. 10: year
  return textData.map(r => [r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10]]);
}

function test() {
  //console.log(callData());
  console.log(SpreadsheetApp.getActiveSpreadsheet().getUrl());
  console.log(Session.getActiveUser().getEmail());
}

function account(){
  return Session.getActiveUser().getEmail();
}

function getScriptUrl() {
  var url = ScriptApp.getService().getUrl();
  console.log(url);
  return url;
}

function userClicked(userInfo) {//add staff
  var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");

  ws.appendRow([userInfo.yourname, userInfo.title, userInfo.boss, "", userInfo.location, userInfo.gender, userInfo.contact, userInfo.email, userInfo.authority, userInfo.department, userInfo.year]);
}

function update(userInfo){
  var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");
  //console.log(userInfo);
  ws.getRange(userInfo.row, 1).setValue(userInfo.yourname);
  ws.getRange(userInfo.row, 2).setValue(userInfo.title);
  ws.getRange(userInfo.row, 3).setValue(userInfo.boss);
  ws.getRange(userInfo.row, 5).setValue(userInfo.location);
  ws.getRange(userInfo.row, 6).setValue(userInfo.gender);
  ws.getRange(userInfo.row, 7).setValue(userInfo.contact);
  ws.getRange(userInfo.row, 8).setValue(userInfo.email);
  ws.getRange(userInfo.row, 9).setValue(userInfo.authority);
  ws.getRange(userInfo.row, 10).setValue(userInfo.department);
  ws.getRange(userInfo.row, 11).setValue(userInfo.year);
}

function del(userInfo){
  var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");
  
  ws.deleteRow(userInfo.row);
}
