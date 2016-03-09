class AddQuestion2ToQuotes < ActiveRecord::Migration
  def change
    add_column :quotes, :Question2, :string
  end
end
