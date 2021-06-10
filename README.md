# USThing Recruitment Test 1 - Backend

## Introduction :information_source: 
In this test, you will build a server for getting user data **from university website**. :tada: 

You are allowed to find help online by searching related material. 

**Noted that you should only submit a zipped file containing the final version of the scripts.**

## Instructions :notebook: 

Clone this repository and work on the following tasks. The tasks are not arranged in specific orders and each task has different complexity, you can work on the tasks in any order.  Please create a new branch for each task. However, you are reminded that some tasks are dependent on each order, and you should use merge/pull/rebase to assist your development.

- Your API should take a String parameter input of ITSC username and provides JSON response containing useful fields of corresponding record on Directory website.
- You may use language/framework of your choice, however, the starting codes are only available in NodeJS.
- You may use libraries of your choice. However, you may find the following libraries useful: express, cheerio, axios, puppeteer etc.

### Task 1
Get the HTML page for requested username on Directory website.

### Task 2
Parse information from the downloaded HTML page.

### Task 3
Format the information into proper response structure(JSON).

### Task 4
Throw appropriate HTTP error if input is invalid or any error occured (we will also check the quality of error handling 🙂).

### Task 5
Build a docker image containing the server code.

## Resources :package:
- The directory website:
```
https://itsc.ust.hk/cgi-bin/comdir/profile.pl?uid=${itsc}
```
**Note:** You will have to be within HKUST network to perform the above tasks. Try connect to HKUST VPN through Pulse Secure.

- You can use your own itsc to check what fields are available.

## Restrictions :no_entry: 
- You are not allowed to share/discuss any part of this test with anyone :angry:
    - Once found, you will be immediately disqualified
    - We take integrity seriously here in USThing :wink:

## 

Feel free to ask our members if you have any questions :+1: 

Happy Coding! :confetti_ball: 
