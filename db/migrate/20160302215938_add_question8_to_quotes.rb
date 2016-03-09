class AddQuestion8ToQuotes < ActiveRecord::Migration
  def change
    add_column :quotes, :Question8, :string
  end
end
