class User < ActiveRecord::Base
  validates_presence_of :login, :password, :name, :email
  validates_uniqueness_of :login
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create
  end
