class Request < ActiveRecord::Base
	 attr_accessor :questions
	acts_as_readable :on => :created_at
	mount_uploader :image, ImageUploader
	has_many :questions
	accepts_nested_attributes_for :questions, allow_destroy: true

end
