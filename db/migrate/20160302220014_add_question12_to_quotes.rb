class AddQuestion12ToQuotes < ActiveRecord::Migration
  def change
    add_column :quotes, :Question12, :string
  end
end
