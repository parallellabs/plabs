# plabs

Setting up parallel labs website on your machine : -

Step 1: Install the Ruby Version Manager rvm
In terminal type - curl -L https://get.rvm.io | bash -s stable

Step 2: Install the 2.3.1 version of Ruby
rvm install ruby-2.3.1

Step 3: Goto checkout folder in terminal and type
rvm --default use 2.4.1

Step 4: Install Middleman
gem install middleman

Step 5: bundle gem files
sudo bundle install

Step 6: run the middleman server
middleman server

Done, now you can start your development.
