class ArticlesController < ApplicationController
    
    def index
        @articles = Article.all
        
    end  
    
    def show
        @article = Article.find(params[:id])
        @articles = Article.all
        
        
       
    end
    
    def new 
        @article = Article.new(articles_params)
        
    end 
    
    
    def create
        @article = Article.create(article_params)
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
        params.require(:article).permit(:title, description,:body,:category,:author,:views)
        
    end
    
     
   
    
    
    
end
