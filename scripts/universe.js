//How to call Import.io API to come up with results.  Turned off for now because results were really slow.

/*

//Defining function to call Import.io API
  function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); 
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
  };  

//Call API for BPC results, and then clean results for uniformity                    
  var raw_BPC = JSON.parse(Get('https://api.import.io/store/data/f27e9d09-01fb-4b12-8a3d-c120d47f99d8/_query?input/webpage/url=http%3A%2F%2Fbipartisanpolicy.org%2Flibrary%2F&_user=437d957b-558b-4a7b-ba36-307e9cace219&_apikey=437d957b558b4a7bba36307e9cace219fdf2209a18870aaa4698a37408b8f6895d5100a6a2dcf463e3d49a684cf390a9db804b8d7daf98c0894068244f378d6a20950891ca2fa96d95d74e00e695b688'));


*/


/*

for (var i = 0; i < clean_BPC.length; i++) {
    delete clean_BPC[i]["link/_source"];
    delete clean_BPC[i]["link/_text"];
    clean_BPC[i]["publisher"] = "Bipartisan Policy Center";
};

//Add data to universe variable, which travels to "Search" function
var universe = clean_BPC;



/*

var universe = [
    {   title : "Global Insurance Regulatory library Issues", 
        link : "http://bipartisanpolicy.org/library/global-insurance-regulatory-issues/", 
        publisher: "Brookings", 
        date: "22"
    },
    {   title : "Debt Limit Analysis", 
        link : "http://bipartisanpolicy.org/library/debt-limit/", 
        publisher: "Brookings",
        date: "33"
    },
    {   title : "Debt Limit Limit Analysis2", 
        link : "http://bipartisanpolicy.org/library/debt-limit/", 
        publisher: "Bipartisan Policy Center", 
        date: "11"
    },
    {   title : "Global Insurance Regulatory library Issues", 
        link : "http://bipartisanpolicy.org/library/global-insurance-regulatory-issues/", 
        publisher: "Brookings", 
        date: "58"
    },
    {   title : "Global Insurance Regulatory library Issues", 
        link : "http://bipartisanpolicy.org/library/global-insurance-regulatory-issues/", 
        publisher: "Brookings", 
        date: "85"
    },
    {   title : "Global Insurance Regulatory library Issues", 
        link : "http://bipartisanpolicy.org/library/global-insurance-regulatory-issues/", 
        publisher: "Brookings", 
        date: "98"
    },  
    {   title : "Global Insurance Regulatory library Issues", 
        link : "http://bipartisanpolicy.org/library/global-insurance-regulatory-issues/", 
        publisher: "Brookings", 
        date: "2"
    },
    {   title : "Global Insurance Regulatory library Issues", 
        link : "http://bipartisanpolicy.org/library/global-insurance-regulatory-issues/", 
        publisher: "Brookings", 
        date: "34"
    },
    {   title : "Global Insurance Regulatory library Issues", 
        link : "http://bipartisanpolicy.org/library/global-insurance-regulatory-issues/", 
        publisher: "Brookings", 
        date: "9"
    },
    {   title : "Global Insurance Regulatory library Issues", 
        link : "http://bipartisanpolicy.org/library/global-insurance-regulatory-issues/", 
        publisher: "Brookings", 
        date: "77"
    },
    {   title : "Debt Limit Analysis", 
        link : "http://bipartisanpolicy.org/library/debt-limit/", 
        publisher: "Brookings",
        date: "05"
    },
    {   title : "Debt Limit Limit Analysis2", 
        link : "http://bipartisanpolicy.org/library/debt-limit/", 
        publisher: "Bipartisan Policy Center", 
        date: "7"
    }
];
*/

