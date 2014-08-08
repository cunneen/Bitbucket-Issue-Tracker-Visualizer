$(document).ready(function() {
  var issuesJSONObj;



  $("#loadJSON").click(function() {
    try {
      issuesJSONObj = JSON.parse($("#bitbucketJSON").get(0).value);
    } catch (e) {
      alert("Couldn't parse JSON: \n" + e);
    }
    $('#example').dataTable({
      "data": issuesJSONObj.issues,
      "columns": [
        {"data": "id"},
        {"data": "title"},
        {"data": "content"},
        {"data": "assignee"},
        {"data": "kind"},
        {"data": "milestone"},
        {"data": "priority"},
        {"data": "reporter"},
        {"data": "status"},
        {"data": "version"},
        {"data": "component"},
        {"data": "edited_on"},
        {"data": "updated_on"},
        {"data": "content_updated_on"},
        {"data": "created_on"}
      ]
    });
  });

  $("#excel").click(function() {
    alert("You'll have to rename the downloaded file to have a .xls extension.");

    $("#dvjson").btechco_excelexport({
      containerid: "dvjson"
      , datatype: $datatype.Json
      , dataset: issuesJSONObj.issues
      , columns: [
        {headertext: "id", datafield: "id", ishidden: false},
        {headertext: "title", datafield: "title", ishidden: false},
        {headertext: "content", datafield: "content", ishidden: false},
        {headertext: "assignee", datafield: "assignee", ishidden: false},
        {headertext: "kind", datafield: "kind", ishidden: false},
        {headertext: "milestone", datafield: "milestone", ishidden: false},
        {headertext: "priority", datafield: "priority", ishidden: false},
        {headertext: "reporter", datafield: "reporter", ishidden: false},
        {headertext: "status", datafield: "status", ishidden: false},
        {headertext: "version", datafield: "version", ishidden: false},
        {headertext: "component", datafield: "component", ishidden: false},
        {headertext: "edited_on", datafield: "edited_on", ishidden: false},
        {headertext: "updated_on", datafield: "updated_on", ishidden: false},
        {headertext: "content_updated_on", datafield: "content_updated_on", ishidden: false},
        {headertext: "created_on", datafield: "created_on", ishidden: false}
      ]

    });
  });

});
