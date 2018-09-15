# goodservice

Rails app that detects headway discrepancy on New York City Subway system by comparing the data for live countdown clocks with the static schedule data provided by the MTA.

See it live at http://www.goodservice.io deployed on Heroku

MTA's GTFS-realtime manual: http://datamine.mta.info/sites/all/files/pdfs/GTFS-Realtime-NYC-Subway%20version%201%20dated%207%20Sep.pdf

Most up-to-date MTA static schedule data: http://web.mta.info/developers/developer-data-terms.html

Uses Ruby 2.4.2, Rails 5.2, Postgres, Semantic UI React

To run locally:
1. Sign up for free MTA Developer account https://datamine.mta.info
2. Set developer key as environment variable `MTA_KEY`
3. Down MTA static subway schedule data from above, extract and put them in the `import\` folder
4. Install bundler (`gem install bundler`)
5. Run `bundle install`
6. Run `rake db:reset`
7. Run `rails s`