class CreateChatMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :chat_messages do |t|
      t.string :from
      t.string :to
      t.text :body
      t.string :ip_address

      t.timestamps
    end
  end
end
