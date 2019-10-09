ActiveAdmin.register Article do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
   permit_params :title, :description, :body, :author, :category, :views
  #
  # or
  #
  # permit_params do
  #   permitted = [:title, :description, :body]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
  
   form title: 'Nouvel article' do |f|
    inputs 'Nouvel article' do
      input :title
      input :description , as: :html_editor
      input :body,  as: :html_editor
      input :category
      input :author
      input :views


    end
    panel 'Markup' do
      "The following can be used in the content below..."
    end
    para "Press cancel to return to the list without saving."
    actions
  end
  
end
