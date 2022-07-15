class MessagesController < JSONAPI::ResourceController
  skip_before_action :verify_authenticity_token
  def index
    @messages = Message.all.sample(1)
    render json: @messages, status: :ok
  end
end
