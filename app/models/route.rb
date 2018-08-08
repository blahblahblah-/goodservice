class Route < ActiveRecord::Base
  default_scope { where(visible: true).order(name: :asc) }
end