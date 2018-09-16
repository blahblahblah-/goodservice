require 'rss'
require 'open-uri'

class FeedProcessor
  FEED_URI = 'https://medium.com/feed/good-service'

  def initialize
    open(FEED_URI) do |rss|
      feed = RSS::Parser.parse(rss)
      @items = feed.items
    end
  end

  def latest
    items.first
  end

  private
  attr_accessor :items
end