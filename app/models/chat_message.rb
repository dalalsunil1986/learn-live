class ChatMessage < ApplicationRecord
  validates :from, :to, :body, presence: true

  scope :by, -> (participants) {
    where("\"to\" IN (?) OR \"from\" IN (?)", participants, participants)
  }
end
