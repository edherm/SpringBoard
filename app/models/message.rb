# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  category   :string
#  project_id :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :title, :project_id, :body, presence: true

  belongs_to :project,
    foreign_key: :project_id,
    primary_key: :id,
    class_name: :Project
end
