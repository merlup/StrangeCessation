class AddQuestion7ToQuotes < ActiveRecord::Migration
  def change
    add_column :quotes, :Question7, :string
  end
end
