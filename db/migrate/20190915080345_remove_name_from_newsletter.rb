class RemoveNameFromNewsletter < ActiveRecord::Migration[5.0]
  def change
    remove_column :newsletters, :name, :string
  end
end
