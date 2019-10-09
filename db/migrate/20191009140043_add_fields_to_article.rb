class AddFieldsToArticle < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :category, :string
    add_column :articles, :author, :string
    add_column :articles, :views, :int
  end
end
