# UFOs and CoffeeText 
Module 12 Challenge

## Overview | Class Level
This project was designed to break in our JavaScript abilities, and stress-tested them by intoducing many new concepts such as filtering, dynamic tables and content, filtering on a button, and automatically calling functions depending on what the script is trying to do. It introduced us to the concept of asynchronous execution, and fully worked in the knowledge of how to reference external files, links, and other sources within a JS file. 

The bootstrapping and HTML aspect was more of what we had done in previous weeks, and incorporated how we sorted/extracted from it initially, with the addition of writing it ourselves.

### Purpose | Report Level
The site was built with the intent to prove aliens are real. With all the information flying around nowadays, the need to catalogue all the information we can regarding our Extraterrestrial friends is more important than ever. For instance, knowing that a large section of the sightings come from the US can lead to the conclusion that the US does in fact have a secret trade deal with Alpha Centauri, and their pilots are bad at stealth.  

<!-- ## Analysis and Challenges
Description -->
## Results
In order to use the site and recover data that has been stored in our data objects, it's a simple process:
- Know the general location of where you would like to search, and enter the state and country (if outside the US)
- Add a shape of the craft to further refine the search terms
- Use the generated results, or fill out more of the filters if the user has more specific details or the sighting they're looking for has not populated

The site is really very user friendly, as there are no buttons to click or pages to get lost in.

IMAGE HERE CleanSite1

The search filters are autonomous, meaning that there is no button to click, and an event listener is watching to make sure that the new field data is taken into account should the filter change in any category.

IMAGE HERE EventListener

IMAGE HERE EventListener2

When the page is reloaded with nothing in the filters, the base table displays as seen above. The button at the top left, 'UFO Sightings' will also reset the page and a user's search, allowing for analysis of a new set of data.

IMAGE HERE ClearButton

Primarily, this is an upgrade to the data, as initially the alien data is contained within JavaScript objects and can be difficult to read. Using a site like this allows for clean presentation of data while not confusing anyone who may be using it for any purpose, and is much friendlier as a whole searching with filters than by writing new inquiries for each sighting every time.

A drawback comes in the form of updating the data, should the set ever need to be modified. The set that is used for this challenge is locked, meaning adding new objects would be difficult. An entire new file would need to be upoloaded which isn't an issue in and of itself, but then the site and data ownership become more important because you would need to have access to the raw file for the way it is built at the moment. The other drawback is a search term may be entered incorrecly, resulting in a skewed table that may not have some or all of the desired information, and could lead to incorrect results when attempting to discern something in particular.