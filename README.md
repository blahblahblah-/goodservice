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

## A brief tour of the code

This is a Rails app that uses React as a view manager. As such, there are a lot of moving components. We briefly explain how data flows and how the code is laid out.

### Server side: Rails

The server performs two major functions: First, it runs a cron job that updates the current status of all routes. This cron job is located in `/lib/clock.rb`. It is currently hard coded to refresh train data every minute and to refresh route data every five minutes.

Second, it actually serves up the route info that is processed by this cron job. In particular, a Redis cache maintains all the headway info that is served by API (described below). All of the models that are used to process this information live in either `/app/models` or, closer to the ultimate product, in `/app/models/display`. If you want to start tracing through the code, you should begin at the `self.headway_info` function in `/app/models/schedule_processor.rb`.

### Client side: React

The client side view libraries are a React app that is compiled by the `webpacker` gem. For more information on `webpacker`, you can see their [repository](https://github.com/rails/webpacker). But the basic summary is that all entry points (in React lingo) live in `/app/javascript/packs` and are compiled to the `/public` directory. As with all Rails apps, this is driven by the views in `/app/views`, which are basically the bare minimum to get the compiled React to appear.

### In the middle: An API

The React front end is fed by an API that Rails serves. The routes are specified in the `/app/controllers` directory. Specifically, routes are specified in `/config/routes.rb`. The `/api/info` route is probably most interesting as it drives the main React app. This route refers specifically to the `/app/controllers/api/info_controller.rb` controller. Note that that file is a very thin wrapper around the `ScheduleProcessor`'s `headway_info` function, which is specified in `/app/models/schedule_processor.rb`, simply returning a JSON of the results.

## Other resources

* [MTA's GTFS-realtime manual](http://datamine.mta.info/sites/all/files/pdfs/GTFS-Realtime-NYC-Subway%20version%201%20dated%207%20Sep.pdf)
* [Most up-to-date MTA static schedule data](http://web.mta.info/developers/developer-data-terms.html)
