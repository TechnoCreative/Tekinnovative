class RemoveFieldsFromArticle < ActiveRecord::Migration[5.0]
  def change
    remove_column :articles, :Category, :string
    remove_column :articles, :Author, :string
    remove_column :articles, :Views, :int
  end
end
