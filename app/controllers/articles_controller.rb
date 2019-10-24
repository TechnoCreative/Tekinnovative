class ArticlesController < ApplicationController
    
    def index
        if @subscriber != ""
            
             @subscriber =  Newsletter.new
        
         end
        @articles = Article.all

        
    end  
    
    def show
        @article = Article.find(params[:id])
        @articles = Article.all
        if @subscriber != ""
            
             @subscriber =  Newsletter.new
        
         end
        
        
       
    end
    
    def new 
        @article = Article.new(articles_params)
        
    end 
    
    
    def create
        @article = Article.create(article_params)
        @article.image.attach(params[:image])
        if @article.save
            redirect_to articles_path, notice:"Votre article a été enregistré."
        else 
            render :new
        end
        
    end 
    
    def edit
        
    end
    
   
   
    
    private 
    
    def article_params 
        params.require(:article).permit(:title, description,:body,:category,:author,:views, :image)
        
    end
    
     
   
    
    
    
end
