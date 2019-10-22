# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )



Rails.application.config.assets.precompile += %w( animate.css )
Rails.application.config.assets.precompile += %w( owl.carousel.min.css )
Rails.application.config.assets.precompile += %w( style.css )
Rails.application.config.assets.precompile += %w( ionicons.min.css )
Rails.application.config.assets.precompile += %w( font-awesome.min.css )
Rails.application.config.assets.precompile += %w( flaticon.css )
Rails.application.config.assets.precompile += %w( icomoon.css )
Rails.application.config.assets.precompile += %w( articles.css )
Rails.application.config.assets.precompile += %w( responsive.css )
Rails.application.config.assets.precompile += %w( tech.css)
Rails.application.config.assets.precompile += %w( color.css )

Rails.application.config.assets.precompile += %w( modernizr-2.6.2.min.js )
Rails.application.config.assets.precompile += %w( jquery-3.2.1.min.js )
Rails.application.config.assets.precompile += %w( jquery-migrate-3.0.1.min.js )
Rails.application.config.assets.precompile += %w( popper.min.js )
Rails.application.config.assets.precompile += %w( bootstrap.min.js )
Rails.application.config.assets.precompile += %w( owl.carousel.min.js )
Rails.application.config.assets.precompile += %w( jquery.waypoints.min.js )
Rails.application.config.assets.precompile += %w( tether.min.js )
Rails.application.config.assets.precompile += %w( jquery.easing.1.3.js )
Rails.application.config.assets.precompile += %w( jquery.stellar.min.js )

Rails.application.config.assets.precompile += %w( articles.js )
Rails.application.config.assets.precompile += %w( main.js )



Rails.application.config.assets.precompile += %w( '.ttf' ) 
Rails.application.config.assets.precompile += %w( '.woff' ) 
Rails.application.config.assets.precompile += %w( '.woff2' ) 
Rails.application.config.assets.precompile += %w( '.eot' ) 