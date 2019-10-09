class HomeController < ApplicationController
    
    
    def index 
        @subscriber =  Newsletter.new
        if @subscriber != ""
            
            @subscriber = Newsletter.create
        
        end
        
        @articles= Article.all
        
       

        
    end 
    
    
    
end
