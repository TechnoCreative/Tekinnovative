class Article < ApplicationRecord
    
    has_one_attached:image
    
    validates :title, presence: true
    validates :description, presence: true
    validates :body, presence: true
    validates :author, presence: true
    validates :category, presence: true
    validates :views, presence: true
    
    def previous
        Article.where(["id < ?", id]).last
    end

    def next
     Article.where(["id > ?", id]).first
    end
    
    # def previous_post
    #     self.class.first(:conditions => ["created_at < ?", created_at], :order => "'created_at'")
    #     #self.class.first(:conditions => ["title < ?", title], :order => "'created_at'")

    # end
            
    # def next_post
    #     self.class.first(:conditions => ["title > ?", title], :order => "'created_at'")
    # end
    
end
