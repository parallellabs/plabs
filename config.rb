###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
page "/about.html", :layout => :new_layout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
#activate :automatic_image_sizes

#activate :imageoptim

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end


set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

set :slim, { :format => :html}

# Build-specific configuration
configure :build do

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # activate :gzip

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/git/plabs/images/"
end

# require 'slim'
# # Avoid HTML minification for people who don't know slim
# Slim::Engine.default_options[:pretty] = true

# Deployment configuration
# activate :deploy do |deploy|
#   deploy.method   = :ftp
#   deploy.host            = 'ftp.cpll.co'
#   deploy.port            = 21
#   deploy.path            = 'plabs'
#   deploy.user            = 'middleman@cpll.co'
#   deploy.password        = 'plabs234#'
# end
activate :deploy do |deploy|
  deploy.method   = :ftp
  deploy.host            = 'ftp.parallellabs.io'
  deploy.port            = 21
  deploy.path            = ''
  deploy.user            = 'PLlive@parallellabs.io'
  deploy.password        = 'Zentigrity26#'
  end
