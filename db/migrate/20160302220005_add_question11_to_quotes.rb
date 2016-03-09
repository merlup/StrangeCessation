class AddQuestion11ToQuotes < ActiveRecord::Migration
  def change
    add_column :quotes, :Question11, :string
  end
end
