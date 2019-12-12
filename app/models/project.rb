# == Schema Information
#
# Table name: projects
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text
#  manager_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ApplicationRecord
validates :name, :manager_id, presence: true

belongs_to :manager,
  foreign_key: :manager_id,
  primary_key: :id,
  class_name: :User

end
