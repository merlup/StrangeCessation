class CreatePriceSheetImages < ActiveRecord::Migration
  def change
    create_table :price_sheet_images do |t|
      t.string :image

      t.timestamps null: false
    end
  end
end
