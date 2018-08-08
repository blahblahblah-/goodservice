class Route < ActiveRecord::Base
  default_scope { order(name: :asc) }
  scope :visible, -> { where(visible: true)}
end