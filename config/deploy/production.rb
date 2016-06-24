server '95.85.6.199', user: 'rails', roles: [:app, :db, :web], my_property: :my_value

set :branch, :master
set :deploy_to, '/home/rails/stock'
# set :unicorn_env, 'production'

role :app, %w{rails@95.85.6.199}
role :web, %w{rails@95.85.6.199}
role :db,  %w{rails@95.85.6.199}