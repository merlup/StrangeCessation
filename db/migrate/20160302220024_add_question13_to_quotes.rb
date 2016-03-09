class AddQuestion13ToQuotes < ActiveRecord::Migration
  def change
    add_column :quotes, :Question13, :string
  end
end
