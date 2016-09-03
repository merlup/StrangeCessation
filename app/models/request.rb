class Request < ActiveRecord::Base
	
	acts_as_readable :on => :created_at
	mount_uploader :image, ImageUploader
	has_many :answers
	accepts_nested_attributes_for :answers
end
