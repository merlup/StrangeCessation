class AddQuestion14ToQuotes < ActiveRecord::Migration
  def change
    add_column :quotes, :Question14, :string
  end
end
