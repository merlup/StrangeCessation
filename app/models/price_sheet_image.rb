class PriceSheetImage < ActiveRecord::Base
	mount_uploader :image, PriceSheetImageUploader
end
