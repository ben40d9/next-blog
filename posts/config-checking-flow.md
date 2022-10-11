---
title: "config-checking repo flow as of today"
socialImage: images/JPG_Test.jpg
date: "October 11th, 2022"
---

# flow on 10/11/2022

flow:

1. first configure environment w/ configureEnv(), where we check that the port is configured & and then ask user for personal access token (which we will use to make octokit requests)
2. second we run isCriticalAppDataLoaded(), happens under-the-hood (for now have a console.log to make it visible that the app actually checks before moving on) which checks again to MAKE SURE that port and token are set
3. then we boot up into processes depending on what is chosen in main menu (inquirer prompt for now / can change eventually but I like working w command line)
4. launchStartupMenu() will run and once there is a value returned (picked by user), nextStep() will run. nextStep() awaits the completion of launchStartupMenu() and runs desired githubGateway() method.
5. githubGateway is an obj w/ methods on it that run octokit functions depending on what the user asks to do

I have the functionality working where I pull a file from a repo, then run the function that is inside of that file I just pulled in my app. Base functionality working but huge step b/c I know how to proceed
just need to do busy work ie: make functions so that we can check vs users inputed function
I will reconfigure app in order to have switch cases depending on what question the user selects (from practice questions inquirer question), which is chosen in askFor("solvequestion"). But for now will just keep it simple. b/c all paths are doing the same thing => get a repos content, decode it, and run decoded function
