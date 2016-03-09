class AddQuestion6ToQuotes < ActiveRecord::Migration
  def change
    add_column :quotes, :Question6, :string
  end
end
