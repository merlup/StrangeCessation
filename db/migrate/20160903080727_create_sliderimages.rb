class CreateSliderimages < ActiveRecord::Migration
  def change
    create_table :sliderimages do |t|
      t.string :image

      t.timestamps null: false
    end
  end
end
