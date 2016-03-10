class Quote < ActiveRecord::Base
	acts_as_readable :on => :created_at
	mount_uploader :image, ImageUploader

	
end
