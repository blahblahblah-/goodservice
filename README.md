# goodservice

This is a Rails app that detects headway discrepancies on the New York City Subway system by comparing the data for live countdown clocks with the static schedule data provided by the MTA.

See it live at [https://www.goodservice.io](https://www.goodservice.io/).

## Running locally

To run locally, you'll need a couple things. First, the app has only been tested with Ruby 2.4.2 and Rails 5.2. We suggest managing this with `rbenv`. It also depends on Redis, Postgres, Yarn, and Semantic UI React. If you are on a Mac with Homebrew installed, you can get all these requirements with the following commands:

```
# Ruby dependencies
brew install rbenv
brew install ruby-build
rbenv install 2.4.2
gem install bundler
gem install rails

# Other dependencies
brew install postgresql
brew install redis
brew install node
npm install -g yarn
```

Next, you'll need to sign up for a developer account with the MTA. To do so, go to [https://datamine.mta.info](https://datamine.mta.info). You'll get an API key.

Finally, you'll need to download the current static schedules from the MTA. Go to [https://web.mta.info/developers/developer-data-terms.html](https://web.mta.info/developers/developer-data-terms.html), agree to the terms, and then download the data for New York City Transit. (Ctrl+F for "GTFS".) Put this into the `import` folder and unzip it.

Finally, to run the app locally, do

```
export MTA_KEY=<<YOUR API KEY>>
bundle install
yarn install
rails db:reset  # This will take a *very* long time on its first run
foreman start
```

## Other resources

* [MTA's GTFS-realtime manual](http://datamine.mta.info/sites/all/files/pdfs/GTFS-Realtime-NYC-Subway%20version%201%20dated%207%20Sep.pdf)
* [Most up-to-date MTA static schedule data](http://web.mta.info/developers/developer-data-terms.html)
