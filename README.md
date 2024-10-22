# Web Development Project 5 - *Culinary Quest*

Submitted by: **Malhiya Arnib**

This web app: **Find a recipe by typing what you want to eat in the search bar! You can filter the recipes based on how long it would take to cook the recipe**

Time spent: **12** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The list displays a list of data fetched using an API call**
- [X] **Data uses the useEffect React hook and async/await syntax**
- [X] **The app dashboard includes at least three summary statistics about the data such as**
  - [X] Average cook time, total recipes listed, lowest calorie dish, and  average ingredients per recipe
- [X] **A search bar allows the user to search for an item in the fetched data**
- [X] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously
- [ ] Filters use different input types such as a text input, a selection, or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/malhiya/recipe_search/blob/master/recipe_search_walkthrough2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LiceCap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

* One cchallenge I encountered was with the proper syntax for calculating the lowest calories from the list of recipes. I asked chatGPT and it showed me the errors of what I did and the correct way to type it out.
* Another challenge I was having was with filtering the recipes. I had trouble keeping track of the original search of recipes and then the newly filtered recipes. I asked chatGPT and it gave a solution of adding another state variabled called filteredRecipes. This way I can have the original search and then the newly filtered search.

## License

    Copyright 2024 Malhiya Arnib

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
