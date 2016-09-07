class CreateChoices < ActiveRecord::Migration
  def change
    create_table :choices do |t|
      t.string :body
      t.belongs_to :question, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
