# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Final Product

This is the front page that displays all tweets, with the most recent automatically pushed to the top of the list.

!["Screenshot of front page"](https://raw.githubusercontent.com/BroodMeister/tweeter/master/docs/front-page.png)

By clicking "compose", you can open and close the form.

!["Screenshot of collapsable compose tweet"](https://raw.githubusercontent.com/BroodMeister/tweeter/master/docs/compose-tweet.png)

When you go over the character limit, the counter will turn red and go into the negatives. If you still attempt to send the tweet, you will be given an error message and it won't go through.

!["Screenshot of content limit"](https://raw.githubusercontent.com/BroodMeister/tweeter/master/docs/content-limit.png)

When a new tweet is successfully created, it will show up at the top of the list of tweets, like so.

!["Screenshot of new tweet"](https://raw.githubusercontent.com/BroodMeister/tweeter/master/docs/tweet.png)

When you hover over a tweet, the header will darken in colour and icons for flagging, retweeting, and liking the tweet will appear in the footer.

!["Screenshot of hover element"](https://raw.githubusercontent.com/BroodMeister/tweeter/master/docs/hover.png)

## Dependencies

- Express
- Node 5.10.x or above
