class ChatMessage < ApplicationRecord
  scope :by, -> (participants) {
    where("\"to\" IN (?) OR \"from\" IN (?)", participants, participants)
  }
end
