class NewslettersController < ApplicationController
    skip_before_action :authenticate_user!
    before_action :set_newsletter, only: [:destroy]
    
    def îndex 
      @subscriber = Newsletter.new
    end


    def create
      @subscriber = Newsletter.create(newsletter_params)
      if @subscriber.save
       
        redirect_to root_path
      end
    end

    private

      def set_newsletter
        @subscriber = Newsletter.find(params[:id])
      end

      def newsletter_params
        params.require(:newsletter).permit(:email)
      end

end
