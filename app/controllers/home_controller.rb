class HomeController < ApplicationController
    
    
    def index 
       
        if @subscriber != ""
            
             @subscriber =  Newsletter.new
        
        end
        
        @articles= Article.all
        
       

        
    end 
    
    
    
end
